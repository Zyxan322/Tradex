import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { images } from "@/lib/site";
import { Cta } from "./primitives";
import { Button } from "@/components/ui/button";

const slides = [
  {
    img: images.hero1,
    title: (
      <>
        Leading Independent
        <br />
        Audit &amp; Advisory Firm
        <br />
        in Dubai, UAE
      </>
    ),
    text: "Audit • Tax • Corporate Tax • Accounting • Business Advisory • Business Setup • AML Compliance Across the UAE",
  },
  {
    img: images.hero2,
    title: (
      <>
        Corporate Tax &amp;
        <br />
        VAT Solutions
      </>
    ),
    text: "Registration, filing and compliance handled with precision — and on time.",
  },
  {
    img: images.freezoneImg,
    title: (
      <>
        Business Setup
        <br />
        &amp; Advisory
      </>
    ),
    text: "Mainland, Freezone and Offshore company formation across the UAE.",
  },
  {
    img: images.hero4,
    title: (
      <>
        Audit, Accounting
        <br />
        &amp; Compliance
      </>
    ),
    text: "Statutory, internal and special audits that strengthen stakeholder confidence.",
  },
  {
    img: images.hero3,
    title: (
      <>
        International Expertise.
        <br />
        Local Understanding.
      </>
    ),
    text: "An independent member of IR Global, with reach across 170+ jurisdictions.",
  },
];

export function HeroCarousel() {
  const [i, setI] = useState(0);
  const reducedMotion = useReducedMotion();
  const s = slides[i] ?? slides[0];
  if (!s) return null;

  return (
    <section className="relative h-[calc(100svh-140px)] min-h-[620px] max-h-[900px] overflow-hidden bg-ink">
      {slides.map((slide, n) => (
        <motion.div
          key={slide.img}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: n === i ? 1 : 0 }}
          transition={{ duration: reducedMotion ? 0 : 1, ease: "easeInOut" }}
          aria-hidden
        >
          <img
            src={slide.img}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority={n === 0 ? "high" : "auto"}
          />
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-fade-up opacity-30" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pb-20 pt-8">
        <div className="grid max-w-3xl">
          {slides.map((slide, n) => (
            <motion.div
              key={n}
              initial={false}
              animate={{ opacity: n === i ? 1 : 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.5, ease: "easeInOut" }}
              className="col-start-1 row-start-1"
              aria-hidden={n !== i}
            >
              <p className="eyebrow">Independent Member of IR Global</p>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink-foreground sm:text-5xl md:text-7xl">
                {slide.title}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                {slide.text}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4">
          <Cta to="/contact">Get Free Consultation</Cta>
          <Cta to="/services" variant="ghost">
            Explore Our Services
          </Cta>
        </div>

        <div className="absolute bottom-10 left-6 right-6 flex items-end justify-between">
          <div className="flex gap-3">
            {slides.map((_, n) => (
              <Button
                key={n}
                variant="ghost"
                aria-label={`Slide ${n + 1}`}
                aria-pressed={n === i}
                onClick={() => setI(n)}
                className="group flex h-8 items-center rounded-none px-0 hover:bg-transparent"
              >
                <span className="relative block h-[2px] w-10 overflow-hidden bg-ink-foreground/25 md:w-16">
                  {n === i && !reducedMotion && (
                    <motion.span
                      className="absolute inset-0 origin-left bg-brand"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 7, ease: "linear" }}
                    />
                  )}
                </span>
              </Button>
            ))}
          </div>
          <div className="hidden flex-col items-center gap-2 text-[10px] font-semibold tracking-[0.3em] text-ink-muted md:flex">
            <span className="flex h-10 w-6 justify-center rounded-full border border-ink-foreground/30 pt-2">
              <span className="h-2 w-1 rounded-full bg-brand" />
            </span>
            SCROLL
          </div>
        </div>
      </div>
    </section>
  );
}
