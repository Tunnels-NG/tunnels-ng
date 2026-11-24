import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import SectionHeading from "@/components/site/SectionHeading";
import Action from "@/components/site/Action";
import Reveal from "@/components/site/Reveal";
import { SITE } from "@/lib/site";
import {
  companyAddress,
  companyTimeline,
  operatingModel,
  teamIntro,
  teamMembers,
  timelineNote,
  type TeamMember,
} from "@/content/company";

const principles = [
  {
    number: "01",
    title: "Understand before proposing",
    copy: "We read the code, inspect the infrastructure and speak to the people who operate the system. A recommendation made without evidence is an opinion.",
  },
  {
    number: "02",
    title: "Design for change, not for the diagram",
    copy: "Architecture is judged by how safely the system can be modified next year, not by how elegant it looks at handover.",
  },
  {
    number: "03",
    title: "Make failure explicit",
    copy: "Every design states what happens when a dependency is unavailable, a message is duplicated or a restore is required.",
  },
  {
    number: "04",
    title: "Prefer reversible steps",
    copy: "We sequence work so that a decision can be reversed cheaply. Irreversible moves require stronger evidence.",
  },
  {
    number: "05",
    title: "Leave the system legible",
    copy: "Documentation, tests and runbooks are deliverables. A system understood by one person is a risk, not an asset.",
  },
  {
    number: "06",
    title: "Stay accountable for outcomes",
    copy: "We do not separate strategy from delivery. The people who recommend the approach are responsible for making it work.",
  },
];

const capabilities = [
  {
    title: "Enterprise software and digital systems",
    copy: "Business-critical applications designed and engineered around how the organisation actually operates.",
  },
  {
    title: "AI-powered systems",
    copy: "Applied AI built and implemented into existing processes, with the evaluation and operating model to sustain it.",
  },
  {
    title: "Cloud platforms and infrastructure",
    copy: "Platform, infrastructure and delivery engineering that a team can run, observe and change safely.",
  },
  {
    title: "Modernisation and integration",
    copy: "Business-critical systems modernised and connected without a big-bang rewrite of everything at once.",
  },
  {
    title: "Reliability and operational capability",
    copy: "Improvements to how systems fail, recover and are operated, not only to what they do when everything works.",
  },
  {
    title: "Defined projects, embedded teams, partnerships",
    copy: "Engagement shaped to the problem: a scoped delivery, an embedded engineering team or a longer technical partnership.",
  },
];

function Portrait({ person, className }: { person: TeamMember; className: string }) {
  if (!person.portrait) {
    return (
      <div
        className={`${className} flex items-center justify-center border border-line bg-paper-deep`}
        role="img"
        aria-label={person.portraitAlt}
      >
        <span className="font-display text-2xl tracking-[-0.02em] text-mist" aria-hidden="true">
          {person.initials}
        </span>
      </div>
    );
  }

  return (
    <img
      src={person.portrait}
      alt={person.portraitAlt}
      width={720}
      height={900}
      loading="lazy"
      decoding="async"
      className={`${className} object-cover object-top`}
    />
  );
}

