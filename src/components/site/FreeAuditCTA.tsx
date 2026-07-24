import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Play, Check } from "lucide-react";
import { Reveal } from "./Reveal";

const included = [
  "Conversion audit of your homepage and top landing page",
  "UX walkthrough recorded on video (10–15 min)",
  "Three prioritised SEO and Core Web Vitals fixes",
  "One AI or automation idea sized for your business",
];

export function FreeAuditCTA() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                <span className="size-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                Free · No pitch
              </span>
              <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[56px]">
                A personalised video audit of your website.
              </h2>
              <p className="mt-5 max-w-lg text-base text-muted-foreground sm:text-lg">
                Send us your URL. Within five business days we'll record a private walk-through
                covering the conversion, UX, SEO and AI opportunities most likely to move your
                numbers this quarter.
              </p>
              <ul className="mt-8 space-y-3">
                {included.map((line) => (
                  <li key={line} className="flex items-start gap-3 text-sm text-foreground/80">
                    <span className="mt-0.5 grid size-5 place-items-center rounded-full border border-border bg-background">
                      <Check className="size-3" />
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/free-audit"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  Request your free audit
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <span className="text-xs text-muted-foreground">
                  Reviewed by a partner · Delivered in 5 business days
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal i={1}>
            <figure className="relative">
              <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
                <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-2.5">
                  <div className="flex gap-1.5">
                    <span className="size-2.5 rounded-full bg-red-400/70" />
                    <span className="size-2.5 rounded-full bg-yellow-400/70" />
                    <span className="size-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <div className="ml-3 rounded-md bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground">
                    audit.ascent.studio · your-site.com
                  </div>
                </div>
                <div className="relative aspect-[16/10] bg-gradient-to-br from-[oklch(0.96_0.01_240)] via-background to-[oklch(0.94_0.02_220)]">
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid size-16 place-items-center rounded-full border border-border bg-background/90 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur">
                      <Play className="size-5 translate-x-[1px]" />
                    </div>
                  </div>
                  <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-border bg-background/85 p-4 backdrop-blur">
                    <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      <span>Audit · 12:04</span>
                      <span>Halcyon · Fintech</span>
                    </div>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                      <div className="h-full w-2/3 rounded-full bg-foreground" />
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                      {[
                        { k: "6", v: "Wins" },
                        { k: "9", v: "Fixes" },
                        { k: "3", v: "AI ideas" },
                      ].map((s) => (
                        <div key={s.v}>
                          <div className="font-display text-lg font-semibold tracking-tight">
                            {s.k}
                          </div>
                          <div className="text-[10px] text-muted-foreground">{s.v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <figcaption className="sr-only">Example free website audit video preview</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
