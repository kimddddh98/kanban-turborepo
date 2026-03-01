export type ButtonProps = {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      type="button"
      className="bg-button-primary px-md py-sm font-body text-button-primary-text shadow-default focus:ring-accent-default inline-flex items-center justify-center text-base font-medium transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export { Button }
