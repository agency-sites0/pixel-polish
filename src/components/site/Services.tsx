import { Globe, Rocket, Bot, Workflow, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    problem: "Your site looks the part but doesn't move the numbers.",
    solution:
      "A bespoke site built around one goal: turning the right visitors into revenue — clear story, considered design, engineering that lasts.",
    outcome: "More qualified leads, higher average deal size, a brand your team is proud to send.",
    tag: "01",
  },
  {
    icon: Rocket,
    title: "High-Converting Landing Pages",
    problem: "You're paying for traffic that bounces before it reads the offer.",
    solution:
      "A single, sharp page — researched, written and designed around one decision — with instrumentation to prove what works.",
    outcome: "Lower cost per lead, higher sign-up rate, a compounding advantage on paid.",
    tag: "02",
  },
  {
    icon: Bot,
    title: "AI Assistants",
    problem: "Inquiries pile up after hours and your best leads go cold.",
    solution:
      "An on-brand AI assistant trained on your business, wired into your calendar and CRM, with graceful human handoff.",
    outcome: "Meetings booked while you sleep, faster response times, more revenue captured.",
    tag: "03",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    problem: "Your team is stuck in manual work that software should be doing.",
    solution:
      "Custom workflows that connect your site, inbox, CRM and internal tools — so leads, quotes and follow-ups happen automatically.",
    outcome: "Fewer hours in operations, faster sales cycles, a business that scales without hiring.",
    tag: "04",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Services"
          title="What we build. Why it matters."
          description="Four services, one focus: measurable business outcomes. Every engagement is led by a senior team — no hand-offs, no juniors learning on your budget."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} i={i}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[var(--color-accent-blue)]/12 blur-3xl" />
                </div>
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-background">
                    <s.icon className="size-5" />
                  </div>
                  <span className="font-display text-xs font-medium text-muted-foreground">
                    — {s.tag}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {s.title}
                </h3>
                <dl className="mt-6 grid gap-4 text-sm">
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Problem</dt>
                    <dd className="mt-1.5 text-foreground/80">{s.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Solution</dt>
                    <dd className="mt-1.5 text-foreground/80">{s.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-accent-blue)]">Outcome</dt>
                    <dd className="mt-1.5 font-medium text-foreground">{s.outcome}</dd>
                  </div>
                </dl>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                >
                  Discuss this for your business
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}