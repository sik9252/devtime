import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarBadge, AvatarImage } from "./avatar";
import { DefaultProfileIcon } from "@/shared/icons";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm", "lg"],
      description: "아바타 크기 조절",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "default",
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback className="bg-muted">
        <DefaultProfileIcon />
      </AvatarFallback>
    </Avatar>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback className="bg-muted">
        <DefaultProfileIcon />
      </AvatarFallback>
    </Avatar>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs">sm</span>
        <Avatar size="sm">
          <AvatarFallback className="bg-muted">
            <DefaultProfileIcon />
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs">default</span>
        <Avatar size="default">
          <AvatarFallback className="bg-muted">
            <DefaultProfileIcon />
          </AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs">lg</span>
        <Avatar size="lg">
          <AvatarFallback className="bg-muted">
            <DefaultProfileIcon />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="bg-muted">
          <DefaultProfileIcon />
        </AvatarFallback>
        <AvatarBadge className="bg-green-500" />
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-muted">
          <DefaultProfileIcon />
        </AvatarFallback>
        <AvatarBadge className="bg-red-500" />
      </Avatar>
    </div>
  ),
};
