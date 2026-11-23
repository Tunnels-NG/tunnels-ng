/**
 * Analytics integration point.
 *
 * Set VITE_ANALYTICS_DOMAIN to a privacy-friendly analytics host (for example
 * the domain configured in Plausible) to enable pageview and conversion
 * tracking. Until then every call is a no-op, so no data is collected and no
 * third-party script is loaded.
 */
import { SITE } from "./site";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string | number> }) => void;
  }
}

export function initAnalytics() {
  if (!SITE.analyticsDomain || typeof document === "undefined") return;
  if (document.querySelector("script[data-tunnels-analytics]")) return;

  const script = document.createElement("script");
  script.defer = true;
  script.dataset.domain = SITE.analyticsDomain;
  script.dataset.tunnelsAnalytics = "true";
  script.src =
    (import.meta.env.VITE_ANALYTICS_SCRIPT as string | undefined) ||
    "https://plausible.io/js/script.js";
  document.head.appendChild(script);
}

export function trackEvent(name: string, props?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  window.plausible?.(name, props ? { props } : undefined);
}
