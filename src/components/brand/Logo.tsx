import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
}

/**
 * Brand lockup: the supplied Tunnels portal mark plus a typographic wordmark.
 * Mark artwork lives in /assets/brand/tunnels-mark.svg.
 */
const Logo = ({ variant = "dark", className = "", showWordmark = true, size = "md" }: LogoProps) => {
  const markSize = size === "lg" ? "h-11 w-11" : size === "sm" ? "h-7 w-7" : "h-9 w-9";
  const wordSize = size === "lg" ? "text-2xl" : size === "sm" ? "text-base" : "text-xl";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/assets/brand/tunnels-mark.svg"
        alt=""
        aria-hidden="true"
        className={`${markSize} shrink-0`}
        width={44}
        height={44}
      />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display ${wordSize} font-semibold tracking-[-0.03em] ${
              variant === "light" ? "text-paper" : "text-ink"
            }`}
          >
            Tunnels
          </span>
          <span
            className={`mt-1 font-mono text-[8px] uppercase tracking-[0.34em] ${
              variant === "light" ? "text-paper/45" : "text-mist"
            }`}
          >
            Global
          </span>
        </span>
      )}
    </span>
  );
};

export const LogoLink = ({ variant = "dark", size = "md" }: { variant?: "dark" | "light"; size?: "sm" | "md" }) => (
  <Link to="/" aria-label="Tunnels Global — home" className="inline-flex">
    <Logo variant={variant} size={size} />
  </Link>
);

export default Logo;
