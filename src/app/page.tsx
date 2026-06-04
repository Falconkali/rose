'use client';

import dynamic from 'next/dynamic';

// All client-side components - dynamically imported to avoid SSR issues with browser APIs
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground'), { ssr: false });
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { ssr: false });
const MusicToggle = dynamic(() => import('@/components/MusicToggle'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const TimelineSection = dynamic(() => import('@/components/TimelineSection'), { ssr: false });
const ReasonsSection = dynamic(() => import('@/components/ReasonsSection'), { ssr: false });
const ThingsSection = dynamic(() => import('@/components/ThingsSection'), { ssr: false });
const DescribeSection = dynamic(() => import('@/components/DescribeSection'), { ssr: false });
const ConfessionSection = dynamic(() => import('@/components/ConfessionSection'), { ssr: false });
const OpenWhenSection = dynamic(() => import('@/components/OpenWhenSection'), { ssr: false });
const FutureSection = dynamic(() => import('@/components/FutureSection'), { ssr: false });
const HeartSection = dynamic(() => import('@/components/HeartSection'), { ssr: false });
const MemoryGallery = dynamic(() => import('@/components/MemoryGallery'), { ssr: false });
const ProposalSection = dynamic(() => import('@/components/ProposalSection'), { ssr: false });
const LoveQuotesSection = dynamic(() => import('@/components/QuoteGenerator'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ParticleBackground />
      <ScrollProgress />
      <MusicToggle />

      <main className="relative" role="main">
        {/* Hero */}
        <HeroSection />

        <SectionDivider />

        {/* Section 2: The Moment Everything Changed */}
        <TimelineSection />

        <SectionDivider />

        {/* Section 3: 100 Reasons Why I Love You */}
        <ReasonsSection />

        <SectionDivider />

        {/* Section 4: Things I Never Say Enough */}
        <ThingsSection />

        <SectionDivider />

        {/* Section 5: If I Could Describe You */}
        <DescribeSection />

        <SectionDivider />

        {/* Section 6: My Biggest Confession */}
        <ConfessionSection />

        <SectionDivider />

        {/* Section 7: Open When */}
        <OpenWhenSection />

        <SectionDivider />

        {/* Section 8: A Future I Dream About */}
        <FutureSection />

        <SectionDivider />

        {/* Memory Gallery */}
        <MemoryGallery />

        <SectionDivider />

        {/* Section 9: The Heart Section */}
        <HeartSection />

        {/* Famous Love Quotes — heart divider is built in */}
        <LoveQuotesSection />

        <SectionDivider />

        {/* Final Proposal Section */}
        <ProposalSection />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}

function SectionDivider() {
  return (
    <div
      className="w-full max-w-xs mx-auto py-2"
      aria-hidden="true"
    >
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
        }}
      />
    </div>
  );
}
