"use client"

import { useEffect, useState } from "react"
import { Plus } from "lucide-react"
import { NOTION_NOTES, COLORS, type Note } from "@/lib/data"

export default function NotionView() {
  const [notes, setNotes] = useState<Note[]>(NOTION_NOTES)
  const [active, setActive] = useState("n1")
  const [editing, setEditing] = useState(false)
  const [content, setContent] = useState(notes[0].content)
  const note = notes.find((n) => n.id === active)

  useEffect(() => {
    if (note) setContent(note.content)
    setEditing(false)
  }, [active]) // eslint-disable-line react-hooks/exhaustive-deps

  const save = () => {
    setNotes((ns) => ns.map((n) => (n.id === active ? { ...n, content } : n)))
    setEditing(false)
  }

  return (
    <div className="flex h-full">
      <div className="flex w-56 flex-col gap-1 border-r border-border p-3">
        <div className="px-2 pb-2.5 pt-1 text-[11px] font-semibold uppercase tracking-wide text-subtle">Notes</div>
        {notes.map((n) => (
          <button
            key={n.id}
            onClick={() => setActive(n.id)}
            className="rounded-lg border px-3 py-2.5 text-left transition-colors"
            style={{
              background: active === n.id ? "var(--muted)" : "transparent",
              borderColor: active === n.id ? "var(--border)" : "transparent",
            }}
          >
            <div className="mb-0.5 flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full" style={{ background: n.color }} />
              <span className="text-sm font-medium text-foreground">{n.title}</span>
            </div>
            <div className="ml-4 text-[11px] text-subtle">{n.date}</div>
          </button>
        ))}
        <button
          onClick={() => {
            const id = `n${Date.now()}`
            setNotes((ns) => [...ns, { id, title: "New Note", color: COLORS.blue, date: "Jun 2", content: "" }])
            setActive(id)
            setContent("")
            setEditing(true)
          }}
          className="mt-auto flex items-center justify-center gap-1.5 rounded-lg border border-primary/25 bg-primary-soft py-2 text-sm font-semibold text-primary"
        >
          <Plus size={15} /> New Note
        </button>
      </div>

      {note && (
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="mb-5 flex items-center justify-between">
            <div className="text-lg font-bold text-foreground">{note.title}</div>
            <button
              onClick={() => (editing ? save() : setEditing(true))}
              className="rounded-lg border px-4 py-1.5 text-sm font-semibold transition-colors"
              style={
                editing
                  ? { background: COLORS.emerald + "16", color: COLORS.emerald, borderColor: COLORS.emerald + "40" }
                  : { background: "var(--card)", color: "var(--muted-foreground)", borderColor: "var(--border)" }
              }
            >
              {editing ? "Save" : "Edit"}
            </button>
          </div>
          {editing ? (
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[300px] w-full resize-y rounded-xl border border-primary/30 bg-card p-4 text-sm leading-relaxed text-foreground outline-none"
            />
          ) : (
            <div className="min-h-[200px] whitespace-pre-wrap rounded-xl border border-border bg-card p-4 text-sm leading-relaxed text-muted-foreground">
              {content}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
