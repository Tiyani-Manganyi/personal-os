"use client"

import { ViewHeader } from "@/components/ui"
import { CALENDAR_EVENTS } from "@/lib/data"

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

export default function CalendarView() {
  return (
    <div className="h-full animate-fade-in overflow-y-auto p-6 lg:p-8">
      <ViewHeader title="Calendar" subtitle="June 2026" />
      <div className="mb-1 grid grid-cols-7 gap-1.5">
        {days.map((d) => (
          <div key={d} className="py-1.5 text-center text-[11px] font-semibold text-subtle">
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 30 }, (_, i) => {
          const day = i + 1
          const evts = CALENDAR_EVENTS.filter((e) => e.day === day)
          const isToday = day === 2
          return (
            <div
              key={day}
              className="min-h-[72px] rounded-xl border p-1.5 transition-colors"
              style={{
                background: isToday ? "var(--primary-soft)" : "var(--card)",
                borderColor: isToday ? "var(--primary)" : "var(--border)",
              }}
            >
              <div
                className="mb-1 text-xs"
                style={{
                  fontWeight: isToday ? 700 : 500,
                  color: isToday ? "var(--primary)" : "var(--muted-foreground)",
                }}
              >
                {day}
              </div>
              {evts.map((ev, j) => (
                <div
                  key={j}
                  className="mb-1 truncate rounded px-1 py-0.5 text-[10px] font-medium"
                  style={{ background: ev.color + "1f", color: ev.color }}
                >
                  {ev.title}
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
