import { Reveal, SectionHeader } from "./Reveal";

const tech = [
  "Next.js",
  "React",
  "Tailwind",
  "Node.js",
  "Vercel",
  "OpenAI",
  "n8n",
  "Supabase",
  "PostgreSQL",
  "Framer Motion",
  "GSAP",
  "TypeScript",
];

export function Tech() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="Stack"
          title="Modern tools. Boring reliability."
          description="We choose technology by what ships fastest and lasts longest — never by what's loudest."
        />

        <Reveal>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
            {tech.map((t) => (
              <div
                key={t}
                className="group flex h-24 items-center justify-center bg-card text-sm font-medium text-muted-foreground transition-all hover:bg-accent/50 hover:text-foreground"
              >
                <span className="font-display text-lg font-semibold tracking-tight transition-transform duration-500 group-hover:-translate-y-0.5">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}