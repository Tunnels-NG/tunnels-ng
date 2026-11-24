import { Link } from "react-router-dom";
import SEO, { breadcrumbSchema } from "@/components/site/SEO";
import PageHeader from "@/components/site/PageHeader";
import CtaBand from "@/components/site/CtaBand";
import { SITE } from "@/lib/site";
import { companyAddress } from "@/content/company";

const lastUpdated = "24 November 2026";

interface PrivacySection {
  id: string;
  number: string;
  title: string;
  body: string[];
  list?: string[];
}

const sections: PrivacySection[] = [
  {
    id: "controller",
    number: "01",
    title: "Who is responsible for your data",
    body: [
      `The data controller for personal information submitted through this website is ${SITE.legalName}, an enterprise technology and engineering company.`,
      `Registered office: ${companyAddress.line1}, ${companyAddress.city}, ${companyAddress.country}, ${companyAddress.postcode}.`,
    ],
    list: [
      "Privacy and data protection contact: hello@tunnelsng.com",
      "Company registration number: not published here. It is awaiting confirmation and will be added once verified.",
    ],
  },
  {
    id: "what-we-collect",
    number: "02",
    title: "What information we collect",
    body: [
      "We collect the information you choose to give us through the project enquiry form, and any information you send us by email in the course of that correspondence.",
    ],
    list: [
      "Enquiry form: full name, work email address, company, job title, country, service of interest, preferred engagement model, estimated budget range, project description, your privacy acknowledgement, the time of submission and the page you submitted from.",
      "Email: your name, email address, organisation and anything else you include in your message or attachments.",
      "Technical data: our hosting provider processes standard request data such as IP address, browser type and the pages requested in order to serve the site and protect it from abuse.",
    ],
  },
  {
    id: "why",
    number: "03",
    title: "Why we collect it",
    body: [
      "We use enquiry information to assess whether the work fits our capability, to respond to you, to hold a technical conversation and, where relevant, to prepare a written outline and a proposal.",
      "We do not sell your information, rent it, or add you to a marketing list because you sent an enquiry.",
    ],
  },
  {
    id: "lawful-basis",
    number: "04",
    title: "Our lawful basis for processing",
    body: [
      "Under the UK GDPR and, where applicable, the EU GDPR, we rely on the following lawful bases.",
    ],
    list: [
      "Legitimate interests: responding to a business enquiry, assessing fit and maintaining records of that correspondence. We keep this balanced against your rights and expect enquiries to be professional and business related.",
      "Consent: where you explicitly agree to be contacted about something beyond your enquiry, or where consent is required for a specific processing activity. You can withdraw consent at any time.",
      "Contract: where an engagement begins, processing necessary to deliver it and to administer the commercial relationship.",
      "Legal obligation: where we must retain or disclose information to comply with the law, tax rules or a lawful request from an authority.",
    ],
  },
  {
    id: "storage-retention",
    number: "05",
    title: "How enquiry information is stored and retained",
    body: [
      "Enquiries are delivered to a form submission endpoint configured for this site and to the mailbox monitored by the team, and are accessible only to the people involved in reviewing and responding to them.",
      "We retain enquiry details for as long as needed for the conversation and any resulting engagement, and we review retained enquiries at least annually. Where an enquiry does not lead to an engagement, we delete it once it is no longer needed, unless a legal or contractual obligation requires us to keep it longer.",
      "The specific retention schedule, the form endpoint operator and the email provider are being confirmed and are listed below as outstanding details rather than stated as settled facts.",
    ],
  },
  {
    id: "providers",
    number: "06",
    title: "Third-party service providers",
    body: [
      "We use a small number of providers to run this website and handle enquiries. They process information on our instructions and only for the purposes described in this policy.",
    ],
    list: [
      "Hosting: Cloudflare Pages serves this website and processes standard request data on our behalf.",
      "Form processing: the enquiry form submits to a form delivery endpoint configured for this deployment. The operator of that endpoint is to be confirmed.",
      "Email: enquiries and correspondence are handled through our business email provider. The provider is to be confirmed.",
      "Website analytics: no analytics script is loaded by default. Measurement is disabled unless a measurement domain is configured at deployment, and no advertising or profiling cookies are set.",
    ],
  },
  {
    id: "transfers",
    number: "07",
    title: "International transfers",
    body: [
      "Our providers may process information outside the United Kingdom or the European Economic Area. Where that happens, we expect appropriate safeguards to be in place, such as the UK International Data Transfer Addendum or standard contractual clauses.",
      "The current provider locations and transfer mechanisms are part of the details awaiting confirmation listed at the end of this policy.",
    ],
  },
  {
    id: "rights",
    number: "08",
    title: "Your privacy rights",
    body: [
      "Subject to the conditions in data protection law, you have the right to be informed about how your data is used, to access a copy of it, to have inaccurate data corrected, to have it erased, to restrict or object to processing, and to receive it in a portable format. Where processing relies on consent, you can withdraw that consent at any time.",
      "You also have the right to complain to a supervisory authority. In the United Kingdom this is the Information Commissioner's Office (ico.org.uk). If you are in the European Economic Area, you can contact your local supervisory authority.",
    ],
  },
  {
    id: "requests",
    number: "09",
    title: "How to make a privacy request",
    body: [
      `Email ${SITE.email} with the subject line "Privacy request" and tell us what you would like us to do. We may ask for enough information to confirm your identity before acting, so that we do not disclose personal data to the wrong person.`,
      "We aim to respond within one month of receiving a request. Where a request is complex we will tell you if we need to extend that period, and why.",
    ],
  },
  {
    id: "security",
    number: "10",
    title: "Security",
    body: [
      "Access to enquiry information is limited to the team members involved in responding. We apply access control, transport encryption and routine dependency and platform maintenance to the systems that hold it.",
      "No method of transmission or storage is completely secure. We do not ask you to send credentials, customer records or sensitive production data through the enquiry form, and you should not include them.",
    ],
  },
  {
    id: "changes",
    number: "11",
    title: "Changes to this policy",
    body: [
      "If we change how we handle personal data, we will update this page and revise the date below. Material changes affecting an active enquiry will be communicated directly where we hold your contact details.",
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Tunnels Global"
        description="How Tunnels Global collects, uses, stores and retains personal information submitted through this website, the lawful basis for processing, the providers involved and how to exercise your privacy rights."
        path="/privacy"
        structuredData={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy" },
        ])}
      />

      <PageHeader
        eyebrow="Privacy Policy"
        title="How we handle personal data."
        lede="This policy explains what personal information Tunnels Global collects through this website, why we collect it, how it is stored and retained, and how you can exercise your rights."
        crumbs={[{ label: "Privacy Policy" }]}
        aside={
          <dl className="space-y-5 border-l border-line pl-6">
            <div>
              <dt className="eyebrow text-[10px]">Last updated</dt>
              <dd className="mt-1 text-sm text-ink">{lastUpdated}</dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Privacy contact</dt>
              <dd className="mt-1 text-sm text-ink">{SITE.email}</dd>
            </div>
            <div>
              <dt className="eyebrow text-[10px]">Applies to</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink">This website and enquiry correspondence</dd>
            </div>
          </dl>
        }
      />

      <section className="bg-paper py-14 md:py-20">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-10">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow text-[10px]">Contents</p>
              <ol className="mt-4 space-y-2 border-l border-line pl-4">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block text-[12.5px] leading-snug text-grey transition-colors hover:text-ink"
                    >
                      <span className="mr-2 font-mono text-[9px] text-mist">{section.number}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24 border-t border-line py-8 first:border-t-0 first:pt-0 md:py-10"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-tunnels-red">
                    {section.number}
                  </span>
                  <h2 className="font-display text-xl leading-snug tracking-[-0.02em] md:text-2xl">
                    {section.title}
                  </h2>
                </div>
                <div className="mt-4 space-y-4 pl-0 sm:pl-9">
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="body-copy">
                      {paragraph}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="border-t border-line">
                      {section.list.map((item) => (
                        <li key={item.slice(0, 40)} className="flex items-start gap-3 border-b border-line py-3">
                          <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                          <span className="text-sm leading-relaxed text-graphite">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            <section
              id="outstanding"
              className="scroll-mt-24 border-t-2 border-ink bg-paper-deep p-6 md:p-7"
            >
              <p className="eyebrow text-[10px] text-tunnels-red">Awaiting confirmation</p>
              <h2 className="mt-3 font-display text-xl leading-snug tracking-[-0.02em]">
                Details we are still verifying.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-grey">
                The following details are not yet confirmed and are listed here rather than stated as fact.
              </p>
              <ul className="mt-4 border-t border-line">
                {[
                  "Company registration number and place of registration.",
                  "The operator of the enquiry form submission endpoint.",
                  "The business email provider that receives and stores enquiries.",
                  "Provider locations and the specific international transfer mechanism in use.",
                  "The final retention schedule for enquiries that do not become engagements.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-line py-2.5">
                    <span className="mt-[0.6em] h-px w-2.5 shrink-0 bg-tunnels-red" aria-hidden="true" />
                    <span className="text-[13px] leading-relaxed text-graphite">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-mist">
                For any of these details now, contact{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-ink underline decoration-line underline-offset-4 hover:text-tunnels-red"
                >
                  {SITE.email}
                </a>
                .
              </p>
            </section>

            <p className="mt-8 text-xs leading-relaxed text-mist">
              This policy should be read alongside the enquiry form. If you have a question about how your
              information is handled, <Link to="/contact" className="text-ink underline decoration-line underline-offset-4 hover:text-tunnels-red">contact us</Link>{" "}
              before submitting an enquiry.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
