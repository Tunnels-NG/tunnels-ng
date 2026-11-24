import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import CtaBand from "@/components/site/CtaBand";
import Action from "@/components/site/Action";
import RelatedCaseStudies from "@/components/site/RelatedCaseStudies";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { getService } from "@/content/services";
import { getSolution } from "@/content/solutions";
import { SITE } from "@/lib/site";
import NotFound from "./NotFound";

const Section = ({
  id,
  number,
  title,
  children,
  tone = "paper",
}: {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
  tone?: "paper" | "deep";
}) => (
  <section
    id={id}
    className={`scroll-mt-24 border-t border-line py-10 md:py-12 ${
      tone === "deep" ? "bg-paper-deep" : ""
    }`}
  >
    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-tunnels-red">{number}</p>
        <h2 className="mt-2 font-display text-xl leading-snug tracking-[-0.02em] md:text-2xl">{title}</h2>
      </div>
      <div className="md:col-span-8 md:col-start-5">{children}</div>
    </div>
  </section>
);

const sectionList = [
  { id: "overview", label: "Project overview" },
  { id: "context", label: "Business context" },
  { id: "challenge", label: "The problem" },
  { id: "constraints", label: "Constraints" },
  { id: "contribution", label: "Tunnels' role" },
  { id: "architecture", label: "Engineering approach" },
  { id: "components", label: "Platform components" },
  { id: "process", label: "Delivery process" },
  { id: "decisions", label: "Decisions and trade-offs" },
  { id: "results", label: "Results and outcomes" },
  { id: "lessons", label: "What we took from it" },
  { id: "capabilities", label: "Related capabilities" },
];

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);

  if (!study) return <NotFound />;

  const services = study.serviceSlugs.map(getService).filter(Boolean);
  const solutions = study.solutionSlugs.map(getSolution).filter(Boolean);

  const related = [
    ...caseStudies.filter((entry) => entry.slug !== study.slug && entry.category === study.category),
    ...caseStudies.filter((entry) => entry.slug !== study.slug && entry.category !== study.category),
  ].slice(0, 3);

  return (
    <>
      <SEO
        title={study.metaTitle}
        description={study.metaDescription}
        path={`/case-studies/${study.slug}`}
        type="article"
        structuredData={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Case Studies", path: "/case-studies" },
            { name: study.product, path: `/case-studies/${study.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: study.title,
            description: study.metaDescription,
            articleSection: study.category,
            about: {
              "@type": "SoftwareApplication",
              name: study.product,
              url: study.website,
              applicationCategory: study.platform,
              operatingSystem: "Web",
            },
            author: { "@type": "Organization", name: SITE.name },
            publisher: {
              "@type": "Organization",
              name: SITE.name,
              logo: { "@type": "ImageObject", url: `${SITE.url}/assets/brand/tunnels-logo.svg` },
            },
            mainEntityOfPage: `${SITE.url}/case-studies/${study.slug}`,
          },
        ]}
      />

      <article>
        <header className="border-b border-line bg-paper">
          <div className="shell pb-12 pt-10 md:pb-14 md:pt-14">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-grey hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Selected client work
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em]">
              <span className="text-tunnels-red">{study.category}</span>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <span className="text-grey">{study.productLine}</span>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <span className="text-grey">Client work</span>
            </div>

            <h1 className="mt-6 max-w-4xl font-display text-[2rem] leading-[1.1] tracking-[-0.03em] md:text-5xl">
              {study.title}
            </h1>
            <p className="lede mt-6 max-w-2xl">{study.summary}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Action href={study.website} variant="outline" withArrow>
                Visit {study.product}
              </Action>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-mist">
                {study.websiteLabel}
              </span>
            </div>

            <dl className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Sector", value: study.sector },
                { label: "Platform", value: study.platform },
                { label: "Tunnels' role", value: study.role },
                { label: "Product status", value: "Live, publicly available" },
              ].map((item) => (
                <div key={item.label} className="bg-paper p-4">
                  <dt className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-mist">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-[13px] leading-relaxed text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>

            <figure className="mt-8">
              <div className="overflow-hidden border border-line bg-paper-deep">
                <img
                  src={study.image}
                  alt={study.imageAlt}
                  className="aspect-[16/9] w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex flex-wrap justify-between gap-2 font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist">
                <span>{study.imageCaption}</span>
                <span>Imagery sourced from the live product</span>
              </figcaption>
            </figure>

            <div className="mt-8 border-l-2 border-tunnels-red bg-paper-deep p-5 md:p-6">
              <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-tunnels-red">
                Attribution
              </p>
              <p className="mt-3 text-sm leading-relaxed text-graphite">{study.roleSummary}</p>
              <p className="mt-3 text-[12.5px] leading-relaxed text-grey">{study.scopeNote}</p>
            </div>
          </div>
        </header>

        <div className="bg-paper">
          <div className="shell py-10 md:py-14">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
              <aside className="lg:col-span-3">
                <div className="lg:sticky lg:top-24">
                  <p className="eyebrow text-[10px]">Record contents</p>
                  <ol className="mt-4 space-y-2 border-l border-line pl-4">
                    {sectionList.map((item, index) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="block text-[12.5px] leading-snug text-grey transition-colors hover:text-ink"
                        >
                          <span className="mr-2 font-mono text-[9px] text-mist">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              </aside>

              <div className="lg:col-span-8 lg:col-start-5">
                <Section id="overview" number="01" title={study.overview.heading}>
                  {study.overview.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="body-copy mb-4">
                      {paragraph}
                    </p>
                  ))}
                  {study.overview.list && (
                    <ul className="mt-5 border-t border-line">
                      {study.overview.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 border-b border-line py-3">
                          <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                          <span className="text-sm leading-relaxed text-graphite">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Section>

                <Section id="context" number="02" title={study.context.heading}>
                  {study.context.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="body-copy mb-4">
                      {paragraph}
                    </p>
                  ))}
                </Section>

                <Section id="challenge" number="03" title={study.challenge.heading}>
                  {study.challenge.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="body-copy mb-4">
                      {paragraph}
                    </p>
                  ))}
                  {study.challenge.list && (
                    <ul className="mt-5 border-t border-line">
                      {study.challenge.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 border-b border-line py-3">
                          <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                          <span className="text-sm leading-relaxed text-graphite">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Section>

                <Section id="constraints" number="04" title="Constraints and requirements">
                  <ul className="border-t border-line">
                    {study.constraints.map((item) => (
                      <li key={item} className="flex items-start gap-3 border-b border-line py-3">
                        <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                        <span className="text-sm leading-relaxed text-graphite">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section id="contribution" number="05" title="Tunnels' role and contribution">
                  <p className="mb-5 font-display text-lg leading-snug tracking-[-0.01em] text-ink">
                    {study.role}
                  </p>
                  <p className="body-copy mb-5">{study.roleSummary}</p>
                  <ol className="border-t border-line">
                    {study.contribution.map((item, index) => (
                      <li key={item} className="grid grid-cols-[2rem_1fr] gap-2 border-b border-line py-3">
                        <span className="font-mono text-[10px] text-mist">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-relaxed text-graphite">{item}</span>
                      </li>
                    ))}
                  </ol>
                </Section>

                <Section id="architecture" number="06" title="Engineering approach">
                  <div className="space-y-6">
                    {study.architecture.map((item) => (
                      <div key={item.title} className="border-l-2 border-line pl-5">
                        <h3 className="font-display text-base leading-snug tracking-[-0.01em] text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-grey">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </Section>

                <Section id="components" number="07" title="Platform components">
                  <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
                    {study.components.map((group) => (
                      <div key={group.layer} className="bg-paper p-5">
                        <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-tunnels-red">
                          {group.layer}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {group.items.map((item) => (
                            <li key={item} className="text-[13px] leading-relaxed text-graphite">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-mist">{study.componentsNote}</p>
                </Section>

                <Section id="process" number="08" title="Delivery process">
                  <ol className="border-t border-line">
                    {study.process.map((step) => (
                      <li key={step.phase} className="grid gap-3 border-b border-line py-5 sm:grid-cols-12 sm:gap-5">
                        <span className="font-mono text-[10px] text-tunnels-red sm:col-span-1 sm:pt-1">
                          {step.phase}
                        </span>
                        <div className="sm:col-span-11">
                          <h3 className="font-display text-base tracking-[-0.01em]">{step.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-grey">{step.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </Section>

                <Section id="decisions" number="09" title="Decisions and trade-offs">
                  <div className="grid gap-px border border-line bg-line">
                    {study.decisions.map((item) => (
                      <div key={item.decision} className="bg-paper p-5 md:p-6">
                        <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-mist">
                          Decision
                        </p>
                        <h3 className="mt-2 font-display text-base tracking-[-0.01em]">{item.decision}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-graphite">{item.choice}</p>
                        <p className="mt-3 border-t border-line pt-3 text-[13px] leading-relaxed text-grey">
                          <span className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-tunnels-red">
                            Trade-off
                          </span>{" "}
                          {item.tradeoff}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>

                <Section id="results" number="10" title="Results and outcomes">
                  <div className="border border-line">
                    <table className="w-full border-collapse text-left">
                      <caption className="sr-only">Outcome measures and publication status</caption>
                      <thead>
                        <tr className="border-b border-line bg-paper-deep">
                          <th scope="col" className="px-4 py-3 font-mono text-[9.5px] uppercase tracking-[0.12em] text-grey">
                            Measure
                          </th>
                          <th scope="col" className="px-4 py-3 font-mono text-[9.5px] uppercase tracking-[0.12em] text-grey">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {study.results.map((row) => (
                          <tr key={row.measure} className="border-b border-line last:border-b-0">
                            <td className="px-4 py-3 text-[13px] leading-relaxed text-graphite">{row.measure}</td>
                            <td className="px-4 py-3 text-[12px] leading-relaxed text-mist">{row.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-mist">{study.resultsNote}</p>
                </Section>

                <Section id="lessons" number="11" title="What we took from it">
                  <ul className="space-y-4">
                    {study.lessons.map((lesson) => (
                      <li key={lesson} className="border-l-2 border-tunnels-red pl-5 text-sm leading-relaxed text-graphite">
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </Section>

                <Section id="capabilities" number="12" title="Related Tunnels capabilities">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="eyebrow text-[10px]">Service divisions</p>
                      <ul className="mt-3 border-t border-line">
                        {services.map(
                          (service) =>
                            service && (
                              <li key={service.slug}>
                                <Link
                                  to={`/services/${service.slug}`}
                                  className="group flex items-start justify-between gap-3 border-b border-line py-3"
                                >
                                  <span>
                                    <span className="block text-sm text-ink group-hover:text-tunnels-red">
                                      {service.name}
                                    </span>
                                    <span className="mt-0.5 block text-xs leading-relaxed text-grey">
                                      {service.summary}
                                    </span>
                                  </span>
                                  <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-mist" aria-hidden="true" />
                                </Link>
                              </li>
                            ),
                        )}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow text-[10px]">Solution areas</p>
                      <ul className="mt-3 border-t border-line">
                        {solutions.map(
                          (solution) =>
                            solution && (
                              <li key={solution.slug}>
                                <Link
                                  to={`/solutions/${solution.slug}`}
                                  className="group flex items-start justify-between gap-3 border-b border-line py-3"
                                >
                                  <span>
                                    <span className="block text-sm text-ink group-hover:text-tunnels-red">
                                      {solution.name}
                                    </span>
                                    <span className="mt-0.5 block text-xs leading-relaxed text-grey">
                                      {solution.short}
                                    </span>
                                  </span>
                                  <ArrowUpRight className="mt-1 h-3.5 w-3.5 shrink-0 text-mist" aria-hidden="true" />
                                </Link>
                              </li>
                            ),
                        )}
                      </ul>
                    </div>
                  </div>
                </Section>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-line bg-paper-deep py-12">
          <div className="shell grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="eyebrow">Project enquiry</p>
              <h2 className="mt-3 font-display text-2xl leading-snug tracking-[-0.02em] md:text-3xl">
                Building something in this territory?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-graphite">
                Describe the system and the constraint. We will tell you what we can evidence from
                comparable work, what a reference conversation would cover, and whether we are the right
                partner.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-start">
              <Action to={`/contact?service=${encodeURIComponent(study.product)}`} variant="solid" withArrow>
                Discuss a project like this
              </Action>
              <Action to="/engineering-approach" variant="link" withArrow>
                See the engineering approach
              </Action>
            </div>
          </div>
        </div>
      </article>

      <RelatedCaseStudies
        studies={related}
        label="Selected client work"
        title="More of our work"
        copy="Each record follows the same structure, so the approach and our role can be compared across products."
      />

      <CtaBand />
    </>
  );
}
