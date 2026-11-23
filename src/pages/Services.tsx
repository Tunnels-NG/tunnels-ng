import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import Action from "@/components/site/Action";
import Reveal from "@/components/site/Reveal";
import { services } from "@/content/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Services | Enterprise AI, Software, Cloud, Security & Advisory"
        description="Five integrated service divisions: enterprise AI and intelligent systems, software engineering, cloud and platform infrastructure, cybersecurity and reliability, technology advisory."
        path="/services"
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHeader
        eyebrow="Services"
        title="Five engineering divisions, connected by one standard."
        lede="Tunnels is not a marketplace of technical skills. Each division exists because it addresses a distinct class of enterprise problem — and each is delivered by people who also understand the systems around it."
        crumbs={[{ label: "Services" }]}
        aside={
          <div className="border border-line bg-paper-bright p-6">
            <p className="eyebrow text-[10px]">Engaging more than one division</p>
            <p className="mt-3 text-sm leading-relaxed text-graphite">
              Most complex programmes span AI, software, cloud and security. We assemble one accountable
              team rather than handing you between suppliers.
            </p>
            <div className="mt-5">
              <Action to="/solutions" variant="link" withArrow>
                See commercial solutions
              </Action>
            </div>
          </div>
        }
      />

      <section className="bg-paper">
        <div className="shell">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 40}>
              <article className="grid gap-6 border-b border-line py-12 md:grid-cols-12 md:gap-10 md:py-16">
                <div className="md:col-span-1">
                  <span className="font-mono text-[11px] text-mist">{service.number}</span>
                </div>

                <div className="md:col-span-4">
                  <h2 className="font-display text-2xl leading-tight tracking-[-0.02em] md:text-[2rem]">
                    <Link to={`/services/${service.slug}`} className="hover:text-tunnels-red">
                      {service.name}
                    </Link>
                  </h2>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-tunnels-red">
                    {service.tagline}
                  </p>
                  <div className="mt-7">
                    <Action to={`/services/${service.slug}`} variant="link" withArrow>
                      Division overview
                    </Action>
                  </div>
                </div>

                <div className="md:col-span-4">
                  <p className="body-copy">{service.summary}</p>
                  <p className="mt-4 text-sm leading-relaxed text-grey">{service.message}</p>
                </div>

                <div className="md:col-span-3">
                  <p className="eyebrow text-[10px]">Core capabilities</p>
                  <ul className="mt-3 space-y-1.5">
                    {service.capabilities.slice(0, 5).map((capability) => (
                      <li key={capability.title} className="flex items-start gap-2 text-[13px] text-graphite">
                        <span className="mt-[0.55em] h-px w-2 shrink-0 bg-tunnels-red" aria-hidden="true" />
                        {capability.title}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-mist">
                    + {service.capabilities.length - 5} more
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep py-16 md:py-20">
        <div className="shell grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow">How services combine</p>
            <h2 className="display-md mt-5">A single programme, not a chain of suppliers.</h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="body-copy">
              A modernisation programme may require architecture advisory, legacy software engineering,
              a new cloud platform and a security review of the result. Running those as separate
              procurements creates exactly the integration problem the programme was meant to solve.
            </p>
            <p className="body-copy mt-4">
              We structure multi-division work under one technical lead, one plan and one set of acceptance
              criteria. Commercial solutions describe the outcome; service divisions describe the capability
              applied to it.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Action to="/solutions" variant="solid" withArrow>
                Explore Solutions
              </Action>
              <Link
                to="/contact"
                className="btn-outline"
              >
                Discuss a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14">
        <div className="shell">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
            <p className="eyebrow">Every division</p>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-1.5 text-[13px] text-graphite hover:text-tunnels-red"
                >
                  {service.shortName}
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
