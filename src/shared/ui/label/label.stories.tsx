import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";

const meta = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Label",
  },
};

export const WithCustomColor: Story = {
  args: {
    children: "Label",
    className: "text-positive",
  },
};

export const WithIcon: Story = {
  args: {
    children: "🙂 Label",
  },
};

export const Disabled: Story = {
  args: {
    children: "Label",
    "aria-disabled": "true",
  },
};
