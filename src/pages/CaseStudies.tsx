import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import Reveal from "@/components/site/Reveal";
import CaseStudyCard from "@/components/site/CaseStudyCard";
import { caseStudies, caseStudyCategories, type CaseStudyCategory } from "@/content/caseStudies";
import { SITE } from "@/lib/site";

type Filter = CaseStudyCategory | "All";

const method = [
  {
    number: "01",
    title: "Product identity, stated plainly",
    copy: "Each record names the product, links to the live site and describes what it does. No anonymous references and no invented projects.",
  },
  {
    number: "02",
    title: "The engineering, not just the result",
    copy: "Business context, the problem, the constraints and the decisions behind the build, written so a technical reviewer can assess the approach.",
  },
  {
    number: "03",
    title: "Attribution kept accurate",
    copy: "Where Tunnels built the platform, the record says so. Where the contribution was partial or a partnership, the record says that instead.",
  },
];

export default function CaseStudies() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered =
    filter === "All" ? caseStudies : caseStudies.filter((study) => study.category === filter);
  return (
    <>
      <SEO
        title="Selected Client Work | Case Studies"
        description="Selected client work from Tunnels Global: Zura, Postject, Listdem, Drawra, Stitches En Vogue, okaneats, payrendr and Rendezvouscare, documented with business context, engineering approach and precise attribution."
        path="/case-studies"
        structuredData={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Selected Client Work",
            url: `${SITE.url}/case-studies`,
            description:
              "Selected client work from Tunnels Global: technology products and business systems engineered for clients.",
            isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
            hasPart: caseStudies.map((study) => ({
              "@type": "Article",
              name: `${study.product} case study`,
              url: `${SITE.url}/case-studies/${study.slug}`,
            })),
          },
        ]}
      />

      <PageHeader
        eyebrow="Selected Client Work"
        title="Engineering products and platforms that solve real business problems."
        lede="A selection of digital platforms, business systems and technology solutions across commerce, developer infrastructure and business operations."
        crumbs={[{ label: "Case Studies" }]}
        aside={
          <div className="border-l border-line pl-6">
            <p className="eyebrow text-[10px]">Attribution standard</p>
            <p className="mt-3 text-[13px] leading-relaxed text-grey">
              Full builds, partial contributions and technical partnerships are described as they were.
            </p>
          </div>
        }
      />

      <section className="border-b border-line bg-paper-deep py-10 md:py-12">
        <div className="shell">
          <div className="flex flex-wrap items-baseline justify-between gap-5 border-t border-line pt-6">
            <p className="max-w-2xl text-sm leading-relaxed text-graphite">
              {caseStudies.length} documented engineering projects, across commerce, developer tooling and
              business operations. Each entry links to the product so the work can be seen rather than taken
              on trust; where a product is not yet publicly available, the record says so.
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-mist">
              Selected client work · 2018 to present
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-12 md:py-16">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 border-t border-line pt-6 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter client work by category">
              {(["All", ...caseStudyCategories] as Filter[]).map((category) => (
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
              {filtered.length} {filtered.length === 1 ? "project" : "projects"}
            </p>
          </div>

          {filter === "All" ? (
            <>
              <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2">
                {filtered.map((study, index) => (
                  <Reveal key={study.slug} delay={index * 40} className="bg-paper">
                    <CaseStudyCard study={study} variant="large" />
                  </Reveal>
                ))}
              </div>
            </>
          ) : (
            <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-2">
              {filtered.map((study, index) => (
                <Reveal key={study.slug} delay={index * 40} className="bg-paper">
                  <CaseStudyCard study={study} variant="large" />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="border-y border-line bg-paper-deep py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">How these are written</p>
            <h2 className="display-md mt-5">Evidence, with the edges left on.</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-grey">
              A case study is only useful if it shows the reasoning and the boundary of the work. Each
              record is structured so a technical reviewer can assess the approach and a buyer can assess
              the fit.
            </p>
            <div className="mt-8">
              <Link
                to="/engineering-approach"
                className="group inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-tunnels-red"
              >
                Read the engineering approach
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="border-t border-line">
              {method.map((item) => (
                <li key={item.number} className="grid gap-3 border-b border-line py-6 sm:grid-cols-12 sm:gap-6">
                  <span className="font-mono text-[10px] text-tunnels-red sm:col-span-2 sm:pt-1">
                    {item.number}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="font-display text-lg tracking-[-0.01em]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey">{item.copy}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBand
        title="Need a reference for a specific kind of engagement?"
        copy="Tell us what you are assessing and we will say what we can evidence, what we cannot, and what a reference conversation would cover."
      />
    </>
  );
}
