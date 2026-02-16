import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as stories from './Button.stories';
import { composeStories } from '@storybook/react-vite';

const { Default, Secondary, Primary } = composeStories(stories);

test('Default 버튼 보인다.', () => {
  render(<Default />);
  expect(screen.getByText('기본 텍스트')).toBeInTheDocument();
});
test('Secondary 버튼 보인다.', () => {
  render(<Secondary />);
  expect(screen.getByText('두번째 버튼')).toBeInTheDocument();
});

test('Primary 버튼 보인다.', async () => {
  render(<Primary />);
  const button = screen.getByRole('button');
  expect(button).toHaveTextContent('변경 전');
  await userEvent.click(button);
  expect(button).toHaveTextContent('변경 후');
});
