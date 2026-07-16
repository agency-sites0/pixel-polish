import { Banknote, HeartPulse, Building2, ShoppingBag, GraduationCap, Rocket, Scale, Sprout } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const industries = [
  { icon: Banknote, t: "Fintech & SaaS", d: "Positioning complex platforms for enterprise buyers." },
  { icon: Building2, t: "Real Estate", d: "AI concierges that book viewings around the clock." },
  { icon: ShoppingBag, t: "DTC & Retail", d: "Editorial commerce that raises AOV without discounts." },
  { icon: HeartPulse, t: "Health & Wellness", d: "Trust-first sites for regulated, high-consideration buyers." },
  { icon: GraduationCap, t: "Education", d: "Enrolment funnels and student-facing AI support." },
  { icon: Rocket, t: "Startups", d: "Series A–C teams turning traction into a category leader." },
  { icon: Scale, t: "Professional Services", d: "Law, accounting and consulting firms winning inbound." },
  { icon: Sprout, t: "Climate & Impact", d: "Serious brands for teams doing serious work." },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Industries"
          title="Businesses we work with."
          description="We stay close to a handful of industries so we can move fast and know what actually works."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((it, i) => (
            <Reveal key={it.t} i={i} className="bg-card">
              <div className="flex h-full flex-col gap-4 p-6 transition-colors hover:bg-accent/40">
                <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-background">
                  <it.icon className="size-4" />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold tracking-tight">{it.t}</div>
                  <div className="mt-1 text-[13px] text-muted-foreground">{it.d}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}