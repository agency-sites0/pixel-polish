import { Reveal } from "./Reveal";

const reasons = [
  {
    n: "01",
    t: "Senior on every call.",
    b: "The partners who quoted the work are the ones designing, building and shipping it. No account managers, no junior hand-offs.",
  },
  {
    n: "02",
    t: "Business KPIs before pixels.",
    b: "We agree the number that matters before the first sketch. Every decision after — copy, layout, motion — ladders back to it.",
  },
  {
    n: "03",
    t: "One partner. Whole stack.",
    b: "Strategy, design, engineering, AI and automation live under one roof. Fewer meetings, tighter craft, faster launches.",
  },
  {
    n: "04",
    t: "The relationship starts at launch.",
    b: "Most agencies disappear the day you go live. Our care plans keep improving conversion, SEO and AI long after week one.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                Why clients choose us
              </span>
              <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[56px]">
                A studio built for owners who take the numbers personally.
              </h2>
              <p className="mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
                Most agencies are optimised for hours billed. We're optimised for the metrics you
                present at your next board meeting.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8">
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Avg. lead lift
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-semibold tracking-tight">3.4×</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                    Client retention
                  </dt>
                  <dd className="mt-2 font-display text-3xl font-semibold tracking-tight">92%</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <div>
            <ol className="divide-y divide-border border-y border-border">
              {reasons.map((r, i) => (
                <Reveal key={r.n} i={i}>
                  <li className="grid grid-cols-[auto_1fr] gap-8 py-8 sm:py-10">
                    <div className="font-display text-xs font-medium tracking-widest text-muted-foreground">
                      — {r.n}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                        {r.t}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
                        {r.b}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
