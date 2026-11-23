import SEO from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import SectionHeading from "@/components/site/SectionHeading";
import Action from "@/components/site/Action";
import Reveal from "@/components/site/Reveal";
import { SITE } from "@/lib/site";

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

const timeline = [
  {
    year: "2020",
    title: "Beyond application delivery",
    copy: "Engagements expand into platform and infrastructure work as clients move critical systems to the cloud.",
  },
  {
    year: "2022",
    title: "Integration and modernisation",
    copy: "Longer programmes replace point delivery: legacy modernisation, systems integration and architecture advisory.",
  },
  {
    year: "2024",
    title: "Intelligent systems",
    copy: "AI engineering becomes a division in its own right, focused on production systems rather than prototypes.",
  },
  {
    year: "Today",
    title: "Global delivery",
    copy: "Distributed teams deliver programmes across time zones and continents, under one engineering standard.",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Tunnels Global"
        description="Tunnels Global is an enterprise technology and engineering company helping organisations design, build, modernise and operate the systems they depend on."
        path="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Tunnels Global",
          url: `${SITE.url}/about`,
        }}
      />
      <PageHeader
        eyebrow="About Tunnels"
        title="A technology company built around engineering accountability."
        lede="Tunnels exists to help organisations solve difficult technology problems, modernise the systems they depend on, and operate reliable digital infrastructure."
        crumbs={[{ label: "About" }]}
        aside={
          <dl className="space-y-5 border-l border-line pl-6">
            <div>
              <dt className="eyebrow text-[10px]">Divisions</dt>
              <dd className="mt-1 text-sm text-ink">Five, under one engineering standard</dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Engagement</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink">
                Defined project · Embedded team · Advisory
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Coverage</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink">Global</dd>
            </div>
          </dl>
        }
      />

      {/* Story */}
      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">The company</p>
          </div>
          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            <p className="text-xl leading-relaxed tracking-[-0.01em] text-ink md:text-[1.55rem] md:leading-[1.5]">
              Tunnels began from a simple observation: the hardest technology problems are rarely
              solved by adding another supplier to the chain.
            </p>
            <p className="body-copy">
              Organisations with complex systems need a partner who can hold both the architectural view
              and the implementation detail — someone who can sit with a CTO on a strategy question in the
              morning and review a migration plan with the engineering team in the afternoon.
            </p>
            <p className="body-copy">
              We built the company around that combination. Our advisory work is done by engineers who
              still build. Our delivery work is shaped by people who understand commercial constraints.
              And our engagements are structured so that responsibility does not end at a document or a
              handover.
            </p>
            <p className="body-copy">
              Our work has moved from application delivery into platform engineering, systems integration,
              modernisation and enterprise AI — not because those became fashionable, but because they are
              where our clients' hardest constraints now sit.
            </p>
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
              A standard of enterprise engineering that is international in quality and not defined by
              where the work is delivered from.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-grey">
              Technical depth, clear accountability and long-term partnership — regardless of geography.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-paper py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Engineering principles"
            title="Six commitments that shape how we work."
            copy="These are the standards we use to review our own decisions, not marketing statements."
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

      {/* Evolution */}
      <section className="border-t border-line bg-paper-deep py-16 md:py-24">
        <div className="shell">
          <SectionHeading
            label="Evolution"
            title="How the company has developed."
            copy="A factual outline of the practice. We have not included client names or unverified milestones."
          />
          <ol className="mt-12 border-t border-line">
            {timeline.map((entry) => (
              <li key={entry.year} className="grid gap-3 border-b border-line py-6 md:grid-cols-12 md:gap-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-tunnels-red md:col-span-2">
                  {entry.year}
                </span>
                <h3 className="font-display text-lg tracking-[-0.01em] md:col-span-3">{entry.title}</h3>
                <p className="text-sm leading-relaxed text-grey md:col-span-7">{entry.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Delivery model */}
      <section className="bg-paper py-16 md:py-24">
        <div className="shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">How we work</p>
            <h2 className="display-md mt-5">One engineering standard, wherever the work happens.</h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-grey">
              We work as a distributed team, engaging with clients wherever they operate. Programme
              leadership, architecture and engineering sit in the same team, with working hours agreed
              around the client's time zone.
            </p>
            <div className="mt-8">
              <Action to="/contact" variant="outline" withArrow>
                Discuss a Project
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

      {/* Leadership */}
      <section className="border-t border-line bg-paper-deep py-16 md:py-20">
        <div className="shell grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Leadership</p>
          </div>
          <div className="lg:col-span-8">
            <div className="border border-dashed border-line bg-paper p-7 md:p-9">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-tunnels-red">
                Verified profiles pending
              </p>
              <h2 className="mt-4 font-display text-xl tracking-[-0.015em] md:text-2xl">
                Leadership biographies are published only when confirmed.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-grey">
                We do not publish invented biographies, credentials or team histories. This section is
                reserved for verified leadership profiles and will be completed with approved content.
              </p>
            </div>
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
