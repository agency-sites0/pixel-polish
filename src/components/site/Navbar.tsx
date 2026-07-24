import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const links: { to: string; label: string }[] = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 160);
    setScrolled(y > 24);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -100 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-6"
    >
      <div
        className={cn(
          "flex w-full max-w-6xl items-center justify-between rounded-full border border-border/60 px-4 py-2.5 sm:px-6 transition-all duration-500",
          scrolled
            ? "bg-background/70 backdrop-blur-xl shadow-[0_1px_0_0_rgba(255,255,255,0.6)_inset,0_10px_40px_-20px_rgba(15,23,42,0.25)]"
            : "bg-background/40 backdrop-blur-md",
        )}
      >
        <Link to="/" className="flex items-center gap-2">
          <span className="grid size-7 place-items-center rounded-lg bg-foreground text-background text-[13px] font-bold">
            N
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight">Ascent</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/free-audit"
            className="hidden rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent md:inline-flex"
          >
            Free audit
          </Link>
          <Link
            to="/contact"
            className="group hidden items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-all hover:opacity-90 md:inline-flex"
          >
            Book a strategy call
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid size-9 place-items-center rounded-full border border-border/60 bg-background/60 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-x-4 top-20 rounded-3xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-lg font-medium text-foreground hover:bg-accent"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/free-audit"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full border border-border px-4 py-3 text-sm font-medium text-foreground"
            >
              Free audit
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
            >
              Book a strategy call <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
