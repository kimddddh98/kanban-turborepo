import * as React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  inputSize?: 'sm' | 'md' | 'lg'
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, inputSize = 'md', className = '', ...props }, ref) => {
    const baseClasses =
      'w-full rounded-lg border border-gray-400 bg-white font-body text-fg-default ' +
      'placeholder:text-fg-subtle shadow-sm ' +
      'focus:border-accent-default focus:outline-none ' +
      'disabled:cursor-not-allowed disabled:opacity-50'

    const sizeClasses =
      inputSize === 'sm'
        ? 'h-8 px-2 text-sm'
        : inputSize === 'lg'
          ? 'h-12 px-4 text-lg'
          : 'h-10 px-3 text-base'

    const stateClasses = error
      ? 'border-red-500 focus:border-red-500'
      : 'hover:border-gray-300'

    const inputClasses = [baseClasses, sizeClasses, stateClasses, className]
      .filter(Boolean)
      .join(' ')

    return (
      <div className="flex w-full flex-col gap-1">
        {label && (
          <label className="font-body text-fg-muted text-sm font-medium">
            {label}
          </label>
        )}

        <input ref={ref} className={inputClasses} {...props} />

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    )
  },
)

Input.displayName = 'Input'
