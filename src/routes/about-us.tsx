import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero, Reveal } from "@/components/site/primitives";
import { images } from "@/lib/site";

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Tradex Auditing of Accounts" },
      {
        name: "description",
        content:
          "TRADEX Auditing of Accounts LLC is a Dubai-based leading audit and assurance firm established in 2012 and an independent member of IR Global.",
      },
      { property: "og:title", content: "About Us | Tradex" },
      {
        property: "og:description",
        content:
          "TRADEX Auditing of Accounts LLC is a Dubai-based leading audit and assurance firm established in 2012 and an independent member of IR Global.",
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
        eyebrow="About Tradex"
        title="An independent audit & assurance firm in Dubai"
        text="TRADEX Auditing of Accounts LLC is a Dubai-based leading audit and assurance firm established in 2012 and an independent member of IR Global."
        img={images.hero2}
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
