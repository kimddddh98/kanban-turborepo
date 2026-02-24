import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  inputSize?: 'sm' | 'md' | 'lg'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, inputSize = 'md', className = '', ...props }, ref) => {
    const baseClasses =
      'w-full rounded-lg border bg-background text-foreground ' +
      'placeholder:text-muted-foreground ' +
      'focus:outline-none focus:ring-2 focus:ring-primary ' +
      'disabled:opacity-50 disabled:cursor-not-allowed'

    const sizeClasses =
      inputSize === 'sm'
        ? 'h-8 px-2 text-sm'
        : inputSize === 'lg'
          ? 'h-12 px-4 text-lg'
          : 'h-10 px-3 text-base'

    const stateClasses = error
      ? 'border-red-500 focus:ring-red-500'
      : 'border-border'

    const inputClasses = [baseClasses, sizeClasses, stateClasses, className]
      .filter(Boolean)
      .join(' ')

    return (
      <div className="flex w-full flex-col gap-1">
        {label && (
          <label className="text-foreground text-sm font-medium">{label}</label>
        )}

        <input ref={ref} className={inputClasses} {...props} />

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'
