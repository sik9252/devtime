import * as React from "react";
import { cn } from "@/shared/lib/utils";

interface InputProps extends React.ComponentProps<"input"> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const Input = ({
  className,
  type,
  leadingIcon,
  trailingIcon,
  disabled,
  ...props
}: InputProps) => {
  return (
    <div className="relative flex w-full items-center">
      {leadingIcon && (
        <div
          className={cn(
            "typo-body-small-m absolute left-3 flex items-center justify-center transition-opacity",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {leadingIcon}
        </div>
      )}
      <input
        type={type}
        data-slot="input"
        disabled={disabled}
        className={cn(
          "typo-body-m md:typo-body-small-m h-11 w-full min-w-0 rounded-sm border border-gray-300 bg-transparent px-3 py-4 outline-none",
          "dark:bg-gray-300/30",
          "placeholder:typo-body-m",
          "selection:bg-primary selection:text-primary-foreground",
          "file:typo-body-m file:typo-body-small-m file:inline-flex file:h-7 file:border-0 file:bg-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:border-brand-light focus-visible:outline-none",
          "aria-invalid:border-negative aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          leadingIcon && "pl-10",
          trailingIcon && "pr-10",
          className,
        )}
        {...props}
      />
      {trailingIcon && (
        <div
          className={cn(
            "typo-body-small-m absolute right-3 flex items-center justify-center transition-opacity",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          {trailingIcon}
        </div>
      )}
    </div>
  );
};

export { Input };
