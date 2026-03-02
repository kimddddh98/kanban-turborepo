import { render, screen } from '@testing-library/react'

import { KanbanCard } from './KanbanCard'
import { formatDay } from '@repo/utils'

test('KanbanCard의 제목, 설명, 메타 정보가 렌더링된다.', () => {
  render(
    <KanbanCard
      title="칸반 컬럼 레이아웃 구현"
      summary="데스크톱과 모바일에서 읽기 쉬운 보드 구조를 먼저 정리합니다."
      meta="Frontend"
    />,
  )

  expect(screen.getByText('칸반 컬럼 레이아웃 구현')).toBeInTheDocument()
  expect(
    screen.getByText(
      '데스크톱과 모바일에서 읽기 쉬운 보드 구조를 먼저 정리합니다.',
    ),
  ).toBeInTheDocument()
  expect(screen.getByText('Frontend')).toBeInTheDocument()
  expect(screen.getByText(formatDay(new Date()))).toBeInTheDocument()
})
