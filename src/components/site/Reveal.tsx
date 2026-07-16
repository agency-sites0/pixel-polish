import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 },
  }),
};

export function Reveal({
  children,
  i = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  i?: number;
  className?: string;
  as?: "div" | "section" | "span" | "p" | "h2" | "h3";
}) {
  const MotionTag = motion[Tag] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      custom={i}
    >
      {children}
    </MotionTag>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto flex max-w-2xl flex-col items-center text-center"
          : "flex max-w-2xl flex-col"
      }
    >
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-[var(--color-accent-blue)]" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal i={1}>
        <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-[56px]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal i={2}>
          <p className="mt-5 text-balance text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}