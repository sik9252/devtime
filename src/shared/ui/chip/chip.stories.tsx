import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";
import { Chip } from "./chip";

const meta = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onRemove: {
      action: "onRemove",
      description: "삭제 버튼 클릭 시 호출되는 함수",
    },
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "React",
    onRemove: undefined,
  },
};

export const Removable: Story = {
  args: {
    children: "React",
    onRemove: () => {},
  },
};

const InteractiveChip = () => {
  const [chips, setChips] = React.useState([
    "React",
    "Next.js",
    "TailwindCSS",
    "Storybook",
  ]);

  const handleRemove = (chipToRemove: string) => {
    setChips((prev) => prev.filter((chip) => chip !== chipToRemove));
  };

  return (
    <div className="flex w-100 flex-wrap gap-2 rounded-lg border p-4">
      {chips.length === 0 && (
        <p className="text-muted-foreground text-sm">
          모든 칩이 삭제되었습니다.
        </p>
      )}

      {chips.map((chip) => (
        <Chip
          key={chip}
          onRemove={() => handleRemove(chip)}
          className="animate-in fade-in zoom-in duration-200"
        >
          {chip}
        </Chip>
      ))}

      {chips.length === 0 && (
        <button
          onClick={() =>
            setChips(["React", "Next.js", "TailwindCSS", "Storybook"])
          }
          className="text-primary ml-2 text-xs underline"
        >
          다시 채우기
        </button>
      )}
    </div>
  );
};

export const Interactive: Story = {
  args: {
    children: "",
  },
  render: () => <InteractiveChip />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        code: `
          const InteractiveChip = () => {
            const [chips, setChips] = React.useState([
              "React",
              "Next.js",
              "TailwindCSS",
              "Storybook",
            ]);

            const handleRemove = (chipToRemove: string) => {
              setChips((prev) => prev.filter((chip) => chip !== chipToRemove));
            };

            return (
              <div className="flex w-full flex-wrap gap-2">
                {chips.length === 0 && (
                  <p>
                    모든 칩이 삭제되었습니다.
                  </p>
                )}

                {chips.map((chip) => (
                  <Chip
                    key={chip}
                    onRemove={() => handleRemove(chip)}
                  >
                    {chip}
                  </Chip>
                ))}

                {chips.length === 0 && (
                  <button
                    onClick={() =>
                      setChips(["React", "Next.js", "TailwindCSS", "Storybook"])
                    }
                  >
                    다시 채우기
                  </button>
                )}
              </div>
            );
          };
        `,
      },
    },
  },
};
