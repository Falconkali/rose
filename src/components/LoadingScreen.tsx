'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const messages = [
    'Loading reasons why I love Mishu...',
    'Gathering all the memories...',
    'Counting the stars for you...',
    'Preparing something special...',
    'Almost ready...',
  ];

  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 600);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(msgInterval);
          setFadeOut(true);
          setTimeout(() => setVisible(false), 800);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(msgInterval);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#090909]"
      style={{
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.8s ease',
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0
                ? 'radial-gradient(circle, rgba(201,96,122,0.08), transparent)'
                : 'radial-gradient(circle, rgba(201,168,76,0.06), transparent)',
              animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-8">
        {/* Logo / Name */}
        <div className="mb-8">
          <span
            className="text-7xl md:text-9xl"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              background: 'linear-gradient(135deg, #f5c6d0, #c9607a, #c9a84c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'loadingPulse 2s ease-in-out infinite',
            }}
          >
            M
          </span>
        </div>

        {/* Message */}
        <p
          className="text-white/60 text-sm md:text-base mb-8 tracking-widest uppercase"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {messages[msgIndex]}
        </p>

        {/* Progress bar */}
        <div className="w-64 md:w-96 h-[1px] bg-white/10 rounded-full overflow-hidden mb-4">
          <div
            className="h-full rounded-full transition-all duration-100"
            style={{
              width: `${Math.min(progress, 100)}%`,
              background: 'linear-gradient(90deg, #c9607a, #c9a84c, #e8a0b0)',
              boxShadow: '0 0 10px rgba(201, 96, 122, 0.5)',
            }}
          />
        </div>

        <p className="text-white/30 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
          {Math.min(Math.round(progress), 100)}%
        </p>
      </div>
    </div>
  );
}
