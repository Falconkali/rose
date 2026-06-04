'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroSection() {
  const [step, setStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 2200),
      setTimeout(() => setStep(3), 3800),
      setTimeout(() => setStep(4), 5200),
      setTimeout(() => setStep(5), 6400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const scrollToNext = () => {
    const next = document.getElementById('timeline');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,96,122,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Rings */}
      <div
        className="absolute rounded-full border border-rose-500/5 pointer-events-none"
        style={{ width: '600px', height: '600px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />
      <div
        className="absolute rounded-full border border-yellow-500/5 pointer-events-none"
        style={{ width: '900px', height: '900px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <div
          className="mb-8 transition-all duration-1000"
          style={{
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <span
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/40"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            A message from my heart
          </span>
        </div>

        {/* Main headline */}
        <div
          className="mb-4 transition-all duration-1000"
          style={{
            opacity: step >= 1 ? 1 : 0,
            transform: step >= 1 ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.25,
            }}
          >
            This website exists
            <br />
            <em
              style={{
                background: 'linear-gradient(135deg, #f5c6d0, #c9607a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontStyle: 'italic',
              }}
            >
              for one reason.
            </em>
          </h1>
        </div>

        {/* Second line */}
        <div
          className="mb-8 transition-all duration-1000"
          style={{
            opacity: step >= 2 ? 1 : 0,
            transform: step >= 2 ? 'translateY(0)' : 'translateY(30px)',
            transitionDelay: '0.2s',
          }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              lineHeight: 1.3,
            }}
          >
            And that reason is{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #c9a84c, #e8c97a, #c9607a)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 600,
                filter: 'drop-shadow(0 0 20px rgba(201,168,76,0.4))',
              }}
            >
              you, Mishu.
            </span>
          </h2>
        </div>

        {/* Full name + birthday reveal */}
        <div
          className="mb-6 transition-all duration-1000"
          style={{
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.2s',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '16px',
              padding: '10px 24px',
              borderRadius: '100px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1rem',
                fontStyle: 'italic',
                background: 'linear-gradient(135deg, #f5c6d0, #c9a84c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Mishu Bhushan Roy
            </span>
            <span style={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.7rem' }}>✦</span>
            <span
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
              }}
            >
              Born December 2nd
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <div
          className="mb-12 transition-all duration-1000"
          style={{
            opacity: step >= 3 ? 1 : 0,
            transform: step >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '0.4s',
          }}
        >
          <p
            className="text-base md:text-xl text-white/50 max-w-xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, lineHeight: 1.8 }}
          >
            I never planned on meeting someone who would end up mattering this much.
          </p>
        </div>

        {/* Divider */}
        <div
          className="mb-10 transition-all duration-1000"
          style={{
            opacity: step >= 4 ? 1 : 0,
            transform: step >= 4 ? 'scaleX(1)' : 'scaleX(0)',
          }}
        >
          <div className="section-divider" />
        </div>

        {/* CTA */}
        <div
          className="transition-all duration-1000"
          style={{
            opacity: step >= 5 ? 1 : 0,
            transform: step >= 5 ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <button
            onClick={scrollToNext}
            id="read-my-heart-btn"
            className="btn-rose rounded-full text-white pulse-glow"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Read My Heart
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-bounce"
        style={{ opacity: step >= 5 ? 0.4 : 0, transition: 'opacity 1s ease', zIndex: 2 }}
        aria-label="Scroll down"
      >
        <span className="text-xs text-white/40 tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
          Scroll
        </span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 4v12M4 10l6 6 6-6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
}
