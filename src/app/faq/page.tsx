"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';

export default function FaqPage() {
  return (
    <ThemeProvider defaultButtonVariant="bounce-effect" defaultTextAnimation="entrance-slide" borderRadius="pill" contentWidth="medium" sizing="medium" background="circleGradient" cardStyle="layered-gradient" primaryButtonStyle="double-inset" secondaryButtonStyle="solid" headingFontWeight="extrabold">
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleCentered navItems={[{ name: "Home", id: "/" }, { name: "Services", id: "/services" }, { name: "About Mario", id: "/about-mario" }, { name: "FAQ", id: "/faq" }]} brandName="Consulting MM" />
        </div>
        <div id="faq" data-section="faq">
          <FaqSplitMedia
            title="Governance Intelligence"
            description="Everything you need to know about our MR3 methodology and institutional systems."
            faqsAnimation="slide-up"
            useInvertedBackground={false}
            faqs={[
              { id: "mr3-1", title: "What does MR3 stand for?", content: "MR3 stands for Methodology, Rigor, Resilience, and Results—the four pillars of our institutional governance framework." },
              { id: "mr3-2", title: "How is it different from traditional consulting?", content: "Unlike traditional consulting that provides static advice, our approach installs a permanent, scalable system that stays with your organization." },
              { id: "mr3-3", title: "How long does the deployment take?", content: "Typical system deployment takes 3-6 months depending on the organization's existing financial maturity." }
            ]}
            buttons={[{ text: "Book a Discovery Session", href: "#contact" }]}
          />
        </div>
        <div id="contact" data-section="contact">
          <ContactCTA 
            tag="Discovery"
            title="Ready to Architect Your Growth?"
            description="Schedule your discovery session to begin your system architecture implementation."
            buttons={[{ text: "Book a Discovery Session", href: "#" }]}
            background={{ variant: "sparkles-gradient" }}
            useInvertedBackground={false}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterCard logoText="Consulting MM" copyrightText="© 2025 MR³ Financial Systems. All rights reserved." />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}