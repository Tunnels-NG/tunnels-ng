import Action from "./Action";
import { SITE } from "@/lib/site";

interface CtaBandProps {
  eyebrow?: string;
  title?: string;
  copy?: string;
}

export default function CtaBand({
  eyebrow = "Next step",
  title = "Tell us what you are trying to solve.",
  copy = "A first conversation is technical, not commercial. Describe the system, the constraint and the outcome you need, and we will tell you honestly whether we are the right partner for it.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="pointer-events-none absolute inset-0 grid-lines-dark opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-paper/10"
        aria-hidden="true"
      />
      <div className="shell relative grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-tunnels-red" aria-hidden="true" />
            <p className="eyebrow text-paper/45">{eyebrow}</p>
          </div>
          <h2 className="display-lg max-w-3xl text-paper">{title}</h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-paper/60">{copy}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-start">
          <Action to="/contact" variant="light" withArrow>
            Discuss a Project
          </Action>
          <Action href={`mailto:${SITE.email}`} variant="outline-light">
            Email {SITE.email}
          </Action>
        </div>
      </div>
    </section>
  );
}
