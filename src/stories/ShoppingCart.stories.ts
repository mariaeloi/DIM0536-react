import type { Meta, StoryObj } from "@storybook/react";

import ShoppingCart from "../lib/shopping-cart/ShoppingCart";

const meta = {
  title: 'ShoppingCart',
  component: ShoppingCart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShoppingCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
};
