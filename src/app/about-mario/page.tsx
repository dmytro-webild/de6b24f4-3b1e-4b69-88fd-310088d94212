"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Briefcase, Award, TrendingUp } from 'lucide-react';

export default function AboutMarioPage() {
  return (
    <ThemeProvider defaultButtonVariant="text-stagger" defaultTextAnimation="entrance-slide" borderRadius="rounded" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="glass-elevated" primaryButtonStyle="gradient" secondaryButtonStyle="glass" headingFontWeight="normal">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered navItems={[{ name: "Home", id: "/" }, { name: "The System", id: "/#system" }, { name: "About Mario", id: "/about-mario" }]} brandName="Consulting MM" />
        </div>
        <div id="about" data-section="about">
          <SplitAbout 
            title="Mario Rodríguez Aguilera"
            description="A visionary financial executive with over 18 years of experience in high-stakes corporate governance and SME transformation. Mario's career is defined by his ability to bridge the gap between institutional rigor and agile operational scalability."
            textboxLayout="split"
            useInvertedBackground={false}
            bulletPoints={[
              { title: "CFO Expertise", description: "Former CFO at Cala Enterprises, leading financial turnarounds and institutional strategy.", icon: Briefcase },
              { title: "Corporate Leadership", description: "Instrumental leadership experience at major aviation firms including SBA Airlines and Aerolíneas Estelar.", icon: Award },
              { title: "MR3 Methodology", description: "Architect of the proprietary MR3 Methodology, a standard for institutional-level financial governance and long-term SME scalability.", icon: TrendingUp }
            ]}
            imageSrc="http://img.b2bpic.net/free-photo/portrait-successful-businessman-wearing-suit_482257-119154.jpg"
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterCard logoText="Consulting MM" copyrightText="© 2025 MR³ Financial Systems. All rights reserved." />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}