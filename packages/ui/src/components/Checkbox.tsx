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
    const labelId = label ? `${inputId}-label` : undefined
    const descriptionId = description ? `${inputId}-description` : undefined
    const errorId = error ? `${inputId}-error` : undefined
    const describedBy =
      [descriptionId, errorId].filter(Boolean).join(' ') || undefined

    return (
      <div className="flex w-full flex-col gap-1">
        <label
          htmlFor={inputId}
          className={`gap-sm flex select-none items-start ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
        >
          <span className="relative mt-0.5 h-5 w-5 shrink-0">
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
              disabled={disabled}
              aria-labelledby={labelId}
              aria-describedby={describedBy}
              aria-invalid={error ? 'true' : undefined}
              className={[
                'peer h-5 w-5 appearance-none rounded-sm border border-gray-400 bg-white transition-colors',
                'checked:border-accent-default checked:bg-accent-default',
                'focus:border-accent-default focus:outline-none',
                'disabled:cursor-not-allowed',
                className,
              ]
                .filter(Boolean)
                .join(' ')}
              {...props}
            />

            <span className="pointer-events-none absolute inset-0 inline-flex items-center justify-center opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="h-3.5 w-3.5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
              </svg>
            </span>
          </span>

          {(label || description) && (
            <span className="flex min-w-0 flex-col gap-1">
              {label && (
                <span id={labelId} className="font-body text-sm font-medium">
                  {label}
                </span>
              )}
              {description && (
                <span
                  id={descriptionId}
                  className="font-body text-fg-subtle text-sm"
                >
                  {description}
                </span>
              )}
            </span>
          )}
        </label>

        {error && (
          <span id={errorId} className="text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
    )
  },
)

Checkbox.displayName = 'Checkbox'
