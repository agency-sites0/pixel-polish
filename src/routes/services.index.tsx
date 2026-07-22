import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Globe, Rocket, Bot, Workflow } from "lucide-react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { Framework } from "@/components/site/Framework";
import { AfterLaunch } from "@/components/site/AfterLaunch";
import { CTA } from "@/components/site/CTA";
import { services } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

const icons = {
  websites: Globe,
  "landing-pages": Rocket,
  "ai-chatbots": Bot,
  automation: Workflow,
} as const;

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Websites, Landing Pages, AI · Nordwell" },
      {
        name: "description",
        content:
          "Four services, one focus: measurable business outcomes. Conversion websites, landing pages, AI assistants and business automation.",
      },
      { property: "og:title", content: "Services · Nordwell" },
      {
        property: "og:description",
        content:
          "Conversion websites, landing pages, AI assistants and automation for ambitious businesses.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/services` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/services` }],
  }),
  component: ServicesOverview,
});

function ServicesOverview() {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader
            align="left"
            eyebrow="Services"
            title="Four services. One focus: business outcomes."
            description="Every engagement is led by a senior team — no hand-offs, no juniors learning on your budget."
          />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-4 md:grid-cols-2">
            {services.map((s, i) => {
              const Icon = icons[s.slug];
              return (
                <Reveal key={s.slug} i={i}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="group block h-full overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-background">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-display text-xs font-medium text-muted-foreground">
                        — {s.tag}
                      </span>
                    </div>
                    <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {s.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm text-muted-foreground">{s.headline}</p>
                    <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                      <div>
                        From <span className="font-medium text-foreground">{s.pricingFrom}</span>
                      </div>
                      <div>{s.timeline}</div>
                      <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Framework />
      <AfterLaunch />
      <CTA />
    </>
  );
}
