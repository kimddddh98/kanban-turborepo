import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react-vite'
import * as stories from './Input.stories'

const { Playground, ErrorState, Disabled, Sizes } = composeStories(stories)

test('기본 Input이 렌더링된다.', () => {
  render(<Playground />)
  expect(screen.getByText('Label')).toBeInTheDocument()
  const input = screen.getByPlaceholderText('Enter text...')
  expect(input).toBeInTheDocument()
  expect(input).toHaveClass('h-10', 'px-3', 'text-base')
})

test('에러 상태가 보인다.', () => {
  render(<ErrorState />)
  const input = screen.getByPlaceholderText('Enter text...')
  expect(screen.getByText('올바른 이메일을 입력해주세요')).toBeInTheDocument()
  expect(input).toHaveClass('border-red-500')
})

test('비활성 상태가 보인다.', () => {
  render(<Disabled />)
  const input = screen.getByPlaceholderText('Enter text...')
  expect(input).toBeDisabled()
})

test('사이즈별 Input이 렌더링된다.', () => {
  render(<Sizes />)
  expect(screen.getByPlaceholderText('sm')).toHaveClass('h-8', 'px-2', 'text-sm')
  expect(screen.getByPlaceholderText('md')).toHaveClass('h-10', 'px-3', 'text-base')
  expect(screen.getByPlaceholderText('lg')).toHaveClass('h-12', 'px-4', 'text-lg')
})
