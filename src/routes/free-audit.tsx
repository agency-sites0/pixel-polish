import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { Toaster, toast } from "sonner";
import { ArrowUpRight, Check, Play } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Reveal, SectionHeader } from "@/components/site/Reveal";
import { submitAuditRequest } from "@/lib/lead-forms";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/free-audit")({
  head: () => ({
    meta: [
      { title: "Free website audit — Personalised video review · Ascent" },
      {
        name: "description",
        content:
          "A private video audit of your website covering conversion, UX, SEO and AI opportunities — delivered in 5 business days. Free, no pitch.",
      },
      { property: "og:title", content: "Free website audit · Ascent" },
      {
        property: "og:description",
        content:
          "A personalised video audit of your website — conversion, UX, SEO and AI opportunities.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/free-audit` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/free-audit` }],
  }),
  component: FreeAuditPage,
});

const schema = z.object({
  website: z.string().trim().min(3, "Enter your website URL").max(200),
  business: z.string().trim().min(1, "Enter your business name").max(120),
  industry: z.string().trim().max(80).optional(),
  goals: z.string().trim().min(10, "Tell us what a win looks like").max(600),
  challenges: z.string().trim().max(600).optional(),
  email: z.string().trim().email("Enter a valid email").max(255),
});

const benefits = [
  { t: "Actually personalised", b: "Recorded live on your site — not an automated report card." },
  {
    t: "Reviewed by a partner",
    b: "The same senior team you'd hire, doing the diagnosis themselves.",
  },
  {
    t: "Priority-ranked",
    b: "Fixes ordered by the impact on revenue, not the ease of doing them.",
  },
  {
    t: "Yours to keep",
    b: "Use the recording in-house or share it with your dev team. No strings.",
  },
];

const checklist = [
  "First-impression and above-the-fold clarity",
  "Message-market fit of the hero and top offer",
  "Conversion path from landing to primary CTA",
  "Form friction and lead qualification quality",
  "Mobile experience on a mid-range device",
  "Core Web Vitals and load performance",
  "Technical SEO, schema and metadata",
  "Accessibility and semantic structure",
  "Analytics and event tracking coverage",
  "One AI or automation idea worth piloting",
];

const faq = [
  {
    q: "Is it really free?",
    a: "Yes. No credit card, no obligation. We record roughly one audit a week and enjoy the diagnostic work.",
  },
  {
    q: "Who is it for?",
    a: "Founders and marketing leads of service businesses generating meaningful traffic who feel their site under-performs.",
  },
  {
    q: "How long is the video?",
    a: "Usually 10–15 minutes. Long enough to be useful, short enough to actually watch.",
  },
  {
    q: "Will you pitch me?",
    a: "No pitch during the audit. If you'd like to work together after, we'll happily talk — otherwise you keep the recording either way.",
  },
  {
    q: "How long does it take?",
    a: "You'll receive the video within 5 business days of submitting the form.",
  },
];

