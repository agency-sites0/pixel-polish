import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowUpRight, Calendar, Mail, MapPin, MessageCircle, Check } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(100).optional(),
  budget: z.string().trim().max(60).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

export function Contact() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: form.get("name"),
      email: form.get("email"),
      company: form.get("company") || undefined,
      budget: form.get("budget") || undefined,
      message: form.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks — we'll be in touch within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 800);
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Strategy call"
              title="Let's turn your website into growth."
              description="A 30-minute conversation where we listen, share what's working for businesses like yours, and outline the highest-leverage next move. No pitch."
            />

            <Reveal>
              <ul className="mt-8 grid gap-2.5 text-sm">
                {[
                  "Honest read on what's holding your funnel back",
                  "Concrete opportunities ranked by business impact",
                  "Realistic scope, timeline and investment",
                  "Zero obligation — most calls end with a plan, not a proposal",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-foreground text-background">
                      <Check className="size-2.5" />
                    </span>
                    <span className="text-foreground/80">{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="mt-10 grid gap-3">
                <a
                  href="#"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:bg-accent/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl border border-border bg-background">
                      <Calendar className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Book a 30-min strategy call</div>
                      <div className="text-xs text-muted-foreground">Calendly · same-week availability</div>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="mailto:hello@nordwell.studio"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:bg-accent/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl border border-border bg-background">
                      <Mail className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">hello@nordwell.studio</div>
                      <div className="text-xs text-muted-foreground">We reply within 24 hours</div>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#"
                  className="group flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4 transition-colors hover:bg-accent/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl border border-border bg-background">
                      <MessageCircle className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">WhatsApp</div>
                      <div className="text-xs text-muted-foreground">+1 (415) 555-0134</div>
                    </div>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" />
                  Studio · Lisbon · Amsterdam · Remote
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-[28px] border border-border bg-card p-6 sm:p-8"
            >
              <div className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Or send us the brief
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" />
                <Field label="Company" name="company" placeholder="Company (optional)" />
                <Field label="Budget" name="budget" placeholder="e.g. $10k–$25k" />
              </div>
              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-medium text-muted-foreground">
                  What are you trying to grow?
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="A few lines on your business, the number you're trying to move, and any timeline."
                  className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-[14px] outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-foreground/50"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5 disabled:opacity-70"
              >
                {loading ? "Sending…" : "Request a strategy call"}
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <p className="mt-3 text-center text-[11px] text-muted-foreground">
                We reply within one business day. Your details stay with us.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
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