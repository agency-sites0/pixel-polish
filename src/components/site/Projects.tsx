import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";
import { cn } from "@/lib/utils";

type Project = {
  slug: string;
  name: string;
  industry: string;
  category: "Website" | "Landing Page" | "AI Chatbot" | "Branding";
  headline: string;
  challenge: string;
  solution: string;
  stack: string[];
  results: { k: string; v: string }[];
  tone: string;
};

const projects: Project[] = [
  {
    slug: "halcyon",
    name: "Halcyon",
    industry: "SaaS · B2B",
    category: "Website",
    headline: "Repositioning a fintech from tool to platform.",
    challenge: "Flat brand, low demo requests, and a homepage that buried the offer.",
    solution: "Full rebrand, editorial site and a conversion-first homepage.",
    stack: ["Next.js", "Sanity", "Vercel"],
    results: [
      { k: "+214%", v: "Demo requests" },
      { k: "1.9s", v: "LCP" },
      { k: "98", v: "Lighthouse" },
    ],
    tone: "from-[oklch(0.94_0.03_260)] to-[oklch(0.86_0.06_240)]",
  },
  {
    slug: "fieldnote",
    name: "Fieldnote",
    industry: "Consumer · Mobile",
    category: "Landing Page",
    headline: "A single page that 3× app store installs.",
    challenge: "Paid traffic wasn't converting and the story was scattered.",
    solution: "Focused narrative, motion-led page and a tuned above-the-fold.",
    stack: ["Framer", "GSAP", "Segment"],
    results: [
      { k: "3.1×", v: "Installs" },
      { k: "-42%", v: "CPA" },
      { k: "6.4s", v: "Avg. dwell" },
    ],
    tone: "from-[oklch(0.92_0.06_150)] to-[oklch(0.82_0.09_170)]",
  },
  {
    slug: "meridian",
    name: "Meridian",
    industry: "Real estate",
    category: "AI Chatbot",
    headline: "An AI concierge that books 40% of viewings.",
    challenge: "Sales team drowning in repetitive inquiries after hours.",
    solution: "Custom GPT-4 agent with CRM sync, WhatsApp and human handoff.",
    stack: ["OpenAI", "n8n", "Supabase"],
    results: [
      { k: "40%", v: "Bookings via AI" },
      { k: "24/7", v: "Coverage" },
      { k: "3 min", v: "Avg. reply" },
    ],
    tone: "from-[oklch(0.93_0.03_60)] to-[oklch(0.84_0.09_45)]",
  },
  {
    slug: "lumen",
    name: "Lumen",
    industry: "Health · DTC",
    category: "Website",
    headline: "Editorial commerce for a wellness brand.",
    challenge: "Generic template site limiting AOV and brand perception.",
    solution: "Custom Shopify Hydrogen build with story-led PDPs.",
    stack: ["Hydrogen", "GSAP", "Shopify"],
    results: [
      { k: "+38%", v: "AOV" },
      { k: "+61%", v: "Repeat rate" },
      { k: "4.9★", v: "CSAT" },
    ],
    tone: "from-[oklch(0.93_0.04_20)] to-[oklch(0.84_0.09_10)]",
  },
  {
    slug: "northwind",
    name: "Northwind",
    industry: "Climate tech",
    category: "Branding",
    headline: "A brand system for a Series B climate leader.",
    challenge: "Enterprise-ready identity without losing the mission.",
    solution: "New wordmark, motion identity and a marketing site.",
    stack: ["Figma", "After Effects", "Webflow"],
    results: [
      { k: "Series B", v: "$34M raised" },
      { k: "+180%", v: "Press mentions" },
      { k: "12wk", v: "End-to-end" },
    ],
    tone: "from-[oklch(0.94_0.03_200)] to-[oklch(0.82_0.08_215)]",
  },
  {
    slug: "vantage",
    name: "Vantage",
    industry: "Fintech",
    category: "Landing Page",
    headline: "Enterprise trust in a single scroll.",
    challenge: "Complex offer, long sales cycle, low form completion.",
    solution: "Layered narrative page with interactive proof and calculator.",
    stack: ["Next.js", "Framer Motion", "HubSpot"],
    results: [
      { k: "+92%", v: "SQLs" },
      { k: "2.4×", v: "Form starts" },
      { k: "-31%", v: "Bounce" },
    ],
    tone: "from-[oklch(0.93_0.04_285)] to-[oklch(0.82_0.09_275)]",
  },
];

const filters = ["All", "Website", "Landing Page", "AI Chatbot", "Branding"] as const;

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => active === "All" || p.category === active);

  return (
    <section id="work" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Selected work"
          title="Recent projects."
          description="A small sample of what we've shipped with brave teams over the last twelve months."
        />

        {/* Featured case study */}
        <Reveal>
          <div className="mt-16 overflow-hidden rounded-[32px] border border-border bg-card">
            <div className="grid gap-0 md:grid-cols-[1.1fr_1fr]">
              <div className="p-8 sm:p-12">
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Featured · {projects[0].industry}
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  {projects[0].headline}
                </h3>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Challenge
                    </div>
                    <p className="mt-2 text-sm">{projects[0].challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Solution
                    </div>
                    <p className="mt-2 text-sm">{projects[0].solution}</p>
                  </div>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {projects[0].results.map((r) => (
                    <div key={r.v}>
                      <div className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                        {r.k}
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">{r.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {projects[0].stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="group mt-10 inline-flex items-center gap-1.5 text-sm font-medium"
                >
                  Read case study
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
              <div className={cn("relative min-h-[320px] bg-gradient-to-br", projects[0].tone)}>
                <div className="absolute inset-6 rounded-2xl bg-background/70 p-6 shadow-2xl backdrop-blur">
                  <div className="h-2 w-20 rounded-full bg-foreground/70" />
                  <div className="mt-3 h-5 w-40 rounded-md bg-foreground/90" />
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="h-20 rounded-xl bg-foreground/10" />
                    <div className="h-20 rounded-xl bg-foreground/20" />
                    <div className="col-span-2 h-14 rounded-xl bg-foreground/15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Filter + grid */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Portfolio</h3>
          <div className="flex flex-wrap gap-1 rounded-full border border-border bg-background/70 p-1 backdrop-blur">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors",
                  active === f ? "text-background" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {active === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{f}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <motion.a
              layout
              key={p.slug}
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card",
                i === 0 || i === 3 ? "lg:row-span-2" : "",
              )}
            >
              <div
                className={cn(
                  "relative flex-1 bg-gradient-to-br transition-transform duration-700 group-hover:scale-[1.02]",
                  p.tone,
                  i === 0 || i === 3 ? "min-h-[320px]" : "min-h-[200px]",
                )}
              >
                <div className="absolute right-4 top-4 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-medium backdrop-blur">
                  {p.category}
                </div>
                <div className="absolute inset-x-6 bottom-6">
                  <div className="h-1.5 w-16 rounded-full bg-foreground/70" />
                  <div className="mt-2 h-6 w-3/5 rounded-md bg-foreground/85" />
                </div>
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <div className="text-[15px] font-semibold">{p.name}</div>
                  <div className="text-xs text-muted-foreground">{p.industry}</div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}