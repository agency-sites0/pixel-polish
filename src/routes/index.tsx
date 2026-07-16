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
        <Services />
        <WhyUs />
        <Process />
        <Projects />
        <ChatbotDemo />
        <Pricing />
        <Testimonials />
        <Tech />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" theme="light" />
    </div>
  );
}
