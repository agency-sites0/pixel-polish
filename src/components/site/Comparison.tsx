import { Check, X } from "lucide-react";
import { Reveal, SectionHeader } from "./Reveal";

const rows = [
  { label: "Senior team on every project", us: true, them: false, agency: "Junior teams behind account managers" },
  { label: "Business KPIs agreed before design", us: true, them: false, agency: "Deliverables agreed, outcomes optional" },
  { label: "Strategy, design, engineering and AI in-house", us: true, them: false, agency: "Chained hand-offs and freelancers" },
  { label: "Fixed scope, fixed timeline", us: true, them: false, agency: "Change requests and creep" },
  { label: "Post-launch growth partnership", us: true, them: false, agency: "Delivered and gone" },
  { label: "Case studies with real numbers", us: true, them: false, agency: "Screenshots and adjectives" },
];

export function Comparison() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-5">
        <SectionHeader
          eyebrow="Why teams choose us"
          title="A different kind of studio."
          description="Most agencies are optimised for hours billed. We're optimised for the numbers you present at your next board meeting."
        />

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-3xl border border-border bg-card">
            <div className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 border-b border-border bg-muted/40 px-6 py-4 text-xs font-medium uppercase tracking-widest text-muted-foreground sm:gap-6 sm:px-8">
              <div>How we compare</div>
              <div className="text-center text-foreground">Nordwell</div>
              <div className="text-center">Typical agency</div>
            </div>
            <ul>
              {rows.map((r) => (
                <li
                  key={r.label}
                  className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 border-b border-border px-6 py-5 text-sm last:border-b-0 sm:gap-6 sm:px-8"
                >
                  <div className="font-medium text-foreground">{r.label}</div>
                  <div className="flex justify-center">
                    <span className="grid size-7 place-items-center rounded-full bg-foreground text-background">
                      <Check className="size-3.5" />
                    </span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <span className="grid size-7 place-items-center rounded-full border border-border bg-background text-muted-foreground">
                      <X className="size-3.5" />
                    </span>
                    <span className="text-[11px] text-muted-foreground">{r.agency}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}