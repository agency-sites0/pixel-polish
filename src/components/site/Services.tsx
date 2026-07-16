import { Globe, Rocket, Bot, Workflow, ArrowUpRight, Check } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description:
      "Bespoke marketing sites engineered for speed, story, and conversion — never a template.",
    features: ["Design system + CMS", "Motion & interaction", "Core Web Vitals ≥ 95"],
    tag: "01",
  },
  {
    icon: Rocket,
    title: "High-Converting Landing Pages",
    description:
      "Sharp, single-purpose pages built from research — copy, layout and offer tuned to convert.",
    features: ["Conversion audit", "A/B ready variants", "Analytics wiring"],
    tag: "02",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "On-brand agents that qualify leads, book calls and answer questions across web & WhatsApp.",
    features: ["Custom knowledge base", "Lead capture + CRM", "Human handoff"],
    tag: "03",
  },
  {
    icon: Workflow,
    title: "Website + AI Automation",
    description:
      "Deep integrations that connect your site to n8n, Zapier and internal tools — end-to-end.",
    features: ["Workflow design", "CRM & inbox sync", "Reporting dashboards"],
    tag: "04",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Services"
          title="Four disciplines. One studio."
          description="Every engagement blends strategy, design and engineering — delivered by a small senior team, not a hand-off chain."
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
                <p className="mt-3 text-[15px] text-muted-foreground">{s.description}</p>
                <ul className="mt-6 grid gap-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="size-3.5 text-[var(--color-accent-blue)]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
                >
                  Discuss a project
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