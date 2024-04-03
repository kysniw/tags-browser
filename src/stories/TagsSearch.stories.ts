import type { Meta, StoryObj } from "@storybook/react";

import TagsSearch from "./TagsSearch";

const meta = {
  title: "Components/TagsSearch",
  component: TagsSearch,
} satisfies Meta<typeof TagsSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
