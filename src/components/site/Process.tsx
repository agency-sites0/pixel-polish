import { Reveal, SectionHeader } from "./Reveal";

const steps = [
  {
    n: "01",
    t: "Discovery",
    d: "We listen before we design. Interviews with your team, customers and data reveal where the real growth is hiding.",
    why: "So every decision after this is backed by evidence, not opinion.",
  },
  {
    n: "02",
    t: "Business Strategy",
    d: "Positioning, messaging and a measurable goal for each page. We agree on the numbers we're moving before a pixel is drawn.",
    why: "So the project has a business case, not just a launch date.",
  },
  {
    n: "03",
    t: "Experience Design",
    d: "Wireframes, then a distinctive visual language shaped around the customer journey — reviewed together weekly.",
    why: "So visitors instantly understand what you do and why it matters.",
  },
  {
    n: "04",
    t: "Development",
    d: "Production-grade build with a design system, CMS and analytics wired in from day one.",
    why: "So your team can move fast after launch without waiting on us.",
  },
  {
    n: "05",
    t: "Optimization",
    d: "Performance, SEO and accessibility tuned to industry-leading benchmarks. AI assistants trained on your real content.",
    why: "So the site earns trust with humans, search engines and buyers.",
  },
  {
    n: "06",
    t: "Launch",
    d: "Zero-downtime release, redirects, monitoring and a launch playbook for your team and stakeholders.",
    why: "So going live feels like a milestone, not a fire drill.",
  },
  {
    n: "07",
    t: "Growth",
    d: "Ongoing experiments, content and automation improvements against the metrics we agreed at the start.",
    why: "So the site compounds in value long after the project ends.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Process"
          title="A business journey. Not a hand-off."
          description="Seven steps that connect strategy to revenue — each one designed to answer the question your board will ask."
        />
        <div className="mt-16 relative">
          <div
            aria-hidden
            className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent sm:left-1/2"
          />
          <ol className="grid gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} i={i}>
                <li
                  className={`relative grid gap-4 pl-16 sm:grid-cols-2 sm:pl-0 ${
                    i % 2 === 0 ? "" : "sm:[&>*:first-child]:col-start-2"
                  }`}
                >
                  <div
                    className={`relative rounded-3xl border border-border bg-card p-6 sm:p-7 ${
                      i % 2 === 0 ? "sm:mr-8 sm:text-right" : "sm:ml-8"
                    }`}
                  >
                    <div className="font-display text-xs font-medium tracking-widest text-[var(--color-accent-blue)]">
                      STEP {s.n}
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">
                      {s.t}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                    <p className="mt-3 border-t border-border pt-3 text-xs italic text-foreground/70">
                      {s.why}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="absolute left-6 top-6 grid size-3 -translate-x-1/2 place-items-center sm:left-1/2"
                  >
                    <span className="absolute size-3 rounded-full bg-[var(--color-accent-blue)]/20" />
                    <span className="size-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
