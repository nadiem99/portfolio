"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import {
  countriesHome,
  countriesVisited,
  countriesWishlist,
} from "@/content/personal";

const GEO_URL = "/personal/world-110m.json";

const home = new Set(countriesHome);
const visited = new Set(countriesVisited);
const wishlist = new Set(countriesWishlist);

function categoryFor(name: string) {
  if (home.has(name)) return "home" as const;
  if (visited.has(name)) return "visited" as const;
  if (wishlist.has(name)) return "wishlist" as const;
  return "none" as const;
}

const fills: Record<string, string> = {
  home: "hsl(var(--accent))",
  visited: "hsl(var(--accent) / 0.55)",
  wishlist: "hsl(var(--accent-light) / 0.28)",
  none: "hsl(var(--foreground) / 0.08)",
};

export default function WorldMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="w-full">
      <div className="relative overflow-hidden border border-foreground/10 bg-foreground/[0.015]">
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 165 }}
          width={980}
          height={460}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.name as string;
                const cat = categoryFor(name);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHovered(name)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      default: {
                        fill: fills[cat],
                        stroke: "hsl(var(--background))",
                        strokeWidth: 0.4,
                        outline: "none",
                      },
                      hover: {
                        fill:
                          cat === "none"
                            ? "hsl(var(--foreground) / 0.18)"
                            : "hsl(var(--accent))",
                        stroke: "hsl(var(--background))",
                        strokeWidth: 0.4,
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: { fill: "hsl(var(--accent))", outline: "none" },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>

        {/* Hover tooltip */}
        <div className="pointer-events-none absolute left-3 top-3 min-h-[1.5rem]">
          {hovered && (
            <span className="bg-background/85 px-2 py-1 font-mono text-[11px] text-foreground backdrop-blur-sm">
              {hovered}
              {categoryFor(hovered) !== "none" && (
                <span className="ml-2 text-muted">
                  {categoryFor(hovered) === "home"
                    ? "home"
                    : categoryFor(hovered) === "visited"
                      ? "visited"
                      : "want to go"}
                </span>
              )}
            </span>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] text-muted">
        <LegendDot color="hsl(var(--accent))" label="Home — born, heritage, lived" />
        <LegendDot color="hsl(var(--accent) / 0.55)" label="Visited" />
        <LegendDot color="hsl(var(--accent-light) / 0.28)" label="Want to visit" />
      </div>
    </div>
  );
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-2">
      <span
        className="inline-block h-3 w-3 border border-foreground/15"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  );
}
