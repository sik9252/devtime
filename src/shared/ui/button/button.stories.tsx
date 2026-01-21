import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "버튼의 스타일 종류",
    },
    size: {
      control: "select",
      options: ["large", "medium", "small"],
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

export const WithSize: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="large">
        Large
      </Button>
      <Button variant="primary" size="medium">
        Medium
      </Button>
      <Button variant="primary" size="small">
        Small
      </Button>
    </div>
  ),
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
