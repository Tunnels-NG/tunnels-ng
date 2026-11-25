import type { ScenarioLayer } from "@/content/scenarios";

interface ScenarioDiagramProps {
  layers: ScenarioLayer[];
  /** Label for the connection between each pair of layers. */
  flows: string[];
  /** Scenario number, used as the figure reference. */
  reference: string;
}

/**
 * Layered architecture diagram built from HTML rather than a fixed SVG, so the
 * labels stay at readable sizes on small screens, reflow without clipping and
 * remain editable as content. Each row is a responsibility boundary; the
 * labelled connector between rows states what actually crosses it.
 */
export default function ScenarioDiagram({ layers, flows, reference }: ScenarioDiagramProps) {
  return (
    <figure className="border border-line bg-paper">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-3 md:px-5">
        <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-grey">
          Reference architecture
        </p>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-mist">
          Fig. {reference} · illustrative
        </p>
      </div>

      <div className="px-4 py-5 md:px-6 md:py-7">
        <ol>
          {layers.map((layer, index) => (
            <li key={layer.label}>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:gap-5">
                <p className="shrink-0 font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-grey sm:w-24 sm:pt-3">
                  {layer.label}
                </p>
                <ul className="grid grow grid-cols-2 gap-px border border-line bg-line lg:grid-cols-4">
                  {layer.nodes.map((node) => (
                    <li
                      key={node}
                      className="bg-paper px-3 py-2.5 font-mono text-[10px] uppercase leading-snug tracking-[0.04em] text-graphite"
                    >
                      {node}
                    </li>
                  ))}
                </ul>
              </div>

              {index < layers.length - 1 && (
                <div className="flex items-center gap-2.5 py-2 sm:pl-[7.25rem]">
                  <span className="h-4 w-px bg-tunnels-red/50" aria-hidden="true" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-mist">
                    {flows[index] ?? "interface"}
                  </span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>

      <figcaption className="border-t border-line px-4 py-3 text-[11.5px] leading-relaxed text-grey md:px-5">
        Illustrative reference architecture for this scenario. Boxes show responsibility boundaries rather
        than a specific product selection.
      </figcaption>
    </figure>
  );
}
