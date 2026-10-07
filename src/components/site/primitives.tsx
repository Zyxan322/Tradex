import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  return (
    <span>
      {to}
      {suffix}
    </span>
  );
}

type CtaProps = {
  to: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  params?: Record<string, string>;
};
export function Cta({ to, children, variant = "primary", className, params }: CtaProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300";
  const v = {
    primary: "bg-brand text-primary-foreground shadow-brand",
    ghost:
      "border border-ink-foreground/30 text-ink-foreground backdrop-blur-sm hover:border-ink-foreground hover:bg-ink-foreground/10",
    outline: "border border-foreground/15 text-foreground hover:border-brand hover:text-brand",
  }[variant];
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Link to={to as any} params={params as any} className={cn(base, v, className)}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  dark,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl",
          dark ? "text-ink-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {text && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            dark ? "text-ink-muted" : "text-muted-foreground",
          )}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  img,
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  img: string;
}) {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden bg-ink pb-20 pt-40">
      <motion.img
        src={img}
        alt=""
        initial={{ scale: 1.15 }}
        animate={{ scale: 1.04 }}
        transition={{ duration: 2.4, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-fade-up" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-ink-foreground md:text-6xl">
            {title}
          </h1>
          {text && <p className="mt-6 max-w-2xl text-lg text-ink-muted">{text}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function CTASection({
  title = "Ready to work with a firm that's on time?",
  text = "Speak with our auditors and advisors. Your first consultation is free.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-28">
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="eyebrow">“We are on Time”</p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-ink-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-ink-muted">{text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Cta to="/contact">Get Free Consultation</Cta>
            <Cta to="/services" variant="ghost">
              Explore Our Services
            </Cta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ArrowBadge() {
  return (
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current/20 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}
