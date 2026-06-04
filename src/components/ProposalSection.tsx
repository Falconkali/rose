'use client';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE  = 'service_bqkrhb3';
const EMAILJS_TEMPLATE = 'template_e4k9yak';
const EMAILJS_KEY      = 'VD4eEL5u9EMZY9tp9';

const proposalLines = [
  { text: 'Mishu...', delay: 0, size: 'text-4xl sm:text-5xl md:text-7xl', style: 'italic', color: 'rose' },
  { text: "I don't know what the future holds.", delay: 1200, size: 'text-lg sm:text-2xl md:text-3xl', style: 'normal', color: 'light' },
  { text: 'But if I had the privilege of choosing...', delay: 2600, size: 'text-lg sm:text-2xl md:text-3xl', style: 'italic', color: 'light' },
  { text: 'I would choose you.', delay: 4000, size: 'text-2xl sm:text-3xl md:text-5xl', style: 'normal', color: 'rose' },
  { text: 'Again.', delay: 5200, size: 'text-xl sm:text-2xl md:text-4xl', style: 'italic', color: 'gold' },
  { text: 'And again.', delay: 6200, size: 'text-xl sm:text-2xl md:text-4xl', style: 'italic', color: 'gold' },
  { text: 'And again.', delay: 7200, size: 'text-xl sm:text-2xl md:text-4xl', style: 'italic', color: 'gold' },
  { text: 'Every single time.', delay: 8400, size: 'text-2xl sm:text-3xl md:text-5xl', style: 'normal', color: 'rose' },
];

function Petal({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: '8px',
        height: '14px',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        background: 'linear-gradient(135deg, rgba(232,160,176,0.7), rgba(201,96,122,0.5))',
        ...style,
      }}
    />
  );
}

/** Silently notify via EmailJS — fires and forgets, no UI impact */
function sendNotification(choice: string) {
  const now = new Date();
  const timeStr = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  emailjs
    .send(
      EMAILJS_SERVICE,
      EMAILJS_TEMPLATE,
      {
        name: 'Mishu Bhushan Roy',
        title: 'She made her choice!',
        message: choice,
        time: timeStr,
        email: 'shivaananthas@gmail.com',
      },
      EMAILJS_KEY
    )
    .catch(() => {
      // Silently ignore — never show any error to Mishu
    });
}

