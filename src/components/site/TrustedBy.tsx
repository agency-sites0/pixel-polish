import { Reveal } from "./Reveal";

const logos = [
  "Halcyon",
  "Meridian",
  "Fieldnote",
  "Vantage",
  "Lumen",
  "Northwind",
  "Cadence",
  "Atrium",
];

export function TrustedBy() {
  return (
    <section
      aria-label="Selected clients"
      className="relative border-y border-border/70 bg-background"
    >
      <div className="mx-auto max-w-6xl px-5 py-10 sm:py-12">
        <Reveal>
          <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
            <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Trusted by founders &<br className="hidden md:block" /> operators at
            </div>
            <div className="flex flex-wrap items-center justify-start gap-x-10 gap-y-4 md:justify-end">
              {logos.map((n) => (
                <span
                  key={n}
                  className="font-display text-lg font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
