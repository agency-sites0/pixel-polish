import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CTA } from "@/components/site/CTA";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { Reveal } from "@/components/site/Reveal";
import { caseStudies, getAdjacentCaseStudies, getCaseStudy } from "@/lib/case-studies";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study not found — Nordwell" }, { name: "robots", content: "noindex" }] };
    }
    const { study } = loaderData;
    const title = `${study.name} — ${study.headline} · Nordwell`;
    const desc = study.summary;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: CaseStudyPage,
  notFoundComponent: NotFound,
});

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-center">
      <div>
        <div className="font-display text-2xl font-semibold">Case study not found</div>
        <Link to="/" className="mt-4 inline-block text-sm underline">Back to home</Link>
      </div>
    </div>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const { prev, next } = getAdjacentCaseStudies(study.slug);
  const related = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <ScrollProgress />
      <Navbar />
      <main className="pt-32 sm:pt-40">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5">
          <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-3.5" /> All case studies
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span>{study.category}</span>
            <span className="size-1 rounded-full bg-border" />
            <span>{study.industry}</span>
            <span className="size-1 rounded-full bg-border" />
            <span>{study.year}</span>
          </div>
          <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
            {study.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{study.summary}</p>

          <div className={cn("mt-14 h-[380px] overflow-hidden rounded-[32px] border border-border bg-gradient-to-br", study.tone)}>
            <div className="grid h-full place-items-center p-8">
              <div className="w-full max-w-2xl rounded-2xl bg-background/70 p-8 shadow-2xl backdrop-blur">
                <div className="h-2 w-24 rounded-full bg-foreground/70" />
                <div className="mt-3 h-8 w-3/4 rounded-md bg-foreground/90" />
                <div className="mt-6 grid grid-cols-3 gap-4">
                  <div className="h-16 rounded-xl bg-foreground/10" />
                  <div className="h-16 rounded-xl bg-foreground/20" />
                  <div className="h-16 rounded-xl bg-foreground/15" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results strip */}
        <section className="mx-auto mt-20 max-w-6xl px-5">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {study.results.map((r) => (
              <div key={r.v} className="bg-card p-8">
                <div className="font-display text-4xl font-semibold tracking-tight">{r.k}</div>
                <div className="mt-2 text-xs text-muted-foreground">{r.v}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <section className="mx-auto mt-24 max-w-3xl px-5">
          <Block label="Overview" body={study.overview} />
          <Block label="Challenge" body={study.challenge} />
          <div className="mt-16">
            <Kicker>Objectives</Kicker>
            <ul className="mt-4 grid gap-2.5">
              {study.objectives.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-[15px] text-foreground/85">
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-foreground text-background">
                    <Check className="size-2.5" />
                  </span>
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <Block label="Research" body={study.research} />
          <Block label="Strategy" body={study.strategy} />
          <Block label="Solution" body={study.solution} />
          <Block label="Wireframes" body={study.wireframes} />
          <Block label="Design process" body={study.designProcess} />
          <Block label="Development" body={study.development} />

          <div className="mt-16">
            <Kicker>Technology stack</Kicker>
            <div className="mt-4 flex flex-wrap gap-2">
              {study.stack.map((s) => (
                <span key={s} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-foreground/80">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <Kicker>Performance & optimization</Kicker>
            <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {study.performance.map((p) => (
                <div key={p.label} className="bg-card p-5">
                  <div className="font-display text-2xl font-semibold tracking-tight">{p.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{p.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Block label="SEO improvements" body={study.seo} />
        </section>

        {/* Gallery / responsive */}
        <section className="mx-auto mt-24 max-w-6xl px-5">
          <Kicker>Gallery</Kicker>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {[0, 1, 2, 3].map((k) => (
              <div key={k} className={cn("h-64 rounded-3xl border border-border bg-gradient-to-br", study.tone)} />
            ))}
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-[2fr_1fr]">
            <div className={cn("h-72 rounded-3xl border border-border bg-gradient-to-br", study.tone)} />
            <div className={cn("h-72 rounded-3xl border border-border bg-gradient-to-br", study.tone)} />
          </div>
        </section>

        {/* Testimonial */}
        <section className="mx-auto mt-24 max-w-4xl px-5">
          <div className="rounded-3xl border border-border bg-card p-10 sm:p-14">
            <p className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              “{study.testimonial.q}”
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-[var(--color-accent-blue)] to-foreground font-display text-sm font-semibold text-background">
                {study.testimonial.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="text-sm font-semibold">{study.testimonial.name}</div>
                <div className="text-xs text-muted-foreground">{study.testimonial.role}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="mx-auto mt-24 max-w-6xl px-5">
          <Kicker>Related projects</Kicker>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/case-studies/$slug"
                params={{ slug: r.slug }}
                className="group overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className={cn("h-40 bg-gradient-to-br", r.tone)} />
                <div className="p-5">
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">{r.industry}</div>
                  <div className="mt-1 text-[15px] font-semibold">{r.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{r.summary}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Prev / Next */}
        <section className="mx-auto mt-24 max-w-6xl px-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev && (
              <Link
                to="/case-studies/$slug"
                params={{ slug: prev.slug }}
                className="group flex items-center justify-between rounded-3xl border border-border bg-card p-6 transition-colors hover:bg-accent/40"
              >
                <div className="flex items-center gap-3">
                  <ArrowLeft className="size-4 text-muted-foreground" />
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">Previous</div>
                    <div className="mt-1 font-semibold">{prev.name}</div>
                  </div>
                </div>
              </Link>
            )}
            {next && (
              <Link
                to="/case-studies/$slug"
                params={{ slug: next.slug }}
                className="group flex items-center justify-between rounded-3xl border border-border bg-card p-6 text-right transition-colors hover:bg-accent/40 sm:col-start-2"
              >
                <div className="flex-1">
                  <div className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">Next</div>
                  <div className="mt-1 font-semibold">{next.name}</div>
                </div>
                <ArrowRight className="ml-3 size-4 text-muted-foreground" />
              </Link>
            )}
          </div>
        </section>

        <div className="mt-24">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
      <span className="size-1.5 rounded-full bg-[var(--color-accent-blue)]" />
      {children}
    </div>
  );
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <Reveal>
      <div className="mt-16 first:mt-0">
        <Kicker>{label}</Kicker>
        <p className="mt-4 text-[17px] leading-relaxed text-foreground/85">{body}</p>
      </div>
    </Reveal>
  );
}

// silence unused import warning
void ArrowUpRight;