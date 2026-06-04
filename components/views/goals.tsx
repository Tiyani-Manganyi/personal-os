"use client"

import { Check } from "lucide-react"
import { Card, Bar, Badge, ViewHeader } from "@/components/ui"
import { GOALS, COLORS } from "@/lib/data"

const catColor: Record<string, string> = {
  Career: COLORS.emerald,
  Education: COLORS.primary,
  Product: COLORS.amber,
  Health: COLORS.pink,
}

export default function GoalsView() {
  return (
    <div className="h-full animate-fade-in overflow-y-auto p-6 lg:p-8">
      <ViewHeader title="Goals" subtitle="Your north stars · reviewed daily by Life Coach" />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {GOALS.map((g) => (
          <Card key={g.id} className="transition-shadow hover:shadow-md">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <Badge label={g.cat} color={catColor[g.cat] || COLORS.primary} />
                <div className="mt-2 text-base font-semibold leading-snug text-foreground">{g.title}</div>
              </div>
              <div className="text-2xl font-bold" style={{ color: g.color }}>
                {g.progress}%
              </div>
            </div>
            <Bar pct={g.progress} color={g.color} h={7} />
            <div className="mt-4 space-y-1.5">
              {g.milestones.map((m, i) => {
                const done = g.done.includes(i)
                return (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: done ? g.color : "transparent",
                        border: `2px solid ${done ? g.color : COLORS.slate + "55"}`,
                      }}
                    >
                      {done && <Check size={9} className="text-white" strokeWidth={3} />}
                    </div>
                    <span
                      className="text-xs"
                      style={{
                        color: done ? COLORS.slate : "#94a3b8",
                        textDecoration: done ? "line-through" : "none",
                      }}
                    >
                      {m}
                    </span>
                  </div>
                )
              })}
            </div>
            {g.notes && (
              <div className="mt-3 rounded-lg bg-muted px-3 py-2 text-[11px] italic leading-relaxed text-muted-foreground">
                {g.notes}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
