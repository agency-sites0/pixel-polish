import { Reveal, SectionHeader } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Our studio"
              title="Craft with a business case."
              description="Ascent exists because most agencies treat websites like brochures, and most freelancers treat businesses like projects. We do neither."
            />
            <Reveal>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-foreground/80">
                <p>
                  We're a small, senior team of strategists, designers and engineers. Every
                  engagement is led by the people doing the work — no account managers, no
                  hand-offs, no juniors learning on your budget.
                </p>
                <p>
                  We pick a handful of clients each quarter and go deep. That means fewer, better
                  projects — with metrics we can defend and craft we can be proud of years from now.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border">
              {[
                { k: "2019", v: "Studio founded" },
                { k: "60+", v: "Businesses served" },
                { k: "12", v: "Countries shipped in" },
                { k: "9", v: "Senior operators" },
                { k: "4.9★", v: "Average client rating" },
                { k: "$120M+", v: "Client revenue attributed" },
              ].map((s) => (
                <div key={s.v} className="bg-card p-6 sm:p-8">
                  <div className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                    {s.k}
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
