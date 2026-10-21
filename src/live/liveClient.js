/**
 * Cliente WebSocket para Gemini Live API (conexión directa desde el navegador
 * con la clave gratuita del propio alumno).
 *
 * Eventos emitidos (CustomEvent.detail):
 *  - 'ready'              conexión y configuración aceptadas
 *  - 'audio'              { data }  fragmento PCM 24 kHz en base64
 *  - 'input-transcript'   { text }  lo que dijo el alumno (fragmento)
 *  - 'output-transcript'  { text }  lo que dijo el profesor (fragmento)
 *  - 'interrupted'        el alumno interrumpió al profesor
 *  - 'turn-complete'      el profesor terminó su turno
 *  - 'correction'         { type, said, correct, explanation, phonetic }
 *  - 'reconnecting' / 'reconnected'
 *  - 'close'              { code, reason, expected }
 *  - 'error'              { message }
 */

const WS_BASE = 'wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent';

export const DEFAULT_MODEL = 'gemini-3.8-live';

export class LiveClient extends EventTarget {
  constructor({ apiKey, model = DEFAULT_MODEL }) {
    super();
    this.apiKey = apiKey;
    this.model = model;
    this.ws = null;
    this.setupMsg = null;
    this.resumeHandle = null;
    this.closedByUser = false;
    this.reconnects = 0;
    this.ready = false;
  }

  emit(type, detail = {}) {
    this.dispatchEvent(new CustomEvent(type, { detail }));
  }

  /**
   * @param {object} cfg { systemInstruction, voiceName, tools, languageCode }
   * @returns {Promise<void>} se resuelve cuando el servidor confirma la configuración.
   */
  connect(cfg) {
    this.cfg = cfg;
    this.closedByUser = false;
    return this._open();
  }

  _buildSetup() {
    const { systemInstruction, voiceName, tools } = this.cfg;
    const setup = {
      model: `models/${this.model}`,
      generationConfig: {
        responseModalities: ['AUDIO'],
        speechConfig: voiceName ? { voiceConfig: { prebuiltVoiceConfig: { voiceName } } } : undefined,
      },
      systemInstruction: { parts: [{ text: systemInstruction }] },
      tools: tools ? [tools] : undefined,
      inputAudioTranscription: {}, // detección automática: el alumno a veces mezcla español
      outputAudioTranscription: {},
      // Sesiones largas: comprime el contexto y permite reanudar si Google corta la conexión.
      contextWindowCompression: { slidingWindow: {} },
      sessionResumption: this.resumeHandle ? { handle: this.resumeHandle } : {},
    };
    return { setup };
  }

  _open() {
    return new Promise((resolve, reject) => {
      let settled = false;
      const ws = new WebSocket(`${WS_BASE}?key=${encodeURIComponent(this.apiKey)}`);
      this.ws = ws;
      this.ready = false;

      ws.onopen = () => {
        ws.send(JSON.stringify(this._buildSetup()));
      };

      ws.onmessage = async (event) => {
        let msg;
        try {
          const raw = typeof event.data === 'string' ? event.data : await event.data.text();
          msg = JSON.parse(raw);
        } catch (e) {
          console.warn('Mensaje no válido', e);
          return;
        }
        if (msg.setupComplete) {
          this.ready = true;
          if (!settled) { settled = true; resolve(); }
          this.emit('ready');
          return;
        }
        this._handleMessage(msg);
      };

      ws.onerror = () => {
        this.emit('error', { message: 'Error de conexión con Gemini.' });
      };

      ws.onclose = (e) => {
        const wasReady = this.ready;
        this.ready = false;
        if (!settled) {
          settled = true;
          reject(new Error(describeClose(e)));
          return;
        }
        // Reconexión automática (p. ej. Google cierra sesiones largas tras un aviso goAway).
        if (!this.closedByUser && wasReady && this.resumeHandle && this.reconnects < 3) {
          this.reconnects++;
          this.emit('reconnecting');
          this._open()
            .then(() => this.emit('reconnected'))
            .catch((err) => this.emit('close', { code: e.code, reason: err.message, expected: false }));
          return;
        }
        this.emit('close', { code: e.code, reason: describeClose(e), expected: this.closedByUser });
      };
    });
  }

