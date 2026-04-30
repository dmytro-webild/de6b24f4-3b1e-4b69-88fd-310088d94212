"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import SplitAbout from '@/components/sections/about/SplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="medium"
        background="circleGradient"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "The System", id: "system" },
        { name: "Case Studies", id: "cases" },
        { name: "Methodology", id: "about" },
        { name: "About Mario", id: "/about-mario" },
        { name: "Services", id: "/services" },
        { name: "FAQ", id: "/faq" },
        { name: "Strategy", id: "contact" },
      ]}
      brandName="Consulting MM"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Transforming SME Financial Stability Through Structured Systems"
      description="MR³ Financial Systems Architecture — A standardized financial governance system for scalable growth and operational resilience."
      testimonials={[
        { name: "CEO, SCUDO", handle: "Construction", testimonial: "MR³ architecture finally gave us predictable, data-driven financial structure.", rating: 5 },
        { name: "Director, Estelar", handle: "Airlines", testimonial: "The system deployment transformed our predictive monitoring and stability.", rating: 5 }
      ]}
      buttons={[
        { text: "Get Your Financial Audit", href: "#system" },
        { text: "Schedule a Strategy Session", href: "#contact" },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/angry-manager-office-berating-worker-hitting-performance-targets_482257-126645.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Evolution to System-Based Governance"
      description="Consulting MM has transitioned from traditional advisory to a robust implementation firm. With over 18 years of experience, we provide a proprietary system-deployment model for SMEs requiring structural financial governance."
      bulletPoints={[
        { title: "18+ Years Experience", description: "Proven pedigree in financial diagnostics and restructuring." },
        { title: "System-Based Deployment", description: "Standardized protocols that ensure consistency across entities." },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-geometric-abstract-twist-background_1048-17018.jpg"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{ variant: "sparkles-gradient" }}
      tag="Strategy"
      title="Implement Financial Structure"
      description="Request a system architecture overview for your organization."
      buttons={[
        { text: "Book Strategy Session", href: "#" },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Consulting MM"
      copyrightText="© 2025 MR³ Financial Systems. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}