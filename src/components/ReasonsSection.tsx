'use client';

import { useEffect, useRef, useState } from 'react';

const reasons = [
  'That smile of yours. The way it starts slowly, like you\'re trying to hold it back but can\'t.',
  'Your kindness. The kind that doesn\'t ask for anything back.',
  'Your laugh. I can\'t explain it properly but I would cross a lot of distances just to hear it.',
  'How you tell the truth even when a lie would\'ve been so much easier.',
  'The way you turn ordinary days into ones worth actually remembering.',
  'You live in my head pretty much constantly. Honestly, I\'m okay with that.',
  'The quiet strength you carry without ever making it a performance.',
  'How gentle your heart is, even with people who don\'t always deserve it.',
  'The look in your eyes right before you say something real.',
  'The way you care about people without needing anyone to notice.',
  'Your patience. It\'s something I genuinely admire.',
  'The softness in your voice when you\'re being sincere.',
  'How you pick up on small details that most people just walk right past.',
  'Your sense of humor catching me completely off guard every single time.',
  'The quiet grace you carry yourself with, without even trying.',
  'How you remember things that actually matter to people.',
  'The way you make people feel like they\'re worth being seen.',
  'The warmth you bring into any room, without announcing it.',
  'How you don\'t quit on what you actually care about.',
  'Your dreams. The way you talk about them makes them feel real.',
  'How you love the people in your life, fully.',
  'The way you let things go instead of carrying them forever.',
  'How brave it is that you let yourself be vulnerable.',
  'The honesty you bring, even when it costs something.',
  'The way you actually listen. Like you\'re really present.',
  'Your curiosity. You want to understand things properly.',
  'How you find something to love in the smallest moments.',
  'The way you stay steady when things get difficult.',
  'When you want something, you go after it. That\'s genuinely rare.',
  'Every hard thing makes you a little stronger and you don\'t even realize it.',
  'Being around you feels like being home. I mean that.',
  'You are smarter than you let most people know.',
  'The way a comfortable silence with you feels easy, not awkward at all.',
  'How much depth lives in the way you think about things.',
  'You love without putting walls around it.',
  'The courage it takes to just be yourself, every day.',
  'You walk into a room and the mood shifts. Just like that.',
  'The sincerity behind what you say. You actually mean it.',
  'How emotionally mature you are, especially when it\'s hard to be.',
  'Your empathy. It reaches people without you even trying.',
  'You make me genuinely want to be a better person.',
  'You never pretend to be someone you\'re not. That matters more than you know.',
  'There is nobody quite like you. I\'m not saying that to be nice.',
  'How you inspire people without it being a thing you do on purpose.',
  'The way you hold onto the people you love.',
  'Your presence. Calm, real, grounding.',
  'How you make the hard things feel more manageable just by being there.',
  'You face uncertainty with an openness I really admire.',
  'You are real in a world where that\'s getting harder to find.',
  'How you surprise me in the best ways when I least expect it.',
  'The way you take something painful and somehow make it mean something.',
  'You choose to see good in people, on purpose.',
  'How you stand by what you actually believe in.',
  'The tenderness you carry without ever making it a weakness.',
  'You never stop growing. You\'re always becoming.',
  'That resilience of yours. Soft on the outside but properly rooted.',
  'How you hold onto love for life even on the days that don\'t deserve it.',
  'You notice what other people don\'t bother to look at.',
  'The way you find beauty in things most people overlook completely.',
  'Your hugs probably feel like safety. I hope I get to find out someday.',
  'How you hold space for people who are hurting.',
  'The joy you find in ordinary things.',
  'How much you say without using any words.',
  'You find hope when most people would have stopped looking.',
  'There is something free and untamed about who you are.',
  'The grace you show on hard days.',
  'You bring color to places that felt flat before you arrived.',
  'Your sensitivity is actually your biggest strength. I see it clearly.',
  'How you fight for what deserves to be fought for.',
  'You trust again even after you\'ve been hurt. That takes something real.',
  'You believe things can be better. And somehow that belief spreads.',
  'The honesty with which you hold yourself.',
  'Being around you feels like something genuinely rare.',
  'You feel like comfort. Like something I didn\'t know I needed until you.',
  'The way you leave a mark on people without even trying.',
  'You exist exactly as you should. That\'s enough. That\'s everything.',
  'The quiet confidence you don\'t even notice you have.',
  'How carefully you handle love.',
  'You never let people feel invisible. Not one person.',
  'The gentleness you bring to fragile things.',
  'Your name is honestly one of my favorite things to say out loud.',
  'You see people for what they actually are.',
  'How you extend forgiveness to yourself too, even when it\'s hard.',
  'The way you don\'t give up on hope.',
  'You make the world measurably better just by being in it.',
  'Your story isn\'t finished and it\'s already beautiful.',
  'You give, even when it costs you. Quietly, without making it a thing.',
  'Kindness is your default setting. Not something you have to decide.',
  'Your grace under the real weight of life.',
  'You remind me that love is something that actually exists.',
  'How you trust the process even when you can\'t see where it leads.',
  'Your belief in people, including me, means more than I know how to say.',
  'The stories living behind your eyes.',
  'You have never once made someone feel like they were less.',
  'Every part of you. Even the messy parts. All of it.',
  'You are loved so much more than you know.',
  'How you became someone I genuinely cannot imagine a world without.',
  'Every version of you I have gotten to witness.',
  'December 2nd exists. And the world got so much better that day.',
  'You, Mishu Bhushan Roy. That\'s the whole reason. That\'s all of it.',
];

function ReasonCard({ reason, index }: { reason: string; index: number }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => setFlipped((prev) => !prev);

  return (
    <div
      style={{
        height: '120px',
        cursor: 'pointer',
        perspective: '1000px',
      }}
      onClick={handleFlip}
      data-cursor-expand
      aria-label={`Reason ${index + 1}: ${flipped ? reason : 'Tap to reveal'}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleFlip()}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '16px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <span
            style={{
              fontSize: '1.75rem',
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 300,
              background: 'linear-gradient(135deg, #c9a84c, #e8c97a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1,
            }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <p
            style={{
              color: 'rgba(255,255,255,0.25)',
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Tap to reveal
          </p>
        </div>

        {/* Back */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px',
            transform: 'rotateY(180deg)',
            background: 'linear-gradient(135deg, rgba(201,96,122,0.15), rgba(201,168,76,0.08))',
            border: '1px solid rgba(232,160,176,0.25)',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 300,
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.85)',
              textAlign: 'center',
              lineHeight: 1.5,
            }}
          >
            {reason}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ReasonsSection() {
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
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="reasons"
      ref={sectionRef}
      className="section-padding relative"
      style={{ zIndex: 2 }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-white/30 mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
            Section 03
          </span>
          <h2
            className="text-4xl md:text-6xl font-light mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              background: 'linear-gradient(135deg, #c9a84c, #e8c97a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            100 Reasons Why I Love You
          </h2>
          <p className="text-white/40 text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Tap each card to reveal a reason
          </p>
          <div className="section-divider" />
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s',
          }}
        >
          {reasons.slice(0, 100).map((reason, i) => (
            <ReasonCard key={i} reason={reason} index={i} />
          ))}
        </div>

        <p
          className="text-center text-white/15 text-xs mt-8"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          100 reasons. Every single one is true.
        </p>
      </div>
    </section>
  );
}
