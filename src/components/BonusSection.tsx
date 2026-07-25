import React, { useState, useRef } from 'react';
import { Flame, HeartHandshake, Music, Play, Pause, Volume2, Sparkles, CheckCircle2 } from 'lucide-react';
import { BONUSES_DATA, AUDIO_SAMPLES } from '../data/content';
import { AudioSample } from '../types';

export const BonusSection: React.FC = () => {
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Web Audio Synth Generator for relaxing ambient sound simulation
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioNode | null>(null);
  const intervalRef = useRef<any>(null);

  const togglePlayAudio = (sample: AudioSample) => {
    if (activeAudioId === sample.id && isPlaying) {
      // Stop current
      stopSynthAudio();
      setIsPlaying(false);
      setActiveAudioId(null);
      return;
    }

    // Stop existing if any
    stopSynthAudio();

    // Start synth audio based on type
    startSynthAudio(sample.type);
    setActiveAudioId(sample.id);
    setIsPlaying(true);
  };

  const startSynthAudio = async (type: AudioSample['type']) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      // Resume context if suspended by browser autoplay policy
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.3, ctx.currentTime);
      masterGain.connect(ctx.destination);

      if (type === 'white-noise') {
        // Soft pink noise buffer for womb sound
        const bufferSize = ctx.sampleRate * 2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
          data[i] *= 0.15;
          b6 = white * 0.115926;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, ctx.currentTime);

        noise.connect(filter);
        filter.connect(masterGain);
        noise.start();
        noiseNodeRef.current = noise;
      } else if (type === 'heartbeat') {
        // Rhythmic maternal heartbeat simulation (lub-dub pulse at ~65 BPM)
        const playHeartPulse = () => {
          if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
          const currentCtx = audioCtxRef.current;
          const now = currentCtx.currentTime;

          // First beat ("Lub")
          const osc1 = currentCtx.createOscillator();
          const gain1 = currentCtx.createGain();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(85, now);
          osc1.frequency.exponentialRampToValueAtTime(40, now + 0.14);
          gain1.gain.setValueAtTime(0.45, now);
          gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.14);
          osc1.connect(gain1);
          gain1.connect(masterGain);
          osc1.start(now);
          osc1.stop(now + 0.15);

          // Second beat ("Dub")
          const osc2 = currentCtx.createOscillator();
          const gain2 = currentCtx.createGain();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(95, now + 0.18);
          osc2.frequency.exponentialRampToValueAtTime(45, now + 0.30);
          gain2.gain.setValueAtTime(0.35, now + 0.18);
          gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.30);
          osc2.connect(gain2);
          gain2.connect(masterGain);
          osc2.start(now + 0.18);
          osc2.stop(now + 0.32);
        };

        playHeartPulse();
        intervalRef.current = setInterval(playHeartPulse, 920);
      } else {
        // Soft music box lullaby melody (Caixinha de Música Zen)
        const notes = [523.25, 659.25, 783.99, 1046.50, 880.00, 659.25, 783.99, 523.25]; // C5, E5, G5, C6, A5, E5, G5, C5
        let noteIdx = 0;

        const playLullabyNote = () => {
          if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
          const currentCtx = audioCtxRef.current;
          const now = currentCtx.currentTime;
          const osc = currentCtx.createOscillator();
          const noteGain = currentCtx.createGain();

          osc.type = 'triangle'; // Warm music box chime
          osc.frequency.setValueAtTime(notes[noteIdx], now);

          noteGain.gain.setValueAtTime(0.3, now);
          noteGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

          osc.connect(noteGain);
          noteGain.connect(masterGain);

          osc.start(now);
          osc.stop(now + 1.3);

          noteIdx = (noteIdx + 1) % notes.length;
        };

        playLullabyNote();
        intervalRef.current = setInterval(playLullabyNote, 550);
      }
    } catch (e) {
      console.error('Audio synthesis error:', e);
    }
  };

  const stopSynthAudio = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (noiseNodeRef.current) {
      try {
        (noiseNodeRef.current as AudioBufferSourceNode).stop();
      } catch {
        // Ignore
      }
      noiseNodeRef.current = null;
    }
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch {
        // Ignore
      }
      audioCtxRef.current = null;
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'flame':
        return <Flame className="w-6 h-6 text-[#34495E]" />;
      case 'heart-handshake':
        return <HeartHandshake className="w-6 h-6 text-[#E2B4BD]" />;
      default:
        return <Music className="w-6 h-6 text-[#58734C]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FDFCF0] border-b border-[#F2ECE4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-4 py-1.5 rounded-full border border-[#B7C9B0]/40 inline-block">
            Sem custo adicional ao garantir hoje
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#34495E] font-semibold tracking-tight">
            Bônus Exclusivos para você
          </h2>
          <p className="text-[#5D6D7E] text-base leading-relaxed">
            Materiais complementares desenvolvidos para dar ainda mais suporte e serenidade na sua rotina.
          </p>
        </div>

        {/* Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {BONUSES_DATA.map((bonus) => (
            <div
              key={bonus.id}
              className="bg-white rounded-[28px] p-6 sm:p-7 border border-[#F2ECE4] shadow-soft flex flex-col justify-between text-left relative overflow-hidden"
            >
              {/* Top Tag */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#58734C] bg-[#DDE5D7] px-3 py-1 rounded-full">
                    {bonus.badge}
                  </span>
                  <div className="text-xs text-[#7F8C8D] font-medium">
                    Valor: <span className="line-through">{bonus.valueOriginal}</span> <span className="text-[#58734C] font-bold">GRÁTIS</span>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#F9F7F2] border border-[#F2ECE4] flex items-center justify-center mb-4">
                  {getIcon(bonus.iconName)}
                </div>

                <h3 className="text-xl font-serif font-semibold text-[#34495E] mb-1">
                  {bonus.title}
                </h3>
                <p className="text-xs font-semibold text-[#58734C] mb-3">
                  {bonus.subtitle}
                </p>

                <p className="text-[#5D6D7E] text-xs sm:text-sm leading-relaxed">
                  {bonus.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2ECE4] flex items-center gap-2 text-xs font-semibold text-[#58734C]">
                <CheckCircle2 className="w-4 h-4 text-[#B7C9B0]" />
                <span>Incluso na oferta de hoje</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Audio Player Preview */}
        <div className="bg-white p-6 sm:p-8 rounded-[32px] border border-[#F2ECE4] shadow-soft text-left">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#F2ECE4]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#58734C] bg-[#DDE5D7] px-3 py-1 rounded-full uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Demonstração de Áudio do Bônus 3</span>
              </div>
              <h3 className="text-xl font-serif font-semibold text-[#34495E]">
                Experimente os sons relaxantes para o sono
              </h3>
              <p className="text-[#5D6D7E] text-xs sm:text-sm">
                Clique nos botões abaixo para escutar uma prévia do som calmante gerado para o bebê:
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#5D6D7E] bg-[#F9F7F2] px-3.5 py-2 rounded-xl border border-[#F2ECE4]">
              <Volume2 className="w-4 h-4 text-[#8FA885] animate-pulse" />
              <span>Frequência suave simulada</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {AUDIO_SAMPLES.map((sample) => {
              const isThisPlaying = activeAudioId === sample.id && isPlaying;
              return (
                <div
                  key={sample.id}
                  className={`p-4 rounded-2xl border transition-all duration-200 ${
                    isThisPlaying
                      ? 'bg-[#DDE5D7] border-[#B7C9B0] shadow-xs'
                      : 'bg-[#F9F7F2] border-[#F2ECE4] hover:border-[#DDE5D7]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <button
                      onClick={() => togglePlayAudio(sample)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 cursor-pointer transition-transform active:scale-95 ${
                        isThisPlaying
                          ? 'bg-[#B7C9B0] text-white shadow-xs'
                          : 'bg-white text-[#58734C] border border-[#DDE5D7] hover:bg-[#DDE5D7]'
                      }`}
                      title={isThisPlaying ? 'Pausar áudio' : 'Ouvir demonstração'}
                    >
                      {isThisPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </button>
                    <span className="text-[11px] font-medium text-[#7F8C8D] bg-white px-2 py-0.5 rounded-full border border-[#F2ECE4]">
                      {sample.duration}
                    </span>
                  </div>

                  <h4 className="text-sm font-serif font-semibold text-[#34495E] line-clamp-1">
                    {sample.title}
                  </h4>
                  <p className="text-xs text-[#5D6D7E] line-clamp-2 mt-0.5">
                    {sample.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

