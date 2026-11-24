import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { LogoLink } from "@/components/brand/Logo";
import { PRIMARY_NAV } from "@/lib/site";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";

const isCurrent = (pathname: string, href: string) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"services" | "solutions" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <header
      ref={navRef}
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="shell flex h-[74px] items-center justify-between gap-6">
        <LogoLink />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {PRIMARY_NAV.map((item) => {
            const hasMenu = item.label === "Services" || item.label === "Solutions";
            const key = item.label.toLowerCase() as "services" | "solutions";
            const active = isCurrent(location.pathname, item.href);

            if (!hasMenu) {
              return (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) =>
                    `relative px-2.5 py-2 text-[13px] transition-colors xl:px-3.5 xl:text-[13.5px] ${
                      isActive ? "text-ink" : "text-graphite hover:text-ink"
                    }`
                  }
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-tunnels-red" aria-hidden="true" />
                  )}
                </NavLink>
              );
            }

            return (
              <div key={item.href} className="relative">
                <button
                  type="button"
                  aria-expanded={openMenu === key}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(openMenu === key ? null : key)}
                  onMouseEnter={() => setOpenMenu(key)}
                  className={`flex items-center gap-1 px-2.5 py-2 text-[13px] transition-colors xl:px-3.5 xl:text-[13.5px] ${
                    active || openMenu === key ? "text-ink" : "text-graphite hover:text-ink"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${openMenu === key ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-tunnels-red" aria-hidden="true" />
                  )}
                </button>
              </div>
            );
          })}
        </nav>

        {/* The enquiry CTA appears from xl; below that, Contact remains in the nav. */}
        <div className="hidden items-center gap-5 xl:flex">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-ink px-5 py-3 text-[13px] font-medium text-paper transition-colors hover:bg-tunnels-red"
          >
            Discuss a Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-[13px] font-medium text-ink lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span>{mobileOpen ? "Close" : "Menu"}</span>
        </button>
      </div>

      {/* Desktop dropdown */}
      {openMenu && (
        <div
          className="absolute inset-x-0 top-full hidden border-b border-line bg-paper shadow-[0_24px_40px_-32px_rgba(13,13,14,0.35)] lg:block"
          onMouseLeave={() => setOpenMenu(null)}
        >
          <div className="shell grid grid-cols-12 gap-10 py-10">
            <div className="col-span-8">
              <p className="eyebrow mb-5">
                {openMenu === "services" ? "Five service divisions" : "Six commercial solutions"}
              </p>
              <ul className="grid grid-cols-2 gap-x-10 gap-y-1">
                {(openMenu === "services" ? services : solutions).map((entry) => (
                  <li key={entry.slug}>
                    <Link
                      to={`/${openMenu}/${entry.slug}`}
                      className="group flex gap-4 border-t border-line/80 py-3.5"
                    >
                      <span className="pt-0.5 font-mono text-[10px] text-mist">{entry.number}</span>
                      <span>
                        <span className="flex items-center gap-2 text-sm font-medium text-ink group-hover:text-tunnels-red">
                          {entry.name}
                          <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-grey">
                          {"tagline" in entry ? entry.tagline : entry.short}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-4 border-l border-line pl-10">
              <p className="eyebrow mb-5">Start here</p>
              <p className="font-display text-xl leading-snug tracking-[-0.02em]">
                Not sure which engagement fits? Describe the problem and we will scope it with you.
              </p>
              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-tunnels-red"
              >
                Discuss a project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
              <Link to="/insights" className="mt-4 block text-xs text-grey hover:text-ink">
                Read our engineering perspectives
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`fixed inset-x-0 top-[74px] z-40 h-[calc(100dvh-74px)] overflow-y-auto bg-paper px-6 pb-16 pt-6 lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <nav aria-label="Mobile" className="divide-y divide-line">
          {PRIMARY_NAV.map((item) => (
            <div key={item.href} className="py-1">
              <NavLink
                to={item.href}
                className="flex items-center justify-between py-4 font-display text-2xl tracking-[-0.02em]"
              >
                {item.label}
                <ArrowRight className="h-4 w-4 text-mist" aria-hidden="true" />
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="mt-8">
          <p className="eyebrow mb-3">Service divisions</p>
          <ul className="space-y-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/services/${service.slug}`} className="text-sm text-graphite hover:text-tunnels-red">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <p className="eyebrow mb-3">Solutions</p>
          <ul className="space-y-2.5">
            {solutions.map((solution) => (
              <li key={solution.slug}>
                <Link to={`/solutions/${solution.slug}`} className="text-sm text-graphite hover:text-tunnels-red">
                  {solution.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          to="/contact"
          className="mt-10 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-sm font-medium text-paper"
        >
          Discuss a Project
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}
