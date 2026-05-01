"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Bot, BrainCircuit, Workflow, Zap, ArrowUpRight, Cpu, Network, Database } from "lucide-react";

export default function WebAgency2Page() {
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
              { name: "About", id: "about" },
              { name: "Contact", id: "contact" },
            ]}
            button={{ text: "Get Started", href: "#contact" }}
          />
        </div>
        <div id="hero" data-section="hero">
          <HeroSplitDoubleCarousel
            title="Engineering Autonomous AI Automations"
            description="We architect intelligent agent ecosystems and workflow automation for CONFLUXSYSTEMS to eliminate bottlenecks and unlock high-scale operational efficiency."
            tag="AI Engineering & Automation"
            tagIcon={Cpu}
            tagAnimation="slide-up"
            background={{ variant: "canvas-reveal" }}
            buttons={[
              { text: "Schedule AI Audit", href: "#contact" },
              { text: "Our Services", href: "#features" },
            ]}
            buttonAnimation="slide-up"
            carouselPosition="right"
            leftCarouselItems={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6eivSkkTGgp8DaDxCBCnRMlxl/uploaded-1777628527555-a5q88ct8.png?_wi=1", imageAlt: "AI Orchestration Framework" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "Autonomous Agent Systems" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp", imageAlt: "Predictive Analytics Dashboard" },
            ]}
            rightCarouselItems={[
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp", imageAlt: "Scalable AI Automation" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-8.webp", imageAlt: "Operational Efficiency" },
              { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=1", imageAlt: "Performance Data" },
            ]}
            carouselItemClassName="!aspect-[4/5]"
          />
        </div>
        <div id="features" data-section="features">
          <FeatureBento
            title="Automated Systems Infrastructure"
            description="We build modular, scalable AI automations to transform legacy operations into high-velocity digital machines."
            textboxLayout="default"
            useInvertedBackground={false}
            animationType="slide-up"
            buttons={[{ text: "Explore All Automations", href: "#services" }]}
            buttonAnimation="slide-up"
            features={[
              {
                title: "Intelligent AI Agents",                description: "Bespoke agents handling complex logic, data synthesis, and autonomous decision-making.",                bentoComponent: "marquee",                centerIcon: BrainCircuit,
                variant: "text",                texts: ["Adaptive Logic", "Context Awareness", "Natural Interaction", "Workflow Delegation", "Real-time Synthesis", "Scalable Decisioning"],
              },
              {
                title: "Automated Workflows",                description: "Connecting your entire ecosystem to eliminate manual latency and process friction.",                bentoComponent: "media-stack",                items: [
                  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6eivSkkTGgp8DaDxCBCnRMlxl/uploaded-1777628527555-a5q88ct8.png?_wi=2", imageAlt: "AI Agent Deployment" },
                  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp?_wi=1", imageAlt: "Systems Integration" },
                  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-3.webp?_wi=1", imageAlt: "Data Strategy" },
                ],
              },
              {
                title: "Infrastructure & Data",                description: "Laying the robust foundation for high-performance machine learning initiatives.",                bentoComponent: "media-stack",                items: [
                  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-3.webp?_wi=2", imageAlt: "Data Architecture" },
                  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp?_wi=2", imageAlt: "Model Optimization" },
                  { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp?_wi=2", imageAlt: "Cloud Integration" },
                ],
              },
            ]}
          />
        </div>
        <div id="impact" data-section="impact">
          <FeatureCardTwentySix
            title="Engineered Efficiency"
            description="Real-world impact through autonomous systems and smart automation."
            textboxLayout="default"
            useInvertedBackground={false}
            buttons={[{ text: "See Performance Metrics", href: "#metrics" }]}
            buttonAnimation="slide-up"
            cardClassName="!h-auto aspect-video"
            features={[
              {
                title: "AI Lead Engines",                description: "Automated 24/7 lead qualification and pipeline enrichment.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3D6eivSkkTGgp8DaDxCBCnRMlxl/uploaded-1777628527555-a5q88ct8.png?_wi=3",                imageAlt: "AI Lead Engine",                buttonIcon: ArrowUpRight,
              },
              {
                title: "Process Automation",                description: "Reduced operational cycle times by over 60% with custom agents.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-2.webp",                imageAlt: "Process Automation",                buttonIcon: ArrowUpRight,
              },
              {
                title: "Agentic Support",                description: "Automated 85% of tier-1 support using CONFLUXSYSTEMS standard models.",                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-3.webp",                imageAlt: "Support AI",                buttonIcon: ArrowUpRight,
              },
            ]}
          />
        </div>
        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFifteen
            testimonial="The AI automation framework built by CONFLUXSYSTEMS has fundamentally changed our output. We're no longer just working faster; we're working smarter."
            rating={5}
            author="— Alex Chen, Lead Architect"
            avatars={[
              { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp", alt: "Client" },
            ]}
            ratingAnimation="slide-up"
            avatarsAnimation="slide-up"
            useInvertedBackground={false}
          />
        </div>
        <div id="metrics" data-section="metrics">
          <MetricCardOne
            title="Metrics of Autonomy"
            description="Driving results through intelligent systems design and automation."
            textboxLayout="default"
            useInvertedBackground={false}
            gridVariant="uniform-all-items-equal"
            animationType="slide-up"
            metrics={[
              { id: "automation", value: "500+", title: "Automations", description: "Deployed and optimized smart workflows", icon: Workflow },
              { id: "agents", value: "40%", title: "Avg Efficiency", description: "Average productivity boost per deployment", icon: Zap },
              { id: "data", value: "10+", title: "Integrations", description: "Deep integrations with critical stack components", icon: Database },
            ]}
          />
        </div>
        <div id="contact" data-section="contact">
          <ContactCTA
            tag="Engineered for Growth"
            title="Get Your Custom AI Automation Roadmap"
            description="Ready to deploy intelligent agents? Let's design the next generation of operations for CONFLUXSYSTEMS."
            background={{ variant: "rotated-rays-animated" }}
            buttons={[
              { text: "Schedule AI Audit", href: "#contact" },
              { text: "See Our Work", href: "#work" },
            ]}
            buttonAnimation="slide-up"
            useInvertedBackground={false}
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