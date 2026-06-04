'use client';

import { useEffect, useRef, useState } from 'react';

const timelineItems = [
  { text: 'At first, you were just another person.', icon: '○' },
  { text: 'Then you became someone I looked forward to.', icon: '◎' },
  { text: 'Then you became my favorite notification.', icon: '◉' },
  { text: 'Then you became the first thought in the morning.', icon: '●' },
  { text: 'And somehow...', icon: '·' },
  { text: 'You became the person I couldn\'t stop caring about.', icon: '♡' },
];

function TimelineItem({ item, index, visible }: { item: typeof timelineItems[0]; index: number; visible: boolean }) {
  const isRight = index % 2 !== 0;

  return (
    <div
      className={`flex items-center gap-6 md:gap-12 mb-16 ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'translateX(0) translateY(0)'
          : `translateX(${isRight ? '40px' : '-40px'}) translateY(20px)`,
        transition: `opacity 0.8s ease ${index * 0.15}s, transform 0.8s ease ${index * 0.15}s`,
      }}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isRight ? 'md:text-right text-left' : 'text-left'}`}>
        <div
          className="inline-block glass-rose px-6 py-5 max-w-sm"
          style={{
            borderRadius: '16px',
            borderLeft: isRight ? undefined : '2px solid rgba(232,160,176,0.3)',
            borderRight: isRight ? '2px solid rgba(201,168,76,0.3)' : undefined,
          }}
        >
          <p
            className="text-base md:text-xl text-white/80"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, lineHeight: 1.7 }}
          >
            {item.text}
          </p>
        </div>
      </div>

      {/* Center icon */}
      <div className="flex flex-col items-center z-10 shrink-0">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
          style={{
            background: 'linear-gradient(135deg, rgba(201,96,122,0.2), rgba(201,168,76,0.2))',
            border: '1px solid rgba(232,160,176,0.3)',
            boxShadow: '0 0 20px rgba(201,96,122,0.2)',
            fontFamily: 'serif',
          }}
        >
          <span style={{ color: 'var(--rose)' }}>{item.icon}</span>
        </div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="flex-1 hidden md:block" />
    </div>
  );
}

export default function TimelineSection() {
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
      id="timeline"
      ref={sectionRef}
      className="section-padding relative"
      style={{ zIndex: 2 }}
    >
      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,96,122,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div
          className="text-center mb-20"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-light mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              background: 'linear-gradient(135deg, #f5c6d0, #c9a84c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.25,
            }}
          >
            The Moment Everything Changed
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-[22px] md:left-1/2 md:-translate-x-[1px] top-0 w-[1px] pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(232,160,176,0.3) 20%, rgba(201,168,76,0.3) 80%, transparent)',
              height: visible ? '100%' : '0',
              transition: 'height 2s ease',
            }}
          />

          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
