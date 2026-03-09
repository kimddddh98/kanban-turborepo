import type { Meta, StoryObj } from '@storybook/react-vite'

import { EmptyColumnState } from './EmptyColumnState'

const meta = {
  component: EmptyColumnState,
  args: {
    message: '아직 카드가 없습니다.',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    message: { control: 'text' },
  },
} satisfies Meta<typeof EmptyColumnState>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomMessage: Story = {
  args: {
    message: '카드를 추가해 스프린트를 시작하세요.',
  },
}
