import type { Meta, StoryObj } from "@storybook/react";

import ItemsList from "../lib/items-list/ItemsList";

const meta = {
  title: 'ItemsList',
  component: ItemsList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Lista de itens que devem ser exibidos.',
    }
  },
} satisfies Meta<typeof ItemsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithItems: Story = {
  args: {
    items: [
      { id: 1, name: 'Coxinha', description: 'Coxinha de frango', quantity: 5, price: 3 },
      { id: 1, name: 'Pastel de Frango', description: 'Pastel de frango', quantity: 2, price: 3 },
    ]
  },
};

export const Empty: Story = {
  args: {
    items: []
  },
};
