import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";
import { LogoLink } from "@/components/brand/Logo";
import { SITE } from "@/lib/site";
import { companyAddress } from "@/content/company";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="shell py-16 md:py-20">
        <div className="grid gap-12 border-b border-line-dark pb-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <LogoLink variant="light" size="md" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-paper/60">
              An enterprise technology and engineering company. We design, build, modernise and operate the
              systems that complex organisations depend on.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2.5 text-sm text-paper/75 transition-colors hover:text-paper"
              >
                <Mail className="h-4 w-4 text-tunnels-red" aria-hidden="true" />
                {SITE.email}
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-paper/75 transition-colors hover:text-paper"
              >
                <Linkedin className="h-4 w-4 text-tunnels-red" aria-hidden="true" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 text-paper/40" aria-hidden="true" />
              </a>
              <address className="flex items-start gap-2.5 pt-1 text-sm not-italic leading-relaxed text-paper/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tunnels-red" aria-hidden="true" />
                <span>
                  <span className="block font-mono text-[9.5px] uppercase tracking-[0.14em] text-paper/40">
                    Registered office
                  </span>
                  <span className="mt-1 block">{companyAddress.line1}</span>
                  <span className="block">
                    {companyAddress.city}, {companyAddress.country}
                  </span>
                  <span className="block">{companyAddress.postcode}</span>
                </span>
              </address>
            </div>
          </div>

          <nav aria-label="Services" className="lg:col-span-3">
            <p className="eyebrow text-paper/40">Services</p>
            <ul className="mt-5 space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-[13.5px] leading-relaxed text-paper/70 transition-colors hover:text-paper"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Solutions" className="lg:col-span-3">
            <p className="eyebrow text-paper/40">Solutions</p>
            <ul className="mt-5 space-y-2.5">
              {solutions.map((solution) => (
                <li key={solution.slug}>
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className="text-[13.5px] leading-relaxed text-paper/70 transition-colors hover:text-paper"
                  >
                    {solution.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="lg:col-span-2">
            <p className="eyebrow text-paper/40">Company</p>
            <ul className="mt-5 space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Engineering Approach", href: "/engineering-approach" },
                { label: "Engagement Models", href: "/engagement-models" },
                { label: "Industries", href: "/industries" },
                { label: "Insights", href: "/insights" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-[13.5px] text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-paper/35">
              Est. {SITE.founded}
            </p>
          </nav>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {SITE.legalName}. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em]">
            {SITE.operatingName} · Enterprise technology &amp; engineering
          </p>
        </div>
      </div>
    </footer>
  );
}
