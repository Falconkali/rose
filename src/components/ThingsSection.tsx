'use client';

import { useEffect, useRef, useState } from 'react';

const cards = [
  {
    number: '01',
    title: 'Thank you for existing.',
    body: 'Out of everyone in the world, somehow you exist with your exact laugh and your exact heart. I still find it hard to believe that\'s not a miracle of some kind.',
    color: 'rgba(201,96,122,0.12)',
    border: 'rgba(232,160,176,0.2)',
  },
  {
    number: '02',
    title: 'Thank you for making life brighter.',
    body: 'You make rooms feel different just by being in them. I\'m not sure you know you do it. I\'m not sure you\'d believe me if I told you. But it\'s true.',
    color: 'rgba(201,168,76,0.1)',
    border: 'rgba(201,168,76,0.2)',
  },
  {
    number: '03',
    title: 'Thank you for being unforgettable.',
    body: 'I tried distraction, distance, time. None of it worked. You\'re just too real, too present in my head. And honestly? I stopped fighting it a while ago.',
    color: 'rgba(201,96,122,0.1)',
    border: 'rgba(245,198,208,0.2)',
  },
  {
    number: '04',
    title: 'Thank you for being you.',
    body: 'Not a polished version. Not a version adjusted for other people\'s comfort. Just you, whole and genuine. That is genuinely the rarest thing I have ever come across.',
    color: 'rgba(100,80,180,0.08)',
    border: 'rgba(180,160,255,0.15)',
  },
];

export default function ThingsSection() {
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
      id="things"
      ref={sectionRef}
      className="section-padding relative"
      style={{ zIndex: 2 }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,96,122,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >

          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-light"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              background: 'linear-gradient(135deg, #f5c6d0, #c9607a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.25,
            }}
          >
            Things I Never Say Enough
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative overflow-hidden group"
              style={{
                background: card.color,
                border: `1px solid ${card.border}`,
                borderRadius: '20px',
                backdropFilter: 'blur(20px)',
                padding: '24px',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transition: `opacity 0.8s ease ${i * 0.15}s, transform 0.8s ease ${i * 0.15}s`,
              }}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 50%, ${card.color} 0%, transparent 70%)`,
                }}
              />

              {/* Number */}
              <div
                className="text-6xl md:text-7xl font-light mb-6 leading-none"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {card.number}
              </div>

              {/* Title */}
              <h3
                className="text-xl md:text-3xl font-light mb-3"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  color: 'rgba(255,255,255,0.9)',
                  fontStyle: 'italic',
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>

              {/* Body */}
              <p
                className="text-white/55 text-sm md:text-base"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, lineHeight: 1.8 }}
              >
                {card.body}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[1px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${card.border}, transparent)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
