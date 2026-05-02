"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import PricingCardFive from "@/components/sections/pricing/PricingCardFive";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Zap } from "lucide-react";

export default function PricingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            brandName="CONFLUXSYSTEMS"
            navItems={[
              { name: "Work", id: "work" },
              { name: "Services", id: "services" },
              { name: "Pricing", id: "pricing" },
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Get Started", href: "#contact" }}
          />
        </div>
        <div id="pricing" data-section="pricing">
          <PricingCardFive
            title="Transparent Pricing for Intelligent Systems"
            description="Flexible tiers designed to scale with your operational automation needs."
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            plans={[
              {
                id: "starter",                tag: "Foundation",                price: "$2,999",                period: "/mo",                description: "Core automation workflows and basic AI agent integration.",                button: { text: "Choose Starter", href: "#contact" },
                featuresTitle: "Key Features",                features: ["3 Core Automations", "Email/Chat Support", "Basic Reporting", "Standard Integrations"],
              },
              {
                id: "pro",                tag: "Growth",                tagIcon: Zap,
                price: "$5,999",                period: "/mo",                description: "Advanced agent orchestrations and predictive workflows.",                button: { text: "Choose Growth", href: "#contact" },
                featuresTitle: "Key Features",                features: ["10+ Core Automations", "Dedicated Agent Logic", "Priority Support", "Advanced Data Analytics"],
              },
              {
                id: "enterprise",                tag: "Scale",                price: "Custom",                period: "",                description: "Enterprise-grade infrastructure for high-scale global operations.",                button: { text: "Contact Sales", href: "#contact" },
                featuresTitle: "Enterprise Power",                features: ["Unlimited Automations", "Bespoke Model Training", "24/7 Priority Concierge", "Custom API Orchestration"],
              },
            ]}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterBase
            logoText="CONFLUXSYSTEMS"
            copyrightText="© 2026 | CONFLUXSYSTEMS"
            columns={[
              {
                title: "Company",                items: [
                  { label: "About", href: "#about" },
                  { label: "Services", href: "#services" },
                  { label: "Work", href: "#work" },
                  { label: "Contact", href: "#contact" },
                ],
              },
              {
                title: "Solutions",                items: [
                  { label: "AI Agents", href: "#" },
                  { label: "Workflow Automations", href: "#" },
                  { label: "Infrastructure", href: "#" },
                  { label: "System Audit", href: "#" },
                ],
              },
              {
                title: "Resources",                items: [
                  { label: "Twitter", href: "#" },
                  { label: "LinkedIn", href: "#" },
                  { label: "Blog", href: "#" },
                ],
              },
            ]}
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
