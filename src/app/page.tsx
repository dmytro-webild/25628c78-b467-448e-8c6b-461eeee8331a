"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TeamCardFive from "@/components/sections/team/TeamCardFive";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import TestimonialCardFifteen from "@/components/sections/testimonial/TestimonialCardFifteen";
import { Bot, BrainCircuit, Workflow, Zap, Search, ArrowUpRight, Monitor, Shield, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users } from "lucide-react";

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
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
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
        <HeroSplitDoubleCarousel
          title="Scale Smarter with Intelligent AI Agents"
          description="We engineer autonomous AI systems and high-impact automations that streamline your operations and drive predictable revenue growth."
          tag="AI-First Digital Systems"
          tagIcon={BrainCircuit}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Schedule Strategy", href: "#contact" },
            { text: "Our AI Agents", href: "#services" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-1.webp", imageAlt: "AI Workflow Design" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-4.webp", imageAlt: "Autonomous Agent Systems" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-6.webp", imageAlt: "Predictive Analytics Dashboard" },
          ]}
          rightCarouselItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-3.webp", imageAlt: "Scalable AI Automation" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-8.webp", imageAlt: "Operational Efficiency" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="AI-Powered Solutions"
          description="Transform your business infrastructure with our bespoke AI development services."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "Explore All Services", href: "#services" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "Autonomous Agents",              description: "Deploy intelligent agents that handle complex customer interactions and lead qualification 24/7.",              bentoComponent: "marquee",              centerIcon: Bot,
              variant: "text",              texts: ["Customer Support", "Lead Nurturing", "Appointment Setting", "Task Automation", "Data Synthesis", "Personalization"],
            },
            {
              title: "Business Automations",              description: "Remove operational friction by integrating smart workflows across your entire tech stack.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-2.webp", imageAlt: "AI Workflow Automation" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-1.webp", imageAlt: "Systems Integration" },
              ],
            },
            {
              title: "Predictive Strategy",              description: "Leverage machine learning insights to optimize decision-making and project performance.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/dev-3.webp", imageAlt: "Data Strategy" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/shot-2.webp", imageAlt: "AI Performance" },
              ],
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Our Impact"
          description="See how our intelligent systems drive measurable business results."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "See Case Studies", href: "#work" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "SaaS Growth Agent",              description: "Increased demo bookings by 40% via automated outreach.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-1.webp",              imageAlt: "SaaS Growth Case Study",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Operational Workflow",              description: "Reduced manual data entry overhead by 60%.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-2.webp",              imageAlt: "Workflow Automation Case Study",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Customer Support AI",              description: "Automated 85% of tier-1 support tickets instantly.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/project-3.webp",              imageAlt: "Support AI Case Study",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
          ]}
        />
        <TestimonialCardFifteen
          testimonial="CONFLUXSYSTEMS integrated AI into our daily workflow effortlessly. Our productivity has doubled and our lead response time is now instantaneous."
          rating={5}
          author="— Alex Chen, Founder at TechFlow Dynamics"
          avatars={[
            { src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/templates/web-agency-2/team-1.webp", alt: "Client" },
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
        <MetricCardOne
          title="Efficiency At Scale"
          description="Driving performance through intelligent automation and machine learning."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "automation", value: "500+", title: "Automations", description: "Deployed and optimized smart workflows", icon: Workflow },
            { id: "agents", value: "40%", title: "Average Gain", description: "Average efficiency boost for our clients", icon: Zap },
            { id: "years", value: "10+", title: "Integrations", description: "Seamless connections to your core business tools", icon: Puzzle },
          ]}
        />
        <FaqBase
          title="Frequently Asked Questions"
          description="Find out how our AI systems work and how we can support your business."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "Can your AI agents integrate with my current tools?", content: "Yes, we specialize in custom integrations with leading CRM, marketing, and communication platforms like Salesforce, Hubspot, and Slack." },
            { id: "2", title: "Is my data secure?", content: "Security is at our core. We deploy private AI environments and follow strict data privacy protocols to keep your information secure." },
            { id: "3", title: "How fast can we see results?", content: "We focus on high-impact wins first. Many of our automation implementations show measurable ROI within the first 30 days of deployment." },
          ]}
        />
        <ContactCTA
          tag="Accelerate Your Business"
          title="Ready to Build Your AI Future?"
          description="Book a discovery call today and see how our autonomous agents can transform your operations."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Schedule Strategy Call", href: "#contact" },
            { text: "See Our Capabilities", href: "#services" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="CONFLUXSYSTEMS"
          copyrightText="© 2026 | CONFLUXSYSTEMS"
          columns={[
            {
              title: "Company",              items: [
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Work", href: "#work" },
                { label: "Contact", href: "#contact" },
              ],
            },
            {
              title: "Solutions",              items: [
                { label: "AI Agents", href: "#" },
                { label: "Automations", href: "#" },
                { label: "Data Strategy", href: "#" },
                { label: "Integrations", href: "#" },
              ],
            },
            {
              title: "Resources",              items: [
                { label: "Twitter", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Blog", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
