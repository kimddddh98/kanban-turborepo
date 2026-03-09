import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

import { AddCardButton } from './AddCardButton'

test('클릭 시 onClick이 1회 호출된다.', async () => {
  const onClick = vi.fn()

  render(<AddCardButton label="+ 새 카드" onClick={onClick} />)

  await userEvent.click(screen.getByRole('button', { name: '+ 새 카드' }))

  expect(onClick).toHaveBeenCalledTimes(1)
})

test('기본 버튼 텍스트가 렌더링된다.', () => {
  render(<AddCardButton label="+ 새 카드" onClick={() => {}} />)

  expect(screen.getByRole('button', { name: '+ 새 카드' })).toBeInTheDocument()
})

test('키보드 Enter로 onClick이 호출된다.', async () => {
  const user = userEvent.setup()
  const onClick = vi.fn()

  render(<AddCardButton label="+ 새 카드" onClick={onClick} />)

  await user.tab()
  expect(screen.getByRole('button', { name: '+ 새 카드' })).toHaveFocus()

  await user.keyboard('{Enter}')

  expect(onClick).toHaveBeenCalledTimes(1)
})

test('전달한 className이 기본 스타일과 함께 적용된다.', () => {
  render(
    <AddCardButton
      label="+ 새 카드"
      onClick={() => {}}
      className="bg-slate-100 text-slate-900"
    />,
  )

  expect(screen.getByRole('button', { name: '+ 새 카드' })).toHaveClass(
    'mt-auto',
    'bg-slate-100',
    'text-slate-900',
  )
})

test('disabled 상태일 때 비활성 스타일과 disabled 속성이 적용된다.', () => {
  render(<AddCardButton label="+ 새 카드" onClick={() => {}} disabled />)

  expect(screen.getByRole('button', { name: '+ 새 카드' })).toBeDisabled()
  expect(screen.getByRole('button', { name: '+ 새 카드' })).toHaveClass(
    'cursor-not-allowed',
    'border-slate-200',
    'bg-slate-100',
    'text-slate-400',
    'opacity-70',
  )
})

test('icon prop을 전달하면 아이콘이 버튼 안에 렌더링된다.', () => {
  render(
    <AddCardButton
      label="+ 새 카드"
      onClick={() => {}}
      icon={<span data-testid="add-card-icon">+</span>}
    />,
  )

  expect(screen.getByTestId('add-card-icon')).toBeInTheDocument()
})