  _handleMessage(msg) {
    const sc = msg.serverContent;
    if (sc) {
      if (sc.interrupted) this.emit('interrupted');
      const parts = sc.modelTurn?.parts || [];
      for (const p of parts) {
        if (p.inlineData?.data && (p.inlineData.mimeType || '').startsWith('audio')) {
          this.emit('audio', { data: p.inlineData.data });
        } else if (p.inlineData?.data && !p.inlineData.mimeType) {
          this.emit('audio', { data: p.inlineData.data });
        }
      }
      if (sc.inputTranscription?.text) this.emit('input-transcript', { text: sc.inputTranscription.text });
      if (sc.outputTranscription?.text) this.emit('output-transcript', { text: sc.outputTranscription.text });
      if (sc.turnComplete) this.emit('turn-complete');
    }

    if (msg.toolCall?.functionCalls) {
      const responses = [];
      for (const fc of msg.toolCall.functionCalls) {
        if (fc.name === 'report_correction') {
          this.emit('correction', fc.args || {});
        } else if (fc.name === 'report_placement_result') {
          this.emit('placement-result', fc.args || {});
        } else if (fc.name === 'report_level_exam') {
          this.emit('level-exam-result', fc.args || {});
        }
        responses.push({ id: fc.id, name: fc.name, response: { result: 'ok' } });
      }
      this._send({ toolResponse: { functionResponses: responses } });
    }

    if (msg.sessionResumptionUpdate?.resumable && msg.sessionResumptionUpdate.newHandle) {
      this.resumeHandle = msg.sessionResumptionUpdate.newHandle;
    }

    if (msg.goAway) {
      // Google avisa que cerrará pronto; la reconexión se hará en onclose.
      console.info('goAway recibido', msg.goAway);
    }
  }

  _send(obj) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(obj));
      return true;
    }
    return false;
  }

  sendAudio(base64Pcm) {
    if (!this.ready) return;
    this._send({ realtimeInput: { audio: { data: base64Pcm, mimeType: 'audio/pcm;rate=16000' } } });
  }

  sendText(text) {
    if (!this.ready) return;
    this._send({ realtimeInput: { text } });
  }

  /** Avisa que el micrófono se pausó (el servidor cierra el turno del alumno). */
  audioStreamEnd() {
    if (!this.ready) return;
    this._send({ realtimeInput: { audioStreamEnd: true } });
  }

  close() {
    this.closedByUser = true;
    try { this.ws?.close(1000, 'fin de sesión'); } catch { /* ignore */ }
  }
}

function describeClose(e) {
  const reason = e.reason || '';
  if (/api key|API_KEY|permission|unauthori/i.test(reason)) return 'La clave de Gemini no es válida o no tiene permisos.';
  if (/quota|exhausted|rate/i.test(reason)) return 'Se alcanzó el límite gratuito por ahora. Espera un momento e inténtalo otra vez.';
  if (/model/i.test(reason) && /not found|not supported/i.test(reason)) return `El modelo configurado no está disponible: ${reason}`;
  if (reason) return reason;
  if (e.code === 1006) return 'No se pudo conectar. Revisa tu conexión a internet.';
  return `Conexión cerrada (código ${e.code}).`;
}

/** Verifica una clave de Gemini con una llamada liviana. */
export async function validateApiKey(apiKey) {
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?pageSize=1&key=${encodeURIComponent(apiKey)}`);
    if (res.ok) return { ok: true };
    const body = await res.json().catch(() => ({}));
    return { ok: false, message: body?.error?.message || `Error ${res.status}` };
  } catch {
    return { ok: false, message: 'No hay conexión a internet.' };
  }
}
