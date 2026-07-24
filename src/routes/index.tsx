import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Results } from "@/components/site/Results";
import { Services } from "@/components/site/Services";
import { Philosophy } from "@/components/site/Philosophy";
import { WhyUs } from "@/components/site/WhyUs";
import { Framework } from "@/components/site/Framework";
import { Projects } from "@/components/site/Projects";
import { ChatbotDemo } from "@/components/site/ChatbotDemo";
import { Industries } from "@/components/site/Industries";
import { AfterLaunch } from "@/components/site/AfterLaunch";
import { Testimonials } from "@/components/site/Testimonials";
import { Insights } from "@/components/site/Insights";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ascent — Websites, Landing Pages & AI Automation for growing businesses" },
      {
        name: "description",
        content:
          "A boutique studio helping ambitious businesses turn traffic into revenue with conversion websites, high-performing landing pages and on-brand AI automation.",
      },
      { property: "og:title", content: "Ascent — Websites, Landing Pages & AI Automation" },
      {
        property: "og:description",
        content:
          "Boutique studio for websites, landing pages and AI automation that turn traffic into revenue.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Index,
});

function Index() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ascent Studio",
    url: "https://ascent.studio",
    description:
      "Boutique digital studio designing custom websites, landing pages and AI automation.",
    sameAs: ["https://twitter.com/ascent", "https://www.linkedin.com/company/ascent"],
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
        <WhyUs />
        <Framework />
  
        <ChatbotDemo />
        <Industries />
        <AfterLaunch />
        <Testimonials />
        <Insights />
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster position="bottom-right" theme="light" />
    </div>
  );
}
