import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeader } from "./Reveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Landing pages ship in 2–3 weeks, full websites in 4–6 weeks, and larger platforms in 8–12 weeks. We work in weekly milestones so you always know where things stand.",
  },
  {
    q: "Do you work with existing brands or start from scratch?",
    a: "Both. Most engagements build on an existing brand and extend it into a design system. When needed, we run a lightweight brand sprint at the start.",
  },
  {
    q: "What does an AI chatbot actually cost to run?",
    a: "Most implementations run on $30–$200/month in model + infra costs depending on volume. We optimize prompts and caching to keep it lean.",
  },
  {
    q: "Can you work with our developers or CMS?",
    a: "Yes. We regularly hand off to in-house teams and support Sanity, Contentful, Shopify, Webflow and Supabase — plus custom stacks.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Our care plans start at $1,500/month and include experiments, content updates, monitoring and a dedicated Slack channel.",
  },
  {
    q: "How do we get started?",
    a: "Book a 20-minute discovery call. We'll scope the work, share pricing within 48 hours, and can typically start within 1–2 weeks.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeader eyebrow="FAQ" title="Answers, up front." />

        <Reveal>
          <Accordion type="single" collapsible className="mt-14 w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold tracking-tight hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
