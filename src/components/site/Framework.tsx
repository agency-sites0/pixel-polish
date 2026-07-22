import { Reveal, SectionHeader } from "./Reveal";
import { Compass, Target, PenTool, Code2, LineChart, Sparkles } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Compass,
    t: "Discover",
    b: "Deep audit of your business, buyers, competitors and current funnel. We surface the one metric that matters.",
  },
  {
    n: "02",
    icon: Target,
    t: "Strategy",
    b: "Positioning, messaging and the page-by-page plan. Every section gets a job before design starts.",
  },
  {
    n: "03",
    icon: PenTool,
    t: "Design",
    b: "Editorial visual system, component library, prototypes tested with real buyers.",
  },
  {
    n: "04",
    icon: Code2,
    t: "Develop",
    b: "Modern stack, production-grade code, real Core Web Vitals, analytics from day one.",
  },
  {
    n: "05",
    icon: LineChart,
    t: "Optimise",
    b: "Post-launch experiments, A/B tests and CRO — the site keeps getting sharper.",
  },
  {
    n: "06",
    icon: Sparkles,
    t: "Grow",
    b: "Ongoing support: SEO, content, new campaigns, AI automations layered in over time.",
  },
];

export function Framework() {
  return (
    <section id="process" className="relative border-y border-border bg-muted/30 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Our framework"
          title="Discover → Strategy → Design → Develop → Optimise → Grow."
          description="A six-step operating system for engagements. Predictable weekly cadence, unpredictable ideas, measurable results."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} i={i} className="bg-card">
              <div className="group flex h-full flex-col p-8 transition-colors hover:bg-accent/40">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-background">
                    <s.icon className="size-5" />
                  </div>
                  <span className="font-display text-xs font-medium text-muted-foreground">
                    — {s.n}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
