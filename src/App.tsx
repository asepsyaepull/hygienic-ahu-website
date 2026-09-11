import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricStrip } from './components/MetricStrip';
import { Benefits } from './components/Benefits';
import { ProductSection } from './components/ProductSection';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { TechnologyGrid } from './components/TechnologyGrid';
import { SpecTable } from './components/SpecTable';
import { ProcessSection } from './components/ProcessSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFCFE] text-[#334155] selection:bg-[#38BDF8]/20 selection:text-[#0B253A] relative">
      {/* Floating Island Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section with Real 3D AHU Showcase */}
        <Hero />

        {/* 2. Precision Telemetry Operational Metrics Strip */}
        <MetricStrip />

        {/* 3. Asymmetric Engineering Bento (4 Pillars of Hygiene) */}
        <Benefits />

        {/* 4. Differentiated Product Matrix (Star 1 vs Star 2) */}
        <ProductSection />

        {/* 5. Asymmetric Case Studies & Cleanroom Deployments */}
        <ProjectsShowcase />

        {/* 6. Tiered Tier-1 Component Systems */}
        <TechnologyGrid />

        {/* 7. Full Filterable Technical Spec Sheet & CSV Export */}
        <SpecTable />

        {/* 8. Engineering Stage-Gate Journey */}
        <ProcessSection />

        {/* 9. Accreditation & Peer Validation Hub */}
        <Testimonials />

        {/* 10. Technical FAQ */}
        <FaqSection />

        {/* 11. Direct WhatsApp Conversion Call to Action */}
        <CtaBanner />
      </main>

      {/* Persistent Floating WhatsApp Quick Lead Action */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
