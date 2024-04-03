import type { Meta, StoryObj } from "@storybook/react";

import TableTopContent from "./TableTopContent";

const meta = {
  title: "Components/TableTopContent",
  component: TableTopContent,
} satisfies Meta<typeof TableTopContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
