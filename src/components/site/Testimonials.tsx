import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const quotes = [
  {
    q: "Demo requests tripled in the first 90 days. The site paid for itself before we finished the next release cycle.",
    name: "Priya Shah",
    role: "VP Marketing, Halcyon",
    company: "Halcyon",
  },
  {
    q: "They don't just build sites. They think like operators — every decision anchored to revenue, not aesthetics. That clarity compounds.",
    name: "Marc Devlin",
    role: "Founder, Fieldnote",
    company: "Fieldnote",
  },
  {
    q: "The AI concierge handles 40% of viewing requests unattended. ROI within the first month. Genuinely a revenue multiplier.",
    name: "Sofia Aramburu",
    role: "COO, Meridian",
    company: "Meridian",
  },
  {
    q: "We launched in 5 weeks instead of our planned 12. Quality is uncompromising. I'd partner with them again in a heartbeat.",
    name: "Elliot Grant",
    role: "CEO, Vantage",
    company: "Vantage",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => setI((v) => (v + 1) % quotes.length), 6000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader eyebrow="Testimonials" title="Trusted by teams who don't settle." />

        <Reveal>
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className="size-4 fill-[var(--color-accent-blue)] text-[var(--color-accent-blue)]"
                  />
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="mt-6 text-balance font-display text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
                    “{quotes[i].q}”
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-[var(--color-accent-blue)] to-foreground font-display text-sm font-semibold text-background">
                        {quotes[i].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <div className="text-sm font-semibold">{quotes[i].name}</div>
                        <div className="text-xs text-muted-foreground">{quotes[i].role}</div>
                      </div>
                    </div>
                    <div className="font-display text-sm font-semibold tracking-tight text-muted-foreground">
                      {quotes[i].company}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex gap-1.5">
                {quotes.map((_, k) => (
                  <button
                    key={k}
                    onClick={() => setI(k)}
                    className={
                      "h-1.5 rounded-full transition-all " +
                      (i === k ? "w-6 bg-foreground" : "w-1.5 bg-border")
                    }
                    aria-label={`Show testimonial ${k + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setI((v) => (v - 1 + quotes.length) % quotes.length)}
                  className="grid size-9 place-items-center rounded-full border border-border bg-background transition-colors hover:bg-accent"
                  aria-label="Previous"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  onClick={() => setI((v) => (v + 1) % quotes.length)}
                  className="grid size-9 place-items-center rounded-full border border-border bg-background transition-colors hover:bg-accent"
                  aria-label="Next"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
