import type { Meta, StoryObj } from "@storybook/react";

import App from "../App";

const meta = {
  title: "App",
  component: App,
  tags: ["autodocs"],
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {};
