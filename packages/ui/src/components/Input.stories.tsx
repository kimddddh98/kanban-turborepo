import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    inputSize: 'md',
  },
  parameters: {
    // 문서 페이지에서 기본으로 보여줄 레이아웃/배경을 팀 규칙으로 고정 가능
    layout: 'centered',
  },
  argTypes: {
    inputSize: { control: 'select', options: ['sm', 'md', 'lg'] },
    error: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Playground: Story = {}

export const ErrorState: Story = {
  args: { label: 'Email', error: '올바른 이메일을 입력해주세요' },
}

export const Disabled: Story = {
  args: { label: 'Disabled', disabled: true },
}

export const Sizes: Story = {
  args: {
    label: 'Label',
  },
  render: (args) => (
    <div
      style={{ width: 360, display: 'flex', flexDirection: 'column', gap: 12 }}
    >
      <Input {...args} label="Small" inputSize="sm" placeholder="sm" />
      <Input {...args} label="Medium" inputSize="md" placeholder="md" />
      <Input {...args} label="Large" inputSize="lg" placeholder="lg" />
    </div>
  ),
}
