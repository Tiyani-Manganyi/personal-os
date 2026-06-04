"use client"

import { useState } from "react"
import { Award } from "lucide-react"
import { Badge, ViewHeader } from "@/components/ui"
import { CERTS } from "@/lib/data"

export default function CertsView() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <div className="h-full animate-fade-in overflow-y-auto p-6 lg:p-8">
      <ViewHeader
        title="Certificates"
        subtitle="13+ certifications · AWS · Azure · FNB · Huawei · Cisco · TUT Diploma"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {CERTS.map((c) => {
          const open = active === c.id
          return (
            <button
              key={c.id}
              onClick={() => setActive(open ? null : c.id)}
              className="rounded-2xl border bg-card p-4 text-left shadow-sm transition-all hover:shadow-md"
              style={{ borderColor: open ? c.color + "66" : "var(--border)" }}
            >
              <div
                className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg"
                style={{ background: c.color + "16", color: c.color }}
              >
                <Award size={18} />
              </div>
              <div className="mb-1.5 text-sm font-semibold leading-snug text-foreground">{c.name}</div>
              <div className="mb-3 text-[11px] text-subtle">
                {c.issuer} · {c.year}
              </div>
              <Badge label={c.tech[0]} color={c.color} />
              {open && (
                <div className="mt-3 border-t border-border pt-3">
                  <div className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-subtle">
                    Frameworks & Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {c.tech.map((t) => (
                      <Badge key={t} label={t} color={c.color} />
                    ))}
                  </div>
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
