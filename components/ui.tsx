"use client"

import type React from "react"

function hexWithAlpha(hex: string, alpha: number) {
  const a = Math.round(alpha * 255)
    .toString(16)
    .padStart(2, "0")
  return `${hex}${a}`
}

export function Avatar({
  label,
  size = 34,
  color = "#2563eb",
  square,
}: {
  label: string
  size?: number
  color?: string
  square?: boolean
}) {
  return (
    <div
      className="flex shrink-0 items-center justify-center font-bold text-white"
      style={{
        width: size,
        height: size,
        borderRadius: square ? 10 : "50%",
        background: color,
        fontSize: size * 0.36,
      }}
    >
      {label.slice(0, 3)}
    </div>
  )
}

export function Badge({ label, color = "#2563eb" }: { label: string; color?: string }) {
  return (
    <span
      className="inline-flex items-center whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-semibold"
      style={{
        background: hexWithAlpha(color, 0.1),
        color,
        border: `1px solid ${hexWithAlpha(color, 0.22)}`,
      }}
    >
      {label}
    </span>
  )
}

export function Bar({ pct, color = "#2563eb", h = 6 }: { pct: number; color?: string; h?: number }) {
  return (
    <div className="overflow-hidden rounded-full bg-muted" style={{ height: h }}>
      <div
        className="h-full rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  )
}

export function Card({
  children,
  className = "",
  onMouseEnter,
  onMouseLeave,
  onClick,
  style,
}: {
  children: React.ReactNode
  className?: string
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>
  onClick?: React.MouseEventHandler<HTMLDivElement>
  style?: React.CSSProperties
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={style}
      className={`rounded-2xl border border-border bg-card p-5 shadow-sm ${className}`}
    >
      {children}
    </div>
  )
}

export function ViewHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold tracking-tight text-foreground text-balance">{title}</h1>
      {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  )
}
