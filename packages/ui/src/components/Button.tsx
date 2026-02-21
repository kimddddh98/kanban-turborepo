export type ButtonProps = {
  text: string
  onClick: () => void
}
const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="flex text-red-400" onClick={() => onClick()}>
      {text}
    </button>
  )
}

export { Button }
