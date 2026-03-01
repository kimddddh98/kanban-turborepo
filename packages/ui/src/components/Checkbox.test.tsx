import { render, screen } from '@testing-library/react'
import { Checkbox } from './Checkbox'
import userEvent from '@testing-library/user-event'
import { vi } from 'vitest'

test('Checkbox가 label, description, error와 함께 렌더링된다.', () => {
  render(
    <Checkbox label="테스트" description="테스트 설명" error="테스트 에러" />,
  )

  expect(screen.getByRole('checkbox', { name: '테스트' })).toBeInTheDocument()
  expect(screen.getByText('테스트 설명')).toBeInTheDocument()
  expect(screen.getByText('테스트 에러')).toBeInTheDocument()
})

test('라벨 클릭으로 체크 상태가 변경된다.', async () => {
  const user = userEvent.setup()
  render(<Checkbox label="테스트" />)

  const checkbox = screen.getByRole('checkbox', { name: '테스트' })
  await user.click(screen.getByText('테스트'))

  expect(checkbox).toBeChecked()
})

test('Checkbox를 클릭하면 체크상태가 변경된다.', async () => {
  render(<Checkbox label="테스트" />)
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
  await userEvent.click(checkbox)
  expect(checkbox).toBeChecked()
})

test('disabled 상태에서는 onChange가 호출되지 않는다.', async () => {
  const user = userEvent.setup()
  const onChange = vi.fn()

  render(<Checkbox label="테스트" disabled onChange={onChange} />)
  const checkbox = screen.getByRole('checkbox', { name: '테스트' })

  expect(checkbox).toBeDisabled()
  await user.click(checkbox)

  expect(checkbox).not.toBeChecked()
  expect(onChange).not.toHaveBeenCalled()
})
