import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeaderProps {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  crumbs?: { label: string; href?: string }[];
  aside?: ReactNode;
}

export default function PageHeader({ eyebrow, title, lede, crumbs, aside }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
      <div className="shell relative pb-14 pt-12 md:pb-20 md:pt-16">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mist">
              <li>
                <Link to="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              {crumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-line" aria-hidden="true" />
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-ink">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-grey">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-tunnels-red" aria-hidden="true" />
              <p className="eyebrow text-grey">{eyebrow}</p>
            </div>
            <h1 className="display-xl max-w-3xl">{title}</h1>
            {lede && <p className="lede mt-7 max-w-2xl">{lede}</p>}
          </div>
          {aside && <div className="lg:col-span-4 lg:pt-16">{aside}</div>}
        </div>
      </div>
    </section>
  );
}
