import { Check, Star } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: "$4,500",
    tagline: "For focused launches.",
    timeline: "2–3 weeks",
    features: [
      "Single high-converting page",
      "Custom design & motion",
      "CMS + analytics wiring",
      "Basic SEO & schema",
      "2 rounds of revisions",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "$12,000",
    tagline: "Our most popular package.",
    timeline: "4–6 weeks",
    features: [
      "Up to 8-page marketing site",
      "Custom design system",
      "CMS, analytics & experiments",
      "AI chatbot (lead capture)",
      "SEO, schema & performance",
      "Post-launch care · 30 days",
    ],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Scale",
    price: "From $28k",
    tagline: "For teams shipping revenue.",
    timeline: "8–12 weeks",
    features: [
      "Full website + case study system",
      "Custom AI agent + automations",
      "CRM & data integrations",
      "Migration & change management",
      "Quarterly experiments roadmap",
      "Dedicated senior team",
    ],
    cta: "Book a strategy call",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Packages"
          title="Fixed scope. Honest pricing."
          description="Three engagement shapes to match the moment you're in. Custom scopes on request."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} i={i} className="h-full">
              <div
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden rounded-3xl border p-8 transition-all duration-500",
                  t.featured
                    ? "border-foreground/80 bg-foreground text-background shadow-[0_40px_80px_-30px_rgba(15,23,42,0.5)] lg:-mt-6 lg:mb-[-1.5rem]"
                    : "border-border bg-card hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]",
                )}
              >
                {t.featured && (
                  <div className="absolute right-6 top-6 inline-flex items-center gap-1 rounded-full bg-[var(--color-accent-blue)] px-2.5 py-1 text-[11px] font-medium text-white">
                    <Star className="size-3 fill-current" /> Most popular
                  </div>
                )}
                <div>
                  <div
                    className={cn(
                      "font-display text-sm font-medium tracking-wide",
                      t.featured ? "text-background/70" : "text-muted-foreground",
                    )}
                  >
                    {t.name}
                  </div>
                  <div className="mt-4 font-display text-5xl font-semibold tracking-tight">
                    {t.price}
                  </div>
                  <div
                    className={cn(
                      "mt-2 text-sm",
                      t.featured ? "text-background/70" : "text-muted-foreground",
                    )}
                  >
                    {t.tagline}
                  </div>
                  <div
                    className={cn(
                      "mt-6 inline-flex rounded-full border px-3 py-1 text-xs",
                      t.featured
                        ? "border-background/25 text-background/80"
                        : "border-border text-muted-foreground",
                    )}
                  >
                    Timeline · {t.timeline}
                  </div>
                </div>

                <ul className="mt-8 space-y-3 text-sm">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          t.featured
                            ? "text-[var(--color-accent-blue)]"
                            : "text-[var(--color-accent-blue)]",
                        )}
                      />
                      <span className={t.featured ? "text-background/90" : "text-foreground/80"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5",
                    t.featured ? "bg-background text-foreground" : "bg-foreground text-background",
                  )}
                >
                  {t.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
