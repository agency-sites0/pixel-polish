import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionHeader } from "./Reveal";
import { cn } from "@/lib/utils";
import { caseStudies } from "@/lib/case-studies";

const filters = ["All", "Website", "Landing Page", "AI Assistant", "Branding"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = caseStudies.filter((p) => active === "All" || p.category === active);
  const featured = caseStudies[0];

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Case studies"
          title="Businesses we helped grow."
          description="Every project below has a business result we can defend — not a screenshot in a portfolio."
        />

        {/* Featured case study */}
        <Reveal>
          <div className="mt-16 overflow-hidden rounded-[32px] border border-border bg-card">
            <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
              <div className="p-8 sm:p-12">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Featured · {featured.industry}
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {featured.headline}
                </h3>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Challenge
                    </div>
                    <p className="mt-2 text-sm">{featured.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Business outcome
                    </div>
                    <p className="mt-2 text-sm">{featured.outcome}</p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {featured.results.slice(0, 3).map((r) => (
                    <div key={r.v}>
                      <div className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                        {r.k}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{r.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {featured.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: featured.slug }}
                  className="group mt-10 inline-flex items-center gap-1.5 text-sm font-medium"
                >
                  Read the full case study
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className={cn("relative min-h-[320px] bg-gradient-to-br", featured.tone)}>
                <div className="absolute inset-6 rounded-2xl bg-background/70 p-6 shadow-2xl backdrop-blur">
                  <div className="h-2 w-20 rounded-full bg-foreground/70" />
                  <div className="mt-3 h-5 w-40 rounded-md bg-foreground/90" />
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-xl bg-foreground/10" />
                    <div className="h-20 rounded-xl bg-foreground/20" />
                    <div className="col-span-2 h-14 rounded-xl bg-foreground/15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Filter + grid */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">More work</h3>
          <div className="flex flex-wrap gap-1 rounded-full border border-border bg-background/70 p-1 backdrop-blur">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                  active === f ? "text-background" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.div
              layout
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card",
                i === 0 || i === 3 ? "lg:row-span-2" : "",
              )}
            >
              <Link
                to="/case-studies/$slug"
                params={{ slug: p.slug }}
                className="flex h-full flex-col"
              >
                <div
                  className={cn(
                    "relative flex-1 overflow-hidden bg-gradient-to-br",
                    p.tone,
                    i === 0 || i === 3 ? "min-h-[320px]" : "min-h-[220px]",
                  )}
                >
                  <div className="absolute right-4 top-4 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-medium backdrop-blur">
                    {p.category}
                  </div>
                  <div className="absolute inset-x-6 bottom-6 transition-transform duration-700 group-hover:-translate-y-1">
                    <div className="h-1.5 w-16 rounded-full bg-foreground/70" />
                    <div className="mt-2 h-6 w-3/5 rounded-md bg-foreground/85" />
                    <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-medium text-foreground shadow-sm">
                      {p.results[0].k} · {p.results[0].v}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        {p.industry}
                      </div>
                      <div className="mt-1 text-[17px] font-semibold leading-tight">{p.name}</div>
                    </div>
                    <ArrowUpRight className="mt-1 size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <p className="text-sm text-muted-foreground">{p.summary}</p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-foreground">
                    View case study
                    <ArrowUpRight className="size-3" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}