export default function ProposalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lineCount, setLineCount] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [answer, setAnswer] = useState<'yes' | 'think' | null>(null);
  const [petals, setPetals] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);
  const petalIdRef = useRef(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          proposalLines.forEach((line, i) => {
            setTimeout(() => {
              setLineCount((prev) => Math.max(prev, i + 1));
            }, line.delay + 500);
          });
          setTimeout(() => setShowButton(true), 10000);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Petal rain
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      const id = petalIdRef.current++;
      const newPetal = {
        id,
        style: {
          left: `${Math.random() * 100}%`,
          top: '-20px',
          animation: `petalFall ${4 + Math.random() * 4}s ease-in ${Math.random() * 2}s forwards`,
          transform: `rotate(${Math.random() * 360}deg)`,
          opacity: 0,
        } as React.CSSProperties,
      };
      setPetals((prev) => [...prev.slice(-30), newPetal]);
    }, 300);
    return () => clearInterval(interval);
  }, [visible]);

  const getColor = (color: string) => {
    if (color === 'rose') return 'linear-gradient(135deg, #f5c6d0, #c9607a)';
    if (color === 'gold') return 'linear-gradient(135deg, #c9a84c, #e8c97a)';
    return undefined;
  };

  const handleYes = () => {
    setAnswer('yes');
    setShowQuestion(false);
    sendNotification('✅ YES — She said yes, with all her heart! 💌');
  };

  const handleThink = () => {
    setAnswer('think');
    setShowQuestion(false);
    sendNotification('💭 Let Me Think — She needs more time to decide.');
  };

  return (
    <section
      id="proposal"
      ref={sectionRef}
      className="section-padding relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 80% at 50% 50%, rgba(201,96,122,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 20% 80%, rgba(201,168,76,0.05) 0%, transparent 50%),
            radial-gradient(ellipse 40% 60% at 80% 20%, rgba(201,96,122,0.05) 0%, transparent 50%)
          `,
        }}
      />

      {/* Petals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {petals.map((petal) => (
          <Petal key={petal.id} style={petal.style} />
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
        {/* Header label */}
        <div
          className="mb-20"
          style={{ opacity: visible ? 1 : 0, transition: 'opacity 1s ease' }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/20 block" style={{ fontFamily: 'Inter, sans-serif' }}>
            The Final Chapter
          </span>
        </div>

        {/* Proposal lines */}
        {!answer && (
          <div className="space-y-6 mb-16">
            {proposalLines.map((line, i) => (
              <div
                key={i}
                style={{
                  opacity: lineCount > i ? 1 : 0,
                  transform: lineCount > i ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 1.2s ease, transform 1.2s ease',
                }}
              >
                <p
                  className={line.size}
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: line.style === 'italic' ? 300 : 400,
                    fontStyle: line.style,
                    color: line.color === 'light' ? 'rgba(255,255,255,0.5)' : undefined,
                    background: getColor(line.color),
                    WebkitBackgroundClip: line.color !== 'light' ? 'text' : undefined,
                    WebkitTextFillColor: line.color !== 'light' ? 'transparent' : undefined,
                    backgroundClip: line.color !== 'light' ? 'text' : undefined,
                    filter: line.color === 'rose' ? 'drop-shadow(0 0 20px rgba(201,96,122,0.4))' : undefined,
                  }}
                >
                  {line.text}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Reveal button */}
        {showButton && !showQuestion && !answer && (
          <div className="mt-8" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <button
              onClick={() => setShowQuestion(true)}
              id="reveal-question-btn"
              className="btn-gold rounded-full text-white gold-pulse"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              I have something to ask you
            </button>
          </div>
        )}

        {/* The question */}
        {showQuestion && !answer && (
          <div style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <div
              className="mb-10 p-8 md:p-12 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(201,96,122,0.15), rgba(201,168,76,0.08))',
                border: '1px solid rgba(232,160,176,0.25)',
                boxShadow: '0 0 60px rgba(201,96,122,0.15)',
              }}
            >
              <p
                className="text-lg sm:text-2xl md:text-4xl mb-2"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.4,
                }}
              >
                The question is...
              </p>
              <p
                className="text-xl sm:text-2xl md:text-5xl"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 500,
                  background: 'linear-gradient(135deg, #f5c6d0, #c9607a, #c9a84c)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.5,
                }}
              >
                Will you give me a chance to be the person who loves you with all my heart?
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
              <button
                onClick={handleYes}
                id="yes-btn"
                className="btn-rose rounded-full text-white pulse-glow"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Yes, with all my heart
              </button>
              <button
                onClick={handleThink}
                id="think-btn"
                className="rounded-full text-white/60 transition-all duration-300 hover:text-white/90"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  padding: '12px 28px',
                  fontSize: '0.8rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
              >
                Let Me Think
              </button>
            </div>
          </div>
        )}

        {/* YES response */}
        {answer === 'yes' && (
          <div className="text-center" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <div className="text-7xl mb-8 heartbeat">🎉</div>
            <h3
              className="text-3xl sm:text-4xl md:text-6xl mb-6"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                background: 'linear-gradient(135deg, #f5c6d0, #c9607a, #c9a84c)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 0 30px rgba(201,96,122,0.5))',
                lineHeight: 1.3,
              }}
            >
              You just made me the happiest person alive.
            </h3>
            <p className="text-white/50 text-lg" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              This moment I will remember forever. Thank you, Mishu.
            </p>
          </div>
        )}

        {/* THINK response */}
        {answer === 'think' && (
          <div className="text-center" style={{ animation: 'fadeInUp 0.8s ease forwards' }}>
            <div className="text-6xl mb-8">🌙</div>
            <h3
              className="text-3xl md:text-5xl mb-6"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.8)',
              }}
            >
              That&apos;s okay.
            </h3>
            <p
              className="text-xl md:text-2xl mb-4 text-white/60"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Some things this important deserve time.
            </p>
            <p className="text-white/35 text-base" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              I&apos;ll be here. Whenever you&apos;re ready.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
