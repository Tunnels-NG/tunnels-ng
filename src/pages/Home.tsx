import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO from "@/components/site/SEO";
import Hero from "@/components/site/Hero";
import SectionHeading from "@/components/site/SectionHeading";
import CtaBand from "@/components/site/CtaBand";
import Action from "@/components/site/Action";
import Reveal from "@/components/site/Reveal";
import { services } from "@/content/services";
import { solutions } from "@/content/solutions";
import { industries } from "@/content/industries";
import { combinedExperienceYears } from "@/content/company";
import { insights, formatDate } from "@/content/insights";
import BrandReference from "@/components/site/BrandReference";
import { homeScenarioSlugs, scenarios } from "@/content/scenarios";
import { ENGAGEMENT_MODELS, LEAD_SERVICE_SLUGS, LEAD_SOLUTION_SLUGS, SITE } from "@/lib/site";

const problems = [
  {
    title: "AI that never leaves the pilot",
    copy: "Prototypes that impress in review but cannot handle permissions, exceptions or operating cost.",
    href: "/solutions/enterprise-ai-implementation",
  },
  {
    title: "A legacy core that resists change",
    copy: "Systems where every release is a risk event and the people who understand them are leaving.",
    href: "/solutions/enterprise-systems-modernisation",
  },
  {
    title: "Infrastructure that slows delivery",
    copy: "Manual environments, unclear ownership and a cloud bill nobody can attribute.",
    href: "/solutions/cloud-platform-transformation",
  },
  {
    title: "Systems that do not share meaning",
    copy: "Point-to-point integrations and manual reconciliation between platforms that should agree.",
    href: "/solutions/enterprise-systems-integration",
  },
  {
    title: "Risk discovered during an incident",
    copy: "Access sprawl, untested recovery and reliability assumptions that have never been exercised.",
    href: "/solutions/technology-reliability-security",
  },
  {
    title: "Decisions without technical depth",
    copy: "Roadmaps and vendor choices made without evidence from the systems they will affect.",
    href: "/solutions/strategic-engineering-partnerships",
  },
];

const approach = [
  {
    step: "01",
    name: "Discover",
    copy: "We establish the facts: code, infrastructure, data flows, delivery history and the commercial constraint behind the request.",
  },
  {
    step: "02",
    name: "Architect",
    copy: "A target design and a sequenced path to it, with dependencies, trade-offs and reversibility stated explicitly.",
  },
  {
    step: "03",
    name: "Engineer",
    copy: "Senior engineers deliver in verifiable increments. Tests, observability and documentation are part of the work, not follow-up tasks.",
  },
  {
    step: "04",
    name: "Validate",
    copy: "Functional, performance, security and recovery behaviour tested against agreed acceptance criteria, with gaps stated.",
  },
  {
    step: "05",
    name: "Deploy",
    copy: "Release through a repeatable pipeline, with a named decision maker, post-deployment verification and a rehearsed way back.",
  },
  {
    step: "06",
    name: "Operate & Improve",
    copy: "Runbooks, rehearsed recovery and pairing so your team can own the system, measured against agreed service objectives.",
  },
];

