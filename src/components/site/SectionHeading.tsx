import type { ReactNode } from "react";
import Action from "./Action";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  copy?: string;
  link?: { label: string; href: string };
  className?: string;
}

export default function SectionHeading({ label, title, copy, link, className = "" }: SectionHeadingProps) {
  return (
    <div className={`grid gap-6 border-t border-line pt-6 md:grid-cols-12 md:gap-10 ${className}`}>
      <div className="md:col-span-3">
        <p className="eyebrow">{label}</p>
      </div>
      <div className="md:col-span-7">
        <h2 className="display-md max-w-2xl">{title}</h2>
      </div>
      <div className="md:col-span-2 md:text-right">
        {link ? (
          <Action to={link.href} variant="link" withArrow>
            {link.label}
          </Action>
        ) : copy ? (
          <p className="text-sm leading-relaxed text-grey">{copy}</p>
        ) : null}
      </div>
      {copy && link && (
        <div className="md:col-span-7 md:col-start-4">
          <p className="max-w-2xl text-sm leading-relaxed text-grey">{copy}</p>
        </div>
      )}
    </div>
  );
}
