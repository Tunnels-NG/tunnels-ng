import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import Action from "@/components/site/Action";
import Reveal from "@/components/site/Reveal";
import { approachStages, disciplines, scopingNote } from "@/content/engineeringApproach";
import { SITE } from "@/lib/site";

export default function EngineeringApproach() {
  return (
    <>
      <SEO
        title="Our Engineering Approach | Discover, Architect, Engineer, Validate, Deploy, Operate"
        description="How Tunnels approaches complex technology engagements: discovery, architecture, engineering, validation, deployment and operation, with documented decisions, automated testing, security and observability."
        path="/engineering-approach"
        structuredData={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Engineering Approach", path: "/engineering-approach" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Engineering Approach",
            url: `${SITE.url}/engineering-approach`,
            description:
              "The six-stage engineering method Tunnels applies to enterprise technology engagements, and the engineering disciplines that support it.",
            isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
          },
        ]}
      />

      <PageHeader
        eyebrow="Our Engineering Approach"
        title="A method that survives contact with the system."
        lede="Six stages, each producing something the next stage depends on. The sequence is consistent across divisions; the depth of each stage is set by the decision the client needs to take."
        crumbs={[{ label: "Engineering Approach" }]}
        aside={
          <dl className="space-y-5 border-l border-line pl-6">
            <div>
              <dt className="eyebrow text-[10px]">Stages</dt>
              <dd className="mt-1 text-sm text-ink">Six, from discovery to operation</dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Scoping</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink">
                A single stage, or an integrated programme
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Accountability</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink">
                A named senior engineer per engagement
              </dd>
            </div>
          </dl>
        }
      />

      <section className="border-b border-line bg-paper py-14 md:py-16">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Why a method</p>
            <h2 className="display-md mt-5">Discipline is what makes delivery predictable.</h2>
          </div>
          <div className="space-y-5 lg:col-span-6 lg:col-start-7">
            <p className="body-copy">
              Complex engagements rarely fail because someone could not write the code. They fail because the
              problem was not understood precisely enough, the architecture was decided by default, the
              failure modes were never tested, or nobody owned the system after launch.
            </p>
            <p className="body-copy">
              The method below exists to make those failures visible early, when they are still cheap to
              correct. Each stage has a defined output and an explicit exit condition, so progress is judged
              by evidence rather than by the confidence of the last status report.
            </p>
            <p className="text-sm leading-relaxed text-grey">{scopingNote}</p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="shell">
          {approachStages.map((stage, index) => (
            <Reveal key={stage.key} as="section">
              <article
                id={stage.key}
                className={`grid scroll-mt-24 gap-8 border-b border-line py-12 md:py-16 lg:grid-cols-12 lg:gap-10 ${
                  index % 2 === 1 ? "" : ""
                }`}
              >
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[11px] tracking-[0.14em] text-tunnels-red">
                      {stage.number}
                    </span>
                    <span className="h-px w-8 bg-line" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 font-display text-3xl leading-tight tracking-[-0.025em] md:text-[2.2rem]">
                    {stage.name}
                  </h2>
                  <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-ink">{stage.promise}</p>
                  <div className="mt-8 space-y-4 lg:max-w-xs">
                    {stage.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-grey">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <p className="eyebrow text-[10px]">Activities</p>
                  <ul className="mt-3 border-t border-line">
                    {stage.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-3 border-b border-line py-2.5">
                        <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                        <span className="text-[13px] leading-relaxed text-graphite">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <p className="eyebrow text-[10px]">Outputs</p>
                  <ul className="mt-3 border-t border-line">
                    {stage.artefacts.map((artefact) => (
                      <li key={artefact} className="border-b border-line py-2.5 text-[13px] leading-relaxed text-graphite">
                        {artefact}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 border-l-2 border-ink pl-4">
                    <p className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-mist">
                      Stage exit
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink">{stage.exit}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-ink py-16 text-paper md:py-20">
        <div className="shell">
          <div className="grid gap-6 border-t border-line-dark pt-6 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="eyebrow text-paper/40">Engineering disciplines</p>
              <h2 className="display-md mt-4 text-paper">The practices behind every stage.</h2>
            </div>
            <p className="max-w-lg text-sm leading-relaxed text-paper/50 md:col-span-6 md:col-start-7 md:pt-2">
              These are working practices, applied consistently across engagements. They are not
              certifications, accreditations or guarantees, and we do not describe them as such.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-line-dark bg-line-dark sm:grid-cols-2 lg:grid-cols-3">
            {disciplines.map((discipline) => (
              <div key={discipline.title} className="bg-ink p-6">
                <h3 className="font-display text-base leading-snug tracking-[-0.01em] text-paper">
                  {discipline.title}
                </h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-paper/55">{discipline.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-line-dark pt-6 md:flex-row md:items-center">
            <p className="max-w-xl text-sm leading-relaxed text-paper/60">
              We do not claim HIPAA, PCI DSS, SOC 2 or ISO 27001 certification. Where independent attestation
              or penetration testing is required, we help scope it and act on the findings.
            </p>
            <Action to="/contact" variant="light" withArrow>
              Discuss an Engagement
            </Action>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Scoping the work</p>
            <h2 className="display-md mt-5">Engage at one stage or across all six.</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-grey">
              An assessment may be the entire engagement. A modernisation programme will use every stage.
              What does not change is the requirement that each stage produces evidence before the next one
              starts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Action to="/engagement-models" variant="outline" withArrow>
                Engagement Models
              </Action>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {[
                { title: "Assessment only", body: "Discovery and options paper, with a costed recommendation. Often the right first step." },
                { title: "Architecture engagement", body: "Target design, decision records and a sequenced transition plan." },
                { title: "Delivery programme", body: "Architecture through deployment, with acceptance evidence per phase." },
                { title: "Operate and improve", body: "Ongoing ownership, reliability engineering and measured improvement." },
              ].map((item) => (
                <div key={item.title} className="bg-paper p-6">
                  <h3 className="font-display text-base tracking-[-0.01em]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-grey">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="Want the method applied to a specific problem?"
        copy="Send the system, the constraint and the decision you need to take. We will propose the smallest engagement that can produce a defensible answer."
      />
    </>
  );
}
