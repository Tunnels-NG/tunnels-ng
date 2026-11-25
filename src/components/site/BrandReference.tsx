import SectionHeading from "./SectionHeading";
import { brandReferences, type BrandReference } from "@/content/brandReferences";

/**
 * Homepage reference list: the organisations, products and platforms connected
 * to the work. Presentation is a quiet list, not a gallery or a logo wall of
 * cards: logo only, no project detail, and links that stay unobtrusive.
 */
function Brand({ brand }: { brand: BrandReference }) {
  return (
    <a
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-11 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tunnels-red"
    >
      {brand.logo ? (
        <img
          src={brand.logo.src}
          alt={`${brand.name} logo`}
          width={brand.logo.width}
          height={brand.logo.height}
          loading="lazy"
          decoding="async"
          style={{ height: `${brand.logoHeight ?? 32}px` }}
          className={`w-auto max-w-[220px] object-contain${
            brand.logoBlend === "multiply" ? " mix-blend-multiply" : ""
          }`}
        />
      ) : (
        <>
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center border border-line font-display text-[15px] leading-none tracking-[0.04em] text-graphite"
          >
            {brand.initial ?? brand.name.charAt(0)}
          </span>
          <span className="sr-only">{brand.name}</span>
        </>
      )}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export default function BrandReference() {
  return (
    <section className="border-y border-line bg-paper py-16 md:py-24">
      <div className="shell">
        <SectionHeading
          label="Ecosystem"
          title="Clients & Partners"
          copy="Organisations and technology products connected to our engineering work and partnerships."
        />

        <ul className="mt-12 flex flex-wrap items-center gap-x-12 gap-y-7 border-t border-line pt-10 md:gap-x-16 md:gap-y-9 md:pt-12 lg:grid lg:grid-cols-7 lg:justify-items-center lg:gap-x-6 lg:gap-y-8">
          {brandReferences.map((brand) => (
            <li key={brand.name} className="flex min-h-11 items-center justify-center">
              <Brand brand={brand} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
