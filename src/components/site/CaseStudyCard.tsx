import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/content/caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
  /** Show the summary under the title. */
  withSummary?: boolean;
  /** Larger treatment for the featured projects on the listing page. */
  variant?: "default" | "large";
  className?: string;
}

/** Reusable case study card used on listing, service and solution pages. */
export default function CaseStudyCard({
  study,
  withSummary = true,
  variant = "default",
  className = "",
}: CaseStudyCardProps) {
  const large = variant === "large";

  return (
    <article className={`group relative flex h-full flex-col bg-paper ${className}`}>
      <div className="overflow-hidden border-b border-line bg-paper-deep">
        <img
          src={study.image}
          alt={study.imageAlt}
          loading="lazy"
          decoding="async"
          className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] ${
            large ? "aspect-[16/10]" : "aspect-[16/10]"
          }`}
        />
      </div>

      <div className={`flex flex-1 flex-col ${large ? "p-7 md:p-8" : "p-6 md:p-7"}`}>
        <div className="flex items-start justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
          <span className="text-tunnels-red">{study.category}</span>
          <span className="text-mist">{study.number}</span>
        </div>

        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-mist">
          {study.productLine}
        </p>
        {study.productStatus !== "Live, publicly available" && (
          <p className="mt-2 font-mono text-[9.5px] uppercase tracking-[0.12em] text-tunnels-red">
            {study.productStatus}
          </p>
        )}
        <h3
          className={`mt-2 font-display leading-snug tracking-[-0.02em] ${
            large ? "text-2xl md:text-[1.75rem]" : "text-xl"
          }`}
        >
          <Link to={`/case-studies/${study.slug}`} className="hover:text-tunnels-red">
            {study.product}
          </Link>
        </h3>

        {withSummary && (
          <p className={`mt-3 flex-1 leading-relaxed text-grey ${large ? "text-sm" : "text-[13px]"}`}>
            {large ? study.summary : study.title}
          </p>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <Link
            to={`/case-studies/${study.slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink hover:text-tunnels-red"
          >
            Case study
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          <a
            href={study.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-grey hover:text-tunnels-red"
          >
            {study.websiteLabel}
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
