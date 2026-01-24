import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge"; // 실제 파일 경로에 맞게 수정해주세요

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "outline"],
      description: "배지의 스타일 변형",
    },
    children: {
      control: "text",
      description: "배지 내부 텍스트",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. 기본 (Default - Primary Color)
export const Default: Story = {
  args: {
    variant: "default",
    children: "badge",
  },
};

// 2. 보조 (Secondary - 주로 Chip이나 덜 강조되는 태그용)
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "primary",
  },
};

// 3. 외곽선 (Outline)
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

// 5. 링크로 사용하기 (asChild 활용)
export const AsLink: Story = {
  args: {
    children: <a href="#">Link Badge</a>,
    asChild: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "`asChild` prop을 사용하면 배지를 `<a>` 태그처럼 렌더링할 수 있습니다.",
      },
    },
  },
};
