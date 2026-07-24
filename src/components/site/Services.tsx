import { Globe, Rocket, Bot, Workflow, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    problem: "Your site tells your story, but doesn't answer the one question buyers ask: why you over your competitors?",
    solution:
      "A conversion-first website built around your buyer's journey — clear positioning, proof-rich messaging, and measurement baked in from day one.",
    outcome: "Higher qualified lead volume, lower demo cancellations, competitive positioning that sticks.",
    tag: "01",
  },
  {
    icon: Rocket,
    title: "High-Converting Landing Pages",
    problem: "Your paid spend is growing, but cost-per-lead keeps climbing because landing pages don't answer what makes you different.",
    solution:
      "A single-purpose page — researched against your competitor set, written for one decision, tested with real buyer feedback before launch.",
    outcome: "Lower CAC, higher conversion rate, a compounding advantage that compounds with every campaign.",
    tag: "02",
  },
  {
    icon: Bot,
    title: "AI Lead Capture",
    problem: "High-intent buyers arrive after hours. Your team replies Monday. By then, they've bought from a competitor who responded in minutes.",
    solution:
      "An on-brand AI concierge trained on your product, live on your site, calendar-connected and CRM-integrated — with graceful human handoff.",
    outcome: "40–60% of after-hours inquiries converted while you sleep. Meetings booked automatically. Revenue captured you'd otherwise lose.",
    tag: "03",
  },
  {
    icon: Workflow,
    title: "Revenue Automation",
    problem: "Your sales team spends 10+ hours a week on manual CRM work, follow-ups, and quote generation that software should be doing.",
    solution:
      "Custom workflows connecting your website, email, CRM and internal tools — so inbound is routed, leads are qualified, and quotes are sent on autopilot.",
    outcome:
      "Sales team focuses on closing instead of admin. 15+ hours freed per week, per person. Revenue captured from leads that would otherwise slip.",
    tag: "04",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Services"
          title="What we build. Why it works."
          description="Four services, one focus: capture revenue faster. We specialize in B2B SaaS and service businesses where every hire, every feature, and every launch carries real economic weight."
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
                    <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      Problem
                    </dt>
                    <dd className="mt-1.5 text-foreground/80">{s.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      Solution
                    </dt>
                    <dd className="mt-1.5 text-foreground/80">{s.solution}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--color-accent-blue)]">
                      Outcome
                    </dt>
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
