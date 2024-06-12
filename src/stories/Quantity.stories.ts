import type { Meta, StoryObj } from "@storybook/react";

import Quantity from "../lib/quantity/Quantity";

const meta = {
  title: 'Quantity',
  component: Quantity,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: 'Quantidade de um determinado item.',
    },
    min: {
      description: 'Mínimo de quantidade para determinado item.',
    },
    max: {
      description: 'Máximo de quantidade para determinado item.',
    }
  },
} satisfies Meta<typeof Quantity>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithMinAndMax: Story = {
  args: {
    value: 0,
    min: 0,
    max: 5,
  },
};

export const WithoutMinAndMax: Story = {
  args: {
    value: 0,
  },
};
