import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tradex | Audit & Advisory in Dubai" },
      {
        name: "description",
        content:
          "Contact Tradex Auditing of Accounts in Dubai for audit, tax, accounting and business advisory enquiries.",
      },
      { property: "og:title", content: "Contact Tradex | Dubai" },
      {
        property: "og:description",
        content:
          "Speak with the Tradex team about audit, tax and business advisory services in the UAE.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow">Contact Tradex</p>
          <h1 className="mt-5 text-4xl font-bold text-foreground md:text-6xl">
            Let's talk business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Speak with our team about audit, tax, accounting and business advisory in the UAE.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href={`mailto:${contact.email}?subject=Consultation%20enquiry`}>
                <Mail /> Email Our Team
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                <Phone /> {contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-background py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
            <a
              className="mt-6 flex items-center gap-3 break-all text-muted-foreground hover:text-brand-blue"
              href={`mailto:${contact.email}`}
            >
              <Mail className="h-5 w-5 shrink-0 text-brand" />
              {contact.email}
            </a>
            {contact.mobiles.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="mt-4 flex items-center gap-3 text-muted-foreground hover:text-brand-blue"
              >
                <Phone className="h-5 w-5 shrink-0 text-brand" />
                {phone}
              </a>
            ))}
            <p className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="h-5 w-5 shrink-0 text-brand" />
              {contact.hours}
            </p>
          </div>
          {contact.offices.map((office) => (
            <div key={office.title}>
              <MapPin className="h-6 w-6 text-brand" />
              <h2 className="mt-4 text-2xl font-bold text-foreground">{office.title}</h2>
              <address className="mt-5 not-italic leading-7 text-muted-foreground">
                {office.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
              <Button asChild variant="link" className="mt-4 px-0">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.lines.join(", "))}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Map <ArrowUpRight />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
