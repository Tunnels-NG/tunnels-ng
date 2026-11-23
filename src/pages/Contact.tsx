import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import ContactForm from "@/components/contact/ContactForm";
import { SITE } from "@/lib/site";

const steps = [
  {
    number: "01",
    title: "Review",
    copy: "An engineer and a delivery lead read the enquiry. We check whether the problem fits our capability and whether we can add real value.",
  },
  {
    number: "02",
    title: "Technical conversation",
    copy: "A 30–45 minute call to understand the system, the constraints and the outcome. No slide deck, no sales script.",
  },
  {
    number: "03",
    title: "Written view",
    copy: "Where there is a fit, we send a short written outline: the options, a suggested engagement shape and an indicative scope.",
  },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact | Discuss a Project"
        description="Talk to Tunnels about enterprise AI, software modernisation, cloud infrastructure, systems integration or engineering partnerships. Send a project enquiry."
        path="/contact"
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHeader
        eyebrow="Contact"
        title="Start with the problem, not the brief."
        lede="Tell us what is happening in the system and what the business needs it to do. The more specific you are, the more useful our first response will be."
        crumbs={[{ label: "Contact" }]}
        aside={
          <dl className="space-y-5 border-l border-line pl-6">
            <div>
              <dt className="eyebrow text-[10px]">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex items-center gap-2 text-sm text-ink hover:text-tunnels-red"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {SITE.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">LinkedIn</dt>
              <dd className="mt-1">
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-ink hover:text-tunnels-red"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  Tunnels Global
                </a>
              </dd>
            </div>
          </dl>
        }
      />

      <section className="bg-paper py-12 md:py-16">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="border-t-2 border-ink pt-7">
              <p className="eyebrow">Project enquiry</p>
              <h2 className="mt-3 font-display text-2xl tracking-[-0.02em] md:text-3xl">
                Tell us about the system and the constraint.
              </h2>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow">What happens next</p>
              <ol className="mt-5 border-t border-line">
                {steps.map((step) => (
                  <li key={step.number} className="border-b border-line py-5">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-tunnels-red">
                      {step.number}
                    </span>
                    <h3 className="mt-2 font-display text-lg tracking-[-0.01em]">{step.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-grey">{step.copy}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 border border-line bg-paper-bright p-5">
                <p className="eyebrow text-[10px]">Before you write</p>
                <ul className="mt-3 space-y-2 text-[13px] leading-relaxed text-grey">
                  <li>What is the system or process today?</li>
                  <li>What is failing, slowing down or no longer supportable?</li>
                  <li>What does the business need it to do instead?</li>
                  <li>Is there a deadline, audit or contractual driver?</li>
                </ul>
                <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-mist">
                  Do not send credentials, customer records or sensitive production data in this form.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                <p className="eyebrow text-[10px]">Other enquiries</p>
                <p className="text-[13px] leading-relaxed text-grey">
                  For security questionnaires, procurement documentation or partnership proposals, email{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-ink underline decoration-line underline-offset-4 hover:text-tunnels-red"
                  >
                    {SITE.email}
                  </a>{" "}
                  with the subject line “Procurement”.
                </p>
                <p className="text-[13px] leading-relaxed text-grey">
                  Looking for a capability overview first?{" "}
                  <Link to="/services" className="text-ink underline decoration-line underline-offset-4 hover:text-tunnels-red">
                    Explore our services
                  </Link>
                  .
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
