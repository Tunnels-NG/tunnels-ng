import { Link, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import Action from "@/components/site/Action";
import Reveal from "@/components/site/Reveal";
import { getService, services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { insights, formatDate } from "@/content/insights";
import { ENGAGEMENT_MODELS } from "@/lib/site";
import NotFound from "./NotFound";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <NotFound />;

  const relatedSolutions = solutions.filter((solution) =>
    solution.serviceSlugs.includes(service.slug),
  );
  const relatedInsights = insights.filter((insight) => insight.relatedService === service.slug);
  const others = services.filter((entry) => entry.slug !== service.slug).slice(0, 3);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        structuredData={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.name,
            serviceType: service.name,
            description: service.metaDescription,
            provider: { "@type": "Organization", name: "Tunnels Global" },
            areaServed: "Worldwide",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: `${service.name} capabilities`,
              itemListElement: service.capabilities.map((capability) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: capability.title, description: capability.body },
              })),
            },
          },
        ]}
      />

      <PageHeader
        eyebrow={`Division ${service.number} — Services`}
        title={service.name}
        lede={service.tagline}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.shortName }]}
        aside={
          <div className="border-t-2 border-ink pt-5">
            <p className="eyebrow text-[10px]">The position</p>
            <p className="mt-3 font-display text-xl leading-snug tracking-[-0.02em]">{service.message}</p>
            <div className="mt-6">
              <Action to={`/contact?service=${service.slug}`} variant="solid" withArrow>
                Discuss this work
              </Action>
            </div>
          </div>
        }
      />

      {/* Intro */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Perspective</p>
            <h2 className="display-md mt-5">Why this work is difficult.</h2>
          </div>
          <div className="space-y-5 lg:col-span-7 lg:col-start-6">
            {service.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="body-copy">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-line bg-paper-deep py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col justify-between gap-4 border-t border-line pt-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 className="display-md mt-4">What the division delivers.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-grey">
              Scope is selected from these capabilities according to the problem, not sold as a fixed
              package.
            </p>
          </div>

          <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {service.capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={index * 35} className="bg-paper-deep">
                <div className="h-full bg-paper-deep p-6 transition-colors hover:bg-paper">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-mist">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-display text-base leading-snug tracking-[-0.01em]">
                    {capability.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-grey">{capability.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Approach</p>
            <h2 className="display-md mt-5">How we run the engagement.</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-grey">
              The method is consistent across divisions: establish evidence, make decisions explicit,
              deliver in reversible increments.
            </p>
            <div className="mt-6">
              <Action to="/engineering-approach" variant="link" withArrow>
                The full engineering method
              </Action>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ol className="border-t border-line">
              {service.approach.map((step, index) => (
                <li key={step.title} className="grid gap-3 border-b border-line py-6 sm:grid-cols-12 sm:gap-6">
                  <span className="font-mono text-[10px] text-tunnels-red sm:col-span-2 sm:pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="sm:col-span-10">
                    <h3 className="font-display text-lg tracking-[-0.01em]">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Outcomes & engagement */}
      <section className="border-y border-line bg-ink py-16 text-paper md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <p className="eyebrow text-paper/40">Expected outcomes</p>
            <h2 className="display-md mt-4 text-paper">What the engagement should leave behind.</h2>
            <ul className="mt-8 space-y-4">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-4 border-b border-line-dark pb-4">
                  <span className="mt-[0.6em] h-px w-3 shrink-0 bg-tunnels-red" aria-hidden="true" />
                  <span className="text-[15px] leading-relaxed text-paper/80">{outcome}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-mono text-[10px] uppercase leading-relaxed tracking-[0.12em] text-paper/35">
              Outcomes describe the capability delivered. Numerical results are only stated when measured
              on a specific engagement.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-paper/40">Engagement shapes</p>
            <ul className="mt-4 border-t border-line-dark">
              {service.engagement.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-line-dark py-4 text-sm text-paper/70"
                >
                  <span className="h-1 w-1 bg-tunnels-red" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="eyebrow mt-10 text-paper/40">Commercial models</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {ENGAGEMENT_MODELS.map((model) => (
                <span
                  key={model.name}
                  className="border border-line-dark px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-paper/55"
                >
                  {model.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related solutions */}
      <section className="bg-paper py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col justify-between gap-4 border-t border-line pt-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Applied through</p>
              <h2 className="display-md mt-4">Commercial solutions using this division.</h2>
            </div>
            <Action to="/solutions" variant="link" withArrow>
              All solutions
            </Action>
          </div>
          <div className="mt-8 grid gap-px border border-line bg-line md:grid-cols-3">
            {relatedSolutions.map((solution) => (
              <Link
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                className="group flex flex-col bg-paper p-7 transition-colors hover:bg-paper-bright"
              >
                <span className="font-mono text-[10px] tracking-[0.12em] text-mist">{solution.number}</span>
                <h3 className="mt-4 font-display text-lg leading-snug tracking-[-0.01em] group-hover:text-tunnels-red">
                  {solution.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">{solution.short}</p>
                <ArrowUpRight
                  className="mt-6 h-4 w-4 text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tunnels-red"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insight + other divisions */}
      {(relatedInsights.length > 0 || others.length > 0) && (
        <section className="border-t border-line bg-paper-deep py-16">
          <div className="shell grid gap-10 lg:grid-cols-12">
            {relatedInsights.length > 0 && (
              <div className="lg:col-span-5">
                <p className="eyebrow">Related reading</p>
                {relatedInsights.map((article) => (
                  <Link key={article.slug} to={`/insights/${article.slug}`} className="group mt-5 block">
                    <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-tunnels-red">
                      {article.category} · {formatDate(article.date)}
                    </p>
                    <h3 className="mt-2 font-display text-xl leading-snug tracking-[-0.015em] group-hover:text-tunnels-red">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey">{article.excerpt}</p>
                  </Link>
                ))}
              </div>
            )}
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="eyebrow">Other divisions</p>
              <ul className="mt-4 border-t border-line">
                {others.map((entry) => (
                  <li key={entry.slug}>
                    <Link
                      to={`/services/${entry.slug}`}
                      className="group flex items-center justify-between gap-4 border-b border-line py-4"
                    >
                      <span className="text-sm text-ink group-hover:text-tunnels-red">{entry.name}</span>
                      <ArrowUpRight className="h-4 w-4 text-mist" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={`Need ${service.shortName.toLowerCase()} capability on a live problem?`}
        copy="Describe the system and the constraint. We will respond with a technical view of the options and a suggested engagement shape."
      />
    </>
  );
}
