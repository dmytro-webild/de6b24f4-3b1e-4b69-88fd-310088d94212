"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TeamCardOne from '@/components/sections/team/TeamCardOne';

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
        {
          name: "The System",
          id: "system",
        },
        {
          name: "Case Studies",
          id: "cases",
        },
        {
          name: "Methodology",
          id: "about",
        },
        {
          name: "Strategy",
          id: "contact",
        },
      ]}
      brandName="Consulting MM"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Transforming SME Financial Stability Through Structured Systems"
      description="MR³ Financial Systems Architecture — A standardized financial governance system for scalable growth and operational resilience."
      testimonials={[
        {
          name: "CEO, SCUDO",
          handle: "Construction",
          testimonial: "MR³ architecture finally gave us predictable, data-driven financial structure.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crop-part-modern-skyscraper_23-2147694758.jpg",
        },
        {
          name: "Director, Estelar",
          handle: "Airlines",
          testimonial: "The system deployment transformed our predictive monitoring and stability.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/asian-woman-with-headset-using-computer_482257-120429.jpg",
        },
        {
          name: "Founder, Nexus",
          handle: "Logistics",
          testimonial: "A paradigm shift in how we manage our core financial health.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/empty-business-office-with-cubicles-used-organizational-activity-efficiency_482257-125625.jpg",
        },
        {
          name: "CFO, Vertex",
          handle: "Technology",
          testimonial: "Invaluable structural guidance that brought institutional rigor to our firm.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/teammates-manager-assembling-big-data-room-go-their-results_482257-91027.jpg",
        },
        {
          name: "Managing Director, Solis",
          handle: "Energy",
          testimonial: "Finally, we have the visibility required for true enterprise scale.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/empty-high-end-office-workspace-with-advanced-technology-enhance-efficiency_482257-119656.jpg",
        },
      ]}
      buttons={[
        {
          text: "Explore the System",
          href: "#system",
        },
        {
          text: "Schedule a Strategy Session",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/angry-manager-office-berating-worker-hitting-performance-targets_482257-126645.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/african-american-entrepreneur-pitching-new-project-idea-stakeholders_482257-118564.jpg",
          alt: "Entrepreneur",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-laptop-running-data-insights-empty-dark-office-late-night_482257-130090.jpg",
          alt: "Financial Analyst",
        },
        {
          src: "http://img.b2bpic.net/free-photo/empty-startup-office-displays-statistics_482257-119484.jpg",
          alt: "Operations Manager",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-graphs-figures-laptop-left-open-desk-empty-office_482257-84546.jpg",
          alt: "Strategy Lead",
        },
        {
          src: "http://img.b2bpic.net/free-photo/luxurious-business-environment-used-corporate-culture-industry_482257-119022.jpg",
          alt: "Executive",
        },
      ]}
      avatarText="Trusted by visionary leaders"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={true}
      title="Evolution to System-Based Governance"
      description="Consulting MM has transitioned from traditional advisory to a robust implementation firm. With over 18 years of experience, we provide a proprietary system-deployment model for SMEs requiring structural financial governance."
      bulletPoints={[
        {
          title: "18+ Years Experience",
          description: "Proven pedigree in financial diagnostics and restructuring.",
        },
        {
          title: "System-Based Deployment",
          description: "Standardized protocols that ensure consistency across entities.",
        },
        {
          title: "Governance Focus",
          description: "Operational resilience and predictive monitoring.",
        },
      ]}
      mediaAnimation="slide-up"
      imageSrc="http://img.b2bpic.net/free-photo/3d-geometric-abstract-twist-background_1048-17018.jpg"
    />
  </div>

  <div id="problem" data-section="problem">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Reactive Decision-Making",
          description: "Decisions based on fragmented, historical data points.",
          imageSrc: "http://img.b2bpic.net/free-photo/empty-high-end-office-workspace-with-advanced-technology-enhance-efficiency_482257-119617.jpg",
        },
        {
          title: "Lack of Visibility",
          description: "Absence of structured reporting systems.",
          imageSrc: "http://img.b2bpic.net/free-photo/lifestyle_1122-1875.jpg",
        },
        {
          title: "Inefficient Cost Architecture",
          description: "High failure rates due to inability to monitor cash burn.",
          imageSrc: "http://img.b2bpic.net/free-photo/interior-modern-high-building-high-quality-photo_114579-12190.jpg",
        },
      ]}
      title="Why Most SMEs Struggle Financially"
      description="SMEs represent ~44% of U.S. GDP, yet remain vulnerable due to lack of visibility."
    />
  </div>

  <div id="system" data-section="system">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "p1",
          badge: "Phase 1",
          price: "Diagnose",
          subtitle: "KPI Analysis & Liquidity Testing",
          features: [
            "Financial diagnostics",
            "KPI bench-marking",
            "Liquidity audit",
          ],
          buttons: [],
        },
        {
          id: "p2",
          badge: "Phase 2",
          price: "Optimize",
          subtitle: "Cost & Budget Restructuring",
          features: [
            "Cost architecture",
            "Budgetary control",
            "Cash flow optimization",
          ],
          buttons: [],
        },
        {
          id: "p3",
          badge: "Phase 3",
          price: "Sustain",
          subtitle: "Predictive Governance",
          features: [
            "Governance protocols",
            "KPI dashboards",
            "Predictive monitoring",
          ],
          buttons: [],
        },
      ]}
      title="MR³ Financial Systems Architecture"
      description="A structured, 3-phase system implementation model to restore institutional order."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "30%",
          description: "Increase in profitability",
        },
        {
          id: "m2",
          value: "25%",
          description: "Reduction in inefficiencies",
        },
        {
          id: "m3",
          value: "100%",
          description: "Structured protocol consistency",
        },
      ]}
      title="Impactful Results"
      description="Measurable system outcomes achieved by implementing MR³ protocols."
    />
  </div>

  <div id="cases" data-section="cases">
      <TeamCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      members={[
        {
          id: "c1",
          name: "SCUDO Consulting",
          role: "Florida",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-streets-office-building-business-district_107420-95727.jpg",
        },
        {
          id: "c2",
          name: "S Revista",
          role: "Florida",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-shot-modern-style-open-space-office-interior_181624-19369.jpg",
        },
        {
          id: "c3",
          name: "Cala Enterprises",
          role: "Florida",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-worker-office-using-landline-phone-talk-with-customer_482257-126518.jpg",
        },
        {
          id: "c4",
          name: "Estelar Airlines",
          role: "South America",
          imageSrc: "http://img.b2bpic.net/free-photo/long-view-modern-skyscrapers-office-buildings_23-2148836794.jpg",
        },
      ]}
      title="System Implementation Case Studies"
      description="Select implementations demonstrating the efficacy of our architecture."
    />
  </div>

  <div id="scalability" data-section="scalability">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Is this a consulting firm?",
          content: "No, it is a system-based implementation firm. We deploy protocols and sustain them.",
        },
        {
          id: "q2",
          title: "Can it be deployed across multiple locations?",
          content: "Yes, our standardized protocols allow for seamless multi-location financial governance.",
        },
        {
          id: "q3",
          title: "What is the certification model?",
          content: "We train internal teams as MR³ practitioners to monitor and uphold the architecture.",
        },
      ]}
      sideTitle="Scalability & Model"
      sideDescription="The MR³ model is built for institutional scalability."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      tag="Strategy"
      title="Implement Financial Structure"
      description="Request a system architecture overview for your organization."
      buttons={[
        {
          text: "Book Strategy Session",
          href: "#",
        },
        {
          text: "Request Overview",
          href: "#",
        },
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
