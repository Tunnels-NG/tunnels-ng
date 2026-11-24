import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";
import Action from "@/components/site/Action";
import { SITE } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

const SERVICE_OPTIONS = [
  "Enterprise AI Implementation",
  "Enterprise Systems Modernisation",
  "Cloud & Platform Transformation",
  "Enterprise Systems Integration",
  "Technology Reliability & Security",
  "Strategic Engineering Partnership",
  "Not sure yet",
];

const BUDGET_OPTIONS = [
  "To be defined",
  "Under $50,000",
  "$50,000 – $150,000",
  "$150,000 – $500,000",
  "$500,000+",
  "Prefer not to say",
];

const ENGAGEMENT_OPTIONS = [
  "Project-Based Engineering",
  "Managed Engineering Services",
  "Strategic Engineering Partnerships",
  "Not sure yet",
];

/**
 * Maps inbound links (service, solution and case study pages) onto the enquiry
 * form's service options, so a visitor arriving from a capability page does not
 * have to restate their interest.
 */
const SERVICE_QUERY_MAP: Record<string, string> = {
  "ai-intelligent-systems": "Enterprise AI Implementation",
  "enterprise-software": "Enterprise Systems Modernisation",
  "cloud-platform-infrastructure": "Cloud & Platform Transformation",
  "cybersecurity-reliability": "Technology Reliability & Security",
  "technology-advisory": "Strategic Engineering Partnership",
  "enterprise-ai-implementation": "Enterprise AI Implementation",
  "enterprise-systems-modernisation": "Enterprise Systems Modernisation",
  "cloud-platform-transformation": "Cloud & Platform Transformation",
  "enterprise-systems-integration": "Enterprise Systems Integration",
  "technology-reliability-security": "Technology Reliability & Security",
  "strategic-engineering-partnerships": "Strategic Engineering Partnership",
  "Enterprise Software Engineering": "Enterprise Systems Modernisation",
  "Cloud & Infrastructure Engineering": "Cloud & Platform Transformation",
  "AI & Intelligent Systems": "Enterprise AI Implementation",
};

