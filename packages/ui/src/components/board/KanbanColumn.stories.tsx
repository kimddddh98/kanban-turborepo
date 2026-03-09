import type { Meta, StoryObj } from '@storybook/react-vite'

import { AddCardButton } from './AddCardButton'
import { EmptyColumnState } from './EmptyColumnState'
import { KanbanCard } from './KanbanCard'
import { KanbanColumn } from './KanbanColumn'

const meta = {
  component: KanbanColumn,
  args: {
    title: 'Backlog',
    description: '정리 전 아이디어와 요청',
    accent: 'bg-slate-500',
    count: 2,
    children: <div>children</div>,
  },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    accent: { control: 'text' },
    count: { control: 'number' },
    children: { control: false },
  },
} satisfies Meta<typeof KanbanColumn>

export default meta

type Story = StoryObj<typeof meta>

export const Empty: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <KanbanColumn {...args} count={0}>
        <EmptyColumnState />
        <AddCardButton label="+ 새 카드 추가" onClick={() => {}} />
      </KanbanColumn>
    </div>
  ),
}

export const WithCards: Story = {
  render: (args) => (
    <div className="w-[320px]">
      <KanbanColumn {...args}>
        <KanbanCard
          title="프로젝트 온보딩 화면 초안"
          summary="첫 진입 사용자를 위한 소개 레이아웃 정리"
          meta="Design"
        />
        <KanbanCard
          title="보드 필터 정책 정리"
          summary="우선순위와 담당자 기준 필터 방식 정의"
          meta="Planning"
        />
        <AddCardButton label="+ 새 카드 추가" onClick={() => {}} />
      </KanbanColumn>
    </div>
  ),
}

export const LongText: Story = {
  args: {
    title: 'In Progress',
    description: '여러 이해관계자의 피드백을 반영하며 진행 중인 작업 목록',
    accent: 'bg-amber-500',
    count: 1,
  },
  render: (args) => (
    <div className="w-[320px]">
      <KanbanColumn {...args}>
        <KanbanCard
          title="스프린트 목표와 보드 메타데이터 구조 재정의"
          summary="스프린트 목표를 카드 속성이 아니라 보드 상단 메타데이터로 분리하고, 데이터 책임 경계를 다시 맞춥니다."
          meta="Frontend"
        />
        <AddCardButton label="+ 새 카드 추가" onClick={() => {}} />
      </KanbanColumn>
    </div>
  ),
}
