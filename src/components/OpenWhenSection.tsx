'use client';

import { useEffect, useRef, useState } from 'react';

const letters = [
  {
    trigger: 'When You Are Sad',
    letter: `Dear Mishu,

If you're reading this, you're going through something hard. And I want you to know — you don't have to be okay right now.

Sadness isn't weakness. It's proof that you loved something, cared for something, felt something deeply. That's a beautiful thing, even when it hurts.

You have survived every hard day that has come before this one. Every single one. And you will survive this too.

You are more resilient than you know. More loved than you feel in this moment. And you matter — not because of what you do, but simply because you are you.

Take it slow. Breathe. Let yourself feel.

And know that somewhere, someone is thinking of you and wishing they could take the weight away.

That someone is me.

Always.`,
  },
  {
    trigger: 'When You Are Overthinking',
    letter: `Dear Mishu,

Your mind is racing again, isn't it?

Here's what I want you to do: take a breath. A real one — slow and deep. Let it out.

The thoughts spiraling in your head? Most of them are not real. They are fears dressed up as certainties. They are tomorrow's problems showing up uninvited today.

You are safe. You are loved. You are exactly where you're supposed to be.

Not everything needs to be figured out tonight. Some things will make sense with time. Some things will resolve on their own. And some things — the best things — are still on their way.

Let your mind rest. You don't need to solve everything right now.

You are enough, exactly as you are, even in the middle of the mess.

Breathe, Mishu. You've got this.`,
  },
  {
    trigger: 'When You Miss Me',
    letter: `Dear Mishu,

I'm already here.

In every song that makes you pause. In that quiet moment right before you fall asleep. In the spaces between words when you're talking to someone else.

Missing someone means they became a part of you. That's not a sad thing — it's the most beautiful kind of thing.

And if you're reading this, know that the distance between us doesn't change how real this is.

Some connections don't need constant presence to stay alive. They just... remain. Like the moon that's always there, even when clouds hide it.

I miss you too. Always.

And I'm not going anywhere.`,
  },
  {
    trigger: 'When You Need A Smile',
    letter: `Dear Mishu,

Okay. I need you to smile right now.

Not a polite smile. Not a "fine, I'll smile" smile. A real one.

Here's something I want you to think about: You have a smile that could quiet a room full of noise. You have a laugh that could make any bad day better. You have eyes that carry whole stories in a single glance.

And you don't even know how remarkable you are.

You came here looking for a smile, but the truth is — you are the reason for mine.

So smile, Mishu. Not for me. For yourself. Because you deserve every happy moment this world has to offer.

And because somewhere, I'm smiling thinking about you.

Always.`,
  },
];

function LetterCard({ letter, index }: { letter: typeof letters[0]; index: number }) {
  const [open, setOpen] = useState(false);

  const accentColors = [
    { border: 'rgba(232,160,176,0.3)', bg: 'rgba(201,96,122,0.08)', line: '#c9607a' },
    { border: 'rgba(201,168,76,0.3)', bg: 'rgba(201,168,76,0.08)', line: '#c9a84c' },
    { border: 'rgba(180,160,255,0.3)', bg: 'rgba(100,80,200,0.08)', line: '#b4a0ff' },
    { border: 'rgba(232,160,176,0.3)', bg: 'rgba(245,198,208,0.08)', line: '#f5c6d0' },
  ];
  const accent = accentColors[index % accentColors.length];

  return (
    <div
      style={{
        borderRadius: '16px',
        border: `1px solid ${open ? accent.border : 'rgba(255,255,255,0.07)'}`,
        background: open ? accent.bg : 'rgba(255,255,255,0.02)',
        backdropFilter: 'blur(20px)',
        overflow: 'hidden',
        transition: 'border-color 0.4s ease, background 0.4s ease, box-shadow 0.4s ease',
        boxShadow: open ? `0 0 40px ${accent.bg}` : 'none',
      }}
    >
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left"
        aria-expanded={open}
      >
        <div
          className="flex items-center justify-between"
          style={{ padding: '20px 24px', borderBottom: open ? `1px solid ${accent.border}` : '1px solid transparent' }}
        >
          <div className="flex items-center gap-4">
            {/* Number badge */}
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: `1px solid ${accent.border}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.85rem',
                  background: `linear-gradient(135deg, ${accent.line}, rgba(255,255,255,0.6))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-white/25 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                {open ? 'Close letter' : 'Open letter'}
              </p>
              <h3
                className="text-base sm:text-lg md:text-xl text-white/80"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', lineHeight: 1.3 }}
              >
                {letter.trigger}
              </h3>
            </div>
          </div>

          {/* Toggle icon */}
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: `1px solid ${accent.border}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              transition: 'transform 0.4s ease',
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 2v8M2 6h8" stroke={accent.line} strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </button>

      {/* Letter body */}
      <div
        style={{
          maxHeight: open ? '800px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.6s cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        <div style={{ padding: '24px', borderTop: `1px solid ${accent.border}` }}>
          {/* Decorative line */}
          <div
            style={{
              width: '40px',
              height: '2px',
              background: `linear-gradient(90deg, ${accent.line}, transparent)`,
              marginBottom: '20px',
            }}
          />
          <div
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1rem',
              lineHeight: '1.9',
              color: 'rgba(255,255,255,0.68)',
              whiteSpace: 'pre-line',
            }}
          >
            {letter.letter}
          </div>
          {/* Signature line */}
          <div
            style={{
              marginTop: '24px',
              paddingTop: '16px',
              borderTop: `1px solid ${accent.border}`,
              textAlign: 'right',
            }}
          >
            <span
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.8rem',
                color: 'rgba(255,255,255,0.2)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              written with love
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OpenWhenSection() {
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
      id="open-when"
      ref={sectionRef}
      className="section-padding relative"
      style={{ zIndex: 2 }}
    >
      <div
        className="absolute top-1/2 right-0 w-96 h-96 pointer-events-none -translate-y-1/2"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
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
            Letters for You
          </h2>
          <p className="text-white/30 text-sm mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Written for you, for whenever you need them most
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Letters */}
        <div
          className="space-y-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s',
          }}
        >
          {letters.map((letter, i) => (
            <LetterCard key={i} letter={letter} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