/** Order used when moving focus to the first invalid field. */
const FIELD_ORDER: (keyof FormValues)[] = [
  "name",
  "email",
  "company",
  "jobTitle",
  "country",
  "service",
  "description",
  "privacy",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z
    .string()
    .trim()
    .min(1, "A work email is required.")
    .email("Please enter a valid email address.")
    .max(160),
  company: z.string().trim().min(2, "Please enter your company name.").max(140),
  jobTitle: z.string().trim().min(2, "Please enter your job title.").max(120),
  country: z.string().trim().min(2, "Please enter your country.").max(80),
  service: z.string().min(1, "Select the area of interest."),
  description: z
    .string()
    .trim()
    .min(40, "Please provide at least a short paragraph (40 characters).")
    .max(4000, "Please keep this under 4,000 characters."),
  budget: z.string().optional(),
  engagement: z.string().optional(),
  privacy: z.boolean().refine((value) => value === true, {
    message: "Please confirm you have read the privacy notice.",
  }),
  /** Honeypot — must stay empty. */
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidCount, setInvalidCount] = useState(0);
  const startedAt = useRef(Date.now());
  const [mailtoHref, setMailtoHref] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      jobTitle: "",
      country: "",
      service: "",
      description: "",
      budget: "To be defined",
      engagement: "Not sure yet",
      privacy: false,
      website: "",
    },
  });

  // Prefill from inbound links: ?service=<slug or category>&engagement=<model>
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    const engagement = params.get("engagement");

    if (service) {
      const mapped = SERVICE_QUERY_MAP[service] ?? SERVICE_OPTIONS.find((option) => option === service);
      if (mapped) setValue("service", mapped);
    }
    if (engagement) {
      const mapped = ENGAGEMENT_OPTIONS.find((option) => option === engagement);
      if (mapped) setValue("engagement", mapped);
    }
  }, [setValue]);

  const buildMailto = (values: FormValues) => {
    const body = [
      `Name: ${values.name}`,
      `Work email: ${values.email}`,
      `Company: ${values.company}`,
      `Job title: ${values.jobTitle}`,
      `Country: ${values.country}`,
      `Service of interest: ${values.service}`,
      `Engagement model: ${values.engagement ?? "Not sure yet"}`,
      `Estimated budget: ${values.budget ?? "To be defined"}`,
      "",
      "Project description:",
      values.description,
    ].join("\n");
    return `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Project enquiry — ${values.company}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (values: FormValues) => {
    setInvalidCount(0);

    // Spam protection: a hidden field that only automated completion fills.
    if (values.website) {
      setStatus("success");
      return;
    }

    // A human who submits in under two seconds has most likely submitted twice.
    if (Date.now() - startedAt.current < 2000) {
      setStatus("error");
      setErrorMessage(
        "This form was submitted almost immediately after it loaded. Please check your details and submit again, or email us directly.",
      );
      return;
    }

    if (!SITE.enquiryEndpoint) {
      setMailtoHref(buildMailto(values));
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(SITE.enquiryEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...values,
          website: undefined,
          submittedAt: new Date().toISOString(),
          source: typeof window !== "undefined" ? window.location.href : "website",
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      trackEvent("enquiry_submitted", { service: values.service });
      reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "We could not deliver your enquiry from the browser. Your details are still in the form — you can retry, or email us directly.",
      );
    }
  };

  const onInvalid = (formErrors: FieldErrors<FormValues>) => {
    const firstInvalid = FIELD_ORDER.find((field) => formErrors[field]);
    if (firstInvalid) setFocus(firstInvalid);
    setInvalidCount(Object.keys(formErrors).filter((key) => key !== "website").length);
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <div className="border border-line bg-paper-bright p-8 md:p-10" role="status" aria-live="polite">
        <CheckCircle2 className="h-8 w-8 text-tunnels-red" aria-hidden="true" />
        <h2 className="mt-5 font-display text-2xl tracking-[-0.02em]">Enquiry received.</h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-graphite">
          Thank you. A member of the engineering team will review your enquiry and respond from{" "}
          {SITE.email}. If the matter is urgent, you can reply to that address directly.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Action to="/insights" variant="outline">
            Read our insights
          </Action>
          <Action href={`mailto:${SITE.email}`} variant="link" withArrow>
            Email us directly
          </Action>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit, onInvalid)} noValidate className="space-y-7" aria-busy={status === "submitting"}>
      {invalidCount > 0 && (
        <div className="border border-tunnels-red bg-paper-bright p-4" role="alert">
          <p className="text-sm font-medium text-ink">
            Please correct {invalidCount === 1 ? "the highlighted field" : `${invalidCount} highlighted fields`}.
          </p>
          <p className="mt-1 text-[13px] leading-relaxed text-grey">
            Required fields are marked with an asterisk. Your details remain in the form.
          </p>
        </div>
      )}
      {status === "unconfigured" && (
        <div className="border border-ink bg-paper-bright p-5" role="alert">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-tunnels-red" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-ink">Enquiry delivery is not yet configured.</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-grey">
                This deployment has no form endpoint connected, so your enquiry has not been sent. You can
                send the same details by email, or the site administrator can set{" "}
                <code className="font-mono text-[11px]">VITE_CONTACT_ENDPOINT</code>.
              </p>
              <a
                href={mailtoHref}
                className="group mt-4 inline-flex items-center gap-2 bg-ink px-4 py-2.5 text-[13px] font-medium text-paper hover:bg-tunnels-red"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Open this enquiry in your email client
              </a>
            </div>
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="border border-tunnels-red bg-paper-bright p-5" role="alert">
          <div className="flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-tunnels-red" aria-hidden="true" />
            <div>
              <p className="text-sm font-medium text-ink">We could not submit the form.</p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-grey">{errorMessage}</p>
              <a
                href={`mailto:${SITE.email}`}
                className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-medium text-tunnels-red hover:underline"
              >
                Email {SITE.email}
              </a>
            </div>
          </div>
        </div>
      )}

      <fieldset className="space-y-6">
        <legend className="eyebrow mb-5">Contact details</legend>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="field-label">
              Full name <span className="text-tunnels-red">*</span>
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className="field-input"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-tunnels-red">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="field-label">
              Work email <span className="text-tunnels-red">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              className="field-input"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-tunnels-red">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="company" className="field-label">
              Company <span className="text-tunnels-red">*</span>
            </label>
            <input
              id="company"
              type="text"
              autoComplete="organization"
              className="field-input"
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "company-error" : undefined}
              {...register("company")}
            />
            {errors.company && (
              <p id="company-error" className="mt-1.5 text-xs text-tunnels-red">
                {errors.company.message}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="jobTitle" className="field-label">
              Job title <span className="text-tunnels-red">*</span>
            </label>
            <input
              id="jobTitle"
              type="text"
              autoComplete="organization-title"
              className="field-input"
              aria-invalid={Boolean(errors.jobTitle)}
              aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined}
              {...register("jobTitle")}
            />
            {errors.jobTitle && (
              <p id="jobTitle-error" className="mt-1.5 text-xs text-tunnels-red">
                {errors.jobTitle.message}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="country" className="field-label">
              Country <span className="text-tunnels-red">*</span>
            </label>
            <input
              id="country"
              type="text"
              autoComplete="country-name"
              className="field-input"
              placeholder="e.g. Germany"
              aria-invalid={Boolean(errors.country)}
              aria-describedby={errors.country ? "country-error" : undefined}
              {...register("country")}
            />
            {errors.country && (
              <p id="country-error" className="mt-1.5 text-xs text-tunnels-red">
                {errors.country.message}
              </p>
            )}
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-6 border-t border-line pt-7">
        <legend className="eyebrow mb-5">The project</legend>

        <div>
          <label htmlFor="service" className="field-label">
            Service of interest <span className="text-tunnels-red">*</span>
          </label>
          <select
            id="service"
            className="field-input"
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            {...register("service")}
          >
            <option value="">Select an area</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p id="service-error" className="mt-1.5 text-xs text-tunnels-red">
              {errors.service.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="description" className="field-label">
            Project description <span className="text-tunnels-red">*</span>
          </label>
          <textarea
            id="description"
            rows={6}
            className="field-input resize-y"
            placeholder="What system or process is causing the problem? What outcome are you trying to reach, and is there a deadline or constraint we should know about?"
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? "description-error" : "description-hint"}
            {...register("description")}
          />
          <p id="description-hint" className="mt-1.5 text-xs text-mist">
            Technical detail is welcome. Please do not include credentials or sensitive production data.
          </p>
          {errors.description && (
            <p id="description-error" className="mt-1.5 text-xs text-tunnels-red">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="budget" className="field-label">
              Estimated budget <span className="normal-case tracking-normal text-mist">(optional)</span>
            </label>
            <select id="budget" className="field-input" {...register("budget")}>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="engagement" className="field-label">
              Preferred engagement model
            </label>
            <select id="engagement" className="field-input" {...register("engagement")}>
              {ENGAGEMENT_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </fieldset>

      {/* Honeypot */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="border-t border-line pt-7">
        <div className="flex items-start gap-3">
          <input
            id="privacy"
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0 border-line accent-tunnels-red"
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            {...register("privacy")}
          />
          <div>
            <label htmlFor="privacy" className="text-[13px] leading-relaxed text-graphite">
              I have read the{" "}
              <Link
                to="/privacy"
                className="text-ink underline decoration-line underline-offset-4 hover:text-tunnels-red"
              >
                Privacy Policy
              </Link>{" "}
              and agree that Tunnels may use these details to respond to this enquiry.{" "}
              <span className="text-tunnels-red">*</span>
            </label>
            {errors.privacy && (
              <p id="privacy-error" className="mt-1.5 text-xs text-tunnels-red">
                {errors.privacy.message}
              </p>
            )}
          </div>
        </div>

        <details className="mt-4 border border-line bg-paper-bright p-4">
          <summary className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.12em] text-grey">
            Privacy notice
          </summary>
          <div className="mt-3 space-y-2 text-xs leading-relaxed text-grey">
            <p>
              We use the information you submit solely to assess and respond to your enquiry. It is shared
              only with the Tunnels team members involved in that response and with the email or form
              provider configured to deliver it.
            </p>
            <p>
              We do not sell your data or add you to a marketing list. Enquiries are retained only as long
              as needed for the conversation and any resulting engagement, or as required by law.
            </p>
            <p>
              To request access, correction or deletion of your details, contact{" "}
              <a href={`mailto:${SITE.email}`} className="text-ink underline decoration-line underline-offset-4">
                {SITE.email}
              </a>
              . The full policy, including the lawful basis for processing and the providers involved, is
              set out in our{" "}
              <Link to="/privacy" className="text-ink underline decoration-line underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </details>
      </div>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Action type="submit" variant="solid" disabled={status === "submitting"} withArrow={status !== "submitting"}>
          {status === "submitting" ? (
            <span className="inline-flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending
            </span>
          ) : (
            "Submit Enquiry"
          )}
        </Action>
        <p className="text-xs leading-relaxed text-mist">
          We aim to respond within {SITE.responseTime}. Your details are used only to answer this enquiry.
        </p>
      </div>
    </form>
  );
}
