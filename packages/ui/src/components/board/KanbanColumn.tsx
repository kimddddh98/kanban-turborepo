import type { ReactNode } from 'react'

interface KanbanColumnProps {
  title: string
  description: string
  accent: string
  count: number
  children: ReactNode
}

export function KanbanColumn({
  title,
  description,
  accent,
  count,
  children,
}: KanbanColumnProps) {
  return (
    <section className="flex min-h-[640px] flex-col rounded-[28px] border border-slate-200/70 bg-white/80 p-4 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm">
      <div className="flex items-start justify-between gap-3 rounded-2xl bg-slate-50 px-4 py-4">
        <div>
          <div className="flex items-center gap-3">
            <span className={`h-3 w-3 rounded-full ${accent}`} />
            <h3 className="text-lg font-semibold text-slate-950">{title}</h3>
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
        </div>
        <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-700 shadow-sm">
          {count}
        </span>
      </div>

      <div className="mt-4 flex flex-1 flex-col gap-4">{children}</div>
    </section>
  )
}
