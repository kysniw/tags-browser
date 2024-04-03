import type { Meta, StoryObj } from "@storybook/react";

import PaginationBar from "./PaginationBar";

const meta = {
  title: "Components/PaginationBar",
  component: PaginationBar,
} satisfies Meta<typeof PaginationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
