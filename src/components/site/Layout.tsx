import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { initAnalytics, trackEvent } from "@/lib/analytics";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    trackEvent("pageview", { path: pathname });
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>
      <Navbar />
      <div
        key={pathname}
        aria-hidden="true"
        className="route-sweep pointer-events-none fixed inset-x-0 top-0 z-[70] h-px bg-tunnels-red/80"
      />
      <main id="main" className="flex-1">
        <div key={pathname} className="page-enter">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
