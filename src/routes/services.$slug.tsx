import { createFileRoute, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CTASection, PageHero } from "@/components/site/primitives";
import { images, services } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} | Tradex` },
          { name: "description", content: loaderData.service.short },
          { property: "og:title", content: `${loaderData.service.title} | Tradex` },
          { property: "og:description", content: loaderData.service.short },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Not found" }, { name: "robots", content: "noindex" }],
  }),
  component: Page,
});

function Page() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow="Service" title={service.title} text={service.short} img={images.hero2} />
      <section className="bg-background py-24">
        <ul className="mx-auto grid max-w-4xl gap-3 px-6 sm:grid-cols-2">
          {service.points.map((p) => (
            <li
              key={p}
              className="hover-3d flex items-center gap-3 rounded-xl border p-5 font-semibold"
            >
              <Check className="h-5 w-5 text-brand" />
              {p}
            </li>
          ))}
        </ul>
      </section>
      <CTASection />
    </>
  );
}
