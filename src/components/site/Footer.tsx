import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navItems, services } from "@/lib/site";
import { BrandLogo } from "@/components/site/BrandLogo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t bg-background text-muted-foreground">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="inline-block">
            <BrandLogo className="h-20 w-[260px] object-contain" />
          </div>
          <p className="mt-6 text-sm leading-relaxed">
            TRADEX Auditing of Accounts LLC — a Dubai-based audit and assurance firm established in
            2012 and an independent member of IR Global.
          </p>
        </div>
        <div>
          <h3 className="eyebrow">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="transition-colors hover:text-brand-blue">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="transition-colors hover:text-brand-blue"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand" />
              <a href={`mailto:${contact.email}`} className="break-all hover:text-brand-blue">
                {contact.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 shrink-0 text-brand" />
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-brand-blue">
                {contact.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-brand" />
              <span>{contact.offices[0]?.lines.slice(1).join(", ")}</span>
            </li>
            <li className="text-xs">{contact.hours}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs md:flex-row">
          <span>
            © {new Date().getFullYear()} Tradex Auditing of Accounts LLC. All rights reserved.
          </span>
          <span>An Independent Member of IR Global · Since 2012</span>
        </div>
      </div>
    </footer>
  );
}