export default function About() {
  return (
    <>
      <SEO
        title="About Tunnels Global | Leadership, History and Engineering Standard"
        description="Tunnels Global is an international technology and engineering company founded in 2018 and registered in Leicester, England. Our leadership, key personnel, company history and engineering standard."
        path="/about"
        structuredData={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Tunnels Global",
            url: `${SITE.url}/about`,
            description:
              "Leadership, key personnel and company history of Tunnels Global, an international technology and engineering company founded in 2018 and registered in Leicester, England.",
            mainEntity: {
              "@type": "Organization",
              name: SITE.name,
              alternateName: SITE.operatingName,
              url: SITE.url,
              foundingDate: SITE.founded,
              address: {
                "@type": "PostalAddress",
                streetAddress: companyAddress.line1,
                addressLocality: companyAddress.city,
                addressRegion: companyAddress.country,
                postalCode: companyAddress.postcode,
                addressCountry: "GB",
              },
              employee: teamMembers.map((person) => ({
                "@type": "Person",
                name: person.name,
                jobTitle: person.title,
                ...(person.portrait ? { image: `${SITE.url}${person.portrait}` } : {}),
              })),
            },
          },
        ]}
      />
      <PageHeader
        eyebrow="About Tunnels"
        title="A technology company built around engineering accountability."
        lede="Tunnels designs and engineers enterprise software, AI-powered systems and cloud platforms for organisations that depend on them, and stays accountable for the systems it builds."
        crumbs={[{ label: "About" }]}
        aside={
          <dl className="space-y-5 border-l border-line pl-6">
            <div>
              <dt className="eyebrow text-[10px]">Founded</dt>
              <dd className="mt-1 text-sm text-ink">2018</dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Team</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink">
                Distributed across locations and time zones
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Engagement</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink">
                Defined project · Embedded team · Strategic partnership
              </dd>
            </div>
          </dl>
        }
      />

      {/* Company overview */}
      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">The company</p>
            <h2 className="display-md mt-5 max-w-sm text-[1.7rem] leading-snug md:text-[2rem]">
              An engineering partner, not a supplier of capacity.
            </h2>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-grey">
              We are engaged for technical judgement as much as for delivery, and we stay accountable for
              both.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-xl leading-relaxed tracking-[-0.01em] text-ink md:text-[1.55rem] md:leading-[1.5]">
              Tunnels began from a simple observation: the hardest technology problems are rarely solved by
              adding another supplier to the chain.
            </p>
            <p className="body-copy mt-6">
              Organisations with complex systems need a partner who can hold both the architectural view and
              the implementation detail: someone who can sit with a CTO on a strategy question in the morning
              and review a migration plan with the engineering team in the afternoon.
            </p>
            <p className="body-copy mt-4">
              We built the company around that combination. Our advisory work is done by engineers who still
              build. Our delivery work is shaped by people who understand commercial constraints. And our
              engagements are structured so that responsibility does not end at a document or a handover.
            </p>

            <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
              {capabilities.map((item) => (
                <div key={item.title} className="bg-paper p-5">
                  <h3 className="font-display text-base leading-snug tracking-[-0.01em]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-grey">{item.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-5 text-sm">
              <Link
                to="/engineering-approach"
                className="group inline-flex items-center gap-1.5 text-ink hover:text-tunnels-red"
              >
                Our engineering approach
                <ArrowUpRight className="h-3.5 w-3.5 opacity-40" aria-hidden="true" />
              </Link>
              <Link
                to="/case-studies"
                className="group inline-flex items-center gap-1.5 text-ink hover:text-tunnels-red"
              >
                Selected Client Work
                <ArrowUpRight className="h-3.5 w-3.5 opacity-40" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / vision */}
      <section className="border-y border-line bg-paper-deep py-16 md:py-20">
        <div className="shell grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow">Mission</p>
            <p className="mt-5 font-display text-2xl leading-snug tracking-[-0.02em] md:text-[1.9rem]">
              To help organisations design, build, modernise and operate the technology that moves them
              forward.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-grey">
              Practical engineering, applied to the systems a business actually runs on.
            </p>
          </div>
          <div className="md:border-l md:border-line md:pl-16">
            <p className="eyebrow">Vision</p>
            <p className="mt-5 font-display text-2xl leading-snug tracking-[-0.02em] md:text-[1.9rem]">
              A standard of enterprise engineering that is international in quality and not defined by where
              the work is delivered from.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-grey">
              Technical depth, clear accountability and long-term partnership, regardless of geography.
            </p>
          </div>
        </div>
      </section>

      {/* Engineering principles */}
      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Engineering principles"
            title="Six commitments that shape how we work."
            copy="These are the standards we use to review our own decisions, not marketing statements."
            link={{ label: "Full approach", href: "/engineering-approach" }}
          />
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 50} className="bg-paper">
                <div className="h-full bg-paper p-7 md:p-8">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-tunnels-red">
                    {principle.number}
                  </span>
                  <h3 className="mt-6 font-display text-lg leading-snug tracking-[-0.01em]">
                    {principle.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-grey">{principle.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company evolution */}
      <section id="history" className="scroll-mt-24 border-t border-line bg-paper-deep py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Company evolution"
            title="Founded in 2018. Built since, one engagement at a time."
          />
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-grey md:ml-[25%]">
            {timelineNote}
          </p>
          <ol className="mt-12 border-t border-line">
            {companyTimeline.map((entry) => (
              <li key={entry.period} className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-tunnels-red md:col-span-2">
                  {entry.period}
                </span>
                <h3 className="font-display text-lg leading-snug tracking-[-0.01em] md:col-span-3">
                  {entry.title}
                </h3>
                <p className="text-sm leading-relaxed text-grey md:col-span-7">{entry.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Operating model */}
      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">How we work</p>
            <h2 className="display-md mt-5">One engineering standard, wherever the work happens.</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-grey">{operatingModel}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Action to="/contact" variant="outline" withArrow>
                Discuss a Project
              </Action>
              <Action to="/engagement-models" variant="link" withArrow>
                Engagement models
              </Action>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {[
                {
                  label: "Team shape",
                  body: "Named architects and engineers, engaged for the duration of the programme rather than rotated through it.",
                },
                {
                  label: "Working hours",
                  body: "Delivery schedules agreed around the client's time zone, with synchronous time reserved for decisions.",
                },
                {
                  label: "Collaboration",
                  body: "Shared repositories, written decisions and direct access to the engineers doing the work.",
                },
                {
                  label: "Accountability",
                  body: "The people who recommend the approach remain responsible for making it work.",
                },
              ].map((item) => (
                <div key={item.label} className="bg-paper p-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink">{item.label}</p>
                  <p className="mt-3 text-sm leading-relaxed text-grey">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership and key people */}
      <section id="leadership" className="scroll-mt-24 border-t border-line bg-paper-deep py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Leadership & key people"
            title="The people behind the engineering."
          />
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-grey md:ml-[25%]">{teamIntro}</p>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((person, index) => (
              <Reveal key={person.slug} delay={index * 40} className="bg-paper">
                <article className="flex h-full flex-col bg-paper">
                  <div className="overflow-hidden border-b border-line bg-paper-deep">
                    <Portrait person={person} className="aspect-[4/5] w-full" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <h3 className="font-display text-xl leading-snug tracking-[-0.01em]">{person.name}</h3>
                    <p className="mt-1 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.1em] text-tunnels-red">
                      {person.title}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-grey">{person.summary}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Interested in how we would approach your problem?"
        copy="Send a short description of the system and the constraint. We will respond with an honest view of the options, including whether we are the right partner."
      />
    </>
  );
}
