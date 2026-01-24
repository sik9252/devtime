import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Label } from "../label";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "체크 상태",
    },
    disabled: {
      control: "boolean",
      description: "비활성화 여부",
    },
    onCheckedChange: {
      action: "checkedChange",
      description: "체크 상태 변경 시 호출되는 이벤트",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="flex items-center space-x-1">
      <Checkbox id="terms" {...args} />
      <label
        htmlFor="terms"
        className="typo-body-small-m leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        동의함
      </label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-1">
      <Checkbox id="disabled-terms" disabled />
      <label
        htmlFor="disabled-terms"
        className="typo-body-small-m leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        동의함
      </label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-1">
      <Checkbox id="checked-demo1" defaultChecked />
      <label
        htmlFor="checked-demo1"
        className="typo-body-small-m leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        동의함
      </label>
    </div>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <div className="items-top space-y-2">
      <div className="flex gap-1.5 leading-none">
        <Checkbox id="terms1" {...args} />
        <Label
          htmlFor="terms1"
          className="typo-body-small-m leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          동의함
        </Label>
      </div>
      <p className="typo-caption-r text-gray-600">
        이 약관은 DevTime(이하 “서비스”)의 이용 조건 및 절차, 사용자와 서비스 제공자(회사) 간의
        권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
      </p>
    </div>
  ),
};

export const Error: Story = {
  render: () => (
    <div className="flex items-center space-x-1">
      <Checkbox id="checked-demo2" aria-invalid="true" />
      <label
        htmlFor="checked-demo2"
        className="typo-body-small-m leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        동의함
      </label>
    </div>
  ),
};
