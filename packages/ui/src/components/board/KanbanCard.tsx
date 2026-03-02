import { formatDay } from '@repo/utils'
import { MetaBadge } from './MetaBadge'

interface KanbanCardProps {
  title: string
  summary: string
  meta: string
}

const KanbanCard = ({ title, summary, meta }: KanbanCardProps) => {
  return (
    <article
      key={title}
      className="rounded-[24px] border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between gap-3">
        <MetaBadge meta={meta} />
        <span className="text-xs font-medium text-slate-400">
          {formatDay(new Date())}
        </span>
      </div>
      <h4 className="mt-4 text-base font-semibold leading-6 text-slate-950">
        {title}
      </h4>
      <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>
    </article>
  )
}

export { KanbanCard, type KanbanCardProps }
