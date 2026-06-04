'use client';

import { useState, useEffect } from 'react';

const memories = [
  {
    number: '01',
    title: 'The first time I noticed you',
    desc: 'Some moments leave a mark before you even understand why. That was you. A single glance that somehow rearranged everything.',
    gradient: 'linear-gradient(135deg, rgba(201,96,122,0.18), rgba(201,168,76,0.08))',
    border: 'rgba(232,160,176,0.2)',
    accent: '#c9607a',
  },
  {
    number: '02',
    title: 'The conversations that lasted too long',
    desc: 'We forgot about time. And somehow, time was kind enough to forget about us too. Those hours felt like minutes, and I never wanted them to end.',
    gradient: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,96,122,0.08))',
    border: 'rgba(201,168,76,0.2)',
    accent: '#c9a84c',
  },
  {
    number: '03',
    title: 'When your laugh became my favorite sound',
    desc: 'There was nothing remarkable about the moment. Except that it changed everything. I started noticing when you were happy and quietly hoping I was part of that.',
    gradient: 'linear-gradient(135deg, rgba(100,80,200,0.15), rgba(201,96,122,0.1))',
    border: 'rgba(180,160,255,0.2)',
    accent: '#b4a0ff',
  },
  {
    number: '04',
    title: 'Every time you didn\'t realize how special you were',
    desc: 'You\'d say something beautiful and then act like it was ordinary. It never was. I watched you shine without a mirror, and I wished you could see what I saw.',
    gradient: 'linear-gradient(135deg, rgba(201,96,122,0.15), rgba(100,80,200,0.1))',
    border: 'rgba(232,160,176,0.2)',
    accent: '#f5c6d0',
  },
  {
    number: '05',
    title: 'The day I stopped pretending',
    desc: 'I tried very hard not to feel this way. I failed beautifully. And somewhere in that failure, I found something that felt more honest than anything I\'d held onto before.',
    gradient: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,96,122,0.15))',
    border: 'rgba(201,168,76,0.2)',
    accent: '#e8c97a',
  },
  {
    number: '06',
    title: 'Right now, this moment',
    desc: 'You are reading something someone wrote just for you. Every word on this page is true. You deserve to be loved this completely. Always.',
    gradient: 'linear-gradient(135deg, rgba(232,160,176,0.18), rgba(201,168,76,0.15))',
    border: 'rgba(232,160,176,0.25)',
    accent: '#c9607a',
  },
];

export default function MemoryGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById('memories');
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="memories"
      className="section-padding relative"
      style={{ zIndex: 2 }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
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
              background: 'linear-gradient(135deg, #f5c6d0, #c9a84c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.25,
            }}
          >
            Moments I Cherish
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Gallery */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.3s',
          }}
        >
          {memories.map((memory, i) => (
            <div
              key={i}
              className="group cursor-pointer"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
              }}
              onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setActiveIndex(activeIndex === i ? null : i)}
              aria-expanded={activeIndex === i}
            >
              <div
                style={{
                  borderRadius: '20px',
                  background: memory.gradient,
                  border: `1px solid ${activeIndex === i ? memory.border : 'rgba(255,255,255,0.06)'}`,
                  backdropFilter: 'blur(20px)',
                  overflow: 'hidden',
                  transition: 'all 0.4s ease',
                  boxShadow: activeIndex === i
                    ? `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${memory.border}`
                    : '0 4px 20px rgba(0,0,0,0.2)',
                  transform: activeIndex === i ? 'translateY(-4px)' : 'translateY(0)',
                }}
              >
                {/* Card top strip */}
                <div
                  style={{
                    height: '3px',
                    background: `linear-gradient(90deg, ${memory.accent}, transparent)`,
                  }}
                />

                <div style={{ padding: '28px' }}>
                  {/* Number + state indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '2.5rem',
                        fontWeight: 300,
                        lineHeight: 1,
                        background: `linear-gradient(135deg, ${memory.accent}44, ${memory.accent}22)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {memory.number}
                    </span>
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        border: `1px solid ${memory.border}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.4s ease, background 0.3s ease',
                        transform: activeIndex === i ? 'rotate(45deg)' : 'rotate(0deg)',
                        background: activeIndex === i ? `${memory.accent}22` : 'transparent',
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M5 1v8M1 5h8" stroke={memory.accent} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg md:text-xl mb-3"
                    style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                      color: 'rgba(255,255,255,0.88)',
                      lineHeight: 1.4,
                    }}
                  >
                    {memory.title}
                  </h3>

                  {/* Hint text */}
                  {activeIndex !== i && (
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.18)' }}
                    >
                      Tap to read
                    </p>
                  )}

                  {/* Expandable description */}
                  <div
                    style={{
                      maxHeight: activeIndex === i ? '300px' : '0',
                      overflow: 'hidden',
                      transition: 'max-height 0.5s cubic-bezier(0.4,0,0.2,1)',
                    }}
                  >
                    <div
                      style={{
                        paddingTop: '16px',
                        marginTop: '12px',
                        borderTop: `1px solid ${memory.border}`,
                        opacity: activeIndex === i ? 1 : 0,
                        transition: 'opacity 0.3s ease 0.2s',
                      }}
                    >
                      <p
                        className="text-sm md:text-base"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 300,
                          color: 'rgba(255,255,255,0.55)',
                          lineHeight: 1.85,
                        }}
                      >
                        {memory.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
