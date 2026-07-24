import { Check, Star } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Growth",
    price: "$12,000",
    tagline: "Designed for early-stage demand.",
    timeline: "4–6 weeks",
    features: [
      "High-converting landing page or 5-page site",
      "Custom design system",
      "CMS, analytics & conversion experiments",
      "Basic AI lead capture",
      "SEO optimization & schema markup",
      "3 months of monitoring & optimization",
    ],
    cta: "Start with Growth",
  },
  {
    name: "Scale",
    price: "$28,000",
    tagline: "Most popular. Full revenue system.",
    timeline: "6–8 weeks",
    features: [
      "Full website + case study system",
      "Custom AI concierge + workflow automation",
      "CRM, data integrations & lead routing",
      "Competitive positioning audit",
      "Quarterly experiments roadmap",
      "Dedicated senior team + monthly strategy",
    ],
    cta: "Get started",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "From $75k",
    tagline: "For complex systems & integrations.",
    timeline: "10–16 weeks",
    features: [
      "Full website + enterprise integrations",
      "Custom AI systems + advanced automation",
      "Multi-channel revenue capture (web, email, SMS)",
      "Change management & team training",
      "Quarterly business reviews",
      "Dedicated account team",
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
          title="Fixed scope. Transparent pricing."
          description="Three engagement models. All include dedicated senior team, measurement built-in, and ongoing strategy through launch."
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
