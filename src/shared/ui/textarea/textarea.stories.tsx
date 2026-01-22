import type { Meta, StoryObj } from "@storybook/react";

import { Textarea } from "./textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const WithoutHelperText: Story = {
  args: {
    placeholder: "test@example.com",
    value: "test@example.com",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Area Label",
    placeholder: "Placeholder",
  },
};

export const Disabled: Story = {
  args: {
    label: "Area Label",
    placeholder: "Placeholder",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    placeholder: "Placeholder",
    value: "오류가 발생했어요",
    "aria-invalid": true,
  },
};
