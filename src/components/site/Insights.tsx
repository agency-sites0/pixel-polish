import { ArrowUpRight, Clock } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const posts = [
  {
    tag: "Growth",
    read: "6 min",
    date: "Jun 2026",
    title: "The 12-second landing page.",
    excerpt:
      "Why most paid pages lose the visitor before the fold — and the questions to answer instead.",
    tone: "from-[oklch(0.94_0.03_260)] to-[oklch(0.86_0.06_240)]",
  },
  {
    tag: "AI",
    read: "8 min",
    date: "May 2026",
    title: "AI assistants that pay for themselves.",
    excerpt: "How to design a business case for an AI concierge before you write a single prompt.",
    tone: "from-[oklch(0.93_0.03_60)] to-[oklch(0.84_0.09_45)]",
  },
  {
    tag: "Craft",
    read: "5 min",
    date: "Apr 2026",
    title: "The quiet math of premium sites.",
    excerpt:
      "Why boutique websites keep compounding in value years after the last CMS agency has moved on.",
    tone: "from-[oklch(0.93_0.04_200)] to-[oklch(0.82_0.08_215)]",
  },
];

export function Insights() {
  return (
    <section id="insights" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            align="left"
            eyebrow="Journal"
            title="Notes from the studio."
            description="Practical writing on growth, AI and craft — no fluff, no listicles."
          />
          <a
            href="#"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            All essays
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} i={i}>
              <a
                href="#"
                className="group block h-full overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-foreground/20"
              >
                <div className={`relative min-h-[180px] bg-gradient-to-br ${p.tone}`}>
                  <div className="absolute left-5 top-5 rounded-full border border-background/50 bg-background/80 px-2.5 py-1 text-[10px] font-medium backdrop-blur">
                    {p.tag}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                    <span>{p.date}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" /> {p.read}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-medium">
                    Read essay
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
