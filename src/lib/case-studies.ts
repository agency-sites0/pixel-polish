export type CaseStudy = {
  slug: string;
  name: string;
  industry: string;
  category: "Website" | "Landing Page" | "AI Assistant" | "Automation" | "Branding";
  year: string;
  headline: string;
  summary: string;
  outcome: string;
  tone: string;
  overview: string;
  challenge: string;
  objectives: string[];
  research: string;
  strategy: string;
  solution: string;
  wireframes: string;
  designProcess: string;
  development: string;
  stack: string[];
  performance: { label: string; value: string }[];
  seo: string;
  results: { k: string; v: string }[];
  testimonial: { q: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "halcyon",
    name: "Halcyon",
    industry: "SaaS · B2B Fintech",
    category: "Website",
    year: "2025",
    headline: "From flat funnel to 3× qualified pipeline in 90 days.",
    summary:
      "Repositioning a fintech from tool to platform — with a website engineered around the sales conversation.",
    outcome: "+214% qualified leads, -38% cost per demo, 6 weeks to launch.",
    tone: "from-[oklch(0.94_0.03_260)] to-[oklch(0.86_0.06_240)]",
    overview:
      "Halcyon had raised a Series A on strong product signal, but the marketing site read like a v1 landing page — slow, generic, and buried the platform story under feature lists.",
    challenge:
      "Sales was carrying the entire funnel. Paid traffic bounced, organic couldn't rank, and the homepage failed to answer 'why now, why you' for enterprise buyers.",
    objectives: [
      "Reposition from a tool to a category-leading platform",
      "Triple qualified demo requests within one quarter",
      "Give sales a site they'd actually send to prospects",
      "Set a foundation for content and SEO to compound",
    ],
    research:
      "We interviewed 12 customers, 4 lost deals and every rep on the sales team. Patterns emerged: buyers cared about audit-readiness and time-to-value, not feature depth. That insight shaped every page.",
    strategy:
      "One narrative — 'finance operations, on rails' — running from hero to pricing. Each section was assigned a single job in the buying journey, with a measurable target before design started.",
    solution:
      "A ten-page site with a design system, editorial case studies, interactive product tours and a re-thought demo flow that routes leads to the right rep in under 60 seconds.",
    wireframes:
      "Low-fidelity wireframes for every page were reviewed with sales and product before any visual design, so the story was locked before pixels moved.",
    designProcess:
      "A restrained editorial system: one distinctive display face, generous whitespace, thin borders, and product visuals that showed the software doing real work.",
    development:
      "Next.js on Vercel with Sanity as the CMS, a typed content model, and analytics events on every meaningful interaction. The marketing team can ship pages without engineering.",
    stack: ["Next.js", "Sanity", "Vercel", "HubSpot", "Segment"],
    performance: [
      { label: "Lighthouse", value: "98" },
      { label: "LCP", value: "1.9s" },
      { label: "CLS", value: "0.02" },
      { label: "Bundle", value: "112kb" },
    ],
    seo: "Full technical SEO pass, structured data on every template, XML sitemap and 78 redirects mapped from the legacy site. Organic sessions grew 61% in the first 90 days.",
    results: [
      { k: "+214%", v: "Qualified leads" },
      { k: "-38%", v: "Cost per demo" },
      { k: "+61%", v: "Organic traffic" },
      { k: "98", v: "Lighthouse" },
    ],
    testimonial: {
      q: "Nordwell rebuilt our marketing engine in six weeks. Demo requests more than tripled, and the site finally feels like the product.",
      name: "Priya Shah",
      role: "VP Marketing, Halcyon",
    },
  },
  {
    slug: "meridian",
    name: "Meridian",
    industry: "Real Estate",
    category: "AI Assistant",
    year: "2025",
    headline: "An AI concierge that books 40% of property viewings.",
    summary:
      "A revenue-grade AI assistant that qualifies buyers, books viewings and hands off warm leads to agents.",
    outcome: "40% of viewings booked by AI, 3-minute average reply time, 24/7 coverage.",
    tone: "from-[oklch(0.93_0.03_60)] to-[oklch(0.84_0.09_45)]",
    overview:
      "Meridian's agents were losing high-intent buyers overnight and on weekends. Inquiries piled up, and the best leads went to whoever replied first — which rarely was them.",
    challenge:
      "Manual triage was capping revenue. The team needed after-hours coverage without hiring, and needed it to feel like Meridian — not a chatbot.",
    objectives: [
      "Reply to every inquiry in under 5 minutes, 24/7",
      "Book qualified viewings directly into agent calendars",
      "Keep every conversation on-brand and human",
      "Give agents a warm summary before they call the buyer",
    ],
    research:
      "We shadowed three agents for a week, mapped every question they answered by hand, and clustered them into 42 intents that covered 94% of inbound messages.",
    strategy:
      "Design the assistant as a junior agent, not a chatbot. Give it a real personality, real limits, and a graceful handoff moment when it should stop and get a human.",
    solution:
      "A custom GPT-4 agent wired into WhatsApp, the website and the CRM. It qualifies budget, timeline and location, books viewings from live calendars and sends agents a briefing.",
    wireframes:
      "Conversation flows were storyboarded before a single prompt was written, with clear paths for qualified, unqualified and 'needs a human' scenarios.",
    designProcess:
      "Voice, tone and refusal patterns were designed as carefully as visuals — every message reviewed against Meridian's brand guidelines before shipping.",
    development:
      "OpenAI with a Supabase-backed knowledge base, n8n orchestration, WhatsApp Business API and native CRM sync. Every conversation is logged and searchable.",
    stack: ["OpenAI", "n8n", "Supabase", "WhatsApp API", "HubSpot"],
    performance: [
      { label: "Avg reply", value: "3 min" },
      { label: "Uptime", value: "99.98%" },
      { label: "Cost / lead", value: "$0.14" },
      { label: "CSAT", value: "4.8" },
    ],
    seo: "The assistant is embedded across the site with schema markup for FAQ and RealEstateAgent, contributing to a 22% organic uplift.",
    results: [
      { k: "40%", v: "Viewings booked by AI" },
      { k: "24/7", v: "Coverage" },
      { k: "3 min", v: "Avg. reply time" },
      { k: "+31%", v: "Agent close rate" },
    ],
    testimonial: {
      q: "The AI concierge they built handles 40% of viewings on autopilot. It paid for itself in the first month and our agents finally get to focus on closing.",
      name: "Sofia Aramburu",
      role: "COO, Meridian",
    },
  },
  {
    slug: "fieldnote",
    name: "Fieldnote",
    industry: "Consumer · Mobile App",
    category: "Landing Page",
    year: "2025",
    headline: "A single page that tripled app installs.",
    summary:
      "A focused, story-led landing page that turned expensive paid traffic into loyal users.",
    outcome: "3.1× installs, -42% cost per acquisition, 6.4s average dwell time.",
    tone: "from-[oklch(0.92_0.06_150)] to-[oklch(0.82_0.09_170)]",
    overview:
      "Fieldnote had a beautiful app and rising ad spend, but its landing page was a wall of screenshots. Paid traffic wasn't converting and CAC kept climbing.",
    challenge:
      "One page had to do the work of a full site: teach the product, earn trust, and get users into the store — for both iOS and Android traffic.",
    objectives: [
      "Cut cost per install by at least 30%",
      "Increase store click-through above 20%",
      "Build a page that scales across paid campaigns",
      "Set up clean tracking so growth can iterate",
    ],
    research:
      "We watched 40 unmoderated user tests and identified the exact 12 seconds where prospects decided to install — or leave. The page was rebuilt around that moment.",
    strategy:
      "One promise above the fold, three proofs, one call to action. Every scroll was earned by answering the visitor's next unspoken question.",
    solution:
      "A motion-led page with a live product preview, editorial screenshots and a store-detection CTA. Every element was A/B ready from day one.",
    wireframes:
      "Six wireframe variants were tested with real users before design started. The winner outperformed the runner-up by 34% on intent.",
    designProcess:
      "Restrained motion, one signature animation, and typography that carried the story where illustrations usually would.",
    development:
      "Built in Framer with GSAP for motion and Segment for analytics — the growth team ships new variants weekly without engineering support.",
    stack: ["Framer", "GSAP", "Segment", "PostHog"],
    performance: [
      { label: "Lighthouse", value: "96" },
      { label: "LCP", value: "1.4s" },
      { label: "Dwell", value: "6.4s" },
      { label: "TTI", value: "1.8s" },
    ],
    seo: "OpenGraph, Twitter Card and App Links properly configured. Branded search grew 3× post-launch.",
    results: [
      { k: "3.1×", v: "App installs" },
      { k: "-42%", v: "Cost per install" },
      { k: "+58%", v: "Store CTR" },
      { k: "6.4s", v: "Avg. dwell" },
    ],
    testimonial: {
      q: "A rare studio that thinks about business outcomes as sharply as design. Every meeting felt like leverage.",
      name: "Marc Devlin",
      role: "Founder, Fieldnote",
    },
  },
  {
    slug: "lumen",
    name: "Lumen",
    industry: "Health · DTC",
    category: "Website",
    year: "2024",
    headline: "Editorial commerce for a wellness brand.",
    summary:
      "A story-led Shopify Hydrogen build that lifted AOV and repeat purchase without discounting.",
    outcome: "+38% AOV, +61% repeat purchase rate, 4.9★ post-purchase CSAT.",
    tone: "from-[oklch(0.93_0.04_20)] to-[oklch(0.84_0.09_10)]",
    overview:
      "Lumen's template Shopify was capping perception and average order value. The founder wanted the site to feel like the print magazine that inspired the brand.",
    challenge:
      "Move from transactional PDPs to editorial storytelling — without slowing checkout or losing conversion.",
    objectives: [
      "Lift AOV by at least 20%",
      "Grow repeat purchase without discounting",
      "Rebuild the PDP as a story, not a spec sheet",
      "Keep Core Web Vitals in the green",
    ],
    research: "Customer interviews and post-purchase surveys informed the story we told on each PDP.",
    strategy: "Editorial PDPs, ritual-based bundles and a subscription flow written like a letter, not a form.",
    solution: "A custom Hydrogen build with a modular design system, story blocks and a subtle motion language.",
    wireframes: "Modular PDP layouts prototyped and tested with existing customers before build.",
    designProcess: "Serif display type paired with generous whitespace and considered product photography.",
    development: "Shopify Hydrogen, Sanity for content, Klaviyo for lifecycle — all monitored with real-user metrics.",
    stack: ["Hydrogen", "Sanity", "Klaviyo", "Shopify"],
    performance: [
      { label: "Lighthouse", value: "95" },
      { label: "LCP", value: "2.0s" },
      { label: "AOV", value: "+38%" },
      { label: "Refunds", value: "-24%" },
    ],
    seo: "Product schema, editorial content and internal linking lifted organic revenue 44% year-over-year.",
    results: [
      { k: "+38%", v: "AOV" },
      { k: "+61%", v: "Repeat rate" },
      { k: "4.9★", v: "CSAT" },
      { k: "+44%", v: "Organic revenue" },
    ],
    testimonial: {
      q: "They understood our brand better than most agencies who claim to specialize in DTC.",
      name: "Amelia Rhodes",
      role: "Founder, Lumen",
    },
  },
  {
    slug: "vantage",
    name: "Vantage",
    industry: "Fintech",
    category: "Landing Page",
    year: "2024",
    headline: "Enterprise trust in a single scroll.",
    summary: "A layered narrative page with interactive proof that nearly doubled qualified pipeline.",
    outcome: "+92% SQLs, 2.4× form starts, -31% bounce rate.",
    tone: "from-[oklch(0.93_0.04_285)] to-[oklch(0.82_0.09_275)]",
    overview:
      "Vantage's complex enterprise offer was buried in a long, dense page. Sales cycles were slow and form completion was low.",
    challenge: "Communicate a complex product to a skeptical enterprise buyer in a single scroll.",
    objectives: [
      "Double SQLs from paid traffic",
      "Increase form starts by 50%+",
      "Give sales an anchor for enterprise conversations",
      "Instrument every meaningful interaction",
    ],
    research: "We interviewed six enterprise buyers and mapped their objections into an interactive proof section.",
    strategy: "Layered narrative: hero, proof, calculator, testimonial, CTA — each earned by the last.",
    solution: "Interactive ROI calculator, animated architecture diagram and a form pre-filled from the calculator.",
    wireframes: "Twelve wireframes stress-tested with real sales calls before build.",
    designProcess: "Restrained motion, editorial typography and clear information hierarchy.",
    development: "Next.js on Vercel with HubSpot forms and Segment tracking.",
    stack: ["Next.js", "Framer Motion", "HubSpot", "Segment"],
    performance: [
      { label: "Lighthouse", value: "97" },
      { label: "LCP", value: "1.7s" },
      { label: "TTI", value: "2.1s" },
      { label: "Bundle", value: "98kb" },
    ],
    seo: "Structured data and topic clusters helped grow non-branded search 48% in six months.",
    results: [
      { k: "+92%", v: "SQLs" },
      { k: "2.4×", v: "Form starts" },
      { k: "-31%", v: "Bounce" },
      { k: "+48%", v: "Non-branded search" },
    ],
    testimonial: {
      q: "They ship faster than any agency we've hired, and the craft is uncompromising. Genuinely a partner.",
      name: "Elliot Grant",
      role: "CEO, Vantage",
    },
  },
  {
    slug: "northwind",
    name: "Northwind",
    industry: "Climate Tech",
    category: "Branding",
    year: "2024",
    headline: "A brand system for a Series B climate leader.",
    summary: "An enterprise-ready identity and marketing site that supported a $34M raise.",
    outcome: "Series B closed at $34M, +180% press mentions, 12 weeks end-to-end.",
    tone: "from-[oklch(0.94_0.03_200)] to-[oklch(0.82_0.08_215)]",
    overview:
      "Northwind was scaling into enterprise but its brand still read like an early-stage startup. The team needed a system, not a logo refresh.",
    challenge: "Build enterprise credibility without losing the mission or the founding voice.",
    objectives: [
      "Position for Series B fundraising",
      "Support enterprise sales with a credible identity",
      "Ship a marketing site in under 12 weeks",
      "Give the internal team a system they can extend",
    ],
    research: "Investor and customer interviews shaped the positioning and visual direction.",
    strategy: "One design system, three narrative pillars, and a marketing site that told the mission clearly.",
    solution: "A new wordmark, a motion identity, an editorial site and a component library for the internal team.",
    wireframes: "Site IA and template wireframes locked before visual design began.",
    designProcess: "Custom wordmark, considered typography, restrained color and a subtle motion language.",
    development: "Webflow with a documented component library the marketing team maintains.",
    stack: ["Figma", "After Effects", "Webflow"],
    performance: [
      { label: "Lighthouse", value: "97" },
      { label: "LCP", value: "1.6s" },
      { label: "CLS", value: "0.01" },
      { label: "A11y", value: "100" },
    ],
    seo: "New IA and technical SEO pass lifted organic sessions 78% in six months.",
    results: [
      { k: "$34M", v: "Series B raised" },
      { k: "+180%", v: "Press mentions" },
      { k: "12 wks", v: "End-to-end" },
      { k: "+78%", v: "Organic traffic" },
    ],
    testimonial: {
      q: "The brand system carried us through the raise and gave the team something to build on for years.",
      name: "Ines Duarte",
      role: "Head of Brand, Northwind",
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAdjacentCaseStudies(slug: string) {
  const idx = caseStudies.findIndex((c) => c.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const prev = idx > 0 ? caseStudies[idx - 1] : caseStudies[caseStudies.length - 1];
  const next = idx < caseStudies.length - 1 ? caseStudies[idx + 1] : caseStudies[0];
  return { prev, next };
}