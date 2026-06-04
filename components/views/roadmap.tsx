"use client"

import { CheckCircle2, GraduationCap, Bot, Rocket, MapPin, Mail } from "lucide-react"
import { Card, Badge, ViewHeader } from "@/components/ui"
import { ROADMAP, ME, COLORS } from "@/lib/data"

const statusLabel: Record<string, string> = {
  done: "Completed",
  active: "Active",
  upcoming: "Upcoming",
  future: "Future",
}
const statusIcon: Record<string, typeof Rocket> = {
  done: CheckCircle2,
  active: GraduationCap,
  upcoming: Bot,
  future: Rocket,
}

export default function RoadmapView() {
  return (
    <div className="h-full animate-fade-in overflow-y-auto p-6 lg:p-8">
      <ViewHeader title="Career Roadmap" subtitle="From gwende.vercel.app · Updated 2026" />

      <div className="relative">
        <div
          className="absolute bottom-0 left-7 top-0 w-0.5 rounded"
          style={{ background: "linear-gradient(180deg,#059669,#2563eb,#d97706,#db2777)" }}
        />
        {ROADMAP.map((r, i) => {
          const Icon = statusIcon[r.status]
          return (
            <div key={i} className="relative mb-7 flex gap-5">
              <div
                className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-card"
                style={{ border: `2px solid ${r.color}`, color: r.color }}
              >
                <Icon size={22} />
              </div>
              <Card className="flex-1 transition-shadow hover:shadow-md">
                <div className="mb-2 flex flex-wrap items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-subtle">{r.year}</span>
                  <Badge label={statusLabel[r.status]} color={r.color} />
                </div>
                <div className="mb-2 text-base font-semibold text-foreground">{r.title}</div>
                <p className="text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
              </Card>
            </div>
          )
        })}
      </div>

      <Card className="mt-2">
        <div className="flex flex-wrap items-start gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary text-2xl font-bold text-primary-foreground">
            TM
          </div>
          <div className="flex-1">
            <div className="text-base font-semibold text-foreground">{ME.name}</div>
            <div className="mb-2 text-sm text-muted-foreground">{ME.title}</div>
            <p className="mb-3 text-sm leading-relaxed text-muted-foreground">{ME.bio}</p>
            <div className="flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-semibold"
                style={{ background: COLORS.emerald + "16", color: COLORS.emerald }}
              >
                <Mail size={12} /> {ME.email}
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] font-semibold"
                style={{ background: COLORS.blue + "16", color: COLORS.blue }}
              >
                <MapPin size={12} /> {ME.location}
              </span>
              <Badge label="AWS · Azure" color={COLORS.amber} />
              <Badge label="13+ Certs" color={COLORS.primary} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
