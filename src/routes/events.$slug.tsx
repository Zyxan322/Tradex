import { createFileRoute, notFound } from "@tanstack/react-router";
import { CTASection, PageHero } from "@/components/site/primitives";
import { events } from "@/lib/site";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const post = events.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | Tradex` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Not found" }, { name: "robots", content: "noindex" }],
  }),
  component: Page,
});

function Page() {
  const { post } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={post.category} title={post.title} text={post.excerpt} img={post.img} />
      <CTASection />
    </>
  );
}
