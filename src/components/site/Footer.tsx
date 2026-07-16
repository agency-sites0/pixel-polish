import { Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-foreground text-background text-[13px] font-bold">
                N
              </span>
              <span className="font-display text-[15px] font-semibold tracking-tight">Nordwell</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A boutique studio for websites, landing pages and AI automation.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex max-w-sm items-center gap-2 rounded-full border border-border bg-background p-1.5"
            >
              <input
                type="email"
                placeholder="Your email · monthly notes"
                className="flex-1 bg-transparent px-3 text-sm outline-none placeholder:text-muted-foreground/70"
              />
              <button className="inline-flex items-center gap-1 rounded-full bg-foreground px-3.5 py-1.5 text-xs font-medium text-background">
                Subscribe <ArrowUpRight className="size-3" />
              </button>
            </form>
          </div>
          <FooterCol
            title="Studio"
            links={[
              ["Services", "#services"],
              ["Work", "#work"],
              ["Process", "#process"],
              ["Pricing", "#pricing"],
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              ["About", "#"],
              ["Journal", "#"],
              ["Careers", "#"],
              ["Contact", "#contact"],
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              ["Privacy", "#"],
              ["Terms", "#"],
              ["Cookies", "#"],
              ["Security", "#"],
            ]}
          />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nordwell Studio. Handcrafted in Lisbon.
          </div>
          <div className="flex items-center gap-2">
            {[
              { Icon: Twitter, label: "Twitter" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Github, label: "GitHub" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid size-9 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Big wordmark */}
        <div
          aria-hidden
          className="mt-16 select-none overflow-hidden text-center font-display text-[22vw] font-semibold leading-none tracking-tighter text-foreground/[0.04]"
        >
          NORDWELL
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}