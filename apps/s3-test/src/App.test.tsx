import App from './App';
import { render, screen } from '@testing-library/react';

describe('앱 테스트', () => {
  it('renders hello world', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});
