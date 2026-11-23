import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import { insights, insightCategories, formatDate, type InsightCategory } from "@/content/insights";

type Filter = InsightCategory | "All";

export default function Insights() {
  const [filter, setFilter] = useState<Filter>("All");
  const featured = insights.find((article) => article.featured) ?? insights[0];

  const filtered = useMemo(
    () => (filter === "All" ? insights : insights.filter((article) => article.category === filter)),
    [filter],
  );

  return (
    <>
      <SEO
        title="Insights | Engineering Perspectives on AI, Cloud & Modernisation"
        description="Tunnels engineering perspectives on enterprise AI implementation, cloud and infrastructure, enterprise architecture, modernisation, security and reliability."
        path="/insights"
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />

      <PageHeader
        eyebrow="Insights"
        title="Engineering perspective, written from current work."
        lede="Notes on the decisions that determine whether enterprise technology programmes hold up: architecture, data boundaries, operating models and the discipline of production."
        crumbs={[{ label: "Insights" }]}
        aside={
          <div className="border-l border-line pl-6">
            <p className="eyebrow text-[10px]">Editorial position</p>
            <p className="mt-3 text-[13px] leading-relaxed text-grey">
              We publish technical positions, not thought-leadership filler. No vendor promotion, no
              performance claims without measurement.
            </p>
          </div>
        }
      />

      {/* Featured */}
      <section className="border-b border-line bg-paper-deep py-12 md:py-16">
        <div className="shell">
          <Link
            to={`/insights/${featured.slug}`}
            className="group grid gap-6 border border-line bg-paper p-7 md:grid-cols-12 md:gap-10 md:p-10"
          >
            <div className="md:col-span-7">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
                <span className="bg-tunnels-red px-2 py-1 text-white">Featured</span>
                <span className="text-grey">{featured.category}</span>
              </div>
              <h2 className="mt-6 max-w-2xl font-display text-2xl leading-tight tracking-[-0.02em] group-hover:text-tunnels-red md:text-[2.3rem]">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-grey">{featured.dek}</p>
            </div>
            <div className="flex flex-col justify-between md:col-span-5">
              <p className="text-sm leading-relaxed text-graphite">{featured.excerpt}</p>
              <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-mist">
                  {formatDate(featured.date)} · {featured.readTime}
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-ink/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filter + list */}
      <section className="bg-paper py-12 md:py-16">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 border-t border-line pt-6 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter insights by topic">
              {(["All", ...insightCategories] as Filter[]).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setFilter(category)}
                  aria-pressed={filter === category}
                  className={`border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                    filter === category
                      ? "border-ink bg-ink text-paper"
                      : "border-line text-grey hover:border-ink hover:text-ink"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-mist" aria-live="polite">
              {filtered.length} {filtered.length === 1 ? "article" : "articles"}
            </p>
          </div>

          <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article, index) => (
              <Reveal key={article.slug} delay={index * 30} className="bg-paper">
                <Link
                  to={`/insights/${article.slug}`}
                  className="group flex h-full flex-col bg-paper p-7 transition-colors hover:bg-paper-bright"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em]">
                    <span className="text-tunnels-red">{article.category}</span>
                    <span className="text-mist">{article.readTime}</span>
                  </div>
                  <h3 className="mt-6 font-display text-xl leading-snug tracking-[-0.015em] group-hover:text-tunnels-red">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">{article.excerpt}</p>
                  <p className="mt-6 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-mist">
                    {formatDate(article.date)}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-sm text-grey">No articles in this category yet.</p>
          )}
        </div>
      </section>

      <CtaBand
        title="Have a technical question we have not written about?"
        copy="Send it. If it is a problem we can help scope, we will say so; if it is not, we will point you in a more useful direction."
      />
    </>
  );
}
