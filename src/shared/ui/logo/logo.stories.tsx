import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./logo";

const meta = {
  title: "Components/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["horizontal", "vertical"],
    },
    width: {
      control: "number",
      description: "로고의 너비 (px)",
      table: {
        type: { summary: "number | string" },
      },
    },
    height: {
      control: "number",
      description: "로고의 높이 (px)",
      table: {
        type: { summary: "number | string" },
      },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    variant: "horizontal",
    width: 130,
  },
};

export const Vertical: Story = {
  args: {
    variant: "vertical",
    width: 130,
  },
};

export const UsingWidthHeightProperty: Story = {
  args: {
    variant: "vertical",
    width: 60,
    height: 60,
  },
};

export const UsingTailwindClass: Story = {
  args: {
    variant: "horizontal",
    className: "w-32 h-auto",
  },
};
