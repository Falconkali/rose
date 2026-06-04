'use client';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ zIndex: 2 }}
    >
      {/* Top gradient line */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(232,160,176,0.4), rgba(201,168,76,0.4), transparent)',
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 100% at 50% 100%, rgba(201,96,122,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-20 text-center">

        {/* Large faded M */}
        <div
          aria-hidden="true"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(7rem, 20vw, 11rem)',
            fontWeight: 300,
            lineHeight: 1,
            marginBottom: '8px',
            background: 'linear-gradient(135deg, rgba(232,160,176,0.12), rgba(201,168,76,0.07))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            userSelect: 'none',
          }}
        >
          M
        </div>

        {/* Main dedication */}
        <p
          className="text-xl sm:text-2xl md:text-3xl mb-1"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontStyle: 'italic',
            background: 'linear-gradient(135deg, #f5c6d0, #c9607a)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.4,
          }}
        >
          Made with love, for Mishu Bhushan Roy
        </p>
        <p
          className="text-xs text-white/20 mb-6"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em', textTransform: 'uppercase' }}
        >
          Born December 2nd ✦ Always remembered
        </p>

        <p
          className="text-sm text-white/30 mb-10"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          Every word on this page is true.
        </p>

        {/* Divider */}
        <div className="section-divider mb-10" />

        {/* Quote */}
        <p
          className="text-base sm:text-lg text-white/25 italic mb-8 max-w-lg mx-auto"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, lineHeight: 1.8 }}
        >
          &ldquo;You are my today and all of my tomorrows.&rdquo;
        </p>

        {/* Final line */}
        <p
          className="text-xs text-white/15"
          style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          A love letter, crafted with care ✦
        </p>
      </div>
    </footer>
  );
}
