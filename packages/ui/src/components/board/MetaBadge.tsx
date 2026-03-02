interface MetaBadgeProps {
  meta: string
}

const MetaBadge = ({ meta }: MetaBadgeProps) => {
  return (
    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
      {meta}
    </span>
  )
}

export { MetaBadge, type MetaBadgeProps }
