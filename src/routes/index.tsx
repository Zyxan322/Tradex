import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { HeroCarousel } from "@/components/site/HeroCarousel";
import { CTASection, Counter, Cta, Reveal, SectionHeading } from "@/components/site/primitives";
import { PostCard, ServiceCard } from "@/components/site/cards";
import { events, featured, freeZones, images, recognitions, services } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tradex | Leading Independent Audit & Advisory Firm in Dubai, UAE" },
      {
        name: "description",
        content:
          "Audit, VAT, Corporate Tax, accounting, business setup and AML compliance across the UAE. Independent member of IR Global since 2012.",
      },
      { property: "og:title", content: "Tradex | Audit & Advisory Firm in Dubai" },
      {
        property: "og:description",
        content:
          "Independent audit, tax and advisory firm in Dubai. Member of IR Global since 2012.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const stats = [
  { n: 2012, label: "Established", raw: true },
  { n: 5000, suffix: "+", label: "Clients Served" },
  { n: 170, suffix: "+", label: "Jurisdictions through IR Global" },
];

function Home() {
  return (
    <>
      <HeroCarousel />
      <Stats />
      <About />
      <Expertise />
      <Featured />
      <Formation />
      <Tax />
      <Auditing />
      <Network />
      <Recognition />
      <Insights />
      <CTASection />
    </>
  );
}

