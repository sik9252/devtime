"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxAddNewItem,
} from "./combobox";
import { useComboboxState } from "./use-combobox-state";
import { Label } from "@/shared/ui/label";
import { highlightMatch } from "@/shared/lib";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-70">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = ["AAABC", "AABBYF", "AACDDFG", "AAGHR", "AAATHCHYYU"];

function DefaultCombobox() {
  const { inputValue, comboboxProps } = useComboboxState();

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-2">
      <Label>Autocomplete Label</Label>
      <Combobox {...comboboxProps}>
        <ComboboxInput placeholder="Placeholder" showClear />
        <ComboboxContent>
          <ComboboxList>
            {filteredItems.map((item) => (
              <ComboboxItem key={item} value={item} showIndicator={false}>
                {highlightMatch(item, inputValue)}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const Default: Story = {
  render: () => <DefaultCombobox />,
};

function TypedCombobox() {
  const { inputValue, comboboxProps } = useComboboxState({
    defaultInputValue: "AA",
  });

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-2">
      <Label>Autocomplete Label</Label>
      <Combobox {...comboboxProps}>
        <ComboboxInput placeholder="Placeholder" showClear />
        <ComboboxContent>
          <ComboboxList>
            {filteredItems.map((item) => (
              <ComboboxItem key={item} value={item} showIndicator={false}>
                {highlightMatch(item, inputValue)}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const Typed: Story = {
  render: () => <TypedCombobox />,
};

function SelectedCombobox() {
  const initialItem = items[0];

  const { inputValue, comboboxProps } = useComboboxState({
    defaultValue: initialItem,
    defaultInputValue: initialItem,
  });

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase()),
  );

  return (
    <div className="flex flex-col gap-2">
      <Label>Autocomplete Label</Label>
      <Combobox {...comboboxProps}>
        <ComboboxInput placeholder="Placeholder" showClear />
        <ComboboxContent>
          <ComboboxList>
            {filteredItems.map((item) => (
              <ComboboxItem key={item} value={item} showIndicator={false}>
                {highlightMatch(item, inputValue)}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const Selected: Story = {
  render: () => <SelectedCombobox />,
};

function ComboboxWithAddNewButton() {
  const { inputValue, comboboxProps, setValue, setInputValue } = useComboboxState({
    defaultInputValue: "ABCDEFG",
  });
  const [customItems, setCustomItems] = useState<string[]>(items);

  const filteredItems = customItems.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const exactMatch = customItems.some((item) => item.toLowerCase() === inputValue.toLowerCase());
  const showAddNew = inputValue.trim() && !exactMatch;

  const handleAddNew = () => {
    if (inputValue.trim() && !exactMatch) {
      const newItem = inputValue.trim();
      setCustomItems([...customItems, newItem]);
      setValue(newItem);
      setInputValue(newItem);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <Label>Autocomplete Label</Label>
      <Combobox {...comboboxProps}>
        <ComboboxInput placeholder="Placeholder" showClear />
        <ComboboxContent>
          {showAddNew && <ComboboxAddNewItem onClick={handleAddNew} />}
          <ComboboxList>
            {filteredItems.map((item) => (
              <ComboboxItem key={item} value={item} showIndicator={false}>
                {highlightMatch(item, inputValue)}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const WithAddNewButton: Story = {
  render: () => <ComboboxWithAddNewButton />,
};

function ComboboxDisabled() {
  return (
    <div className="flex flex-col gap-2">
      <Label>Autocomplete Label</Label>
      <Combobox disabled>
        <ComboboxInput placeholder="Placeholder" disabled />
        <ComboboxContent>
          <ComboboxList>
            {items.map((item) => (
              <ComboboxItem key={item} value={item} showIndicator={false}>
                {item}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export const Disabled: Story = {
  render: () => <ComboboxDisabled />,
};
