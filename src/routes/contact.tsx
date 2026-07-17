import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { Toaster, toast } from "sonner";
import { ArrowUpRight, Calendar, Mail, MessageCircle, MapPin, Check } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";
import { Reveal, SectionHeader } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a project · Nordwell" },
      { name: "description", content: "Tell us about your business and the number you want to move. We reply within one business day." },
      { property: "og:title", content: "Contact · Nordwell" },
      { property: "og:description", content: "Start a project with a boutique studio for websites, landing pages and AI automation." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://elevated-experience-co.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://elevated-experience-co.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  website: z.string().trim().max(200).optional(),
  industry: z.string().trim().max(80).optional(),
  budget: z.string().trim().max(60).optional(),
  timeline: z.string().trim().max(60).optional(),
  services: z.array(z.string()).min(1, "Pick at least one service"),
  goal: z.string().trim().min(10, "Tell us what you want to move").max(1000),
});

const serviceOptions = [
  "Website",
  "Landing Page",
  "AI Chatbot",
  "Automation",
  "Brand system",
  "Ongoing support",
];

const budgetOptions = ["< $10k", "$10k – $25k", "$25k – $50k", "$50k – $100k", "$100k+"];
const timelineOptions = ["ASAP", "1–3 months", "3–6 months", "Later this year", "Just exploring"];

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(s: string) {
    setSelected((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company") || undefined,
      website: form.get("website") || undefined,
      industry: form.get("industry") || undefined,
      budget: form.get("budget") || undefined,
      timeline: form.get("timeline") || undefined,
      services: selected,
      goal: form.get("goal"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks — we'll be in touch within one business day.");
      (e.target as HTMLFormElement).reset();
      setSelected([]);
    }, 800);
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main className="pt-32">
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeader
              align="left"
              eyebrow="Start a project"
              title="Let's turn your website into growth."
              description="Tell us the number you want to move. We'll reply within one business day with the fastest path — even if it isn't with us."
            />
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
              <div className="space-y-4">
                <ContactCard icon={<Calendar className="size-4" />} title="Book a 30-min call" sub="Calendly · same-week availability" href="#" />
                <ContactCard icon={<Mail className="size-4" />} title="hello@nordwell.studio" sub="Reply within one business day" href="mailto:hello@nordwell.studio" />
                <ContactCard icon={<MessageCircle className="size-4" />} title="WhatsApp" sub="+1 (415) 555-0134" href="#" />
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" /> Lisbon · Amsterdam · Remote worldwide
                </div>
                <Reveal>
                  <ul className="mt-6 space-y-2 rounded-2xl border border-border bg-card p-6 text-sm">
                    {[
                      "Honest read on what's holding your funnel back",
                      "Ranked list of the highest-leverage moves",
                      "Realistic scope, timeline and investment",
                      "No follow-up dance — you get value even if we never work together",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-foreground text-background"><Check className="size-2.5" /></span>
                        <span className="text-foreground/80">{b}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal>
                <form onSubmit={onSubmit} className="relative overflow-hidden rounded-[28px] border border-border bg-card p-6 sm:p-8">
                  <div className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Project inquiry</div>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <Field label="Name*" name="name" />
                    <Field label="Email*" name="email" type="email" />
                    <Field label="Company" name="company" />
                    <Field label="Current website" name="website" placeholder="https://" />
                    <Field label="Industry" name="industry" placeholder="e.g. Fintech, DTC, Health" />
                  </div>

                  <div className="mt-6">
                    <label className="mb-2 block text-xs font-medium text-muted-foreground">Services you're interested in*</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => toggle(s)}
                          className={
                            "rounded-full border px-3.5 py-1.5 text-sm transition-colors " +
                            (selected.includes(s)
                              ? "border-foreground bg-foreground text-background"
                              : "border-border bg-background text-foreground/70 hover:text-foreground")
                          }
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Budget</label>
                      <select name="budget" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-[14px] outline-none">
                        <option value="">Select…</option>
                        {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">Timeline</label>
                      <select name="timeline" className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-[14px] outline-none">
                        <option value="">Select…</option>
                        {timelineOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="mb-1.5 block text-xs font-medium text-muted-foreground">What's the goal?*</label>
                    <textarea
                      name="goal"
                      rows={5}
                      placeholder="The number you want to move, what you've tried, timelines that matter."
                      className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-[14px] outline-none placeholder:text-muted-foreground/70"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-70"
                  >
                    {loading ? "Sending…" : "Send inquiry"}
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">We reply within one business day. Your details stay with us.</p>
                </form>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
      <Toaster position="bottom-right" theme="light" />
    </div>
  );
}

function ContactCard({ icon, title, sub, href }: { icon: React.ReactNode; title: string; sub: string; href: string }) {
  return (
    <a href={href} className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:bg-accent/40">
      <div className="flex items-center gap-3">
        <div className="grid size-10 place-items-center rounded-xl border border-border bg-background">{icon}</div>
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-muted-foreground">{sub}</div>
        </div>
      </div>
      <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-[14px] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/50"
      />
    </div>
  );
}