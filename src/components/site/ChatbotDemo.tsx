import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Calendar, MessageCircle, Users, Zap, Phone } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

type Msg = { from: "bot" | "user"; text: string; delay: number };

const script: Msg[] = [
  { from: "bot", text: "Hi 👋 I'm Ada — Nordwell's AI concierge. What are you building?", delay: 400 },
  { from: "user", text: "A landing page for a B2B fintech launch.", delay: 1400 },
  { from: "bot", text: "Perfect. What's your target launch window?", delay: 1400 },
  { from: "user", text: "Ideally in the next 4 weeks.", delay: 1200 },
  { from: "bot", text: "Got it. Would you like to book a 20-min discovery call with our team?", delay: 1400 },
];

const features = [
  { icon: Users, t: "Lead qualification", d: "Score and route every inquiry to the right owner." },
  { icon: Calendar, t: "Appointment booking", d: "Native Cal.com & Calendly, synced to your CRM." },
  { icon: MessageCircle, t: "FAQ automation", d: "Trained on your docs, policies and product." },
  { icon: Zap, t: "CRM integration", d: "HubSpot, Salesforce, Pipedrive and Airtable." },
  { icon: Phone, t: "WhatsApp channel", d: "Same brain across web, WhatsApp and email." },
  { icon: Bot, t: "24/7 support", d: "Instant replies with graceful human handoff." },
];

export function ChatbotDemo() {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancel = false;
    async function run() {
      while (!cancel) {
        setMessages([]);
        for (const m of script) {
          if (cancel) return;
          setTyping(true);
          await new Promise((r) => setTimeout(r, m.delay));
          if (cancel) return;
          setTyping(false);
          setMessages((prev) => [...prev, m]);
          await new Promise((r) => setTimeout(r, 350));
        }
        await new Promise((r) => setTimeout(r, 3000));
      }
    }
    run();
    return () => {
      cancel = true;
    };
  }, []);

  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="AI Chatbots"
          title="Meet the concierge that never clocks out."
          description="A custom AI agent trained on your brand, wired into your stack, and designed to feel like your best salesperson."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-start">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[36px] bg-gradient-to-br from-[var(--color-accent-blue)]/12 to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-[28px] border border-border bg-card shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]">
                <div className="flex items-center justify-between border-b border-border/70 bg-muted/30 px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="grid size-8 place-items-center rounded-full bg-foreground text-background">
                      <Bot className="size-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold leading-none">Ada</div>
                      <div className="mt-1 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                        <span className="size-1.5 rounded-full bg-[var(--color-success)]" />
                        Online · replies instantly
                      </div>
                    </div>
                  </div>
                  <div className="text-[11px] text-muted-foreground">Nordwell AI</div>
                </div>

                <div className="flex min-h-[420px] flex-col gap-3 p-5 sm:p-6">
                  <AnimatePresence initial={false}>
                    {messages.map((m, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={
                          m.from === "user"
                            ? "self-end max-w-[80%] rounded-2xl rounded-br-md bg-foreground px-4 py-2.5 text-[14px] leading-snug text-background"
                            : "max-w-[80%] rounded-2xl rounded-bl-md border border-border bg-background px-4 py-2.5 text-[14px] leading-snug"
                        }
                      >
                        {m.text}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  {typing && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="inline-flex max-w-[80px] items-center gap-1 rounded-2xl rounded-bl-md border border-border bg-background px-4 py-3"
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.15 }}
                          className="size-1.5 rounded-full bg-muted-foreground"
                        />
                      ))}
                    </motion.div>
                  )}
                </div>

                <div className="border-t border-border/70 bg-muted/30 p-3">
                  <div className="flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground">
                    <span className="flex-1">Type your message…</span>
                    <span className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background">
                      Send
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal key={f.t} i={i}>
                <div className="h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:bg-accent/40">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-border bg-background">
                    <f.icon className="size-4" />
                  </div>
                  <div className="mt-4 text-sm font-semibold">{f.t}</div>
                  <div className="mt-1 text-[13px] text-muted-foreground">{f.d}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}