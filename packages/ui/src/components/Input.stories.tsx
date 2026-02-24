import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  args: {
    placeholder: 'Enter text...',
    label: 'Label',
    inputSize: 'md', // ✅ 여기!
  },
  argTypes: {
    inputSize: {
      // ✅ 여기!
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    error: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const Large: Story = { args: { inputSize: 'lg' } }
export const Small: Story = { args: { inputSize: 'sm' } }
