import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  component: Button,
  args: {
    text: '기본 텍스트',
    onClick: () => alert('버튼 클릭'),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const ButtonWithHooks = () => {
  const [value, setValue] = useState('변경 전');

  const handleOnChange = () => {
    setValue('변경 후');
  };
  return <Button onClick={handleOnChange} text={value} />;
};

export const Default: Story = {};

export const Primary = {
  name: '버튼',
  render: () => <ButtonWithHooks />,
} satisfies Story;
