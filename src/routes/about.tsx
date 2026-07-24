import { createFileRoute, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { Philosophy } from "@/components/site/Philosophy";
import { Framework } from "@/components/site/Framework";
import { Testimonials } from "@/components/site/Testimonials";
import { CTA } from "@/components/site/CTA";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — A boutique studio built for outcomes · Ascent" },
      {
        name: "description",
        content:
          "Nordwell is a small, senior studio building websites, landing pages and AI automation for ambitious teams. Meet the studio, our values and how we work.",
      },
      { property: "og:title", content: "About · Ascent" },
      {
        property: "og:description",
        content: "A small, senior studio for websites, landing pages and AI automation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/about` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
  }),
  component: AboutPage,
});

const values = [
  {
    t: "Craft over volume",
    b: "We take on eight to twelve engagements a year — and give each the attention it deserves.",
  },
  {
    t: "Outcomes over outputs",
    b: "The deliverable isn't a Figma file. It's a number that changes for your business.",
  },
  {
    t: "Direct over polished",
    b: "You'll get honest reads on what's working, what isn't, and what we'd do in your shoes.",
  },
  { t: "Own it forever", b: "Your code, your content, your data. No agency lock-in, ever." },
];

const behind = [
  "Weekly demos every Friday, no exceptions",
  "Slack channel with the same senior team you met on kickoff",
  "One master doc per engagement — living, versioned, always current",
  "Design and engineering in the same room, from day one",
  "Real analytics from launch, not two months later",
  "A launch checklist that has 187 items and we hit every one",
];

function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="pt-32">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                The studio
              </div>
            </Reveal>
            <Reveal i={1}>
              <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-[80px]">
                A small studio for founders who want the number to move.
              </h1>
            </Reveal>
            <Reveal i={2}>
              <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
                Nordwell is a boutique studio of senior designers, engineers and strategists. We
                build the marketing sites, landing pages and AI automation that turn traffic into
                revenue — for a small handful of ambitious clients each year.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-border bg-muted/30 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              <SectionHeader
                align="left"
                eyebrow="Our story"
                title="Started as freelancers. Stayed small on purpose."
              />
              <div className="space-y-6 text-base text-foreground/80">
                <p>
                  We started as two freelancers taking on the projects the big agencies wouldn't.
                  Ten years later, we're still small. That's the point.
                </p>
                <p>
                  Every project is led by a partner. Every deliverable is reviewed by the same eyes
                  that quoted it. No juniors learning on your budget, no account managers between
                  you and the people doing the work.
                </p>
                <p>
                  We turn down more work than we take. That's how we keep the standards, the pace
                  and the honesty that our clients hire us for.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeader align="left" eyebrow="What we believe" title="Four values, one bar." />
            <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
              {values.map((v, i) => (
                <Reveal key={v.t} i={i} className="bg-card">
                  <div className="h-full p-10">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{v.t}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{v.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Philosophy />
        <Framework />

        <section className="border-y border-border bg-muted/30 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeader
              align="left"
              eyebrow="Behind the scenes"
              title="The quiet operational stuff that changes outcomes."
            />
            <ul className="mt-12 grid gap-3 sm:grid-cols-2">
              {behind.map((b, i) => (
                <Reveal key={b} i={i}>
                  <li className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-foreground/80">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-foreground text-background text-[10px]">
                      ✓
                    </span>
                    {b}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <Testimonials />

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-5 text-center">
            <SectionHeader eyebrow="Want to see the work?" title="Case studies with the numbers." />
            <Link
              to="/work"
              className="mt-10 inline-flex items-center gap-1.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
            >
              View all case studies <ArrowUpRight className="size-4" />
            </Link>
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
