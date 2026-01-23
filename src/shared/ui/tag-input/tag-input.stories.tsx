import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { TagInput } from "./tag-input";
import { Label } from "../label";
import { Plus } from "lucide-react";
import { Chip } from "../chip";

const meta = {
  title: "Components/TagInput",
  component: TagInput,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-[320px]">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onAddTag: { action: "onAddTag" },
    buttonText: {
      control: "text",
      description: "버튼에 표시될 텍스트나 컴포넌트(아이콘 등)",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof TagInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "태그를 입력하세요",
    onAddTag: () => {},
  },
};

export const Typed: Story = {
  args: {
    defaultValue: "React",
    placeholder: "태그를 입력하세요",
    onAddTag: () => {},
  },
};

export const CustomButtonText: Story = {
  args: {
    placeholder: "태그를 입력하세요",
    buttonText: <Plus />,
    onAddTag: () => {},
  },
};

const WithLabelInput = (args: React.ComponentProps<typeof TagInput>) => {
  return (
    <div className="flex flex-col gap-2">
      <Label>Skills</Label>
      <TagInput {...args} placeholder="태그를 입력하세요" />
    </div>
  );
};

export const WithLabel: Story = {
  args: {
    onAddTag: () => {},
  },
  render: (args) => <WithLabelInput {...args} />,
};

export const Disabled: Story = {
  args: {
    placeholder: "태그를 입력하세요",
    disabled: true,
    onAddTag: () => {},
  },
};

const InteractiveTagInput = (args: React.ComponentProps<typeof TagInput>) => {
  const [tags, setTags] = React.useState<string[]>(["React", "Next.js"]);
  const [error, setError] = React.useState<string | undefined>(undefined);

  const handleAddTag = (newTag: string) => {
    args.onAddTag?.(newTag);

    if (tags.includes(newTag)) {
      setError("이미 존재하는 태그입니다.");
    } else {
      setTags((prev) => [...prev, newTag]);
      setError(undefined);
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="flex flex-col gap-4">
      <TagInput
        {...args}
        placeholder="기술 스택 입력"
        onAddTag={handleAddTag}
        errorMessage={error}
      />

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Chip key={tag} onRemove={() => removeTag(tag)}>
            {tag}
          </Chip>
        ))}
      </div>
    </div>
  );
};

export const Interactive: Story = {
  args: {
    onAddTag: () => {},
  },
  render: (args) => <InteractiveTagInput {...args} />,
};
