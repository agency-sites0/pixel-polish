import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { ChatbotDemo } from "@/components/site/ChatbotDemo";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Tech } from "@/components/site/Tech";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Results } from "@/components/site/Results";
import { Industries } from "@/components/site/Industries";
import { Comparison } from "@/components/site/Comparison";
import { Insights } from "@/components/site/Insights";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/")({
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
        <Industries />
        <WhyUs />
        <Process />
        <Projects />
        <ChatbotDemo />
        <Comparison />
        <About />
        <Pricing />
        <Testimonials />
        <Tech />
        <Insights />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="light" />
    </div>
  );
}
