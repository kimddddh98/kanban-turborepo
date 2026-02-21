export type TaskProps = {
  task: {
    id: number
    title: string
    state: boolean
  }

  onArchiveTask: () => void
  onPinTask: () => void
}

const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
}: TaskProps) => {
  return (
    <div className="list-item">
      <label htmlFor={`title-${id}`} aria-label={title}>
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          id={`title-${id}`}
        />
      </label>
    </div>
  )
}
export { Task }
