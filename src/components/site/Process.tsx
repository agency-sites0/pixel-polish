import { Reveal, SectionHeader } from "./Reveal";

const steps = [
  { n: "01", t: "Discovery", d: "Kickoff, stakeholder interviews and audit of what's working today." },
  { n: "02", t: "Strategy", d: "Positioning, information architecture and measurable success criteria." },
  { n: "03", t: "Design", d: "Bespoke visual language and prototypes reviewed weekly." },
  { n: "04", t: "Development", d: "Production-grade build with a design system, CMS and analytics." },
  { n: "05", t: "Testing", d: "QA, accessibility passes and performance tuning to Lighthouse 95+." },
  { n: "06", t: "Launch", d: "Zero-downtime release, monitoring and a launch playbook." },
  { n: "07", t: "Support", d: "Care plan with monthly improvements, experiments and reporting." },
];

export function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Process"
          title="Seven steps. No surprises."
          description="A predictable rhythm that gives you clarity every week — from first call to long after launch."
        />
        <div className="mt-16 relative">
          <div aria-hidden className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent sm:left-1/2" />
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
                    <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight">{s.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
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