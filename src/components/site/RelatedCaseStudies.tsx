import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/caseStudies";

interface RelatedCaseStudiesProps {
  studies: CaseStudy[];
  /** Section label, e.g. "Selected Client Work". */
  label?: string;
  title?: string;
  copy?: string;
}

/**
 * Related case studies block, shared by service and solution detail pages so the
 * navigation path from business problem to evidence stays consistent.
 */
export default function RelatedCaseStudies({
  studies,
  label = "Selected Client Work",
  title = "Related client work",
  copy,
}: RelatedCaseStudiesProps) {
  if (studies.length === 0) return null;
  const shown = studies.slice(0, 4);

  return (
    <section className="border-t border-line bg-paper-deep py-14 md:py-16">
      <div className="shell">
        <div className="flex flex-col justify-between gap-4 border-t border-line pt-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">{label}</p>
            <h2 className="mt-3 font-display text-2xl tracking-[-0.02em] md:text-3xl">{title}</h2>
          </div>
          <Link
            to="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-tunnels-red"
          >
            All case studies
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        {copy && <p className="mt-4 max-w-2xl text-sm leading-relaxed text-grey">{copy}</p>}

        <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {shown.map((study) => (
            <div key={study.slug} className="group flex flex-col bg-paper">
              <Link to={`/case-studies/${study.slug}`} className="block overflow-hidden border-b border-line">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-tunnels-red">
                  {study.category}
                </span>
                <h3 className="mt-2 font-display text-lg leading-snug tracking-[-0.015em]">
                  <Link to={`/case-studies/${study.slug}`} className="hover:text-tunnels-red">
                    {study.product}
                  </Link>
                </h3>
                <p className="mt-1.5 flex-1 text-[12.5px] leading-relaxed text-grey">{study.productLine}</p>
                {study.productStatus !== "Live, publicly available" && (
                  <span className="mt-3 font-mono text-[9px] uppercase tracking-[0.12em] text-tunnels-red">
                    {study.productStatus}
                  </span>
                )}
                <span className="mt-4 font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist">
                  {study.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
