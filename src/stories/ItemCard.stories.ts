import type { Meta, StoryObj } from "@storybook/react";

import ItemCard from "../lib/item-card/ItemCard";

const meta = {
  title: 'ItemCard',
  component: ItemCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    item: {
      description: 'Item que deve ser apresentado no card.',
    }
  },
} satisfies Meta<typeof ItemCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    index: 0,
    item:  {
      id: 1,
      name: 'Coxinha',
      description: 'Coxinha de frango',
      quantity: 5,
      price: 3
    },
  },
};
