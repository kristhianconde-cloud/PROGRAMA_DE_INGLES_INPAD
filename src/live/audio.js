/**
 * Audio del navegador:
 *  - MicRecorder: micrófono -> PCM 16 kHz (vía AudioWorklet) -> callback(base64, nivel)
 *  - PcmPlayer:   reproduce los fragmentos PCM 24 kHz que envía Gemini, en cola y sin cortes.
 */

export function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  const step = 0x8000;
  for (let i = 0; i < bytes.length; i += step) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + step));
  }
  return btoa(binary);
}

export function base64ToInt16(base64) {
  const binary = atob(base64);
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
  return new Int16Array(bytes.buffer, 0, Math.floor(len / 2));
}

export class MicRecorder {
  constructor(onChunk) {
    this.onChunk = onChunk; // (base64Pcm, level) => void
    this.ctx = null;
    this.stream = null;
    this.node = null;
    this.source = null;
    this.muted = false;
  }

  async start() {
    this.stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        channelCount: 1,
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true,
      },
    });
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    await this.ctx.audioWorklet.addModule('./worklets/pcm-recorder-processor.js');
    this.source = this.ctx.createMediaStreamSource(this.stream);
    this.node = new AudioWorkletNode(this.ctx, 'pcm-recorder-processor');
    this.node.port.onmessage = (e) => {
      if (this.muted) {
        this.onChunk(null, 0);
        return;
      }
      this.onChunk(arrayBufferToBase64(e.data.pcm), e.data.level);
    };
    this.source.connect(this.node);
    // No se conecta a los altavoces (evita eco); algunos navegadores necesitan un destino:
    const sink = this.ctx.createGain();
    sink.gain.value = 0;
    this.node.connect(sink).connect(this.ctx.destination);
  }

  setMuted(m) {
    this.muted = m;
  }

  async stop() {
    try { this.source?.disconnect(); this.node?.disconnect(); } catch { /* ignore */ }
    this.stream?.getTracks().forEach((t) => t.stop());
    if (this.ctx && this.ctx.state !== 'closed') await this.ctx.close();
    this.ctx = this.stream = this.node = this.source = null;
  }
}

export class PcmPlayer {
  constructor(sampleRate = 24000) {
    this.sampleRate = sampleRate;
    this.ctx = null;
    this.nextTime = 0;
    this.sources = new Set();
    this.analyser = null;
    this.levelData = null;
  }

  async init() {
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === 'suspended') await this.ctx.resume();
    this.analyser = this.ctx.createAnalyser();
    this.analyser.fftSize = 512;
    this.levelData = new Uint8Array(this.analyser.fftSize);
    this.analyser.connect(this.ctx.destination);
  }

  /** Encola un fragmento PCM16 (base64) para reproducir justo después del anterior. */
  play(base64) {
    if (!this.ctx) return;
    const int16 = base64ToInt16(base64);
    if (!int16.length) return;
    const float32 = new Float32Array(int16.length);
    for (let i = 0; i < int16.length; i++) float32[i] = int16[i] / 32768;
    const buffer = this.ctx.createBuffer(1, float32.length, this.sampleRate);
    buffer.copyToChannel(float32, 0);
    const src = this.ctx.createBufferSource();
    src.buffer = buffer;
    src.connect(this.analyser);
    const now = this.ctx.currentTime;
    if (this.nextTime < now + 0.03) this.nextTime = now + 0.06; // pequeño colchón contra cortes
    src.start(this.nextTime);
    this.nextTime += buffer.duration;
    this.sources.add(src);
    src.onended = () => this.sources.delete(src);
  }

  /** Detiene inmediatamente todo lo que suena (cuando el alumno interrumpe). */
  stop() {
    for (const s of this.sources) {
      try { s.stop(); } catch { /* ignore */ }
    }
    this.sources.clear();
    this.nextTime = 0;
  }

  get isPlaying() {
    return this.sources.size > 0;
  }

  /** Nivel de volumen actual (0..1) para animar al profesor. */
  level() {
    if (!this.analyser) return 0;
    this.analyser.getByteTimeDomainData(this.levelData);
    let sum = 0;
    for (let i = 0; i < this.levelData.length; i++) {
      const v = (this.levelData[i] - 128) / 128;
      sum += v * v;
    }
    return Math.sqrt(sum / this.levelData.length);
  }

  async close() {
    this.stop();
    if (this.ctx && this.ctx.state !== 'closed') await this.ctx.close();
    this.ctx = null;
  }
}
