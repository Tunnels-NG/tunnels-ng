import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import Action from "@/components/site/Action";
import ScenarioDiagram from "@/components/site/ScenarioDiagram";
import { getScenario, scenarios } from "@/content/scenarios";
import { getService } from "@/content/services";
import { getSolution } from "@/content/solutions";
import NotFound from "./NotFound";

export default function ScenarioDetail() {
  const { slug } = useParams();
  const scenario = getScenario(slug);

  if (!scenario) return <NotFound />;

  const service = getService(scenario.division);
  const solution = getSolution(scenario.solution);
  const index = scenarios.findIndex((entry) => entry.slug === scenario.slug);
  const previous = scenarios[(index - 1 + scenarios.length) % scenarios.length];
  const next = scenarios[(index + 1) % scenarios.length];

  return (
    <>
      <SEO
        title={scenario.metaTitle}
        description={scenario.metaDescription}
        path={`/engineering-scenarios/${scenario.slug}`}
        structuredData={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Challenges", path: "/engineering-scenarios" },
            { name: scenario.title, path: `/engineering-scenarios/${scenario.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: scenario.title,
            description: scenario.metaDescription,
            url: `https://tunnelsng.com/engineering-scenarios/${scenario.slug}`,
            isPartOf: {
              "@type": "CollectionPage",
              name: "Engineering Challenges",
              url: "https://tunnelsng.com/engineering-scenarios",
            },
            about: {
              "@type": "Thing",
              name: scenario.title,
              description: scenario.summary,
            },
          },
        ]}
      />

      <PageHeader
        eyebrow={`Engineering scenario ${scenario.number}`}
        title={scenario.title}
        lede={scenario.summary}
        crumbs={[
          { label: "Challenges", href: "/engineering-scenarios" },
          { label: `Scenario ${scenario.number}` },
        ]}
        aside={
          <div className="border-t-2 border-ink pt-5">
            <dl className="space-y-5">
              <div>
                <dt className="eyebrow text-[10px]">Engineering division</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink">
                  {service ? (
                    <Link to={`/services/${service.slug}`} className="hover:text-tunnels-red">
                      {service.name}
                    </Link>
                  ) : (
                    "Engineering"
                  )}
                </dd>
              </div>
              {solution && (
                <div>
                  <dt className="eyebrow text-[10px]">Commercial offering</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-ink">
                    <Link to={`/solutions/${solution.slug}`} className="hover:text-tunnels-red">
                      {solution.name}
                    </Link>
                  </dd>
                </div>
              )}
            </dl>
            <p className="mt-6 border-t border-line pt-4 text-[12px] leading-relaxed text-grey">
              Illustrative engineering scenario. It describes how we would approach this class of problem;
              it is not a completed client engagement, and no client identity, data or result is disclosed.
            </p>
            <div className="mt-6">
              <Action to="/contact" variant="solid" withArrow>
                Discuss your requirements
              </Action>
            </div>
          </div>
        }
      />

      {/* Business context */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Business context</p>
            <h2 className="display-md mt-5">The situation behind the request.</h2>
          </div>
          <div className="space-y-5 lg:col-span-7 lg:col-start-6">
            {scenario.context.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* The challenge */}
      <section className="border-y border-line bg-paper-deep py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">The challenge</p>
            <h2 className="display-md mt-5">What has to change, and what cannot.</h2>
          </div>
          <div className="space-y-5 lg:col-span-7 lg:col-start-6">
            {scenario.challenge.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Why it is difficult */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell">
          <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="eyebrow">Why it is difficult</p>
            </div>
            <div className="md:col-span-7">
              <h2 className="display-md max-w-2xl">The engineering decisions that matter.</h2>
            </div>
          </div>

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {scenario.difficulties.map((item, itemIndex) => (
              <div key={item.title} className="bg-paper p-7 md:p-8">
                <span className="font-mono text-[10px] tracking-[0.14em] text-tunnels-red">
                  {String(itemIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-lg leading-snug tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering approach */}
      <section className="border-y border-line bg-ink py-16 text-paper md:py-20">
        <div className="shell">
          <div className="grid gap-6 border-t border-line-dark pt-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-paper/40">Our engineering approach</p>
              <h2 className="display-md mt-4 text-paper">How we would investigate, design and deliver.</h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-paper/50 md:col-span-6 md:col-start-7 md:pt-2">
              Six stages, each producing something the next stage depends on. The decisions listed are the
              ones that change the shape of the outcome; they are agreed explicitly rather than absorbed
              into implementation detail.
            </p>
          </div>

          <ol className="mt-12 border-t border-line-dark">
            {scenario.approach.map((step) => (
              <li key={step.phase} className="grid gap-4 border-b border-line-dark py-7 md:grid-cols-12 md:gap-8">
                <span className="font-mono text-[10px] tracking-[0.14em] text-tunnels-red md:col-span-1 md:pt-1.5">
                  {step.phase}
                </span>
                <div className="md:col-span-4">
                  <h3 className="font-display text-lg leading-snug tracking-[-0.01em] text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-paper/55">{step.body}</p>
                </div>
                <ul className="space-y-2.5 md:col-span-6 md:col-start-7">
                  {step.decisions.map((decision) => (
                    <li key={decision} className="flex items-start gap-3 text-[13px] leading-relaxed text-paper/70">
                      <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                      {decision}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Trade-offs */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell">
          <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="eyebrow">Trade-offs</p>
            </div>
            <div className="md:col-span-7">
              <h2 className="display-md max-w-2xl">Alternatives we would consider, and what they cost.</h2>
            </div>
          </div>

          <div className="mt-12 grid gap-10 border-t border-line pt-8 md:grid-cols-3 md:gap-8">
            {scenario.tradeoffs.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg leading-snug tracking-[-0.01em]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="border-y border-line bg-paper-deep py-16 md:py-20">
        <div className="shell">
          <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-3">
              <p className="eyebrow">Architecture considerations</p>
            </div>
            <div className="md:col-span-7">
              <h2 className="display-md max-w-2xl">Components, boundaries and the connections that matter.</h2>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <ScenarioDiagram
                layers={scenario.architecture.layers}
                flows={scenario.architecture.flows}
                reference={scenario.number}
              />
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm leading-relaxed text-graphite">{scenario.architecture.intro}</p>

              <div className="mt-8 space-y-5 border-t border-line pt-6">
                {scenario.architecture.choices.map((choice) => (
                  <div key={choice.title}>
                    <h3 className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-ink">
                      {choice.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-grey">{choice.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="eyebrow text-[10px]">Technical considerations</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {scenario.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="border border-line px-3 py-1.5 font-mono text-[9.5px] uppercase tracking-[0.08em] text-grey"
                    >
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expected outcomes */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Expected outcomes</p>
            <h2 className="display-md mt-5">What the work is designed to achieve.</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-grey">
              These describe the capabilities the solution is designed to leave behind. They are not
              measured results from a client engagement.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="border-t border-line">
              {scenario.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-4 border-b border-line py-4">
                  <span className="mt-[0.65em] h-px w-3 shrink-0 bg-tunnels-red" aria-hidden="true" />
                  <span className="text-[15px] leading-relaxed text-graphite">{outcome}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-mist">
              No performance improvement, cost saving or delivery result is claimed. Metrics are only
              published when measured on a specific engagement with authorisation.
            </p>
          </div>
        </div>
      </section>

      {/* Related capabilities */}
      <section className="border-t border-line bg-paper-deep py-14 md:py-16">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Related capabilities</p>
            <h2 className="display-md mt-5">Where this work sits in the company.</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-grey">
              The scenario draws on one engineering division and is commercialised through a defined
              offering. Both describe the same capability from different starting points.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="border-t border-line">
              {service && (
                <li>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group flex items-center justify-between gap-4 border-b border-line py-5"
                  >
                    <span>
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist">
                        Engineering division
                      </span>
                      <span className="mt-1 block text-sm font-medium text-ink group-hover:text-tunnels-red">
                        {service.name}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-grey">{service.tagline}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
                  </Link>
                </li>
              )}
              {solution && (
                <li>
                  <Link
                    to={`/solutions/${solution.slug}`}
                    className="group flex items-center justify-between gap-4 border-b border-line py-5"
                  >
                    <span>
                      <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist">
                        Commercial offering
                      </span>
                      <span className="mt-1 block text-sm font-medium text-ink group-hover:text-tunnels-red">
                        {solution.name}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-grey">{solution.short}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/engineering-scenarios"
                  className="group flex items-center justify-between gap-4 border-b border-line py-5"
                >
                  <span>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist">
                      All scenarios
                    </span>
                    <span className="mt-1 block text-sm font-medium text-ink group-hover:text-tunnels-red">
                      Engineering challenges
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Previous / next */}
      <section className="bg-paper py-10">
        <div className="shell grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
          <Link
            to={`/engineering-scenarios/${previous.slug}`}
            className="group flex items-start gap-3 text-sm text-graphite hover:text-tunnels-red"
          >
            <ArrowLeft className="mt-0.5 h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
            <span>
              <span className="block font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist">
                Previous scenario
              </span>
              <span className="mt-1 block">{previous.title}</span>
            </span>
          </Link>
          <Link
            to={`/engineering-scenarios/${next.slug}`}
            className="group flex items-start gap-3 text-sm text-graphite hover:text-tunnels-red sm:justify-end sm:text-right"
          >
            <span>
              <span className="block font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist">
                Next scenario
              </span>
              <span className="mt-1 block">{next.title}</span>
            </span>
            <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-paper">
        <div className="shell grid gap-8 py-16 md:py-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-tunnels-red" aria-hidden="true" />
              <p className="eyebrow text-paper/45">Next step</p>
            </div>
            <h2 className="display-lg max-w-3xl text-paper">Facing a similar engineering challenge?</h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-paper/60">
              Describe the system, the constraint and the outcome you need. We will respond with a technical
              view of the options, including where we would start and what we would advise against.
            </p>
          </div>
          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Action to="/contact" variant="light" withArrow>
              Discuss Your Requirements
            </Action>
          </div>
        </div>
      </section>
    </>
  );
}
