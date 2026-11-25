import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import Action from "@/components/site/Action";
import Reveal from "@/components/site/Reveal";
import { solutions } from "@/content/solutions";
import { ENGAGEMENT_MODELS, LEAD_SOLUTION_SLUGS } from "@/lib/site";

const isLead = (slug: string) => (LEAD_SOLUTION_SLUGS as readonly string[]).includes(slug);

const orderedSolutions = [...solutions].sort(
  (a, b) => Number(isLead(b.slug)) - Number(isLead(a.slug)) || Number(a.number) - Number(b.number),
);

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions | Enterprise AI, Modernisation, Cloud, Integration & Reliability"
        description="Six commercial solutions from Tunnels: enterprise AI implementation, systems modernisation, cloud platform transformation, systems integration, reliability and security, strategic engineering partnerships."
        path="/solutions"
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Solutions", path: "/solutions" },
        ])}
      />

      <PageHeader
        eyebrow="Solutions"
        title="Engagements defined by the outcome, not the technology."
        lede="Six ways organisations engage Tunnels. Each begins with a business problem, states how we approach it, and defines what the engagement should leave behind."
        crumbs={[{ label: "Solutions" }]}
        aside={
          <div className="border-l border-line pl-6">
            <p className="eyebrow text-[10px]">Not sure where to start?</p>
            <p className="mt-3 text-sm leading-relaxed text-graphite">
              Most first engagements begin with an assessment. We scope the problem and recommend the
              smallest engagement that can produce a defensible result.
            </p>
            <div className="mt-5">
              <Action to="/contact" variant="link" withArrow>
                Request a technology assessment
              </Action>
            </div>
          </div>
        }
      />

      <section className="bg-paper">
        <div className="shell">
          <div className="flex items-center gap-4 border-b border-line py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-tunnels-red">
              Lead commercial offerings first
            </p>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>

          {orderedSolutions.map((solution, index) => (
            <Reveal key={solution.slug} delay={index * 40}>
              <article className="grid gap-6 border-b border-line py-12 md:grid-cols-12 md:gap-10 md:py-14">
                <div className="md:col-span-1">
                  <span className="font-mono text-[11px] text-mist">{solution.number}</span>
                </div>
                <div className="md:col-span-4">
                  {isLead(solution.slug) && (
                    <span className="mb-2 inline-block font-mono text-[9px] uppercase tracking-[0.14em] text-tunnels-red">
                      Primary focus
                    </span>
                  )}
                  <h2 className="font-display text-2xl leading-tight tracking-[-0.02em] md:text-[1.9rem]">
                    <Link to={`/solutions/${solution.slug}`} className="hover:text-tunnels-red">
                      {solution.name}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-tunnels-red">{solution.short}</p>
                </div>
                <div className="md:col-span-5">
                  <p className="body-copy">{solution.summary}</p>
                  <p className="mt-4 text-sm leading-relaxed text-grey">{solution.why}</p>
                </div>
                <div className="md:col-span-2 md:text-right">
                  <Action to={`/solutions/${solution.slug}`} variant="link" withArrow>
                    View solution
                  </Action>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep py-16 md:py-20">
        <div className="shell">
          <div className="flex flex-col justify-between gap-4 border-t border-line pt-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Commercial models</p>
              <h2 className="display-md mt-4">How engagements are structured.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-grey">
              The commercial model follows the problem, not the other way around.
            </p>
          </div>
          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model, index) => (
              <div key={model.name} className="bg-paper p-7">
                <span className="font-mono text-[10px] tracking-[0.12em] text-mist">0{index + 1}</span>
                <h3 className="mt-5 font-display text-xl tracking-[-0.015em]">{model.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-grey">{model.summary}</p>
                <p className="mt-6 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
                  {model.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <p className="eyebrow">Capability behind each solution</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                { label: "AI & Intelligent Systems", href: "/services/ai-intelligent-systems" },
                { label: "Enterprise Software", href: "/services/enterprise-software" },
                { label: "Cloud & Platform", href: "/services/cloud-platform-infrastructure" },
                { label: "Security & Reliability", href: "/services/cybersecurity-reliability" },
                { label: "Advisory & Partnerships", href: "/services/technology-advisory" },
              ].map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="inline-flex items-center gap-1.5 text-[13px] text-graphite hover:text-tunnels-red"
                >
                  {item.label}
                  <ArrowUpRight className="h-3 w-3 opacity-40" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
