import { useState, useRef, useCallback } from "react";

interface UseComboboxStateOptions {
  defaultInputValue?: string;
  defaultValue?: string | null;
  defaultOpen?: boolean;
}

/**
 * Combobox 상태 관리 훅
 * - 닫을 때 입력값 유지
 */
export function useComboboxState(options: UseComboboxStateOptions = {}) {
  const { defaultInputValue = "", defaultValue = null, defaultOpen = false } = options;

  const [value, setValue] = useState<string | null>(defaultValue);
  const [inputValue, setInputValue] = useState(defaultInputValue);
  const [open, setOpen] = useState(defaultOpen);
  const isClosingRef = useRef(false);

  const handleOpenChange = useCallback((isOpen: boolean) => {
    if (!isOpen) {
      isClosingRef.current = true;
    }
    setOpen(isOpen);
  }, []);

  const handleInputValueChange = useCallback((newValue: string) => {
    if (isClosingRef.current && newValue === "") {
      isClosingRef.current = false;
      return;
    }
    isClosingRef.current = false;
    setInputValue(newValue);
  }, []);

  return {
    value,
    inputValue,
    open,
    comboboxProps: {
      value,
      onValueChange: setValue,
      inputValue,
      onInputValueChange: handleInputValueChange,
      open,
      onOpenChange: handleOpenChange,
    },
    setValue,
    setInputValue,
    setOpen,
  };
}
