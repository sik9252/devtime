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
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex w-50 flex-col gap-2">
      <Label>Dropdown Label</Label>
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Placeholder" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="first">First Item</SelectItem>
          <SelectSeparator />
          <SelectItem value="second">Second Item</SelectItem>
          <SelectSeparator />
          <SelectItem value="third">Third Item</SelectItem>
          <SelectSeparator />
          <SelectItem value="fourth">Fourth Item</SelectItem>
          <SelectSeparator />
          <SelectItem value="fifth">Fifth Item</SelectItem>
          <SelectSeparator />
          <SelectItem value="last">Last Item</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <div className="flex w-50 flex-col gap-2">
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
    <div className="flex w-50 flex-col gap-2">
      <Label>Dropdown Label</Label>
      <Select disabled>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Placeholder" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="first">First Item</SelectItem>
          <SelectItem value="second">Second Item</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
