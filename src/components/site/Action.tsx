import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "light" | "outline-light" | "link";

const variantClass: Record<Variant, string> = {
  solid: "btn-solid",
  outline: "btn-outline",
  light: "btn-light",
  "outline-light": "btn-outline-light",
  link: "link-arrow",
};

interface ActionProps {
  to?: string;
  href?: string;
  children: ReactNode;
  variant?: Variant;
  withArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
}

export default function Action({
  to,
  href,
  children,
  variant = "solid",
  withArrow = false,
  className = "",
  type,
  onClick,
  disabled,
  ...rest
}: ActionProps) {
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );
  const classes = `${variantClass[variant]} group ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={classes} {...rest}>
      {content}
    </button>
  );
}
