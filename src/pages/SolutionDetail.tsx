import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import Action from "@/components/site/Action";
import Reveal from "@/components/site/Reveal";
import { getSolution, solutions } from "@/content/solutions";
import { getService } from "@/content/services";
import { ENGAGEMENT_MODELS } from "@/lib/site";
import NotFound from "./NotFound";

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = getSolution(slug);

  if (!solution) return <NotFound />;

  const relatedServices = solution.serviceSlugs.map(getService).filter(Boolean);
  const otherSolutions = solutions.filter((entry) => entry.slug !== solution.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={solution.metaTitle}
        description={solution.metaDescription}
        path={`/solutions/${solution.slug}`}
        structuredData={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: solution.name, path: `/solutions/${solution.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: solution.name,
            description: solution.metaDescription,
            serviceType: "Enterprise technology consulting",
            provider: { "@type": "Organization", name: "Tunnels Global" },
            areaServed: "Worldwide",
          },
        ]}
      />

      <PageHeader
        eyebrow={`Solution ${solution.number}`}
        title={solution.name}
        lede={solution.short}
        crumbs={[{ label: "Solutions", href: "/solutions" }, { label: solution.name }]}
        aside={
          <div className="border-t-2 border-ink pt-5">
            <p className="eyebrow text-[10px]">Engagement fit</p>
            <ul className="mt-4 space-y-2.5">
              {solution.engagement.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-graphite">
                  <span className="mt-[0.55em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Action to={`/contact?service=${solution.slug}`} variant="solid" withArrow>
                Discuss this solution
              </Action>
            </div>
          </div>
        }
      />

      {/* Problem / why */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow">The business problem</p>
            <div className="mt-5 space-y-5">
              {solution.problem.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="body-copy">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="border-l-2 border-tunnels-red pl-6">
              <p className="eyebrow">Why it matters</p>
              <p className="mt-4 text-lg leading-relaxed tracking-[-0.005em] text-ink md:text-xl">
                {solution.why}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="border-y border-line bg-ink py-16 text-paper md:py-20">
        <div className="shell">
          <div className="grid gap-6 border-t border-line-dark pt-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-paper/40">Our approach</p>
              <h2 className="display-md mt-4 text-paper">How we would run it.</h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-paper/50 md:col-span-6 md:col-start-7 md:pt-2">
              The sequence is deliberate. Each stage produces an artefact that the next stage depends on,
              and each can be reviewed before further commitment.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-line-dark bg-line-dark md:grid-cols-2 lg:grid-cols-4">
            {solution.approach.map((step, index) => (
              <div key={step.title} className="bg-ink p-7">
                <span className="font-mono text-[10px] tracking-[0.14em] text-tunnels-red">
                  0{index + 1}
                </span>
                <h3 className="mt-6 font-display text-lg leading-snug tracking-[-0.01em] text-paper">
                  {step.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-paper/55">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Engagement scope</p>
            <h2 className="display-md mt-5">What it can include.</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-grey">
              Scope is agreed per engagement. Most programmes use a subset, selected against the problem
              and the existing capability of your team.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="grid border-t border-line sm:grid-cols-2">
              {solution.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-line py-4 pr-4 text-sm leading-relaxed text-graphite"
                >
                  <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="border-y border-line bg-paper-deep py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Expected outcomes</p>
            <h2 className="display-md mt-5">What should be true afterwards.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {solution.outcomes.map((outcome, index) => (
                <div key={outcome} className="bg-paper p-6">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-mist">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-ink">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement models + services */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow">Suitable engagement models</p>
            <ul className="mt-4 border-t border-line">
              {ENGAGEMENT_MODELS.map((model) => (
                <li key={model.name} className="border-b border-line py-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg tracking-[-0.01em]">{model.name}</h3>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist">
                      {model.bestFor}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-grey">{model.summary}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">Capability applied</p>
            <ul className="mt-4 border-t border-line">
              {relatedServices.map(
                (service) =>
                  service && (
                    <li key={service.slug}>
                      <Link
                        to={`/services/${service.slug}`}
                        className="group flex items-center justify-between gap-4 border-b border-line py-4"
                      >
                        <span>
                          <span className="block text-sm text-ink group-hover:text-tunnels-red">
                            {service.name}
                          </span>
                          <span className="mt-1 block text-xs text-grey">{service.tagline}</span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
                      </Link>
                    </li>
                  ),
              )}
            </ul>

            <div className="mt-10 border border-line bg-paper-bright p-6">
              <p className="eyebrow text-[10px]">Evidence note</p>
              <p className="mt-3 text-[13px] leading-relaxed text-grey">
                We do not publish client names, testimonials or performance statistics without written
                permission and verified measurement. References are provided during a qualified
                conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other solutions */}
      <section className="border-t border-line bg-paper-deep py-14">
        <div className="shell">
          <div className="flex items-end justify-between gap-4">
            <p className="eyebrow">Other solutions</p>
            <Action to="/solutions" variant="link" withArrow>
              All solutions
            </Action>
          </div>
          <div className="mt-6 grid gap-px border border-line bg-line md:grid-cols-3">
            {otherSolutions.map((entry) => (
              <Reveal key={entry.slug}>
                <Link
                  to={`/solutions/${entry.slug}`}
                  className="group flex h-full flex-col bg-paper-deep p-6 transition-colors hover:bg-paper"
                >
                  <span className="font-mono text-[10px] tracking-[0.12em] text-mist">{entry.number}</span>
                  <span className="mt-4 font-display text-lg leading-snug tracking-[-0.01em] group-hover:text-tunnels-red">
                    {entry.name}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-grey">{entry.short}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Scope this engagement with an engineer."
        copy="We will discuss the current system, the constraint and the outcome you need, then propose a scope with clear stages and decision points."
      />
    </>
  );
}
