import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import Action from "@/components/site/Action";
import Reveal from "@/components/site/Reveal";
import { commercialNote, engagementModels } from "@/content/engagementModels";
import { SITE } from "@/lib/site";

const columns = [
  { key: "suitableWhen", label: "Suitable circumstances" },
  { key: "structure", label: "Typical structure" },
  { key: "contributes", label: "What Tunnels contributes" },
  { key: "governance", label: "How progress is governed" },
] as const;

export default function EngagementModels() {
  return (
    <>
      <SEO
        title="Engagement Models | Project, Managed Services & Strategic Partnership"
        description="Three ways to work with Tunnels Global: project-based engineering with defined acceptance criteria, managed engineering services, and long-term strategic engineering partnerships."
        path="/engagement-models"
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Engagement Models", path: "/engagement-models" },
        ])}
      />

      <PageHeader
        eyebrow="Engagement Models"
        title="Three ways to work with us."
        lede="The commercial model follows the problem. A contained change should not be sold as a partnership, and a platform that needs an owner should not be procured as a series of projects."
        crumbs={[{ label: "Engagement Models" }]}
        aside={
          <div className="border-l border-line pl-6">
            <p className="eyebrow text-[10px]">Commercial position</p>
            <p className="mt-3 text-[13px] leading-relaxed text-grey">{commercialNote}</p>
          </div>
        }
      />

      <section className="border-b border-line bg-paper py-12 md:py-14">
        <div className="shell">
          <div className="grid gap-px border border-line bg-line md:grid-cols-3">
            {engagementModels.map((model) => (
              <a
                key={model.slug}
                href={`#${model.slug}`}
                className="group bg-paper p-6 transition-colors hover:bg-paper-bright"
              >
                <span className="font-mono text-[10px] tracking-[0.14em] text-mist">{model.number}</span>
                <h2 className="mt-4 font-display text-lg leading-snug tracking-[-0.015em] group-hover:text-tunnels-red">
                  {model.name}
                </h2>
                <p className="mt-2 text-[13px] leading-relaxed text-grey">{model.short}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="shell">
          {engagementModels.map((model, index) => (
            <Reveal key={model.slug} as="section">
              <article
                id={model.slug}
                className="grid scroll-mt-24 gap-8 border-b border-line py-12 md:py-16 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] tracking-[0.14em] text-tunnels-red">
                      {model.number}
                    </span>
                    <span className="h-px w-8 bg-line" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 font-display text-3xl leading-tight tracking-[-0.025em] md:text-[2.1rem]">
                    {model.name}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-graphite">{model.summary}</p>
                  <div className="mt-6 border-l-2 border-ink pl-4">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-mist">
                      Less suitable when
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-grey">{model.notSuitableWhen}</p>
                  </div>
                  <div className="mt-7">
                    <Action to={`/contact?engagement=${encodeURIComponent(model.name)}`} variant="link" withArrow>
                      Discuss this model
                    </Action>
                  </div>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:gap-10">
                  {columns.map((column) => (
                    <div key={column.key}>
                      <p className="eyebrow text-[10px]">{column.label}</p>
                      <ul className="mt-3 border-t border-line">
                        {model[column.key].map((item) => (
                          <li key={item} className="flex items-start gap-2.5 border-b border-line py-2.5">
                            <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                            <span className="text-[13px] leading-relaxed text-graphite">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="sm:col-span-2">
                    <p className="eyebrow text-[10px]">Responsibilities</p>
                    <ul className="mt-3 border-t border-line">
                      {model.responsibilities.map((item) => (
                        <li key={item} className="border-b border-line py-2.5 text-[13px] leading-relaxed text-graphite">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Agreeing the work</p>
            <h2 className="display-md mt-5">Scope before cost, in that order.</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-grey">
              Every engagement begins with a short assessment, even when the intention is a full programme.
              It establishes what the work actually contains, which is the only basis for a number that will
              hold.
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="border-t border-line">
              {[
                {
                  title: "First conversation",
                  body: "30 to 45 minutes on the system, the constraint and the outcome. No deck, no sales script.",
                },
                {
                  title: "Written view",
                  body: "Where there is a fit, a short written outline: options, recommended approach and the smallest engagement that produces a defensible result.",
                },
                {
                  title: "Scope and acceptance",
                  body: "Deliverables, acceptance criteria, assumptions and exclusions are written down before commercial terms are agreed.",
                },
                {
                  title: "Governance at kickoff",
                  body: "Decision rights, reporting cadence, escalation contacts and change control are agreed with the people who will actually run the engagement.",
                },
              ].map((step, index) => (
                <li key={step.title} className="grid gap-3 border-b border-line py-5 sm:grid-cols-12 sm:gap-6">
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
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <Link to="/engineering-approach" className="group inline-flex items-center gap-1.5 text-ink hover:text-tunnels-red">
                Our engineering approach
                <ArrowUpRight className="h-3.5 w-3.5 opacity-40" aria-hidden="true" />
              </Link>
              <Link to="/solutions" className="group inline-flex items-center gap-1.5 text-ink hover:text-tunnels-red">
                Commercial solutions
                <ArrowUpRight className="h-3.5 w-3.5 opacity-40" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which model fits?"
        copy={`Describe the problem to ${SITE.email} or through the enquiry form. We will recommend the smallest engagement that can produce a defensible result, and say so if that is not us.`}
      />
    </>
  );
}
