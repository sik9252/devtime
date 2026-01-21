import type { Meta, StoryObj } from "@storybook/react";

import { Search } from "lucide-react";
import { TextField } from "./text-field";

const meta = {
  title: "Components/TextField",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    buttonProps: { control: "object" },
  },
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Field Label",
    placeholder: "Placeholder",
    helperText: "Helper Text",
    buttonText: "Button",
  },
};

export const WithoutHelperText: Story = {
  args: {
    label: "이메일",
    placeholder: "test@example.com",
    value: "test@example.com",
    buttonText: "Button",
  },
};

export const WithoutButton: Story = {
  args: {
    label: "Field Label",
    placeholder: "Placeholder",
    helperText: "Helper Text",
  },
};

export const WithSuccessMessage: Story = {
  args: {
    label: "인증번호",
    placeholder: "인증번호를 입력하세요",
    value: 123456,
    buttonText: "인증",
    successMessage: "인증되었습니다.",
  },
};

export const WithErrorMessage: Story = {
  args: {
    label: "아이디",
    placeholder: "아이디를 입력하세요",
    value: "test1234",
    buttonText: "중복확인",
    errorMessage: "사용할 수 없는 아이디입니다.",
  },
};

export const WithIcon: Story = {
  args: {
    label: "검색",
    leadingIcon: <Search className="size-4" />,
    placeholder: "검색어를 입력하세요",
    buttonText: "검색",
    buttonProps: { variant: "primary" },
  },
};

export const Disabled: Story = {
  args: {
    label: "Field Label",
    placeholder: "Placeholder",
    buttonText: "Button",
    disabled: true,
  },
};
