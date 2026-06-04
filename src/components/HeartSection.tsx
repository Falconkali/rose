'use client';

import { useEffect, useRef, useState } from 'react';

const lines = [
  { text: 'People say nobody is truly irreplaceable.', delay: 0 },
  { text: 'But when it comes to you...', delay: 700 },
  { text: 'I genuinely disagree.', delay: 1400 },
  { text: 'There is only one Mishu Bhushan Roy.', delay: 2200 },
  { text: 'And the world knows it.', delay: 3000 },
];

export default function HeartSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          lines.forEach((line, i) => {
            setTimeout(() => {
              setLineCount((prev) => Math.max(prev, i + 1));
            }, line.delay);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="heart"
      ref={sectionRef}
      className="section-padding relative flex items-center justify-center min-h-[80vh]"
      style={{ zIndex: 2 }}
    >
      {/* Deep glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,96,122,0.12) 0%, transparent 65%)',
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Header */}
        <div
          className="mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >


          {/* Animated heartbeat SVG */}
          <div className="flex justify-center mb-8">
            <svg
              viewBox="0 0 200 60"
              width="200"
              height="60"
              className="heartbeat"
              aria-hidden="true"
            >
              <polyline
                points="0,30 30,30 45,10 55,50 70,5 85,55 100,30 130,30 140,20 155,40 170,30 200,30"
                fill="none"
                stroke="url(#heartGrad)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(201,96,122,0)" />
                  <stop offset="30%" stopColor="#c9607a" />
                  <stop offset="70%" stopColor="#c9a84c" />
                  <stop offset="100%" stopColor="rgba(201,168,76,0)" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="section-divider" />
        </div>

        {/* Lines */}
        <div className="space-y-6">
          {lines.map((line, i) => (
            <p
              key={i}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: i === 3 || i === 4 ? 500 : 300,
                fontStyle: i === 1 || i === 2 ? 'italic' : 'normal',
                fontSize: i === 3 ? 'clamp(1.4rem, 5vw, 2.5rem)' : i === 4 ? 'clamp(1.2rem, 4vw, 2rem)' : 'clamp(1rem, 3.5vw, 1.75rem)',
                lineHeight: 1.6,
                color: i === 3 || i === 4
                  ? 'rgba(255,255,255,0.9)'
                  : 'rgba(255,255,255,0.55)',
                opacity: lineCount > i ? 1 : 0,
                transform: lineCount > i ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
                background: i === 3
                  ? 'linear-gradient(135deg, #f5c6d0, #c9607a)'
                  : i === 4
                  ? 'linear-gradient(135deg, #c9a84c, #e8c97a)'
                  : undefined,
                WebkitBackgroundClip: i === 3 || i === 4 ? 'text' : undefined,
                WebkitTextFillColor: i === 3 || i === 4 ? 'transparent' : undefined,
                backgroundClip: i === 3 || i === 4 ? 'text' : undefined,
              }}
            >
              {line.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
