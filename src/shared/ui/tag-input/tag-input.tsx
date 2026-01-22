import { useState } from "react";
import { Input } from "@/shared/ui/input";
import { cn } from "@/shared/lib/utils";

interface TagInputProps extends Omit<
  React.ComponentProps<typeof Input>,
  "onChange"
> {
  onAddTag: (tag: string) => void;
  buttonText?: React.ReactNode;
  errorMessage?: string;
  helperText?: string;
}

const TagInput = ({
  onAddTag,
  buttonText = "추가",
  className,
  defaultValue,
  errorMessage,
  helperText,
  ...props
}: TagInputProps) => {
  const [inputValue, setInputValue] = useState<string>(
    (defaultValue as string) || "",
  );

  const handleAdd = () => {
    if (!inputValue.trim()) return;
    onAddTag(inputValue.trim());
    setInputValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      e.preventDefault();
      handleAdd();
    }
  };

  const isActive = inputValue.length > 0;
  const isError = !!errorMessage;

  return (
    <div className="flex w-full flex-col gap-1.5">
      <Input
        {...props}
        value={inputValue}
        aria-invalid={isError}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className={cn("px-6 py-4 pr-17", className)}
        trailingIcon={
          <button
            type="button"
            onClick={handleAdd}
            disabled={!isActive}
            className={cn(
              "typo-body-b pr-4 transition-colors",
              isActive
                ? "text-brand-main hover:text-brand-dark cursor-pointer"
                : "cursor-not-allowed text-gray-400",
            )}
          >
            {buttonText}
          </button>
        }
      />

      {errorMessage ? (
        <p className="typo-body-small-m text-negative animate-shake">
          {errorMessage}
        </p>
      ) : helperText ? (
        <p className="typo-body-small-m text-brand-main">{helperText}</p>
      ) : null}
    </div>
  );
};

export { TagInput };
