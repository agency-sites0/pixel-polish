import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check, Minus, Plus, Globe, Rocket, Bot, Workflow } from "lucide-react";
import { useState } from "react";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { Framework } from "@/components/site/Framework";
import { AfterLaunch } from "@/components/site/AfterLaunch";
import { ChatbotDemo } from "@/components/site/ChatbotDemo";
import { CTA } from "@/components/site/CTA";
import { getService, services, type Service } from "@/lib/services";
import { caseStudies } from "@/lib/case-studies";

const icons = {
  "websites": Globe,
  "landing-pages": Rocket,
  "ai-chatbots": Bot,
  "automation": Workflow,
} as const;

type Slug = keyof typeof icons;

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }): { service: Service } => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Service — Nordwell" }, { name: "robots", content: "noindex" }] };
    }
    const s = loaderData.service;
    const url = `https://elevated-experience-co.lovable.app/services/${s.slug}`;
    return {
      meta: [
        { title: `${s.name} · Nordwell` },
        { name: "description", content: s.lede },
        { property: "og:title", content: `${s.name} · Nordwell` },
        { property: "og:description", content: s.lede },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          description: s.lede,
          provider: { "@type": "Organization", name: "Nordwell Studio" },
        }),
      }],
    };
  },
  component: ServicePage,
  notFoundComponent: NotFoundBlock,
});

function NotFoundBlock() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <h1 className="font-display text-4xl font-semibold tracking-tight">Service not found</h1>
        <p className="mt-4 text-muted-foreground">The service you're looking for doesn't exist.</p>
        <Link to="/services" className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background">
          Back to services <ArrowUpRight className="size-3.5" />
        </Link>
      </div>
    </section>
  );
}

function ServicePage() {
  const { service } = Route.useLoaderData() as { service: Service };
  const Icon = icons[service.slug as Slug];
  const otherServices = services.filter((s) => s.slug !== service.slug);
  const relatedCases = caseStudies.filter((c) => service.caseSlugs.includes(c.slug));

  return (
    <>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-[var(--color-accent-blue)]" />
              Service · {service.tag}
            </div>
          </Reveal>
          <Reveal i={1}>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-[72px]">
              {service.name}
            </h1>
          </Reveal>
          <Reveal i={2}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{service.headline}</p>
          </Reveal>
          <Reveal i={3}>
            <p className="mt-4 max-w-2xl text-base text-foreground/80">{service.lede}</p>
          </Reveal>
          <Reveal i={4}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background">
                Book a strategy call
                <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/free-audit" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground">
                Get a free audit
              </Link>
              <div className="ml-auto flex items-center gap-6 text-xs text-muted-foreground">
                <div>
                  <div className="text-muted-foreground">From</div>
                  <div className="font-display text-lg font-semibold text-foreground">{service.pricingFrom}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Timeline</div>
                  <div className="font-display text-lg font-semibold text-foreground">{service.timeline}</div>
                </div>
                <div className="hidden size-14 place-items-center rounded-2xl border border-border bg-background sm:grid">
                  <Icon className="size-6" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Problems */}
      <section className="py-20 border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader align="left" eyebrow="Sound familiar?" title="Problems we solve." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.problems.map((p, i) => (
              <Reveal key={p} i={i}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                  <div className="mt-1 grid size-6 shrink-0 place-items-center rounded-full border border-border bg-background text-foreground/60">—</div>
                  <p className="text-sm text-foreground/80">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables + Benefits */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader align="left" eyebrow="Deliverables" title="What you'll walk away with." />
              <ul className="mt-8 space-y-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-foreground text-background">
                      <Check className="size-3" />
                    </span>
                    <span className="text-sm text-foreground/80">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader align="left" eyebrow="Benefits" title="Why it moves the number." />
              <div className="mt-8 grid gap-3">
                {service.benefits.map((b, i) => (
                  <Reveal key={b.title} i={i}>
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <div className="font-display text-lg font-semibold tracking-tight">{b.title}</div>
                      <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {service.slug === "ai-chatbots" && <ChatbotDemo />}

      <Framework />

      {/* Related case studies */}
      {relatedCases.length > 0 && (
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeader align="left" eyebrow="Proof" title="Recent engagements." />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {relatedCases.map((c, i) => (
                <Reveal key={c.slug} i={i}>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: c.slug }}
                    className="group block overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-foreground/20"
                  >
                    <div className={`aspect-[16/9] w-full bg-gradient-to-br ${c.tone}`} />
                    <div className="p-6">
                      <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{c.industry}</div>
                      <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">{c.name}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{c.headline}</p>
                      <div className="mt-4 flex items-center justify-between text-sm">
                        <span className="font-medium">{c.outcome}</span>
                        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <AfterLaunch />

      {/* FAQ */}
      <section className="border-y border-border bg-muted/30 py-24">
        <div className="mx-auto max-w-3xl px-5">
          <SectionHeader eyebrow="FAQ" title="What people ask before we start." />
          <div className="mt-12 divide-y divide-border rounded-3xl border border-border bg-card">
            {service.faq.map((f, i) => (
              <FaqRow key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeader align="left" eyebrow="Other services" title="Everything we do." />
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-accent/40"
              >
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">— {s.tag}</div>
                  <div className="mt-2 font-display text-lg font-semibold tracking-tight">{s.name}</div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function FaqRow({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <button
      onClick={() => setOpen((v) => !v)}
      className="flex w-full items-start justify-between gap-6 p-6 text-left"
    >
      <div className="flex-1">
        <div className="font-display text-lg font-semibold tracking-tight">{q}</div>
        {open && <p className="mt-3 text-sm text-muted-foreground">{a}</p>}
      </div>
      <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-border bg-background">
        {open ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
      </span>
    </button>
  );
}