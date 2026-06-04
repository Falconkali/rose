'use client';

import { useState, useEffect, useRef } from 'react';

const loveQuotes = [
  {
    quote: 'I have waited for this opportunity for more than half a century, to repeat to you again my vow of eternal love.',
    author: 'Nelson Mandela',
    to: 'Graça Machel',
  },
  {
    quote: 'You are every reason, every hope, and every dream I\'ve ever had.',
    author: 'Nicholas Sparks',
    to: 'The Notebook',
  },
  {
    quote: 'Whatever our souls are made of, his and mine are the same.',
    author: 'Emily Brontë',
    to: 'Wuthering Heights',
  },
  {
    quote: 'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.',
    author: 'Maya Angelou',
    to: 'A Letter to Her Husband',
  },
  {
    quote: 'I love you not only for what you are, but for what I am when I am with you.',
    author: 'Roy Croft',
    to: 'Love',
  },
  {
    quote: 'You are my sun, my moon, and all my stars.',
    author: 'E. E. Cummings',
    to: 'To My Love',
  },
  {
    quote: 'The best thing to hold onto in life is each other.',
    author: 'Audrey Hepburn',
    to: '',
  },
  {
    quote: 'I swear I couldn\'t love you more than I do right now, and yet I know I will tomorrow.',
    author: 'Leo Christopher',
    to: '',
  },
];

export default function LoveQuotesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [visible, currentIndex]);

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % loveQuotes.length);
      setAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + loveQuotes.length) % loveQuotes.length);
      setAnimating(false);
    }, 400);
  };

  const current = loveQuotes[currentIndex];

  return (
    <section
      id="love-quotes"
      ref={sectionRef}
      className="section-padding relative"
      style={{ zIndex: 2 }}
    >
      {/* Pulsing heart divider between Heart section and this */}
      <div
        className="flex flex-col items-center mb-20"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        <div
          style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(180deg, transparent, rgba(201,96,122,0.4))',
            marginBottom: '16px',
          }}
        />
        {/* Animating heart */}
        <div className="heartbeat" style={{ fontSize: '1.8rem', lineHeight: 1 }}>
          <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
            <path
              d="M16 26S2 17 2 8.5C2 5 5 2 8.5 2c2.5 0 4.8 1.4 6.1 3.5.3.5 1 .5 1.4 0C17.2 3.4 19.5 2 22 2 25.5 2 28 5 28 8.5 28 17 16 26 16 26z"
              fill="url(#heartGradDivider)"
            />
            <defs>
              <linearGradient id="heartGradDivider" x1="2" y1="2" x2="28" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f5c6d0" />
                <stop offset="0.5" stopColor="#c9607a" />
                <stop offset="1" stopColor="#c9a84c" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div
          style={{
            width: '1px',
            height: '60px',
            background: 'linear-gradient(180deg, rgba(201,96,122,0.4), transparent)',
            marginTop: '16px',
          }}
        />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,96,122,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
            Words of Love
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-light"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              background: 'linear-gradient(135deg, #c9a84c, #f5c6d0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.25,
            }}
          >
            What the Greatest Lovers Said
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Quote card */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
          }}
        >
          <div
            style={{
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.03), rgba(201,96,122,0.04))',
              border: '1px solid rgba(232,160,176,0.15)',
              backdropFilter: 'blur(20px)',
              padding: '48px 40px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative quote mark */}
            <div
              style={{
                position: 'absolute',
                top: '20px',
                left: '30px',
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '8rem',
                lineHeight: 1,
                color: 'rgba(201,96,122,0.08)',
                fontWeight: 700,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            >
              &ldquo;
            </div>

            {/* Quote text */}
            <div
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(8px)' : 'translateY(0)',
                transition: 'opacity 0.4s ease, transform 0.4s ease',
                minHeight: '120px',
              }}
            >
              <p
                className="text-xl sm:text-2xl md:text-3xl text-white/80 mb-8 relative z-10"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  lineHeight: 1.7,
                  textAlign: 'center',
                }}
              >
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="text-center">
                <div
                  style={{
                    width: '40px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)',
                    margin: '0 auto 16px',
                  }}
                />
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.55)',
                  }}
                >
                  — {current.author}
                  {current.to && (
                    <span style={{ color: 'rgba(255,255,255,0.25)', fontWeight: 300 }}>
                      {' '}/ {current.to}
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={handlePrev}
                aria-label="Previous quote"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M9 2L4 7l5 5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {loveQuotes.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { if (!animating) { setAnimating(true); setTimeout(() => { setCurrentIndex(i); setAnimating(false); }, 400); } }}
                    aria-label={`Quote ${i + 1}`}
                    style={{
                      width: i === currentIndex ? '20px' : '5px',
                      height: '5px',
                      borderRadius: '3px',
                      transition: 'all 0.3s ease',
                      background: i === currentIndex
                        ? 'linear-gradient(90deg, #c9607a, #c9a84c)'
                        : 'rgba(255,255,255,0.15)',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                aria-label="Next quote"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M5 2l5 5-5 5" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
