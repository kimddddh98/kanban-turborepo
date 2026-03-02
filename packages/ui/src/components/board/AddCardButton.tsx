interface AddCardButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void
  label: string
}

const AddCardButton = ({
  onClick,
  label,
  className,
  type = 'button',
  disabled,
  ...props
}: AddCardButtonProps) => {
  return (
    <button
      {...props}
      className={[
        'mt-auto rounded-[22px] border border-dashed px-4 py-4 text-left text-sm font-medium transition',
        disabled
          ? 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400 opacity-70'
          : 'border-slate-300 text-slate-500 hover:border-slate-400 hover:bg-slate-50',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  )
}

export { AddCardButton, type AddCardButtonProps }
