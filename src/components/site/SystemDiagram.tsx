/**
 * Custom reference-architecture drawing. Decorative but structurally meaningful:
 * four layers (interface, integration, core systems, infrastructure) with a
 * red path marking the flow Tunnels engineers across them.
 *
 * The connectors draw in sequence, the governed red path carries a travelling
 * trace, and nodes pulse as the trace passes. Motion is CSS-only and collapses
 * under `prefers-reduced-motion` (see src/index.css).
 */
export default function SystemDiagram({ className = "" }: { className?: string }) {
  const node = (
    x: number,
    y: number,
    w: number,
    h: number,
    label: string,
    key: string,
    delay: number,
  ) => (
    <g key={key}>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="#FCFBF8"
        stroke="#C9C3B7"
        className="diagram-node"
        style={{ animationDelay: `${delay}ms` }}
      />
      <text
        x={x + 10}
        y={y + h / 2 + 3.5}
        fill="#3A3A3E"
        fontSize="9.5"
        fontFamily="IBM Plex Mono, monospace"
        letterSpacing="0.04em"
      >
        {label}
      </text>
    </g>
  );

  return (
    <svg
      viewBox="0 0 520 470"
      role="img"
      aria-label="Reference architecture diagram showing interface, integration, core systems and infrastructure layers connected by a single governed path"
      className={className}
    >
      <defs>
        <pattern id="dot-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.8" fill="#0D0D0E" opacity="0.13" />
        </pattern>
      </defs>
      <rect width="520" height="470" fill="url(#dot-grid)" />

      {/* Layer labels */}
      {[
        { y: 64, label: "INTERFACE" },
        { y: 172, label: "INTEGRATION" },
        { y: 284, label: "CORE SYSTEMS" },
        { y: 396, label: "INFRASTRUCTURE" },
      ].map((layer, index) => (
        <g
          key={layer.label}
          className="diagram-fade"
          style={{ animationDelay: `${120 + index * 90}ms` }}
        >
          <text
            x="16"
            y={layer.y + 4}
            fill="#8C8880"
            fontSize="8"
            fontFamily="IBM Plex Mono, monospace"
            letterSpacing="0.16em"
          >
            {layer.label}
          </text>
          <line x1="16" y1={layer.y + 14} x2="504" y2={layer.y + 14} stroke="#DCD7CC" strokeDasharray="2 4" />
        </g>
      ))}

      {/* Interface layer */}
      {node(140, 30, 108, 34, "Web", "web", 260)}
      {node(258, 30, 114, 34, "Partner API", "api", 360)}
      {node(382, 30, 106, 34, "Internal tools", "tools", 460)}

      {/* Integration layer */}
      <g className="diagram-fade" style={{ animationDelay: "560ms" }}>
        <rect x="140" y="130" width="348" height="34" fill="#161618" />
        <text
          x="156"
          y="151"
          fill="#F7F5F0"
          fontSize="9.5"
          fontFamily="IBM Plex Mono, monospace"
          letterSpacing="0.06em"
        >
          INTEGRATION LAYER · API · EVENTS · IDENTITY
        </text>
      </g>

      {/* Core systems */}
      {node(140, 242, 104, 36, "ERP", "erp", 700)}
      {node(254, 242, 118, 36, "Data platform", "data", 800)}
      {node(382, 242, 106, 36, "Line of business", "lob", 900)}

      {/* Infrastructure */}
      <g className="diagram-fade" style={{ animationDelay: "1000ms" }}>
        <rect x="140" y="354" width="348" height="34" fill="#FCFBF8" stroke="#C9C3B7" />
        <g fill="#0D0D0E">
          {[162, 196, 230, 264, 298, 332, 366, 400, 434, 468].map((cx) => (
            <circle key={cx} cx={cx} cy="371" r="2" opacity="0.28" />
          ))}
        </g>
        <text
          x="156"
          y="403"
          fill="#8C8880"
          fontSize="8"
          fontFamily="IBM Plex Mono, monospace"
          letterSpacing="0.12em"
        >
          AWS · AZURE · GCP · KUBERNETES · IaC · OBSERVABILITY
        </text>
      </g>

      {/* Connectors — drawn top-down in sequence */}
      <g stroke="#0D0D0E" strokeOpacity="0.25" fill="none">
        {[
          "M194 64 V96 H214 V130",
          "M315 64 V130",
          "M435 64 V96 H414 V130",
          "M214 164 V216 H192 V242",
          "M313 164 V242",
          "M414 164 V216 H435 V242",
          "M192 278 V322 H230 V354",
          "M313 278 V354",
          "M435 278 V322 H400 V354",
        ].map((d, index) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            className="diagram-connector"
            style={{ animationDelay: `${320 + index * 90}ms` }}
          />
        ))}
      </g>

      {/* Governed path in brand red */}
      <g stroke="#E52329" fill="none" strokeWidth="1.4">
        {["M315 64 V130", "M313 164 V242", "M313 278 V354"].map((d, index) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            className="diagram-connector"
            style={{ animationDelay: `${820 + index * 140}ms` }}
          />
        ))}
      </g>

      {/* Travelling signal along the governed path */}
      <g stroke="#E52329" fill="none" strokeWidth="2.6" strokeLinecap="round" opacity="0.75">
        {["M315 64 V130", "M313 164 V242", "M313 278 V354"].map((d, index) => (
          <path
            key={d}
            d={d}
            pathLength={1}
            className="diagram-trace"
            style={{ animationDelay: `${1200 + index * 350}ms` }}
          />
        ))}
      </g>

      <g fill="#E52329" className="diagram-fade" style={{ animationDelay: "900ms" }}>
        <circle cx="315" cy="64" r="3" />
        <circle cx="313" cy="354" r="3" />
      </g>

      {/* Portal motif */}
      <g transform="translate(424 404)" className="diagram-fade" style={{ animationDelay: "1100ms" }}>
        <circle r="30" fill="none" stroke="#E52329" strokeOpacity="0.3" className="diagram-portal" />
        <circle r="20" fill="none" stroke="#E52329" strokeOpacity="0.55" />
        <circle r="9" fill="#E52329" />
      </g>

      {/* Frame corners */}
      <g
        stroke="#0D0D0E"
        strokeOpacity="0.35"
        className="diagram-fade"
        style={{ animationDelay: "200ms" }}
      >
        <path d="M0 12 V0 H12" fill="none" />
        <path d="M508 0 H520 V12" fill="none" />
        <path d="M0 458 V470 H12" fill="none" />
        <path d="M520 458 V470 H508" fill="none" />
      </g>
    </svg>
  );
}
