import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { caseStudies } from "@/lib/case-studies";
import { CTA } from "@/components/site/CTA";

const categories = ["All", "Website", "Landing Page", "AI Assistant", "Automation", "Branding"] as const;

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Case studies · Nordwell" },
      { name: "description", content: "Selected case studies from Nordwell Studio: fintech, real estate, consumer, health and climate. Every engagement anchored to a measurable business outcome." },
      { property: "og:title", content: "Work — Case studies · Nordwell" },
      { property: "og:description", content: "Selected case studies with the numbers to prove they moved the business." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elevated-experience-co.lovable.app/work" },
    ],
    links: [{ rel: "canonical", href: "https://elevated-experience-co.lovable.app/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return caseStudies.filter((c) => {
      const okCat = category === "All" || c.category === category;
      const okQ =
        !query ||
        [c.name, c.industry, c.headline, c.summary].some((v) =>
          v.toLowerCase().includes(query.toLowerCase()),
        );
      return okCat && okQ;
    });
  }, [category, query]);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="pt-32">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeader
              align="left"
              eyebrow="Selected work"
              title="Numbers, not just showcases."
              description="Every project below is measured by what it did for the business — not the pixels on screen."
            />
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategory(c)}
                    className={
                      "rounded-full border px-4 py-1.5 text-sm transition-colors " +
                      (category === c
                        ? "border-foreground bg-foreground text-background"
                        : "border-border bg-background text-foreground/70 hover:text-foreground")
                    }
                  >
                    {c}
                  </button>
                ))}
              </div>
              <div className="ml-auto flex w-full items-center gap-2 rounded-full border border-border bg-background px-4 py-2 sm:w-72">
                <Search className="size-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects…"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/70"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-6 md:grid-cols-2">
              {filtered.map((c, i) => (
                <Reveal key={c.slug} i={i}>
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: c.slug }}
                    className="group block overflow-hidden rounded-3xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_30px_60px_-30px_rgba(15,23,42,0.25)]"
                  >
                    <div className={`aspect-[16/10] w-full bg-gradient-to-br ${c.tone}`} />
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        <span>{c.category}</span>
                        <span>·</span>
                        <span>{c.industry}</span>
                        <span>·</span>
                        <span>{c.year}</span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                        {c.name}
                      </h3>
                      <p className="mt-2 max-w-md text-sm text-muted-foreground">{c.headline}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                        <div className="text-sm font-medium text-foreground">{c.outcome}</div>
                        <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="rounded-3xl border border-dashed border-border p-16 text-center text-sm text-muted-foreground">
                No projects match that filter yet.
              </div>
            )}
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster position="bottom-right" theme="light" />
    </div>
  );
}