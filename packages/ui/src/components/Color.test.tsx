import { render, screen } from '@testing-library/react'

import Color from './Color'

test('전달한 variable 값으로 컬러 스와치가 렌더링된다.', () => {
  const { container } = render(<Color variable="colors-red-500" />)

  const swatch = container.querySelector('.h-16.w-16.rounded-lg.shadow-sm')

  expect(swatch).toBeInTheDocument()
  expect(swatch).toHaveAttribute(
    'style',
    expect.stringContaining('background-color: var(--colors-red-500);'),
  )
})

test('variable 값에서 prefix를 제외한 라벨을 표시한다.', () => {
  render(<Color variable="colors-blue-300" />)

  expect(screen.getByText('blue-300')).toBeInTheDocument()
})
