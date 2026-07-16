import { ArrowUpRight, Calendar } from "lucide-react";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-border bg-foreground text-background">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, color-mix(in oklab, var(--color-accent-blue) 60%, transparent) 0%, transparent 45%), radial-gradient(circle at 80% 80%, color-mix(in oklab, var(--color-accent-blue) 30%, transparent) 0%, transparent 40%)",
              }}
            />
            <div className="relative grid gap-10 p-10 sm:p-16 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-background/80 backdrop-blur">
                  <span className="size-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                  Accepting 3 engagements this quarter
                </div>
                <h2 className="mt-5 max-w-2xl text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[56px]">
                  Your next chapter of growth starts with a 30-minute call.
                </h2>
                <p className="mt-5 max-w-xl text-base text-background/70 sm:text-lg">
                  We'll share what's working for businesses like yours, and the one move most likely
                  to move your numbers. No pitch, no follow-up dance.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-between gap-4 rounded-2xl bg-background px-6 py-5 text-foreground transition-transform hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl border border-border bg-muted">
                      <Calendar className="size-4" />
                    </span>
                    <div className="text-left">
                      <div className="text-sm font-semibold">Book a strategy call</div>
                      <div className="text-xs text-muted-foreground">30 min · same-week slots</div>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:hello@nordwell.studio"
                  className="group inline-flex items-center justify-between gap-4 rounded-2xl border border-background/20 bg-background/5 px-6 py-5 text-background transition-colors hover:bg-background/10"
                >
                  <div className="text-left">
                    <div className="text-sm font-semibold">Prefer email?</div>
                    <div className="text-xs text-background/60">hello@nordwell.studio</div>
                  </div>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}