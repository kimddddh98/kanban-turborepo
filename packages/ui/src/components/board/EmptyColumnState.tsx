interface EmptyColumnStateProps {
  message?: string
}

const EmptyColumnState = ({
  message = '아직 카드가 없습니다.',
}: EmptyColumnStateProps) => {
  return (
    <div className="rounded-[22px] border border-dashed border-slate-300 px-4 py-10 text-center text-sm text-slate-400">
      {message}
    </div>
  )
}

export { EmptyColumnState, type EmptyColumnStateProps }
