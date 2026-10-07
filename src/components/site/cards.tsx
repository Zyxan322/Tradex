import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Calculator,
  FileCheck2,
  Landmark,
  Receipt,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Post, Service } from "@/lib/site";

const icons = [
  ShieldCheck,
  Receipt,
  Landmark,
  Building2,
  BadgeCheck,
  Calculator,
  FileCheck2,
  Briefcase,
  Users,
];

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = icons[index % icons.length]!;
  return (
    <div className="h-full">
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="hover-3d group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-7 transition-shadow duration-500 hover:shadow-elevated"
      >
        <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-brand transition-transform duration-500 group-hover:scale-x-100" />
        <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Icon
          className="mt-6 h-8 w-8 text-brand-blue transition-colors duration-300 group-hover:text-brand"
          strokeWidth={1.5}
        />
        <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand opacity-0 transition-all duration-300 group-hover:opacity-100">
          Learn more <ArrowUpRight className="h-4 w-4" />
        </span>
      </Link>
    </div>
  );
}

export function PostCard({
  post,
  kind,
  large,
}: {
  post: Post;
  kind: "events" | "blogs";
  large?: boolean;
}) {
  const to = kind === "events" ? "/events/$slug" : "/blogs/$slug";
  return (
    <Link to={to} params={{ slug: post.slug }} className="hover-3d group block rounded-2xl">
      <div
        className={`relative overflow-hidden rounded-2xl ${large ? "aspect-[16/10]" : "aspect-[4/3]"}`}
      >
        <img
          src={post.img}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-foreground">
          {post.category}
        </span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold tracking-widest text-muted-foreground">{post.date}</p>
        <h3
          className={`mt-2 font-bold leading-snug text-foreground transition-colors group-hover:text-brand ${large ? "text-2xl md:text-3xl" : "text-lg"}`}
        >
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
      </div>
    </Link>
  );
}
