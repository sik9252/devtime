import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Input } from "./input";
import { Search, Eye, EyeOff, Mail } from "lucide-react";

const iconMap = {
  None: null,
  Search: <Search className="size-4" />,
  Eye: <Eye className="size-4" />,
  Mail: <Mail className="size-4" />,
};

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "file", "date"],
    },
    disabled: {
      control: "boolean",
    },
    leadingIcon: {
      description: "왼쪽에 들어갈 아이콘",
      control: { type: "select" },
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
    trailingIcon: {
      description: "오른쪽에 들어갈 아이콘",
      control: { type: "select" },
      options: Object.keys(iconMap),
      mapping: iconMap,
    },
  },
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    type: "text",
    placeholder: "검색어를 입력하세요",
    leadingIcon: <Search className="size-4" />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    type: "text",
    placeholder: "검색어를 입력하세요",
    trailingIcon: <Search className="size-4" />,
  },
};

const PasswordInputStory = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      placeholder="비밀번호를 입력하세요"
      trailingIcon={
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="typo-body-small-m flex items-center justify-center focus:outline-none"
        >
          {showPassword ? (
            <EyeOff className="size-4 cursor-pointer" />
          ) : (
            <Eye className="size-4 cursor-pointer" />
          )}
        </button>
      }
    />
  );
};

export const WithClickableIcon: Story = {
  render: () => <PasswordInputStory />,
  parameters: {
    controls: { disable: true },
    docs: {
      source: {
        code: `
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="비밀번호를 입력하세요"
            trailingIcon={
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="typo-body-small-m flex items-center justify-center focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="size-4 cursor-pointer" />
                ) : (
                  <Eye className="size-4 cursor-pointer" />
                )}
              </button>
            }
          />
        `,
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const WithError: Story = {
  render: (args) => (
    <Input id="email" placeholder="Placeholder" value="Text" aria-invalid="true" {...args} />
  ),
};
