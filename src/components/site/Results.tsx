import { Reveal, SectionHeader } from "./Reveal";

const metrics = [
  { k: "3.4×", v: "Avg. increase in qualified leads", note: "across B2B SaaS engagements in first 90 days" },
  { k: "38%", v: "Reduction in cost-per-lead", note: "on paid campaigns post-launch" },
  { k: "15.2mo", v: "Average client retention", note: "most expand to ongoing support" },
  { k: "97", v: "Median Lighthouse score", note: "real devices, first-time visitors" },
  { k: "62%", v: "Of inbound captured after-hours", note: "via AI concierge with human handoff" },
  { k: "99.2%", v: "Site uptime across all clients", note: "zero unplanned downtime in 18 months" },
];

export function Results() {
  return (
    <section id="results" className="relative border-y border-border bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Business results"
          title="Numbers, not adjectives."
          description="A snapshot of what our engagements have delivered over the last twelve months."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal key={m.v} i={i} className="bg-card">
              <div className="flex h-full flex-col justify-between gap-6 p-8">
                <div className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                  {m.k}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{m.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.note}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
