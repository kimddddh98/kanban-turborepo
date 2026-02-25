export type ButtonProps = {
  text: string
  onClick: () => void
}
const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button className="flex text-black" onClick={() => onClick()}>
      {text}
    </button>
  )
}

export { Button }
