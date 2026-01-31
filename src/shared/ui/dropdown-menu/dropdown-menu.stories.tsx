import type { Meta, StoryObj } from "@storybook/react";
import { User, LogOut, Settings, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "./dropdown-menu";
import { Button } from "@/shared/ui/button";
import { Avatar, AvatarFallback } from "../avatar";
import { DefaultProfileIcon } from "@/shared/icons";

const meta = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="primary">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>First Item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Second Item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Third Item</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Fourth Item</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const ProfileDropdown: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <Avatar size="default">
            <AvatarFallback className="bg-muted">
              <DefaultProfileIcon />
            </AvatarFallback>
          </Avatar>
          <div className="typo-body-b">Frontend Developer</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <User className="size-5 text-gray-600" /> 마이페이지
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="size-5 text-gray-600" /> 로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2">
          <Avatar size="default">
            <AvatarFallback className="bg-muted">
              <DefaultProfileIcon />
            </AvatarFallback>
          </Avatar>
          <div className="typo-body-b">Frontend Developer</div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>계정 관리</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <User className="size-5 text-gray-600" />
          프로필
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="size-5 text-gray-600" /> 설정
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="size-5 text-gray-600" />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};

export const Destructive: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          <Menu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>수정하기</DropdownMenuItem>
        <DropdownMenuItem>복사하기</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">삭제하기</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
