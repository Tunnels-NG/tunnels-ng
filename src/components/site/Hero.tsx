import Action from "@/components/site/Action";
import SystemDiagram from "@/components/site/SystemDiagram";

const facts = [
  { label: "Divisions", value: "Five, under one engineering standard" },
  { label: "Engagement", value: "Defined project · Embedded team · Advisory" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 left-[62%] hidden w-px bg-line lg:block" aria-hidden="true" />

      <div className="shell relative pb-14 pt-14 md:pb-20 md:pt-20 lg:pb-24">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="hero-rise mb-8 flex items-center gap-3">
              <span className="h-1.5 w-1.5 bg-tunnels-red" aria-hidden="true" />
              <p className="eyebrow">Enterprise technology &amp; engineering</p>
            </div>

            <h1 className="display-xl hero-rise max-w-[15ch]" style={{ animationDelay: "90ms" }}>
              Engineering the systems behind business transformation<span className="text-tunnels-red">.</span>
            </h1>

            <p className="lede hero-rise mt-8 max-w-xl" style={{ animationDelay: "180ms" }}>
              From intelligent systems and enterprise software to cloud infrastructure and technology
              modernisation, Tunnels helps organisations solve complex engineering challenges and build
              technology that works at scale.
            </p>

            <div className="hero-rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "270ms" }}>
              <Action to="/contact" variant="solid" withArrow>
                Discuss a Project
              </Action>
              <Action to="/services" variant="outline">
                Explore Our Capabilities
              </Action>
            </div>

            <dl
              className="hero-rise mt-14 grid gap-y-6 border-t border-line pt-7 sm:grid-cols-2 sm:gap-x-6"
              style={{ animationDelay: "360ms" }}
            >
              {facts.map((fact) => (
                <div key={fact.label}>
                  <dt className="eyebrow text-[10px]">{fact.label}</dt>
                  <dd className="mt-2 text-[13px] font-medium leading-snug text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 lg:pl-10">
            <figure
              className="hero-rise border border-line bg-paper-bright/70"
              style={{ animationDelay: "220ms" }}
            >
              <div className="flex items-center justify-between border-b border-line px-4 py-3">
                <span className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-grey">
                  Reference architecture
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist">
                  <span className="h-1 w-1 rounded-full bg-tunnels-red" aria-hidden="true" />
                  Fig. 01
                </span>
              </div>
              <SystemDiagram className="w-full" />
              <figcaption className="border-t border-line px-4 py-3 text-[11.5px] leading-relaxed text-grey">
                One governed path from interface to infrastructure — the layer most transformation
                programmes underestimate.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
