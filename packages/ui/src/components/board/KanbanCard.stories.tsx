import type { Meta, StoryObj } from '@storybook/react-vite'

import { KanbanCard } from './KanbanCard'

const meta = {
  component: KanbanCard,
  args: {
    title: '칸반 컬럼 레이아웃 구현',
    summary: '데스크톱과 모바일에서 읽기 쉬운 보드 구조를 먼저 정리합니다.',
    meta: 'Frontend',
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    summary: { control: 'text' },
    meta: { control: 'text' },
  },
} satisfies Meta<typeof KanbanCard>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const LongContent: Story = {
  args: {
    title: '스프린트 목표와 보드 메타데이터 구조 재정의',
    summary:
      '스프린트 목표를 카드 속성이 아니라 보드 상단 메타데이터로 분리하고, 라우팅 구조와 데이터 모델의 책임 경계를 다시 맞춥니다.',
    meta: 'Planning',
  },
}
