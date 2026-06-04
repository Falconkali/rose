'use client';

import { useEffect, useRef, useState } from 'react';

const storyLines = [
  { prefix: 'If kindness had a face...', response: 'it would look a lot like yours.' },
  { prefix: 'If comfort had a voice...', response: 'it would sound like yours.' },
  { prefix: 'If happiness had a home...', response: 'it would feel like being near you.' },
  { prefix: 'If patience had a person...', response: 'that person would be you.' },
  { prefix: 'If grace had a name...', response: 'it would answer to Mishu.' },
];

export default function DescribeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          storyLines.forEach((_, i) => {
            setTimeout(() => {
              setVisibleLines((prev) => Math.max(prev, i + 1));
            }, i * 700);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="describe"
      ref={sectionRef}
      className="section-padding relative"
      style={{ zIndex: 2 }}
    >
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 70% at 30% 50%, rgba(201,168,76,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">

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
            If I Could Describe You
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Story lines */}
        <div className="space-y-10 md:space-y-12">
          {storyLines.map((line, i) => (
            <div
              key={i}
              className="flex flex-col gap-2"
              style={{
                opacity: visibleLines > i ? 1 : 0,
                transform: visibleLines > i ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
              }}
            >
              {/* Prefix */}
              <p
                className="text-lg sm:text-2xl md:text-4xl text-white/40 italic"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, lineHeight: 1.5 }}
              >
                {line.prefix}
              </p>

              {/* Response */}
              <p
                className="text-xl sm:text-2xl md:text-5xl pl-4 md:pl-8"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontWeight: 500,
                  lineHeight: 1.4,
                  background: i % 2 === 0
                    ? 'linear-gradient(135deg, #f5c6d0, #c9607a)'
                    : 'linear-gradient(135deg, #c9a84c, #e8c97a)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  borderLeft: `2px solid ${i % 2 === 0 ? 'rgba(232,160,176,0.3)' : 'rgba(201,168,76,0.3)'}`,
                }}
              >
                {line.response}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
