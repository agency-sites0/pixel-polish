# Evolving Nordwell into a complete agency website

Goal: keep the existing editorial visual language (thin borders, large display type, generous whitespace, minimal color, soft shadows) and expand the current single page into a real multi-page agency site with stronger storytelling, trust and conversion.

I will **not** redesign what's already there. I'll refine copy on the homepage, add a few new homepage sections, and build out dedicated pages that reuse the current components and tokens.

---

## 1. New site structure (TanStack routes)

```
/                         Home (kept, refined)
/work                     Portfolio grid with filters + search
/case-studies/$slug       Existing premium case study (kept)
/services                 Services overview
/services/websites        Conversion Websites
/services/landing-pages   Landing Pages
/services/ai-chatbots     AI Chatbots (product-style page)
/services/automation      Business Automation
/about                    Studio, philosophy, values, process
/insights                 Journal index
/insights/$slug           Article template (shared)
/contact                  Project inquiry (expanded form)
/free-audit               Free website audit request (new CTA destination)
```

Shared `__root.tsx` gets: refined Navbar with primary CTA "Book strategy call" + secondary "Free audit", sticky floating CTA on desktop, expanded Footer (Nav, Services, Industries, Resources, Case Studies, Newsletter, Social, Legal), scroll progress, sonner.

## 2. Homepage refinements (keep, don't redesign)

- Tighten Hero copy → business-outcome headline, add "Free 15-min audit" secondary link next to primary CTA.
- Keep Services, Results, Comparison, Industries, Projects, ChatbotDemo, Pricing, Testimonials, FAQ, CTA.
- Add three new sections in the current visual style:
  - **Philosophy** — "We start with the business, not the design."
  - **Framework** — Discover → Strategy → Design → Develop → Optimize → Grow (thin-border stepper).
  - **After launch** — Launch → Analytics → SEO → CRO → Growth support.
- Refresh copy across Services / WhyUs / Results / CTA / Contact to speak to business owners (no jargon, no buzzwords).

## 3. Work page (`/work`)

Premium grid reusing case-study data. Each card: cover, industry tag, category tag, one-line description, headline outcome metric, hover reveal, "View case study" link. Filter chips (Website / Landing Page / AI Chatbot / Automation / Architecture / Healthcare / Restaurant / Real Estate) + search input. Client-side filtering, no backend.

## 4. Services pages

One shared `ServicePage` component driven by data. Each service page has: hero, "problems we solve", deliverables, process (reuses Framework), benefits, mini case studies (2 cards), service FAQ, CTA. AI Chatbots page is upgraded into a **product-style page**: interactive demo (reuse ChatbotDemo), industry conversation examples (restaurant / law / clinic / architecture), lead qualification & booking flow diagram, CRM/WhatsApp/OpenAI integration row, "Without AI vs With AI" comparison, benefits, FAQ, pricing anchor, CTA.

## 5. About, Contact, Insights, Free audit

- **About**: mission, values, philosophy, working process, principles, quiet behind-the-scenes list, team ethos (small senior team, no juniors).
- **Contact**: expanded inquiry — company, website, industry, goals, budget, timeline, services (multi-select), AI needs, notes. Calendly + WhatsApp + email + location + response-time note. Zod validation.
- **Insights**: journal index with 6 seed articles (Why sites don't convert, AI chatbots ROI, Website vs Landing Page, Website mistakes, SEO fundamentals, AI automation for service businesses). Shared article template with cover, category, reading time, author, related.
- **Free audit**: focused single-page inquiry — URL, business goal, biggest concern, email — with clear "what you'll get in 48 hours" list.

## 6. Global conversion + trust

- Navbar CTAs: primary "Book a call", ghost "Free audit".
- Sticky bottom-right floating CTA on desktop (Book call · Free audit).
- Expanded, structured Footer with Newsletter and legal.
- Trust bar under hero already present — refresh copy.

## 7. SEO

Per-route `head()` with title, description, og:title/description/type, og:url, canonical (leaf-only), JSON-LD where relevant (Organization on root, Article on insights, Service on service pages, BreadcrumbList on deep routes). `public/robots.txt` and a TanStack `sitemap.xml` route enumerating all public routes and dynamic case studies + insights.

## 8. Motion & interactions

Keep the current Reveal + subtle hover translate/shadow language. Add: animated counters on Results, quiet filter transitions on Work, focus-ring polish on inputs. No new gradients, no flashy motion.

## Technical notes

- New content in `src/lib/` data modules: `services.ts`, `industries.ts`, `insights.ts` (case studies already in `case-studies.ts`).
- New components under `src/components/site/`: `Philosophy`, `Framework`, `AfterLaunch`, `FloatingCTA`, plus page-level compositions for Work / Services / About / Insights / Contact / Free audit.
- Keep imports type-safe; add route files then update `Navbar` and `Footer` links.
- All colors continue to use existing semantic tokens; no hardcoded hex.

## Out of scope

- No CMS, no auth, no database — Insights and Work are static data modules.
- No real Calendly account wiring — placeholder link, ready for the user's URL.
- No email backend — Contact/Free audit show toast success and are ready to wire to a server function later.
