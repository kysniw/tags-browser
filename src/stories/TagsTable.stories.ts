import type { Meta, StoryObj } from "@storybook/react";

import TagsTable from "./TagsTable";

const meta = {
  title: "Components/TagsTable",
  component: TagsTable,
} satisfies Meta<typeof TagsTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
