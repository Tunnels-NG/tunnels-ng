import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import Action from "@/components/site/Action";
import Reveal from "@/components/site/Reveal";
import {
  industries,
  industryDisclaimer,
  industryEvidenceLabels,
} from "@/content/industries";

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries | Financial Services, Healthcare, Manufacturing & More"
        description="Sectors where Tunnels applies enterprise engineering: financial services, healthcare, manufacturing, logistics, energy and professional services. Capability relevance, stated honestly."
        path="/industries"
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
        ])}
      />

      <PageHeader
        eyebrow="Industries"
        title="Sectors where system behaviour carries commercial weight."
        lede="We apply the same engineering method across sectors. What changes is the constraint: regulatory exposure, uptime, data sensitivity or operational continuity."
        crumbs={[{ label: "Industries" }]}
        aside={
          <div className="border border-dashed border-line bg-paper-bright p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-tunnels-red">
              A note on claims
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-grey">{industryDisclaimer}</p>
          </div>
        }
      />

      <section className="border-b border-line bg-paper-deep py-8">
        <div className="shell">
          <dl className="grid gap-px border border-line bg-line sm:grid-cols-3">
            {[
              { term: "Demonstrated experience", def: "A completed, verifiable engagement in the sector that the client has approved for disclosure." },
              { term: "Relevant capability", def: "Engineering capability that applies directly to this sector's technical constraints." },
              { term: "Potential application", def: "A plausible use of that capability, to be validated against the client's actual environment." },
            ].map((item) => (
              <div key={item.term} className="bg-paper p-4">
                <dt className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-tunnels-red">
                  {item.term}
                </dt>
                <dd className="mt-2 text-[12.5px] leading-relaxed text-grey">{item.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-paper">
        <div className="shell">
          {industries.map((industry, index) => (
            <Reveal key={industry.slug} delay={index * 35}>
              <article
                id={industry.slug}
                className="grid scroll-mt-28 gap-8 border-b border-line py-12 md:grid-cols-12 md:gap-10 md:py-16"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-mist">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-6 bg-line" aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 font-display text-2xl leading-tight tracking-[-0.02em] md:text-[1.9rem]">
                    {industry.name}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-grey">{industry.summary}</p>
                  <p className="mt-5 inline-block border border-line px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-mist">
                    {industryEvidenceLabels[industry.experience]}
                  </p>
                </div>

                <div className="md:col-span-4">
                  <p className="eyebrow text-[10px]">Typical environment</p>
                  <ul className="mt-3 space-y-2.5">
                    {industry.context.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-graphite">
                        <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-4">
                  <p className="eyebrow text-[10px]">Relevant capability</p>
                  <ul className="mt-3 space-y-2">
                    {industry.capability.map((item) => (
                      <li key={item} className="text-[13px] leading-relaxed text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="eyebrow mt-6 text-[10px]">Potential applications</p>
                  <ul className="mt-3 space-y-2">
                    {industry.applications.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[12.5px] leading-relaxed text-grey">
                        <ArrowUpRight className="mt-[0.35em] h-3 w-3 shrink-0 text-mist" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep py-16 md:py-20">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Sector-agnostic foundations</p>
            <h2 className="display-md mt-5">The same disciplines apply everywhere.</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-grey">
              Identity, data ownership, integration contracts, observability and recovery are not
              industry-specific concerns. Getting them right is what makes sector requirements achievable.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Action to="/services" variant="outline" withArrow>
                Explore Capabilities
              </Action>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {[
                { title: "Regulated environments", body: "Access control, auditability, retention and change evidence built into the architecture." },
                { title: "Operational continuity", body: "Designs that account for maintenance windows, degraded modes and recovery objectives." },
                { title: "Data sensitivity", body: "Segmentation, encryption and permission-aware retrieval where content is confidential." },
                { title: "Partner ecosystems", body: "Versioned interfaces and clear ownership when third parties depend on your systems." },
              ].map((item) => (
                <div key={item.title} className="bg-paper p-6">
                  <h3 className="font-display text-base tracking-[-0.01em]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-grey">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs leading-relaxed text-mist">
              We do not claim HIPAA, PCI DSS, SOC 2, ISO 27001 or other regulatory certification. Where a
              sector requires attestation, we help scope the assessment and act on its findings.{" "}
              <Link to="/contact" className="text-ink underline decoration-line underline-offset-4 hover:text-tunnels-red">
                Ask about relevant experience
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Working inside a sector with strict constraints?"
        copy="Tell us what the environment requires — regulatory, operational or technical — and we will be explicit about where our experience applies."
      />
    </>
  );
}
