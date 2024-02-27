import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { expect } from "@storybook/test";

import { Typography } from "./Typography";

const meta: Meta<typeof Typography> = {
  title: "SmakChet/Atoms/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Typo",
    align: "center",
    fontSize: "h6",
    variant: "normal",
    color: "black",
  },
};
