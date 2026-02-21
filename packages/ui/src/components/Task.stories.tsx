import { Meta, StoryObj } from '@storybook/react-vite'
import { Task } from './Task'

const meta = {
  component: Task,
} satisfies Meta<typeof Task>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    task: {
      id: 1,
      title: '테스트',
      state: true,
    },
    onArchiveTask: () => {},
    onPinTask: () => {},
  },
}

export const Pinned: Story = {
  args: {
    ...Default.args,
    task: {
      ...Default.args.task,
      state: false,
    },
  },
}

export const Archived: Story = {
  args: {
    ...Default.args,
    task: {
      ...Default.args.task,
      title: 'Archived',
    },
  },
}
