import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/site/BrandLogo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b bg-background transition-shadow duration-300",
        scrolled && "shadow-elevated",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link to="/" className="hover-3d flex shrink-0 items-center py-1">
          <BrandLogo className="h-14 w-[210px] object-contain" />
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="nav-underline text-[13px] font-semibold transition-colors text-foreground/75 hover:text-foreground data-[status=active]:text-brand-blue"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="btn-sweep hidden rounded-full px-5 text-[13px] font-bold shadow-brand sm:inline-flex"
          >
            <Link to="/contact">Get an Appointment</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((o) => !o)}
            className="h-11 w-11 rounded-full text-foreground xl:hidden"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t bg-background xl:hidden"
          >
            <div className="flex max-h-[calc(100svh-80px)] flex-col overflow-y-auto px-6 py-4">
              {navItems.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  activeOptions={{ exact: n.to === "/" }}
                  className="border-b py-4 text-lg font-semibold text-foreground data-[status=active]:text-brand"
                >
                  {n.label}
                </Link>
              ))}
              <Button asChild className="mt-5 shrink-0 rounded-full">
                <Link to="/contact">Get an Appointment</Link>
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
