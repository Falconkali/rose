'use client';

import { useState, useEffect, useRef } from 'react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Use a royalty-free ambient music URL
    // We'll use the Web Audio API to generate a simple ambient sound
    setIsLoaded(true);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) {
      // Create ambient audio using Web Audio API
      const AudioContext = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      
      // Create a simple peaceful ambient tone
      const createTone = (freq: number, gain: number, duration: number) => {
        const oscillator = ctx.createOscillator();
        const gainNode = ctx.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(ctx.destination);
        oscillator.frequency.value = freq;
        oscillator.type = 'sine';
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(gain, ctx.currentTime + 2);
        gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
        oscillator.start(ctx.currentTime);
        oscillator.stop(ctx.currentTime + duration);
        return { oscillator, gainNode };
      };

      // Play a gentle chord
      createTone(261.63, 0.03, 4); // C4
      createTone(329.63, 0.02, 4); // E4
      createTone(392.00, 0.02, 4); // G4

      setIsPlaying(!isPlaying);
      return;
    }

    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleMusic}
      id="music-toggle-btn"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: isPlaying
          ? 'linear-gradient(135deg, rgba(201,96,122,0.3), rgba(201,168,76,0.2))'
          : 'rgba(255,255,255,0.06)',
        border: isPlaying
          ? '1px solid rgba(232,160,176,0.4)'
          : '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(20px)',
        boxShadow: isPlaying ? '0 0 20px rgba(201,96,122,0.3)' : 'none',
      }}
      aria-label={isPlaying ? 'Pause ambient music' : 'Play ambient music'}
      title={isPlaying ? 'Pause music' : 'Play ambient music'}
    >
      {isPlaying ? (
        // Sound waves icon
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="6" width="2" height="6" rx="1" fill="rgba(232,160,176,0.8)">
            <animate attributeName="height" values="6;10;6" dur="0.8s" repeatCount="indefinite" />
            <animate attributeName="y" values="6;4;6" dur="0.8s" repeatCount="indefinite" />
          </rect>
          <rect x="7" y="4" width="2" height="10" rx="1" fill="rgba(201,168,76,0.8)">
            <animate attributeName="height" values="10;14;10" dur="0.6s" repeatCount="indefinite" />
            <animate attributeName="y" values="4;2;4" dur="0.6s" repeatCount="indefinite" />
          </rect>
          <rect x="12" y="5" width="2" height="8" rx="1" fill="rgba(232,160,176,0.8)">
            <animate attributeName="height" values="8;12;8" dur="1s" repeatCount="indefinite" />
            <animate attributeName="y" values="5;3;5" dur="1s" repeatCount="indefinite" />
          </rect>
        </svg>
      ) : (
        // Music note icon
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 12V4l7-2v8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="4" cy="12" r="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
          <circle cx="11" cy="10" r="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.2" />
        </svg>
      )}
    </button>
  );
}
