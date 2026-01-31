import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectSeparator,
} from "./select";
import { Label } from "@/shared/ui/label";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-70">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label>Dropdown Label</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Placeholder" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="first">First Item</SelectItem>
          <SelectSeparator />
          <SelectItem value="second">Second Item</SelectItem>
          <SelectSeparator />
          <SelectItem value="third">Third Item</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Scrollable: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label>시간대 선택 (스크롤 테스트)</Label>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="시간을 선택하세요" />
        </SelectTrigger>
        <SelectContent>
          {Array.from({ length: 20 }).map((_, i) => (
            <SelectItem key={i} value={`time-${i}`}>
              {i < 10 ? `0${i}:00` : `${i}:00`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label>Dropdown Label</Label>
      <Select defaultValue="second">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Placeholder" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="first">First Item</SelectItem>
          <SelectSeparator />
          <SelectItem value="second">Second Item</SelectItem>
          <SelectSeparator />
          <SelectItem value="third">Third Item</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label>비활성화 상태</Label>
      <Select disabled>
        <SelectTrigger>
          <SelectValue placeholder="선택할 수 없습니다" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option">옵션</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
