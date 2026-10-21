/**
 * AudioWorklet: toma el audio del micrófono (a la frecuencia nativa del dispositivo,
 * normalmente 44.1/48 kHz), lo convierte a PCM 16-bit mono a 16 kHz (formato que exige
 * Gemini Live) y lo envía en bloques de ~100 ms junto con el nivel de volumen.
 */
class PcmRecorderProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.targetRate = 16000;
    this.ratio = sampleRate / this.targetRate; // sampleRate es global en el worklet
    this.chunkSize = 1600; // 100 ms a 16 kHz
    this.out = new Int16Array(this.chunkSize);
    this.outIdx = 0;
    this.pos = 0;
    this.sumSq = 0;
    this.count = 0;
  }

  process(inputs) {
    const input = inputs[0];
    if (!input || !input[0]) return true;
    const ch = input[0];

    while (this.pos < ch.length) {
      const i = Math.floor(this.pos);
      const frac = this.pos - i;
      const s0 = ch[i];
      const s1 = i + 1 < ch.length ? ch[i + 1] : s0;
      let s = s0 + (s1 - s0) * frac;
      if (s > 1) s = 1; else if (s < -1) s = -1;
      this.sumSq += s * s;
      this.count++;
      this.out[this.outIdx++] = s < 0 ? s * 0x8000 : s * 0x7fff;

      if (this.outIdx === this.chunkSize) {
        const level = Math.sqrt(this.sumSq / this.count);
        this.port.postMessage({ pcm: this.out.buffer, level }, [this.out.buffer]);
        this.out = new Int16Array(this.chunkSize);
        this.outIdx = 0;
        this.sumSq = 0;
        this.count = 0;
      }
      this.pos += this.ratio;
    }
    this.pos -= ch.length;
    return true;
  }
}

registerProcessor('pcm-recorder-processor', PcmRecorderProcessor);
