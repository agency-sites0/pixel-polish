import { Reveal, SectionHeader } from "./Reveal";
import { Rocket, LineChart, Search, FlaskConical, Users, Wrench } from "lucide-react";

const items = [
  {
    icon: Rocket,
    t: "Launch support",
    b: "We stay hands-on for the first 30 days — smoothing anything the analytics surface.",
  },
  {
    icon: LineChart,
    t: "Analytics reviews",
    b: "Monthly reads on what's converting, what's dead weight and what to change next.",
  },
  {
    icon: Search,
    t: "SEO care plans",
    b: "Technical SEO, content briefs, internal linking — compounding traffic quarter over quarter.",
  },
  {
    icon: FlaskConical,
    t: "CRO experiments",
    b: "Structured A/B tests that lift conversion without needing a rebuild.",
  },
  {
    icon: Users,
    t: "AI assistant tuning",
    b: "Prompt refinement, new intents, monthly QA on every conversation your assistant handles.",
  },
  {
    icon: Wrench,
    t: "Ongoing engineering",
    b: "New sections, integrations, campaigns — shipped weekly by the same team who launched you.",
  },
];

export function AfterLaunch() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="After launch"
          title="The launch is day one. We stay for the growth."
          description="Most agencies disappear when the site goes live. We stay embedded — optimising, iterating and building on the momentum every month."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} i={i}>
              <div className="group h-full rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]">
                <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-background transition-transform group-hover:-rotate-6">
                  <it.icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
