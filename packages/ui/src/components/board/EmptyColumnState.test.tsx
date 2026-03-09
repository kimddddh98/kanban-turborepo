import { render, screen } from '@testing-library/react'

import { EmptyColumnState } from './EmptyColumnState'

test('기본 empty 상태 문구가 렌더링된다.', () => {
  render(<EmptyColumnState />)
  expect(screen.getByText('아직 카드가 없습니다.')).toBeInTheDocument()
})

test('message prop으로 문구를 변경할 수 있다.', () => {
  render(<EmptyColumnState message="카드를 추가해 스프린트를 시작하세요." />)
  expect(
    screen.getByText('카드를 추가해 스프린트를 시작하세요.'),
  ).toBeInTheDocument()
})
