import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'
import { Button } from './Button'

test('클릭 시 onClick이 1회 호출된다.', async () => {
  const onClick = vi.fn()
  render(<Button text="테스트" onClick={onClick} />)
  await userEvent.click(screen.getByRole('button', { name: '테스트' }))
  expect(onClick).toHaveBeenCalledTimes(1)
})

test('text prop이 버튼 텍스트로 렌더된다.', () => {
  render(<Button text="임의 텍스트" onClick={() => {}} />)
  expect(screen.getByRole('button')).toHaveTextContent('임의 텍스트')
})

test('키보드 Enter로 onClick이 호출된다.', async () => {
  const user = userEvent.setup()
  const onClick = vi.fn()
  render(<Button text="키보드 테스트" onClick={onClick} />)

  await user.tab()
  expect(screen.getByRole('button', { name: '키보드 테스트' })).toHaveFocus()
  await user.keyboard('{Enter}')

  expect(onClick).toHaveBeenCalledTimes(1)
})
