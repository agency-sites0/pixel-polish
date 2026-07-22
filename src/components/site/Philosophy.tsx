import { Reveal, SectionHeader } from "./Reveal";

const principles = [
  {
    n: "01",
    t: "The business, not the design.",
    b: "We start with your numbers, your buyer, and the one metric that would change the business. Design comes after clarity.",
  },
  {
    n: "02",
    t: "Senior, small, accountable.",
    b: "No juniors learning on your budget. Every engagement is led by the same partners who quoted it — from kickoff to launch.",
  },
  {
    n: "03",
    t: "Fewer, sharper decisions.",
    b: "We remove more than we add. Restraint compounds — in the design, in the code, and in the results.",
  },
  {
    n: "04",
    t: "Own everything you buy.",
    b: "Your code, your content, your analytics. No proprietary lock-in, no dependency on us to keep the site alive.",
  },
];

export function Philosophy() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Our philosophy"
          title="We're strategy-first. Design-second."
          description="Beautiful sites that don't convert are just expensive art. Everything we do is anchored to a business outcome you can measure."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.n} i={i} className="bg-card">
              <div className="h-full p-8 sm:p-10">
                <div className="font-display text-xs font-medium tracking-widest text-muted-foreground">
                  — {p.n}
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {p.t}
                </h3>
                <p className="mt-4 max-w-md text-sm text-muted-foreground">{p.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
