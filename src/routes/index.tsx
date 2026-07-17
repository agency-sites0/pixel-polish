import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Philosophy } from "@/components/site/Philosophy";
import { Framework } from "@/components/site/Framework";
import { AfterLaunch } from "@/components/site/AfterLaunch";
import { Projects } from "@/components/site/Projects";
import { ChatbotDemo } from "@/components/site/ChatbotDemo";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Tech } from "@/components/site/Tech";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Results } from "@/components/site/Results";
import { Industries } from "@/components/site/Industries";
import { Comparison } from "@/components/site/Comparison";
import { Insights } from "@/components/site/Insights";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nordwell — Websites, Landing Pages & AI Automation for growing businesses" },
      { name: "description", content: "A boutique studio helping ambitious businesses turn traffic into revenue with conversion websites, high-performing landing pages and on-brand AI automation." },
      { property: "og:title", content: "Nordwell — Websites, Landing Pages & AI Automation" },
      { property: "og:description", content: "Boutique studio for websites, landing pages and AI automation that turn traffic into revenue." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elevated-experience-co.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://elevated-experience-co.lovable.app/" }],
  }),
  component: Index,
});

function Index() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nordwell Studio",
    url: "https://nordwell.studio",
    description:
      "Boutique digital studio designing custom websites, landing pages and AI automation.",
    sameAs: ["https://twitter.com/nordwell", "https://www.linkedin.com/company/nordwell"],
  };

  return (
    <div className="relative min-h-screen scroll-smooth bg-background text-foreground antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Results />
        <Services />
        <Philosophy />
        <Industries />
        <WhyUs />
        <Framework />
        <Projects />
        <ChatbotDemo />
        <Comparison />
        <About />
        <AfterLaunch />
        <Pricing />
        <Testimonials />
        <Tech />
        <Insights />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster position="bottom-right" theme="light" />
    </div>
  );
}
