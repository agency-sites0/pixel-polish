import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, Star } from "lucide-react";

const logos = ["Northwind", "Lumen", "Halcyon", "Fieldnote", "Vantage", "Meridian"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* soft gradient orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] size-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,var(--color-accent-blue)/0.18,transparent)] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 size-[520px] rounded-full bg-[radial-gradient(closest-side,oklch(0.78_0.14_190/0.18),transparent)] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 6%, transparent) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-border/70 bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <Sparkles className="size-3.5 text-[var(--color-accent-blue)]" />
          Accepting 3 new engagements this quarter
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-balance text-center text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-[88px]"
        >
          Growth, engineered.
          <br className="hidden sm:block" />
          <em className="font-serif italic text-muted-foreground">Not just designed.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-xl text-balance text-center text-base text-muted-foreground sm:text-lg"
        >
          We help ambitious businesses turn websites, landing pages and AI assistants into
          predictable pipelines of qualified customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
          >
            Book a strategy call
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-accent"
          >
            View case studies
          </a>
        </motion.div>

        {/* trust row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-3.5 fill-[var(--color-accent-blue)] text-[var(--color-accent-blue)]"
                />
              ))}
            </div>
            <span>4.9/5 average client rating · 60+ businesses served</span>
          </div>
          <div className="relative w-full overflow-hidden">
            <div
              className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70"
              aria-label="Selected clients"
            >
              {logos.map((n) => (
                <span
                  key={n}
                  className="font-display text-lg font-semibold tracking-tight text-muted-foreground/80"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          <div className="absolute -inset-x-6 -inset-y-4 -z-10 rounded-[36px] bg-gradient-to-b from-[var(--color-accent-blue)]/20 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
            <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-2.5">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-red-400/70" />
                <span className="size-2.5 rounded-full bg-yellow-400/70" />
                <span className="size-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="ml-3 rounded-md bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground">
                nordwell.studio/case-studies/halcyon
              </div>
            </div>
            <div className="grid gap-0 md:grid-cols-[1.2fr_1fr]">
              <div className="p-8 sm:p-10">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Case study · Halcyon · Fintech
                </div>
                <div className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  From flat funnel to 3× qualified pipeline in 90 days.
                </div>
                <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                  {[
                    { k: "+214%", v: "Qualified leads" },
                    { k: "-38%", v: "Cost per demo" },
                    { k: "6 wks", v: "To launch" },
                  ].map((s) => (
                    <div key={s.v}>
                      <div className="font-display text-xl font-semibold">{s.k}</div>
                      <div className="text-xs text-muted-foreground">{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[240px] bg-gradient-to-br from-[oklch(0.94_0.03_260)] via-[oklch(0.96_0.02_220)] to-[oklch(0.9_0.05_265)] p-6">
                <div className="absolute right-4 top-4 rounded-full border border-border bg-background/70 px-2 py-1 text-[10px] font-medium text-muted-foreground backdrop-blur">
                  Live preview
                </div>
                <div className="mt-8 grid gap-3">
                  <div className="h-2.5 w-24 rounded-full bg-foreground/80" />
                  <div className="h-6 w-44 rounded-md bg-foreground/90" />
                  <div className="h-2 w-56 rounded-full bg-foreground/20" />
                  <div className="h-2 w-40 rounded-full bg-foreground/20" />
                  <div className="mt-2 flex gap-2">
                    <div className="h-8 w-24 rounded-full bg-foreground text-background" />
                    <div className="h-8 w-20 rounded-full border border-foreground/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
