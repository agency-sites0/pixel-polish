export type Service = {
  slug: "websites" | "landing-pages" | "ai-chatbots" | "automation";
  name: string;
  tag: string;
  headline: string;
  lede: string;
  problems: string[];
  deliverables: string[];
  benefits: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  pricingFrom: string;
  timeline: string;
  caseSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "websites",
    name: "Conversion Websites",
    tag: "01",
    headline: "A website engineered to grow the business — not just look good.",
    lede: "Bespoke marketing sites built around one goal: turning the right visitors into revenue. Considered story, editorial design, engineering that lasts.",
    problems: [
      "Your site looks the part but doesn't move the numbers.",
      "Traffic arrives, reads nothing, and leaves.",
      "The team is afraid to change anything without breaking it.",
      "You've outgrown the template — but not the budget for a rebuild.",
    ],
    deliverables: [
      "Positioning & messaging workshop",
      "Custom design system & component library",
      "10–20 page marketing site, fully bespoke",
      "Editorial CMS your team can actually use",
      "Analytics, events and conversion tracking",
      "Technical SEO, schema and Core Web Vitals",
    ],
    benefits: [
      { title: "More qualified leads", body: "Sales gets warmer conversations, not more forms to sort." },
      { title: "Compounding SEO", body: "Every page is engineered to rank and keep ranking." },
      { title: "A brand you're proud of", body: "A site your team is happy to send to any prospect, investor or hire." },
      { title: "Ownership, not lock-in", body: "You own the code, the content and the analytics — forever." },
    ],
    faq: [
      { q: "How long does a website engagement take?", a: "Most sites launch in 4–8 weeks depending on scope. We work in weekly milestones with a demo every Friday." },
      { q: "Do you build on WordPress?", a: "By default we ship on modern stacks — Next.js, TanStack Start or Framer — with a headless CMS. WordPress on request." },
      { q: "What happens after launch?", a: "You can keep us on a care plan for ongoing design, development, CRO and SEO — or take it fully in-house." },
      { q: "Can you migrate from our current site?", a: "Yes. We map every URL, preserve SEO equity and land the migration without a traffic dip." },
    ],
    pricingFrom: "$18k",
    timeline: "4–8 weeks",
    caseSlugs: ["halcyon", "lumen"],
  },
  {
    slug: "landing-pages",
    name: "High-Converting Landing Pages",
    tag: "02",
    headline: "One page. One decision. Every visit optimised for a yes.",
    lede: "A sharp, research-led landing page designed around a single conversion — with instrumentation to prove what works and iterate weekly.",
    problems: [
      "You're paying for traffic that bounces before it reads the offer.",
      "Your best campaigns are stuck at a lousy conversion rate.",
      "You can't tell which variant, headline or CTA is winning.",
      "Design agencies deliver 'pages' — not tested revenue engines.",
    ],
    deliverables: [
      "Message-market fit workshop",
      "Wireframes A/B-tested against real audience",
      "Custom design & motion",
      "Analytics, heatmaps and event tracking",
      "A/B testing framework (PostHog / GA4)",
      "First round of optimisation post-launch",
    ],
    benefits: [
      { title: "Lower cost per lead", body: "Better conversion drops CAC across every paid channel." },
      { title: "A compounding advantage", body: "Every experiment feeds the next — your funnel gets sharper every month." },
      { title: "Sales-ready leads", body: "Qualifying questions right in the form, not after five follow-ups." },
      { title: "Speed & clarity", body: "One page ships in weeks, not months — and can carry your entire paid budget." },
    ],
    faq: [
      { q: "Do you handle paid ads too?", a: "We work with your existing paid team or introduce a trusted partner. Our focus is the page and the funnel." },
      { q: "How fast can we launch?", a: "Most pages launch in 2–4 weeks including research and testing." },
      { q: "Can you build multiple variants?", a: "Yes — we usually ship 2–3 variants for split testing at launch." },
      { q: "What tools do you use for CRO?", a: "PostHog, GA4, Hotjar or your existing stack. We meet you where you are." },
    ],
    pricingFrom: "$6k",
    timeline: "2–4 weeks",
    caseSlugs: ["fieldnote", "vantage"],
  },
  {
    slug: "ai-chatbots",
    name: "AI Assistants",
    tag: "03",
    headline: "An always-on assistant that answers, qualifies and books — on brand.",
    lede: "A bespoke AI assistant trained on your business, wired into your calendar, CRM and messaging — with graceful human handoff.",
    problems: [
      "Inquiries pile up after hours and your best leads go cold.",
      "Your team answers the same 30 questions every week.",
      "Generic chatbots make your brand look cheap.",
      "You need coverage but can't justify another hire.",
    ],
    deliverables: [
      "Intent design & conversation map",
      "Custom knowledge base from your content",
      "Bespoke voice and refusal patterns",
      "Website widget + WhatsApp / Messenger",
      "Calendar & CRM integration",
      "Analytics dashboard & monthly tuning",
    ],
    benefits: [
      { title: "Meetings while you sleep", body: "Qualified viewings and calls booked at 2am, straight into agent calendars." },
      { title: "Faster reply times", body: "Every inquiry answered in under 60 seconds — 24/7, on every channel." },
      { title: "On-brand, always", body: "Voice, tone and limits designed as carefully as your visual identity." },
      { title: "Human when it matters", body: "A graceful handoff moment when the AI knows to step aside." },
    ],
    faq: [
      { q: "Which model do you use?", a: "Usually OpenAI or Anthropic depending on task, orchestrated with our own guardrails. We benchmark for your use case." },
      { q: "Where does the knowledge come from?", a: "Your site, docs, product pages and any internal PDFs — indexed into a vector store you own." },
      { q: "Can it book meetings?", a: "Yes. It connects to Google / Outlook / Calendly and books directly, respecting availability rules." },
      { q: "What about hallucinations?", a: "We constrain answers to your knowledge base, add refusal patterns and log every conversation for review." },
    ],
    pricingFrom: "$9k",
    timeline: "3–5 weeks",
    caseSlugs: ["meridian", "halcyon"],
  },
  {
    slug: "automation",
    name: "Business Automation",
    tag: "04",
    headline: "Custom workflows that quietly do the work your team shouldn't.",
    lede: "Automations that connect your site, inbox, CRM and internal tools — so leads, quotes and follow-ups happen without a human clicking anywhere.",
    problems: [
      "Your team is stuck in manual work software should be doing.",
      "Leads leak between tools that don't talk to each other.",
      "Follow-ups happen when someone remembers — or don't happen at all.",
      "Reporting is a monthly spreadsheet exercise.",
    ],
    deliverables: [
      "Process audit & opportunity map",
      "Custom workflows in n8n / Make / Zapier",
      "CRM, email and calendar integrations",
      "AI enrichment where it earns its keep",
      "Notifications & escalation rules",
      "Documentation & handover",
    ],
    benefits: [
      { title: "Reclaim ops hours", body: "Give the team back the hours they lose to copy-paste, every single week." },
      { title: "Faster sales cycles", body: "Instant enrichment, routing and follow-up — deals move without anyone chasing." },
      { title: "Scale without hiring", body: "Grow the business without proportionally growing headcount." },
      { title: "Data you can trust", body: "One source of truth, updated in real time, ready for reporting." },
    ],
    faq: [
      { q: "Do we need to change tools?", a: "Usually no — we automate around your existing stack. If a tool is holding you back, we'll say so." },
      { q: "Who owns the automations?", a: "You do. Everything is documented and handed over so your team can maintain it." },
      { q: "What about security?", a: "Least-privilege API keys, logging, and no data stored outside your systems by default." },
      { q: "Do you maintain them long-term?", a: "Optional care plan available — otherwise you own the stack fully." },
    ],
    pricingFrom: "$5k",
    timeline: "2–4 weeks",
    caseSlugs: ["meridian", "vantage"],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}