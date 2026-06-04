'use client';

import { useEffect, useRef, useState } from 'react';

const dreams = [
  {
    number: '01',
    title: 'Watching sunsets together',
    desc: 'Finding the perfect spot where the sky turns every shade of orange and gold, and realizing none of it compares to the view beside me.',
    accent: { from: '#c9607a', to: '#c9a84c', border: 'rgba(232,160,176,0.2)' },
  },
  {
    number: '02',
    title: 'Travelling together',
    desc: 'Getting lost in cities we\'ve never seen, navigating maps we don\'t understand, and discovering that the journey matters more than the destination.',
    accent: { from: '#c9a84c', to: '#e8c97a', border: 'rgba(201,168,76,0.2)' },
  },
  {
    number: '03',
    title: 'Laughing over small things',
    desc: 'Finding ridiculous humor in ordinary moments — the kind that becomes a shared language only you two speak.',
    accent: { from: '#b4a0ff', to: '#c9607a', border: 'rgba(180,160,255,0.2)' },
  },
  {
    number: '04',
    title: 'Supporting each other',
    desc: 'Being the person in your corner when the world feels too heavy, and knowing you\'d be in mine. Always sincerely.',
    accent: { from: '#f5c6d0', to: '#c9607a', border: 'rgba(245,198,208,0.2)' },
  },
  {
    number: '05',
    title: 'Growing old together',
    desc: 'Still choosing each other when the novelty has faded — because real love is about the choosing, again and again.',
    accent: { from: '#c9a84c', to: '#f5c6d0', border: 'rgba(201,168,76,0.2)' },
  },
];

export default function FutureSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="future"
      ref={sectionRef}
      className="section-padding relative"
      style={{ zIndex: 2 }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 90% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-14"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
            Section 08
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-light"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              background: 'linear-gradient(135deg, #c9a84c, #f5c6d0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.25,
            }}
          >
            A Future I Dream About
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Cards grid — all visible at once */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dreams.map((dream, i) => (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
              }}
            >
              <div
                style={{
                  borderRadius: '20px',
                  border: `1px solid ${dream.accent.border}`,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(201,96,122,0.03))',
                  backdropFilter: 'blur(20px)',
                  padding: '28px 24px',
                  height: '100%',
                  // Accent top strip
                  borderTop: `2px solid ${dream.accent.from}`,
                }}
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '3.5rem',
                    fontWeight: 300,
                    lineHeight: 1,
                    marginBottom: '16px',
                    background: `linear-gradient(135deg, ${dream.accent.from}55, ${dream.accent.to}33)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {dream.number}
                </div>

                {/* Title */}
                <h3
                  className="text-lg md:text-xl mb-4"
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontWeight: 400,
                    lineHeight: 1.35,
                    background: `linear-gradient(135deg, ${dream.accent.from}, ${dream.accent.to})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {dream.title}
                </h3>

                {/* Divider */}
                <div
                  style={{
                    width: '32px',
                    height: '1px',
                    background: `linear-gradient(90deg, ${dream.accent.from}, transparent)`,
                    marginBottom: '16px',
                  }}
                />

                {/* Description */}
                <p
                  className="text-sm md:text-base"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.8,
                  }}
                >
                  {dream.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