export default function Home() {
  const latest = insights.slice(0, 3);
  const leadSolutions = LEAD_SOLUTION_SLUGS.map((slug) => solutions.find((entry) => entry.slug === slug)).filter(
    (entry): entry is (typeof solutions)[number] => Boolean(entry),
  );
  const otherSolutions = solutions.filter(
    (entry) => !(LEAD_SOLUTION_SLUGS as readonly string[]).includes(entry.slug),
  );
  const isLeadService = (slug: string) => (LEAD_SERVICE_SLUGS as readonly string[]).includes(slug);
  const homeScenarios = homeScenarioSlugs
    .map((slug) => scenarios.find((entry) => entry.slug === slug))
    .filter((entry): entry is (typeof scenarios)[number] => Boolean(entry));
  const divisionLabel = (slug: string) =>
    services.find((service) => service.slug === slug)?.shortName ?? slug;

  return (
    <>
      <SEO
        title="Tunnels Global | Enterprise technology and engineering"
        description="Tunnels Global designs, builds, modernises and operates enterprise AI, software, cloud platforms and secure infrastructure for organisations with complex technology environments."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE.name,
          url: SITE.url,
          publisher: { "@type": "Organization", name: SITE.name },
        }}
      />

      <Hero />

      {/* Company introduction */}
      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="The company"
            title="An engineering partner for organisations whose technology has become central to how they operate."
            link={{ label: "About Tunnels", href: "/about" }}
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-xl leading-relaxed tracking-[-0.01em] text-ink md:text-[1.6rem] md:leading-[1.45]">
                Tunnels works across strategy, architecture, engineering and operations — so that difficult
                technology problems are solved once, by people who stay accountable for the result.
              </p>
            </div>
            <div className="space-y-5 lg:col-span-6 lg:col-start-7">
              <p className="body-copy">
                We are engaged when the problem is not a missing feature but a system that has become hard
                to change: a legacy core, an integration estate, a cloud platform without ownership, an AI
                programme that cannot reach production.
              </p>
              <p className="body-copy">
                Our teams combine enterprise architecture, software engineering and infrastructure
                capability in one engagement. That means the strategy is written by people who will
                implement it, and the implementation is reviewed by people who understand the commercial
                constraint.
              </p>
              <p className="body-copy">
                We work with mid-market and enterprise organisations internationally, with distributed teams
                delivering against one engineering standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collective experience */}
      <section className="border-t border-line bg-paper-deep py-14 md:py-16">
        <div className="shell grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Collective experience</p>
            <h2 className="mt-5 max-w-sm font-display text-[1.6rem] leading-snug tracking-[-0.02em] md:text-[1.8rem]">
              Decades of Experience. A Growing Global Team.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex items-baseline gap-3 border-t border-ink pt-5">
              <p className="font-display text-[2.5rem] leading-none tracking-[-0.03em]">
                {combinedExperienceYears}
                <span className="text-tunnels-red">+</span>
              </p>
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-graphite">
                Years · Combined professional experience
              </p>
            </div>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-grey">
              A multidisciplinary team of technology professionals spanning software engineering, enterprise
              architecture, cloud and platform engineering and product development. Top engineers globally,
              solving problems.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="relative overflow-hidden bg-ink py-16 text-paper md:py-24">
        <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-60" aria-hidden="true" />
        <div className="shell relative">
          <div className="grid gap-6 border-t border-line-dark pt-6 md:grid-cols-12">
            <div className="md:col-span-3">
              <p className="eyebrow text-paper/40">Capabilities</p>
            </div>
            <div className="md:col-span-6">
              <h2 className="display-md text-paper">Five divisions. One engineering standard.</h2>
            </div>
            <div className="md:col-span-3">
              <p className="text-sm leading-relaxed text-paper/50">
                Engaged separately when the problem is contained. Together when the system is not.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-line-dark">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 60}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group grid gap-4 border-b border-line-dark py-7 transition-colors hover:bg-paper/[0.03] md:grid-cols-12 md:items-start md:gap-8 md:px-2"
                >
                  <span className="font-mono text-[10px] text-paper/30 md:col-span-1 md:pt-2">
                    {service.number}
                  </span>
                  <div className="md:col-span-4">
                    {isLeadService(service.slug) && (
                      <span className="mb-2 inline-block font-mono text-[9px] uppercase tracking-[0.14em] text-tunnels-red">
                        Primary focus
                      </span>
                    )}
                    <h3 className="font-display text-2xl tracking-[-0.02em] text-paper transition-colors group-hover:text-tunnels-red md:text-[1.7rem]">
                      {service.name}
                    </h3>
                  </div>
                  <p className="max-w-xl text-sm leading-relaxed text-paper/55 md:col-span-5">
                    {service.summary}
                  </p>
                  <div className="flex items-center justify-between md:col-span-2 md:justify-end">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/35">
                      {service.capabilities.length} capabilities
                    </span>
                    <ArrowUpRight
                      className="ml-4 h-5 w-5 text-paper/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tunnels-red"
                      aria-hidden="true"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Where we are engaged"
            title="The problems that bring organisations to us."
            link={{ label: "All solutions", href: "/solutions" }}
          />

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <Link
                key={problem.title}
                to={problem.href}
                className="group flex flex-col justify-between gap-8 bg-paper p-7 transition-colors hover:bg-paper-bright md:p-8"
              >
                <div>
                  <span className="mb-6 block h-px w-8 bg-tunnels-red transition-all duration-300 group-hover:w-14" />
                  <h3 className="font-display text-xl leading-snug tracking-[-0.015em]">{problem.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey">{problem.copy}</p>
                </div>
                <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink">
                  Read the approach
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-y border-line bg-paper-deep py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Commercial solutions"
            title="Defined engagements, built around an outcome."
            copy="Each solution has a stated problem, a delivery approach and a clear engagement shape. Scope is agreed before work starts."
            link={{ label: "Explore solutions", href: "/solutions" }}
          />

          <div className="mt-10 flex items-center justify-between gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-tunnels-red">
              Lead commercial offerings
            </p>
            <span className="hidden h-px flex-1 bg-line md:block" aria-hidden="true" />
          </div>

          <div className="mt-5 grid gap-px border border-line bg-line lg:grid-cols-3">
            {leadSolutions.map((solution, index) => (
              <Link
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                className="group relative flex min-h-[260px] flex-col bg-paper-deep p-7 transition-colors hover:bg-paper md:p-9"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-mist">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-1.5 w-1.5 bg-tunnels-red" aria-hidden="true" />
                </div>
                <h3 className="mt-6 max-w-[18ch] font-display text-[1.55rem] leading-tight tracking-[-0.02em]">
                  {solution.name}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-grey">{solution.short}</p>
                <span className="mt-auto flex items-center justify-between pt-8">
                  <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink">
                    View solution
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-ink/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tunnels-red"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-3">
            {otherSolutions.map((solution) => (
              <Link
                key={solution.slug}
                to={`/solutions/${solution.slug}`}
                className="group flex items-center justify-between gap-4 bg-paper px-5 py-4 transition-colors hover:bg-paper-bright"
              >
                <span>
                  <span className="block text-sm font-medium text-ink group-hover:text-tunnels-red">
                    {solution.name}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-grey">{solution.short}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BrandReference />

      {/* Engineering scenarios */}
      <section className="border-t border-line bg-paper py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Engineering challenges"
            title="Problems We Are Equipped to Solve"
            copy="Explore how we approach complex engineering challenges across enterprise systems, intelligent technologies and cloud infrastructure."
            link={{ label: "All scenarios", href: "/engineering-scenarios" }}
          />

          <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-3">
            {homeScenarios.map((scenario) => (
              <Link
                key={scenario.slug}
                to={`/engineering-scenarios/${scenario.slug}`}
                className="group flex flex-col bg-paper p-7 transition-colors hover:bg-paper-bright md:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.12em]">
                  <span className="text-tunnels-red">Scenario {scenario.number}</span>
                  <span className="text-mist">{divisionLabel(scenario.division)}</span>
                </div>
                <h3 className="mt-6 font-display text-xl leading-snug tracking-[-0.015em] group-hover:text-tunnels-red">
                  {scenario.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">{scenario.summary}</p>
                <span className="mt-7 flex items-center justify-between border-t border-line pt-4 font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink">
                  Explore scenario
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-6 max-w-2xl text-xs leading-relaxed text-mist">
            Illustrative engineering scenarios, not client engagements. Each one sets out how we take a
            class of problem apart: the context we establish, the constraints we test, the decisions we
            record and the trade-offs we accept. No client identity, data or result is disclosed.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="How we work"
            title="A delivery method built for systems that cannot stop."
            copy="A summary of the six-stage engineering approach used on every engagement, where each stage has a defined output and exit condition."
          />

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {approach.map((phase, index) => (
              <Reveal key={phase.step} delay={index * 70}>
                <div className="border-t-2 border-ink pt-5">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[10px] tracking-[0.14em] text-tunnels-red">{phase.step}</span>
                    <span className="h-1 w-1 bg-line" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl tracking-[-0.02em]">{phase.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey">{phase.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-line pt-7 md:flex-row md:items-center">
            <p className="max-w-xl text-sm leading-relaxed text-graphite">
              Programmes are structured so they can be paused, re-scoped or stopped without losing the
              investment made so far.
            </p>
            <Action to="/engineering-approach" variant="link" withArrow>
              Our full engineering approach
            </Action>
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="border-t border-line bg-paper-deep py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Engagement models"
            title="Three ways to work with us."
            copy="The model follows the problem. We will recommend the smallest engagement that can produce a defensible result."
            link={{ label: "Compare models", href: "/engagement-models" }}
          />

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {ENGAGEMENT_MODELS.map((model, index) => (
              <div key={model.name} className="flex flex-col bg-paper p-7 md:p-8">
                                  <span className="font-mono text-[10px] tracking-[0.14em] text-mist">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                <h3 className="mt-6 font-display text-xl tracking-[-0.015em]">{model.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-grey">{model.summary}</p>
                <p className="mt-7 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
                  {model.bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Industries"
            title="Sectors where system behaviour carries commercial weight."
            link={{ label: "View industries", href: "/industries" }}
          />

          <ul className="mt-10 border-t border-line">
            {industries.map((industry) => (
              <li key={industry.slug}>
                <Link
                  to={`/industries#${industry.slug}`}
                  className="group grid gap-2 border-b border-line py-5 transition-colors hover:bg-paper-bright md:grid-cols-12 md:items-center md:gap-8 md:px-2"
                >
                  <span className="font-display text-xl tracking-[-0.015em] md:col-span-4">{industry.name}</span>
                  <span className="text-sm leading-relaxed text-grey md:col-span-7">{industry.summary}</span>
                  <span className="hidden justify-end md:col-span-1 md:flex">
                    <ArrowUpRight
                      className="h-4 w-4 text-mist transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tunnels-red"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Insights */}
      <section className="border-t border-line bg-paper-deep py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Perspective"
            title="Engineering notes from current work."
            link={{ label: "All insights", href: "/insights" }}
          />

          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
            {latest.map((article) => (
              <Link
                key={article.slug}
                to={`/insights/${article.slug}`}
                className="group flex flex-col bg-paper p-7 transition-colors hover:bg-paper-bright md:p-8"
              >
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.12em]">
                  <span className="text-tunnels-red">{article.category}</span>
                  <span className="text-mist">{article.readTime}</span>
                </div>
                <h3 className="mt-6 font-display text-xl leading-snug tracking-[-0.015em] group-hover:text-tunnels-red">
                  {article.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-grey">{article.excerpt}</p>
                <p className="mt-6 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-mist">
                  {formatDate(article.date)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
