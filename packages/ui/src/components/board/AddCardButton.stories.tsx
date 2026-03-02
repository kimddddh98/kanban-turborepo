import type { Meta, StoryObj } from '@storybook/react-vite'

import { AddCardButton } from './AddCardButton'
import { fn } from 'storybook/test'

const meta = {
  component: AddCardButton,
  args: {
    label: '+ 새 카드 추가',
    onClick: fn(),
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    className: { control: 'text' },
  },
} satisfies Meta<typeof AddCardButton>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
