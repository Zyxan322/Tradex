import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero, Reveal } from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/cards";
import { images, services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services | Tradex Auditing of Accounts" },
      {
        name: "description",
        content: "Audit, tax, accounting, business setup, AML and advisory services in the UAE.",
      },
      { property: "og:title", content: "Services | Tradex" },
      {
        property: "og:description",
        content: "Audit, tax, accounting, business setup and advisory in the UAE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Our Expertise"
        title="Services"
        text="Comprehensive audit, tax and advisory services across the UAE."
        img={images.hero3}
      />
      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <ServiceCard service={s} index={i} />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
