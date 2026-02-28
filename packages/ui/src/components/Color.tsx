interface ColorProps {
  variable: string
}

const Color = ({ variable }: ColorProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <div
        className="h-16 w-16 rounded-lg shadow-sm"
        style={{
          backgroundColor: `var(--${variable})`,
        }}
      />
      <span className="break-all text-center text-sm text-gray-700">
        {variable.split('-').slice(1).join('-')}
      </span>
      <span className="break-all text-center text-sm text-gray-700">
        {variable.split('-').slice(1).join('-')}
      </span>
    </div>
  )
}
export default Color
