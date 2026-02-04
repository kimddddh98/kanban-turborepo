import type { FC } from 'react';
import React from 'react';
export type ButtonProps = {
  label: string;
};

export const Button: FC<ButtonProps> = ({ label }) => {
  return <button style={{ background: 'red' }}>{label}</button>;
};
