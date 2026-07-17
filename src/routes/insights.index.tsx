import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { CTA } from "@/components/site/CTA";
import { insights } from "@/lib/insights";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights — Journal · Nordwell" },
      { name: "description", content: "Field notes on websites that convert, AI automation that pays back, and the studio craft behind it." },
      { property: "og:title", content: "Insights · Nordwell" },
      { property: "og:description", content: "Field notes on websites, landing pages and AI automation for growing businesses." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elevated-experience-co.lovable.app/insights" },
    ],
    links: [{ rel: "canonical", href: "https://elevated-experience-co.lovable.app/insights" }],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  const [feat, ...rest] = insights;
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader align="left" eyebrow="Journal" title="Field notes from the studio." description="Strategy, design and AI — written by the people doing the work." />
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Link
              to="/insights/$slug"
              params={{ slug: feat.slug }}
              className="group grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2"
            >
              <div className={`aspect-[16/10] w-full bg-gradient-to-br ${feat.tone} lg:aspect-auto`} />
              <div className="p-8 sm:p-10">
                <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  Featured · {feat.category} · {feat.readingTime}
                </div>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{feat.title}</h2>
                <p className="mt-4 text-muted-foreground">{feat.excerpt}</p>
                <div className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium">
                  Read the article
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} i={i}>
                <Link
                  to="/insights/$slug"
                  params={{ slug: a.slug }}
                  className="group block h-full overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-foreground/20"
                >
                  <div className={`aspect-[16/10] w-full bg-gradient-to-br ${a.tone}`} />
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{a.category} · {a.readingTime}</div>
                    <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight">{a.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{a.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}