function FreeAuditPage() {
  const [values, setValues] = useState({
    website: "",
    business: "",
    industry: "",
    goals: "",
    challenges: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const submitAuditRequestFn = useServerFn(submitAuditRequest);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const first = result.error.issues[0]?.message ?? "Please check the form";
      toast.error(first);
      return;
    }

    setSubmitting(true);
    try {
      await submitAuditRequestFn({
        data: {
          website: result.data.website,
          business: result.data.business,
          industry: result.data.industry ?? "",
          goals: result.data.goals,
          challenges: result.data.challenges ?? "",
          email: result.data.email,
          honeypot: "",
        },
      });
      setDone(true);
      toast.success("Audit request received — we'll be in touch within 24 hours.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please check the form";
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative min-h-screen scroll-smooth bg-background text-foreground antialiased">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 sm:pt-44">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                  <span className="size-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                  Free · No pitch · 5 business days
                </span>
                <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl">
                  A personalised video audit of your website.
                </h1>
                <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                  Send us your URL. A partner will record a private walk-through of your site,
                  highlighting the conversion, UX, SEO and AI opportunities most likely to move your
                  numbers this quarter.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="#request-audit"
                    className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                  >
                    Request your audit
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <span className="text-xs text-muted-foreground">
                    Two audit slots left this month
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_30px_80px_-40px_rgba(15,23,42,0.35)]">
                  <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-2.5">
                    <div className="flex gap-1.5">
                      <span className="size-2.5 rounded-full bg-red-400/70" />
                      <span className="size-2.5 rounded-full bg-yellow-400/70" />
                      <span className="size-2.5 rounded-full bg-emerald-400/70" />
                    </div>
                    <div className="ml-3 rounded-md bg-background/70 px-2.5 py-1 text-[11px] text-muted-foreground">
                      audit · your-site.com
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-[oklch(0.96_0.01_240)] via-background to-[oklch(0.94_0.02_220)]">
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="grid size-16 place-items-center rounded-full border border-border bg-background/90 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur">
                        <Play className="size-5 translate-x-[1px]" />
                      </div>
                    </div>
                    <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-border bg-background/85 p-4 backdrop-blur">
                      <div className="flex items-center justify-between text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        <span>Audit · 12:04</span>
                        <span>Sample</span>
                      </div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
                        <div className="h-full w-2/3 rounded-full bg-foreground" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeader
              eyebrow="What you get"
              title="A diagnosis, not a template."
              description="No PDF, no dashboards to log into. Just a senior pair of eyes on your site — recorded, ranked and yours to keep."
            />
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <Reveal key={b.t} i={i}>
                  <div className="border-t border-border pt-6">
                    <div className="font-display text-xs font-medium tracking-widest text-muted-foreground">
                      — 0{i + 1}
                    </div>
                    <h3 className="mt-4 font-display text-xl font-semibold tracking-tight">
                      {b.t}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{b.b}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="relative border-y border-border bg-muted/30 py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
                  <span className="size-1.5 rounded-full bg-[var(--color-accent-blue)]" />
                  What we look at
                </span>
                <h2 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
                  Ten checks that matter more than the other fifty.
                </h2>
                <p className="mt-5 max-w-md text-muted-foreground">
                  We skip the vanity metrics. The audit focuses on the handful of levers that
                  actually change revenue for businesses at your stage.
                </p>
              </div>
              <ul className="divide-y divide-border border-y border-border">
                {checklist.map((c, i) => (
                  <Reveal key={c} i={i}>
                    <li className="flex items-start gap-4 py-4">
                      <span className="font-display text-xs font-medium tracking-widest text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-foreground/90 sm:text-base">{c}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Before / After */}
        <section className="relative py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeader
              eyebrow="Before / After"
              title="From audit to outcome."
              description="A recent client acted on three of the recommendations from their free audit. Here's what changed in ninety days."
            />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[
                {
                  label: "Before",
                  headline: "Generic hero, buried CTA, 1.8% conversion.",
                  stats: [
                    { k: "1.8%", v: "Landing conversion" },
                    { k: "62", v: "Lighthouse mobile" },
                    { k: "48h", v: "Avg. reply time" },
                  ],
                  tone: "bg-muted/40",
                },
                {
                  label: "After",
                  headline: "Sharper offer, AI concierge, 5.6% conversion.",
                  stats: [
                    { k: "5.6%", v: "Landing conversion" },
                    { k: "98", v: "Lighthouse mobile" },
                    { k: "< 1m", v: "Avg. reply time" },
                  ],
                  tone: "bg-foreground text-background",
                },
              ].map((col) => (
                <Reveal key={col.label}>
                  <div className={`rounded-3xl border border-border p-8 sm:p-10 ${col.tone}`}>
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] opacity-70">
                      {col.label}
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                      {col.headline}
                    </h3>
                    <dl className="mt-8 grid grid-cols-3 gap-4">
                      {col.stats.map((s) => (
                        <div key={s.v}>
                          <dt className="text-xs opacity-70">{s.v}</dt>
                          <dd className="mt-1 font-display text-2xl font-semibold tracking-tight">
                            {s.k}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative border-t border-border py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-5">
            <SectionHeader eyebrow="FAQ" title="Common questions." align="center" />
            <div className="mt-14 divide-y divide-border border-y border-border">
              {faq.map((f, i) => (
                <Reveal key={f.q} i={i}>
                  <details className="group py-6">
                    <summary className="flex cursor-pointer items-start justify-between gap-6 text-left">
                      <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
                        {f.q}
                      </span>
                      <span className="mt-1 text-muted-foreground transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
                      {f.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section
          id="request-audit"
          className="relative border-t border-border bg-muted/30 py-24 sm:py-32"
        >
          <div className="mx-auto max-w-4xl px-5">
            <SectionHeader
              eyebrow="Request your audit"
              title="Tell us where to look."
              description="Six fields. That's it. You'll get the recorded audit within five business days."
            />
            <Reveal>
              <div className="mt-14 rounded-3xl border border-border bg-card p-8 sm:p-10">
                {done ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <span className="grid size-12 place-items-center rounded-full border border-border bg-background">
                      <Check className="size-5" />
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">
                      Received. We'll get to work.
                    </h3>
                    <p className="mt-3 max-w-md text-sm text-muted-foreground">
                      Expect an email within one business day confirming the audit slot and your
                      recording within five.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="grid gap-5">
                    <input
                      type="text"
                      name="honeypot"
                      aria-hidden="true"
                      tabIndex={-1}
                      autoComplete="off"
                      className="hidden"
                    />
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Website URL"
                        placeholder="https://your-site.com"
                        value={values.website}
                        onChange={(v) => setValues((s) => ({ ...s, website: v }))}
                      />
                      <Field
                        label="Business name"
                        placeholder="Acme Studio"
                        value={values.business}
                        onChange={(v) => setValues((s) => ({ ...s, business: v }))}
                      />
                      <Field
                        label="Industry"
                        placeholder="e.g. Fintech, Health, Real Estate"
                        value={values.industry}
                        onChange={(v) => setValues((s) => ({ ...s, industry: v }))}
                      />
                      <Field
                        label="Email"
                        type="email"
                        placeholder="you@business.com"
                        value={values.email}
                        onChange={(v) => setValues((s) => ({ ...s, email: v }))}
                      />
                    </div>
                    <Field
                      label="What would a win look like?"
                      placeholder="e.g. Double demo requests from paid traffic this quarter"
                      value={values.goals}
                      onChange={(v) => setValues((s) => ({ ...s, goals: v }))}
                      textarea
                    />
                    <Field
                      label="Current challenges (optional)"
                      placeholder="Where do you feel the site is holding the business back?"
                      value={values.challenges}
                      onChange={(v) => setValues((s) => ({ ...s, challenges: v }))}
                      textarea
                    />
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-xs text-muted-foreground">
                        We reply within one business day. No spam, ever.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                      >
                        {submitting ? "Sending…" : "Request my audit"}
                        <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster position="bottom-right" theme="light" />
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
}) {
  const shared =
    "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-foreground focus:outline-none";
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea
          className={shared + " min-h-[120px] resize-y"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          className={shared}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
        />
      )}
    </label>
  );
}
