"use client"

import { useState } from "react"
import { ExternalLink, Github, Flame } from "lucide-react"
import { Card, Badge } from "@/components/ui"
import { PROJECTS, COLORS } from "@/lib/data"

const cats = ["All", "WIL", "Graduate", "Future"]
const catColor: Record<string, string> = { WIL: COLORS.blue, Graduate: COLORS.primary, Future: COLORS.slate }

export default function ProjectsView() {
  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter)

  return (
    <div className="h-full animate-fade-in overflow-y-auto p-6 lg:p-8">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Projects</h1>
          <p className="mt-1 text-sm text-muted-foreground">9 projects · 3 WIL · 4 Graduate · 2 Future</p>
        </div>
        <div className="flex gap-1.5">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className="rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors"
              style={
                filter === c
                  ? { background: COLORS.primary, color: "#fff", borderColor: COLORS.primary }
                  : { background: "var(--card)", color: "var(--muted-foreground)", borderColor: "var(--border)" }
              }
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filtered.map((p) => (
          <Card key={p.id} className="relative transition-shadow hover:shadow-md">
            {p.hot && (
              <div
                className="absolute -top-2 right-4 flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white"
                style={{ background: COLORS.rose }}
              >
                <Flame size={11} /> HIGH DEMAND
              </div>
            )}
            <div className="mb-2.5 flex items-start justify-between">
              <div className="flex gap-1.5">
                <Badge label={p.cat} color={catColor[p.cat] || COLORS.slate} />
                {p.status === "planned" && <Badge label="Planned" color={COLORS.slate} />}
              </div>
              {p.status === "live" && (
                <div className="mt-1 h-2 w-2 rounded-full" style={{ background: COLORS.emerald }} />
              )}
            </div>
            <div className="mb-1.5 text-base font-semibold leading-snug text-foreground">{p.name}</div>
            <p className="mb-3 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <Badge key={t} label={t} color={p.color} />
              ))}
            </div>
            <div className="flex gap-2">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold"
                  style={{ background: COLORS.emerald + "16", color: COLORS.emerald }}
                >
                  <ExternalLink size={13} /> Live Demo
                </a>
              )}
              {p.code && (
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
                >
                  <Github size={13} /> Code
                </a>
              )}
              {!p.live && !p.code && <Badge label="Coming Q3 2026" color={COLORS.slate} />}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
