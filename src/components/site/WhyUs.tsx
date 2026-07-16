import { Award, Zap, Cpu, Search, Sparkles, LifeBuoy } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const items = [
  { icon: Award, title: "Premium quality", body: "Every pixel and interaction crafted by senior designers and engineers." },
  { icon: Zap, title: "Fast delivery", body: "Most sites ship in 3–5 weeks with weekly milestones you can trust." },
  { icon: Cpu, title: "Modern stack", body: "Next.js, TypeScript, Tailwind, Supabase — production-grade defaults." },
  { icon: Search, title: "SEO built in", body: "Semantic HTML, schema, sitemaps and Core Web Vitals baked from day one." },
  { icon: Sparkles, title: "AI integration", body: "Chatbots, content and automation woven into your product, not bolted on." },
  { icon: LifeBuoy, title: "Dedicated support", body: "Slack channel, weekly reviews and long-term care plans available." },
];

export function WhyUs() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Why Nordwell"
          title="A studio, not a factory."
          description="Small enough to care about the details. Senior enough to make the calls that ship revenue."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} i={i} className="bg-card">
              <div className="group h-full p-8 transition-colors hover:bg-accent/50">
                <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-background transition-transform duration-500 group-hover:-rotate-6">
                  <it.icon className="size-5" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}