import type { Meta, StoryObj } from "@storybook/react";

import PageSizeSelect from "./PageSizeSelect";

const meta = {
  title: "Components/PageSizeSelect",
  component: PageSizeSelect,
  tags: ["autodocs"],
} satisfies Meta<typeof PageSizeSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
