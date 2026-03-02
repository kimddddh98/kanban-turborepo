import { render, screen } from '@testing-library/react'
import { MetaBadge } from './MetaBadge'

test('meta 정보가 렌더링된다.', () => {
  render(<MetaBadge meta="Frontend" />)
  expect(screen.getByText('Frontend')).toBeInTheDocument()
})