function Stats() {
  return (
    <section className="relative z-10 -mt-px bg-ink pb-24">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-line bg-ink-line px-0 md:grid-cols-4 mx-6 xl:mx-auto">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="hover-3d bg-ink-2 p-8 md:p-10">
            <div className="text-4xl font-extrabold tracking-tight text-ink-foreground md:text-5xl">
              {s.raw ? <Counter to={s.n} /> : <Counter to={s.n} suffix={s.suffix ?? ""} />}
            </div>
            <div className="mt-3 h-[2px] w-8 bg-gradient-brand" />
            <p className="mt-3 text-sm text-ink-muted">{s.label}</p>
          </Reveal>
        ))}
        <Reveal delay={0.3} className="hover-3d bg-ink-2 p-8 md:p-10">
          <div className="text-4xl font-extrabold tracking-tight text-ink-foreground md:text-5xl">
            UAE
          </div>
          <div className="mt-3 h-[2px] w-8 bg-gradient-brand" />
          <p className="mt-3 text-sm text-ink-muted">All Seven Emirates</p>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative overflow-hidden bg-background py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-elevated">
            <img
              src={images.hero1}
              alt="Dubai skyline at dusk"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 rounded-2xl bg-ink p-6 shadow-elevated md:-right-10">
            <p className="text-4xl font-extrabold text-ink-foreground">Since 2012</p>
            <p className="mt-1 text-sm text-ink-muted">Independent member of IR Global</p>
          </div>
        </div>
        <div>
          <SectionHeading eyebrow="About Tradex" title="Welcome to Tradex" />
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              TRADEX Auditing of Accounts LLC is a Dubai-based leading audit and assurance firm
              established in 2012 and an independent member of IR Global.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Chartered Accountants &amp; Consultancy Firm offering audit, tax, accounting, business
              setup and advisory services to businesses across all seven Emirates.
            </p>
            <div className="mt-10">
              <Cta to="/about-us" variant="outline">
                Discover Tradex
              </Cta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section className="relative overflow-hidden bg-surface py-28">
      <div className="absolute inset-0 dot-grid-light" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our Expertise"
            title={
              <>
                Comprehensive services,
                <br />
                one trusted partner.
              </>
            }
          />
          <Reveal>
            <Cta to="/services" variant="outline">
              All Services
            </Cta>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 8).map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.08}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Featured Business Solutions"
          title="Specialised solutions for UAE businesses"
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.1}>
              <Link
                to="/services/$slug"
                params={{ slug: f.slug }}
                className="hover-3d group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-ink"
              >
                <img
                  src={f.img}
                  alt={f.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-fade-up" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-xl font-bold text-ink-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-ink-muted">{f.text}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Learn More{" "}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Formation() {
  const items = [
    "Mainland",
    "Freezone",
    "Offshore",
    "Corporate Structures",
    "Business Registration",
    "Licensing",
    "Advisory",
  ];
  return (
    <section className="relative overflow-hidden bg-ink py-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            dark
            eyebrow="Company Formation"
            title="Build Your Business in the UAE"
            text="From choosing the right jurisdiction to licensing and ongoing advisory — we guide every step."
          />
          <Reveal delay={0.2} className="mt-10">
            <Cta to="/contact">Free Consultation</Cta>
          </Reveal>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {items.map((t, i) => (
              <Reveal key={t} delay={i * 0.06}>
                <div>
                  <div
                    className={`hover-3d rounded-xl border border-ink-line bg-ink-2 p-5 ${i === 0 ? "sm:col-span-1" : ""}`}
                  >
                    <span className="text-[11px] font-bold tracking-widest text-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-6 font-semibold text-ink-foreground">{t}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.5}>
              <div className="hover-3d flex h-full items-center justify-center rounded-xl bg-gradient-brand p-5 text-center text-sm font-bold text-primary-foreground">
                All Seven Emirates
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tax() {
  const items = [
    "VAT Registration & Filing",
    "Excise Tax",
    "Corporate Tax Registration & Filing",
    "Tax Compliance",
    "E-Invoicing Assistance",
  ];
  const bars = [40, 62, 48, 75, 58, 82, 66, 90, 72, 95, 80, 70];
  return (
    <section className="relative overflow-hidden bg-background py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex h-64 items-end justify-center gap-3 px-6 opacity-[0.07]"
      >
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-full max-w-16 rounded-t bg-brand-blue"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Tax Services"
          title="VAT & Corporate Tax, handled precisely"
          text="Registration, filing and ongoing compliance with the UAE Federal Tax Authority."
        />
        <div className="space-y-3">
          {items.map((t, i) => (
            <Reveal key={t} delay={i * 0.08}>
              <Link
                to="/corporate-tax"
                className="hover-3d group flex items-center justify-between rounded-xl border bg-card px-6 py-5 transition-all hover:border-brand hover:shadow-elevated"
              >
                <span className="flex items-center gap-4 font-semibold text-foreground">
                  <Check className="h-5 w-5 text-brand" />
                  {t}
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-brand" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Auditing() {
  const items = [
    "External & Internal Audits",
    "Statutory Audits",
    "Management Audits",
    "Special Audits",
    "Investigative Audits",
  ];
  return (
    <section className="relative overflow-hidden bg-ink-2 py-28">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          dark
          center
          eyebrow="Auditing"
          title="Expertise in Auditing Accounts in Dubai"
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 60, rotateX: 25 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformPerspective: 1000 }}
            >
              <Link
                to="/services/$slug"
                params={{ slug: "audit" }}
                className="hover-3d group block h-full rounded-2xl border border-ink-line bg-ink/60 p-7 backdrop-blur transition-colors hover:border-brand"
              >
                <span className="text-3xl font-extrabold text-gradient-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-10 font-semibold leading-snug text-ink-foreground">{t}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Network() {
  return (
    <section className="bg-surface py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            eyebrow="UAE Network"
            title="Across every major free zone"
            text="We support businesses registered across the UAE's leading free zones and authorities."
          />
          <div className="mt-10 flex flex-wrap gap-2">
            {freeZones.map((z) => (
              <span
                key={z}
                className="hover-3d peer rounded-full border bg-card px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:border-brand hover:text-brand"
              >
                {z}
              </span>
            ))}
          </div>
        </div>
        <div className="hover-3d overflow-hidden rounded-2xl shadow-elevated">
          <iframe
            title="Google Maps location of Tradex Auditing of Accounts in JAFZA, Dubai"
            src="https://www.google.com/maps?q=LB+16,+2nd+Floor,+Office+207,+JAFZA+P.O.+Box+120591,+Dubai,+UAE&output=embed"
            className="aspect-[4/3] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

function Recognition() {
  return (
    <section className="border-y bg-background py-20">
      <div className="mx-auto max-w-7xl px-6">
        <p className="eyebrow text-center">Professional Recognition</p>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border md:grid-cols-5">
          {recognitions.map((r) => (
            <div
              key={r}
              className="hover-3d flex min-h-28 items-center justify-center bg-background p-6 text-center text-sm font-bold text-muted-foreground grayscale transition-all hover:text-brand-blue"
            >
              {r}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Insights() {
  const first = events[0];
  const rest = events.slice(1);
  if (!first) return null;
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Events & News" title="Latest from Tradex" />
          <Reveal>
            <Cta to="/events" variant="outline">
              All Events
            </Cta>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <PostCard post={first} kind="events" large />
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2">
            {rest.slice(0, 4).map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <PostCard post={p} kind="events" />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
