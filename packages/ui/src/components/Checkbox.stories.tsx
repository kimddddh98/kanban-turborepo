import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from './Checkbox'

const meta = {
  component: Checkbox,
  args: {
    label: '약관에 동의합니다',
    description: '서비스 이용을 위해 필수 항목에 동의해야 합니다.',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    error: { control: 'text' },
    label: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof Checkbox>

export default meta

type Story = StoryObj<typeof meta>

const InteractiveCheckbox = (args: Story['args']) => {
  const [checked, setChecked] = useState(false)

  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
    />
  )
}

export const Playground: Story = {
  render: InteractiveCheckbox,
}

export const UnChecked: Story = {
  args: {
    checked: false,
    readOnly: true,
  },
}

export const Checked: Story = {
  args: {
    checked: true,
    readOnly: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const ErrorState: Story = {
  args: {
    error: '필수 동의 항목입니다.',
    checked: false,
    readOnly: true,
  },
}
