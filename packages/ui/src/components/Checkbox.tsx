import * as React from 'react'

export interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label?: string
  description?: string
  error?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { label, description, error, className = '', id, disabled, ...props },
    ref,
  ) => {
    const generatedId = React.useId()
    const inputId = id ?? generatedId

    return (
      <div className="flex w-full flex-col gap-1">
        <label
          htmlFor={inputId}
          className={`gap-sm flex select-none items-start ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
        >
          <input
            ref={ref}
            id={inputId}
            type="checkbox"
            disabled={disabled}
            className={`peer sr-only ${className}`.trim()}
            {...props}
          />

          <span className="peer-checked:bg-accent-default peer-checked:border-accent-default peer-focus-visible:border-accent-default mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border border-gray-400 bg-white text-white transition-colors">
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className={`${props.checked ? 'opacity-100' : 'opacity-0'} h-3.5 w-3.5 transition-opacity`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
            </svg>
          </span>

          {(label || description) && (
            <span className="flex min-w-0 flex-col gap-1">
              {label && (
                <span className="font-body text-sm font-medium">{label}</span>
              )}
              {description && (
                <span className="font-body text-fg-subtle text-sm">
                  {description}
                </span>
              )}
            </span>
          )}
        </label>

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
