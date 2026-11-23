import { Link } from "react-router-dom";
import SEO from "@/components/site/SEO";
import Action from "@/components/site/Action";

const links = [
  { label: "Services", href: "/services", copy: "Five engineering divisions." },
  { label: "Solutions", href: "/solutions", copy: "Six commercial engagements." },
  { label: "Insights", href: "/insights", copy: "Engineering perspectives." },
  { label: "Contact", href: "/contact", copy: "Discuss a project." },
];

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page not found"
        description="The page you requested could not be found."
        path="/404"
        noindex
      />
      <section className="relative overflow-hidden bg-paper">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <div className="shell relative py-24 md:py-32">
          <p className="eyebrow">Error 404</p>
          <h1 className="display-xl mt-6 max-w-2xl">
            This page is not part of the system<span className="text-tunnels-red">.</span>
          </h1>
          <p className="lede mt-6 max-w-xl">
            The address may be incorrect, or the page may have moved. These are the current entry points.
          </p>

          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group bg-paper p-6 transition-colors hover:bg-paper-bright"
              >
                <span className="font-display text-lg group-hover:text-tunnels-red">{link.label}</span>
                <span className="mt-1.5 block text-[13px] text-grey">{link.copy}</span>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <Action to="/" variant="solid" withArrow>
              Return to the homepage
            </Action>
          </div>
        </div>
      </section>
    </>
  );
}
