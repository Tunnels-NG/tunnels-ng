import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import { scenarios } from "@/content/scenarios";
import { services } from "@/content/services";
import { getSolution } from "@/content/solutions";

type Filter = string | "all";

export default function EngineeringScenarios() {
  const [filter, setFilter] = useState<Filter>("all");

  const divisions = useMemo(
    () => services.filter((service) => scenarios.some((scenario) => scenario.division === service.slug)),
    [],
  );

  const filtered = useMemo(
    () => (filter === "all" ? scenarios : scenarios.filter((scenario) => scenario.division === filter)),
    [filter],
  );

  const divisionName = (slug: string) => services.find((service) => service.slug === slug)?.shortName ?? slug;

  return (
    <>
      <SEO
        title="Engineering Challenges | Modernisation, AI, Cloud, Integration & Reliability | Tunnels Global"
        description="Illustrative engineering challenges: legacy modernisation, enterprise AI, cloud infrastructure, systems integration, reliability, data consolidation and acquisition."
        path="/engineering-scenarios"
        structuredData={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Challenges", path: "/engineering-scenarios" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Engineering Challenges",
            url: "https://tunnelsng.com/engineering-scenarios",
            description:
              "Problem-led engineering scenarios describing how Tunnels analyses and approaches complex enterprise technology problems.",
            isPartOf: { "@type": "WebSite", name: "Tunnels Global", url: "https://tunnelsng.com" },
            hasPart: scenarios.map((scenario) => ({
              "@type": "WebPage",
              name: scenario.title,
              url: `https://tunnelsng.com/engineering-scenarios/${scenario.slug}`,
            })),
          },
        ]}
      />

      <PageHeader
        eyebrow="Engineering scenarios"
        title="Complex problems. Thoughtful engineering. Measurable outcomes."
        lede="Every organisation encounters technology challenges that demand more than off-the-shelf solutions. From modernising legacy infrastructure to implementing intelligent systems and engineering resilient platforms, we approach complex problems with technical depth, architectural discipline and a clear understanding of business objectives."
        crumbs={[{ label: "Challenges" }]}
        aside={
          <div className="border-t-2 border-ink pt-5">
            <p className="eyebrow text-[10px]">The set</p>
            <p className="mt-3 font-display text-2xl tracking-[-0.02em]">{scenarios.length} scenarios</p>
            <p className="mt-4 text-[13px] leading-relaxed text-grey">
              Illustrative engineering scenarios, not client engagements. Each one sets out how we take a
              class of problem apart: the context we establish, the constraints we test, the decisions we
              record and the trade-offs we accept. No client identity, data or result is disclosed.
            </p>
          </div>
        }
      />

      {/* Introduction */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">How to read these</p>
            <h2 className="display-md mt-5">Engineering thinking, stated plainly.</h2>
          </div>
          <div className="space-y-5 lg:col-span-7 lg:col-start-6">
            <p className="text-xl leading-relaxed tracking-[-0.01em] text-ink md:text-[1.5rem] md:leading-[1.5]">
              Explore representative engineering scenarios that demonstrate how we think, approach
              challenges and design solutions.
            </p>
            <p className="body-copy">
              Each scenario follows the same structure: the business context, why the problem is difficult,
              the approach we would take, the architecture it implies, and the outcomes the work is designed
              to produce. Trade-offs and alternatives are stated rather than hidden.
            </p>
            <p className="text-sm leading-relaxed text-grey">
              These are proposals and methods, not a record of delivered work. Where an outcome cannot be
              supported by evidence, it is described as a capability rather than a number.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + list */}
      <section className="border-y border-line bg-paper-deep py-14 md:py-20">
        <div className="shell">
          <div className="flex flex-col justify-between gap-5 border-t border-line pt-6 md:flex-row md:items-center">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter scenarios by engineering division">
              {[{ slug: "all", shortName: "All scenarios" }, ...divisions].map((division) => (
                <button
                  key={division.slug}
                  type="button"
                  onClick={() => setFilter(division.slug)}
                  aria-pressed={filter === division.slug}
                  className={`border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                    filter === division.slug
                      ? "border-ink bg-ink text-paper"
                      : "border-line text-grey hover:border-ink hover:text-ink"
                  }`}
                >
                  {division.shortName}
                </button>
              ))}
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-mist" aria-live="polite">
              {String(filtered.length).padStart(2, "0")}{" "}
              {filtered.length === 1 ? "scenario" : "scenarios"}
            </p>
          </div>

          <ol className="mt-10 border-t border-ink">
            {filtered.map((scenario) => {
              const solution = getSolution(scenario.solution);
              return (
                <li key={scenario.slug}>
                  <Link
                    to={`/engineering-scenarios/${scenario.slug}`}
                    className="group grid gap-4 border-b border-line py-7 transition-colors hover:bg-paper md:grid-cols-12 md:items-start md:gap-8 md:px-2"
                  >
                    <span className="font-mono text-[10px] tracking-[0.14em] text-tunnels-red md:col-span-1 md:pt-1.5">
                      {scenario.number}
                    </span>
                    <div className="md:col-span-5">
                      <h2 className="font-display text-xl leading-snug tracking-[-0.015em] group-hover:text-tunnels-red md:text-2xl">
                        {scenario.title}
                      </h2>
                      <p className="mt-2 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.12em] text-mist">
                        {divisionName(scenario.division)}
                        {solution ? ` · ${solution.name}` : ""}
                      </p>
                    </div>
                    <p className="text-sm leading-relaxed text-grey md:col-span-5">{scenario.summary}</p>
                    <span className="hidden justify-end md:col-span-1 md:flex">
                      <ArrowUpRight
                        className="h-4 w-4 text-mist transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tunnels-red"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>

          {filtered.length === 0 && (
            <p className="mt-10 text-sm text-grey">No scenarios in this division yet.</p>
          )}
        </div>
      </section>

      <CtaBand
        title="Facing a similar engineering challenge?"
        copy="Describe the system, the constraint and the outcome you need. We will respond with a technical view of the options, including where we would start and what we would not do."
      />
    </>
  );
}
