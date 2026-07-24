import { Reveal, SectionHeader } from "./Reveal";

const steps = [
  {
    n: "01",
    t: "Uncover",
    d: "We listen before we design. Interviews with your team, customers and data reveal where the real growth bottleneck lives.",
    why: "So every design decision is backed by evidence, not opinion.",
  },
  {
    n: "02",
    t: "Position",
    d: "We define your unfair advantage and anchor every page to one measurable goal. We agree on the numbers before a pixel is drawn.",
    why: "So the site has a business case, not just a launch date.",
  },
  {
    n: "03",
    t: "Design the Journey",
    d: "Wireframes, then a distinctive visual language shaped around how your buyer actually decides. Weekly reviews with your team.",
    why: "So visitors instantly understand why you're different and why they should care.",
  },
  {
    n: "04",
    t: "Build for Growth",
    d: "Production-grade build with a design system, CMS, analytics and automation wired in from day one.",
    why: "So your team can move fast after launch without waiting on engineers.",
  },
  {
    n: "05",
    t: "Measure & Tune",
    d: "Performance, SEO and accessibility optimized to benchmarks. AI assistants trained on your real content and wired to your CRM.",
    why: "So the site earns trust with humans, search engines and buyers from day one.",
  },
  {
    n: "06",
    t: "Activate",
    d: "Zero-downtime release, redirects set up, monitoring live, and a launch playbook for your team.",
    why: "So going live feels like a milestone, not a fire drill.",
  },
  {
    n: "07",
    t: "Compound",
    d: "Monthly optimization cycles, A/B tests and content improvements anchored to the metrics that matter most.",
    why: "So the site compounds in value long after the project ends — and keeps generating ROI.",
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
