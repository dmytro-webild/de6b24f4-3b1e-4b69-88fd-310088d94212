"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import { CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  return (
    <ThemeProvider defaultButtonVariant="bounce-effect" defaultTextAnimation="entrance-slide" borderRadius="pill" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="layered-gradient" primaryButtonStyle="double-inset" secondaryButtonStyle="solid" headingFontWeight="extrabold">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered navItems={[{ name: "The System", id: "/#system" }, { name: "Case Studies", id: "/#cases" }, { name: "Services", id: "/services" }, { name: "About Mario", id: "/about-mario" }]} brandName="Consulting MM" />
        </div>
        <div id="pricing" data-section="pricing">
          <PricingCardThree 
            title="Governance Systems Architecture"
            description="Select the governance framework that aligns with your organization's financial maturity and scaling objectives."
            animationType="slide-up"
            textboxLayout="split"
            plans={[
              {
                id: "mr3-install",                name: "MR3 System Installation",                price: "Implementation",                features: ["Financial Governance Baseline", "Data-Driven Reporting", "Operational Stability Protocols"],
                buttons: [{ text: "Select System", href: "#contact" }]
              },
              {
                id: "fractional-cfo",                name: "Fractional Institutional CFO",                price: "Strategic Leadership",                features: ["Financial Turnaround Support", "Executive Oversight", "Scaling Strategy"],
                buttons: [{ text: "Get Started", href: "#contact" }]
              },
              {
                id: "ai-arch",                name: "AI-Driven Financial Architecture",                price: "Advanced Tech",                features: ["Predictive Financial Modeling", "Automated Reporting", "Stability Algorithms"],
                buttons: [{ text: "Select Architecture", href: "#contact" }]
              }
            ]}
          />
        </div>
        <div id="contact" data-section="contact">
          <ContactCTA 
            tag="Diagnostics"
            title="Ready for the MR3-Index Diagnostic?"
            description="Our comprehensive diagnostic tool evaluates your current financial architecture and benchmarks it against institutional standards."
            buttons={[{ text: "Run Diagnostic", href: "#" }]}
            background={{ variant: "sparkles-gradient" }}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterCard logoText="Consulting MM" copyrightText="© 2025 MR³ Financial Systems. All rights reserved." />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}