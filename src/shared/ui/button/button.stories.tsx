import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "디자인 시스템의 버튼 컴포넌트입니다. Variant와 State에 따라 스타일이 변경됩니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "버튼의 스타일 종류",
    },
    size: {
      control: "select",
      options: ["default"],
      description: "버튼의 크기",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 여부",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Button",
    variant: "tertiary",
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
      <Button variant="tertiary" disabled>
        Tertiary
      </Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      source: {
        code: `
          <div className="flex gap-4">
            <Button variant="primary" disabled>
              Primary
            </Button>
            <Button variant="secondary" disabled>
              Secondary
            </Button>
            <Button variant="tertiary" disabled>
              Tertiary
            </Button>
          </div>
        `,
      },
    },
  },
};
