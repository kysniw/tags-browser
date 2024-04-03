import type { Preview } from "@storybook/react";
import TagsProvider from "../src/context/TagsContext";
import React from "react";
import "../src/index.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <TagsProvider>
        <Story />
      </TagsProvider>
    ),
  ],
};

export default preview;
