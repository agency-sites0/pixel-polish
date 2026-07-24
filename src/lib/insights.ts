export type Insight = {
  slug: string;
  title: string;
  category: "Strategy" | "Design" | "AI" | "Conversion" | "SEO";
  excerpt: string;
  readingTime: string;
  author: string;
  date: string;
  tone: string;
  content: { heading?: string; body: string }[];
};

export const insights: Insight[] = [
  {
    slug: "why-your-website-doesnt-convert",
    title: "Why your website doesn't convert — and the five things that actually move the number.",
    category: "Conversion",
    excerpt:
      "Most sites don't have a design problem. They have a message problem, a proof problem and a friction problem. Here's the playbook we use with every client.",
    readingTime: "8 min read",
    author: "Ascent Studio",
    date: "April 2025",
    tone: "from-[oklch(0.94_0.03_260)] to-[oklch(0.86_0.06_240)]",
    content: [
      {
        body: "Redesigns rarely fix conversion. In our audits, the biggest wins almost never come from prettier hero sections — they come from a sharper message, better proof, less friction, and the courage to remove things.",
      },
      {
        heading: "1. Message before pixels",
        body: "Before we touch design, we write. If a founder can't explain what they sell in one sentence, no amount of typography will save the page. Message-market fit is where every conversion lift starts.",
      },
      {
        heading: "2. Proof carries the sale",
        body: "The average visitor doesn't believe your claims by default. Case studies, hard numbers, third-party validation and specific quotes convert more than any headline rewrite.",
      },
      {
        heading: "3. Fewer sections, not more",
        body: "Every extra section is a chance to lose the visitor. Ruthlessly cut anything that doesn't move a decision forward.",
      },
      {
        heading: "4. Speed is a design decision",
        body: "A 2-second load beats a 5-second animation, every time. LCP under 2s is table stakes.",
      },
      {
        heading: "5. Instrument everything",
        body: "You can't improve what you don't measure. Event tracking on every meaningful interaction is where the compounding starts.",
      },
    ],
  },
  {
    slug: "ai-chatbots-roi",
    title: "The real ROI of AI chatbots (with numbers from three engagements).",
    category: "AI",
    excerpt:
      "Chatbots either pay for themselves in a month — or they're a science project. Here's how we tell the difference before we build.",
    readingTime: "7 min read",
    author: "Ascent Studio",
    date: "March 2025",
    tone: "from-[oklch(0.93_0.03_60)] to-[oklch(0.84_0.09_45)]",
    content: [
      {
        body: "An AI assistant is either an operational hire or an expensive novelty. The line between the two isn't the model — it's whether the assistant is wired into revenue.",
      },
      {
        heading: "What actually pays back",
        body: "Booking, qualifying and routing. Every project where the assistant lives on the calendar, the CRM and the messaging channel pays back in weeks. Every project where it 'just answers questions' pays back never.",
      },
      {
        heading: "Three real engagements",
        body: "A real estate concierge now books 40% of viewings unattended. A B2B fintech assistant qualifies inbound and hands warm leads to sales in under 60 seconds. A restaurant group takes reservations, gift cards and event enquiries on WhatsApp — with a human step in only when it matters.",
      },
      {
        heading: "The hidden line item",
        body: "Ongoing tuning is not optional. Budget monthly review, prompt refinement and a small operator hour. Without it, quality drifts.",
      },
    ],
  },
  {
    slug: "website-vs-landing-page",
    title: "Website vs landing page: which one should you actually build?",
    category: "Strategy",
    excerpt:
      "The wrong pick can cost you six figures in paid spend. A simple frame we use to decide with founders in twenty minutes.",
    readingTime: "5 min read",
    author: "Ascent Studio",
    date: "March 2025",
    tone: "from-[oklch(0.92_0.06_150)] to-[oklch(0.82_0.09_170)]",
    content: [
      {
        body: "Founders often ask for 'a new website' when the fastest path to revenue is a single, sharp landing page — and vice versa.",
      },
      {
        heading: "Build a landing page when",
        body: "You have one clear offer, a paid budget behind it, and speed matters more than breadth. The page has one job: convert one audience on one campaign.",
      },
      {
        heading: "Build a website when",
        body: "You sell to multiple audiences, have a story to tell, need SEO to compound, and your brand carries weight in the deal.",
      },
      {
        heading: "The middle path",
        body: "Some clients ship a landing page first for paid, then use the wins to inform the site rebuild six weeks later. It's often the smartest sequence.",
      },
    ],
  },
  {
    slug: "seo-fundamentals-2025",
    title: "Modern SEO fundamentals: what still works in 2025.",
    category: "SEO",
    excerpt:
      "AI answers changed search, but the fundamentals didn't. Technical foundations, real content, and structured data still win.",
    readingTime: "6 min read",
    author: "Ascent Studio",
    date: "February 2025",
    tone: "from-[oklch(0.93_0.04_20)] to-[oklch(0.84_0.09_10)]",
    content: [
      {
        body: "SEO isn't dead — it's just been forced back to the fundamentals. Fast, semantic, well-structured pages with real content still win, whether the reader is human or an AI answer engine.",
      },
      {
        heading: "Technical foundations",
        body: "Semantic HTML, clean URLs, real headings, alt text and JSON-LD. Boring, still essential.",
      },
      {
        heading: "Content that answers",
        body: "AI answer engines pull from pages that answer the exact question, with structure. Long content is fine — waffle is not.",
      },
      {
        heading: "Core Web Vitals",
        body: "LCP under 2.5s, CLS under 0.1, INP under 200ms. Non-negotiable.",
      },
    ],
  },
  {
    slug: "top-website-mistakes",
    title: "Ten website mistakes we see in every audit — and how to fix them.",
    category: "Design",
    excerpt:
      "A field guide from a hundred audits. Nine out of ten sites make at least six of these mistakes.",
    readingTime: "9 min read",
    author: "Ascent Studio",
    date: "February 2025",
    tone: "from-[oklch(0.93_0.04_285)] to-[oklch(0.82_0.09_275)]",
    content: [
      {
        body: "We've audited more than a hundred sites in the last two years. The same ten mistakes show up almost every time.",
      },
      {
        heading: "1. A hero that says nothing",
        body: "'Empowering the future of X' is not a headline. Say what you do, for whom, and why now.",
      },
      {
        heading: "2. Feature lists instead of outcomes",
        body: "Nobody buys features. They buy the outcome the feature produces.",
      },
      {
        heading: "3. No proof above the fold",
        body: "One logo, one metric, one testimonial near the top. Every time.",
      },
      {
        heading: "4. CTAs that hide",
        body: "Your call to action should be the most obvious button on every screen.",
      },
      {
        heading: "5. Motion for the sake of motion",
        body: "Every animation should either delight or clarify. Otherwise it's just latency.",
      },
      {
        heading: "6. No analytics beyond pageviews",
        body: "If you don't know which section converts, you're guessing.",
      },
      {
        heading: "7. Cluttered navigation",
        body: "Five items, not fifteen. Everything else lives in the footer.",
      },
      {
        heading: "8. Weak forms",
        body: "Long forms kill conversion. Ask for three fields, enrich the rest server-side.",
      },
      {
        heading: "9. Slow images",
        body: "Modern formats, correct sizing, lazy loading. LCP under 2s or nothing.",
      },
      {
        heading: "10. No content strategy",
        body: "A pretty site with nothing to say never ranks and never earns trust.",
      },
    ],
  },
  {
    slug: "automation-for-service-businesses",
    title: "AI automation for service businesses: where to start.",
    category: "AI",
    excerpt:
      "The three workflows we ship first with almost every service business. Payback usually inside a month.",
    readingTime: "6 min read",
    author: "Ascent Studio",
    date: "January 2025",
    tone: "from-[oklch(0.94_0.03_200)] to-[oklch(0.82_0.08_215)]",
    content: [
      {
        body: "You don't need an AI strategy. You need three automations, shipped this quarter, that pay for themselves.",
      },
      {
        heading: "Lead intake & routing",
        body: "Enrich the inbound, score it, route it to the right owner, notify them on their preferred channel. This one usually pays back in weeks.",
      },
      {
        heading: "Proposal & quote",
        body: "Draft proposals from a form and a template. Human edits. Sent in a fraction of the time.",
      },
      {
        heading: "Follow-up sequences",
        body: "Nudge cold leads on a schedule with content that's actually relevant. It's the workflow most teams forget to build.",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((i) => i.slug === slug);
}

export function getRelatedInsights(slug: string, count = 3) {
  const current = getInsight(slug);
  if (!current) return insights.slice(0, count);
  return insights
    .filter((i) => i.slug !== slug)
    .sort((a, b) => (a.category === current.category ? -1 : 1))
    .slice(0, count);
}
