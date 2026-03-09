import { render, screen } from '@testing-library/react'

import { KanbanColumn } from './KanbanColumn'

test('KanbanColumn의 헤더 정보와 children이 렌더링된다.', () => {
  render(
    <KanbanColumn
      title="Backlog"
      description="정리 전 아이디어와 요청"
      accent="bg-slate-500"
      count={2}
    >
      <div>카드 영역</div>
    </KanbanColumn>,
  )

  expect(screen.getByText('Backlog')).toBeInTheDocument()
  expect(screen.getByText('정리 전 아이디어와 요청')).toBeInTheDocument()
  expect(screen.getByText('2')).toBeInTheDocument()
  expect(screen.getByText('카드 영역')).toBeInTheDocument()
})
