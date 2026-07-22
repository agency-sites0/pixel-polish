import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function FloatingCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-x-0 bottom-6 z-40 hidden justify-center px-4 md:flex"
        >
          <div className="pointer-events-auto flex items-center gap-2 rounded-full border border-border bg-background/90 p-1.5 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur-xl">
            <Link
              to="/free-audit"
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Sparkles className="size-3.5" />
              Free website audit
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background"
            >
              Book a strategy call
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
