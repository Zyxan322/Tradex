import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero, Reveal } from "@/components/site/primitives";
import { PostCard } from "@/components/site/cards";
import { images, events } from "@/lib/site";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events | Tradex Auditing of Accounts" },
      { name: "description", content: "Events and insights from Tradex Auditing of Accounts LLC." },
      { property: "og:title", content: "Events | Tradex" },
      { property: "og:description", content: "Events and insights from Tradex." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Events" img={images.eventImg} />
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <PostCard post={p} kind="events" />
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
