import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionHeader } from "./Reveal";

const faqs = [
  {
    q: "Who leads my project?",
    a: "A senior strategist from day one. You'll have a dedicated dev lead and a weekly sync with the same people throughout — no hand-offs to juniors.",
  },
  {
    q: "How long does a typical project take?",
    a: "Landing pages ship in 3–4 weeks, full websites in 6–8 weeks, enterprise builds in 10–16 weeks. We work in weekly milestones so progress is visible.",
  },
  {
    q: "What happens if we disagree on direction?",
    a: "That's built into our process. Weekly reviews catch misalignment early. Major pivots are a change request conversation — we don't fight you on scope.",
  },
  {
    q: "Do you work with existing brands or start from scratch?",
    a: "Both. Most engagements build on an existing brand and extend it into a design system. When needed, we run a lightweight brand sprint at the start.",
  },
  {
    q: "Do you offer ongoing support after launch?",
    a: "Yes. Our care plans start at $1,500/month and include weekly experiments, content updates, monitoring, and a dedicated Slack channel.",
  },
  {
    q: "How do we get started?",
    a: "Book a 45-minute strategy session. We'll uncover your growth bottleneck, share how other teams solved it, and recommend the next step. No pitch.",
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
