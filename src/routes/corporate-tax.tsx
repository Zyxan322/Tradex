import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero, Reveal } from "@/components/site/primitives";
import { images } from "@/lib/site";

export const Route = createFileRoute("/corporate-tax")({
  head: () => ({
    meta: [
      { title: "Corporate Tax | Tradex Auditing of Accounts" },
      {
        name: "description",
        content:
          "End-to-end UAE Corporate Tax and VAT support — registration, filing, compliance and e-invoicing assistance.",
      },
      { property: "og:title", content: "Corporate Tax | Tradex" },
      {
        property: "og:description",
        content:
          "End-to-end UAE Corporate Tax and VAT support — registration, filing, compliance and e-invoicing assistance.",
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
        eyebrow="UAE Corporate Tax"
        title="Corporate Tax registration, filing & advisory"
        text="End-to-end UAE Corporate Tax and VAT support — registration, filing, compliance and e-invoicing assistance."
        img={images.hero4}
      />
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {[images.hero1, images.hero3, images.handshakeImg].map((src, i) => (
            <Reveal key={i} delay={i * 0.1} className="hover-3d overflow-hidden rounded-2xl">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
