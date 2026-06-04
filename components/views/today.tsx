"use client"

import { Target, Rocket, Award, Mail } from "lucide-react"
import { Card, Bar, Avatar } from "@/components/ui"
import { GOALS, GMAIL_INBOX, SKILLS, COLORS } from "@/lib/data"

const BRIEFING = [
  { t: "08:00", task: "Apply to IT Interns West Rand (TUT reminded you today — strong match)", color: COLORS.emerald },
  { t: "09:30", task: "Review LinkedIn: 2 unread job matches + new connection from Takealot recruiter", color: COLORS.blue },
  { t: "11:00", task: "Code session — push progress on Tiyani AI v2 (Q3 2026 deadline approaching)", color: COLORS.primary },
  { t: "14:00", task: "Update gwende.vercel.app portfolio with latest project demos", color: COLORS.amber },
  { t: "19:00", task: "Evening reflection + habit check-ins", color: COLORS.pink },
]

export default function TodayView({ onNav }: { onNav: (v: string) => void }) {
  const hour = new Date().getHours()
  const greet = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening"
  const unread = GMAIL_INBOX.filter((m) => m.unread).length

  const stats = [
    { icon: Target, v: "4", l: "Active Goals", s: "in progress", color: COLORS.primary },
    { icon: Rocket, v: "9", l: "Projects Built", s: "7 live · 2 planned", color: COLORS.emerald },
    { icon: Award, v: "13+", l: "Certifications", s: "AWS · Azure · FNB", color: COLORS.amber },
    { icon: Mail, v: String(unread), l: "Unread Emails", s: "kbmagoda2024@gmail.com", color: COLORS.rose },
  ]

  return (
    <div className="h-full animate-fade-in overflow-y-auto p-6 lg:p-8">
      <div className="mb-7">
        <div className="text-xs font-medium text-subtle">Tuesday, June 2, 2026</div>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground">{greet}, Tiyani</h1>
        <p className="mt-1 text-sm text-muted-foreground">Junior Software Developer · Pretoria, South Africa</p>
      </div>

      <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.l} className="transition-colors">
            <div
              className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
              style={{ background: s.color + "16", color: s.color }}
            >
              <s.icon size={18} />
            </div>
            <div className="text-2xl font-bold tracking-tight" style={{ color: s.color }}>
              {s.v}
            </div>
            <div className="mt-0.5 text-sm font-semibold text-foreground">{s.l}</div>
            <div className="text-xs text-subtle">{s.s}</div>
          </Card>
        ))}
      </div>

      <Card className="mb-5 border-primary/20">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="text-sm font-bold">AI</span>
          </div>
          <div>
            <div className="text-sm font-semibold text-primary">Life Coach — Daily Briefing</div>
            <div className="text-xs text-subtle">Generated for kbmagoda2024@gmail.com</div>
          </div>
        </div>
        <div className="space-y-1.5">
          {BRIEFING.map((p, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 px-3 py-2.5">
              <span className="w-11 shrink-0 text-xs font-semibold text-subtle">{p.t}</span>
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: p.color }} />
              <span className="text-sm leading-relaxed text-foreground/80">{p.task}</span>
            </div>
          ))}
        </div>
      </Card>

      <div className="mb-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">Top Goals</span>
            <button onClick={() => onNav("goals")} className="text-xs font-semibold text-primary hover:underline">
              See all
            </button>
          </div>
          <div className="space-y-3">
            {GOALS.map((g) => (
              <div key={g.id}>
                <div className="mb-1.5 flex justify-between">
                  <span className="text-xs font-medium text-foreground">{g.title}</span>
                  <span className="text-xs font-bold" style={{ color: g.color }}>
                    {g.progress}%
                  </span>
                </div>
                <Bar pct={g.progress} color={g.color} h={5} />
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground">Gmail Inbox</span>
            <button onClick={() => onNav("inbox")} className="text-xs font-semibold text-primary hover:underline">
              Open
            </button>
          </div>
          <div className="space-y-3">
            {GMAIL_INBOX.filter((m) => m.unread)
              .slice(0, 4)
              .map((m) => (
                <div key={m.id} className="flex items-start gap-3">
                  <Avatar label={m.avatar} color={m.avatarColor} size={28} square />
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-xs font-semibold text-foreground">{m.subject}</div>
                    <div className="text-[11px] text-subtle">
                      {m.name} · {m.time}
                    </div>
                  </div>
                  {m.category === "opportunity" && (
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ background: COLORS.emerald }} />
                  )}
                </div>
              ))}
          </div>
        </Card>
      </div>

      <Card>
        <div className="mb-4 text-sm font-semibold text-foreground">Technical Skills — from gwende.vercel.app</div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-3 lg:grid-cols-2">
          {SKILLS.map((s) => (
            <div key={s.name}>
              <div className="mb-1.5 flex justify-between">
                <span className="text-xs text-muted-foreground">{s.name}</span>
                <span className="text-xs font-bold" style={{ color: s.color }}>
                  {s.pct}%
                </span>
              </div>
              <Bar pct={s.pct} color={s.color} h={5} />
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
