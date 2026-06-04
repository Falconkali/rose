'use client';

import { useEffect, useRef, useState } from 'react';

const confessionLines = [
  { text: 'I tried really hard not to fall for you.', delay: 0 },
  { text: 'My heart had other plans.', delay: 800 },
  { text: 'And honestly...', delay: 1800 },
  { text: 'I\'m glad it did.', delay: 2600 },
];

const climax = { text: 'I love you.', delay: 3600 };

export default function ConfessionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [climaxVisible, setClimaxVisible] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          confessionLines.forEach((line, i) => {
            setTimeout(() => {
              setVisibleCount((prev) => Math.max(prev, i + 1));
            }, line.delay);
          });
          setTimeout(() => setClimaxVisible(true), climax.delay);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      id="confession"
      ref={sectionRef}
      className="section-padding relative min-h-screen flex items-center justify-center"
      style={{ zIndex: 2 }}
    >
      {/* Dramatic background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(201,96,122,0.1) 0%, rgba(201,96,122,0.03) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 120% 120% at 50% 50%, transparent 40%, rgba(9,9,9,0.8) 100%)',
        }}
      />

      <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
            Section 06
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: 'rgba(255,255,255,0.3)',
              lineHeight: 1.25,
            }}
          >
            My Biggest Confession
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Non-climax lines */}
        <div className="space-y-6 md:space-y-10 mb-16">
          {confessionLines.map((line, i) => (
            <div
              key={i}
              style={{
                opacity: visibleCount > i ? 1 : 0,
                transform: visibleCount > i ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                transition: 'opacity 1s ease, transform 1s ease',
              }}
            >
              <p
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  color: i === 2 ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.7)',
                  fontStyle: i === 2 ? 'italic' : 'normal',
                  lineHeight: 1.4,
                }}
              >
                {line.text}
              </p>
            </div>
          ))}
        </div>

        {/* Climax — separated with lots of breathing room */}
        <div
          style={{
            opacity: climaxVisible ? 1 : 0,
            transform: climaxVisible ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(30px)',
            transition: 'opacity 1.4s ease, transform 1.4s ease',
            paddingTop: '48px',
            borderTop: climaxVisible ? '1px solid rgba(201,96,122,0.15)' : '1px solid transparent',
          }}
        >
          <p
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-medium heartbeat"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              background: 'linear-gradient(135deg, #f5c6d0, #c9607a, #c9a84c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 30px rgba(201,96,122,0.6))',
              fontStyle: 'italic',
              lineHeight: 1.2,
            }}
          >
            {climax.text}
          </p>
        </div>
      </div>
    </section>
  );
}
