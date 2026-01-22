import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { Label } from "../label";

interface TextareaProps extends React.ComponentProps<"textarea"> {
  label?: string;
}

function Textarea({ label, className, id, disabled, ...props }: TextareaProps) {
  const generatedId = React.useId();
  const textareaId = id || generatedId;

  return (
    <div className={"flex w-full flex-col gap-2"}>
      {label && (
        <Label htmlFor={textareaId} className={cn(disabled && "opacity-50")}>
          {label}
        </Label>
      )}

      <textarea
        id={textareaId}
        data-slot="textarea"
        disabled={disabled}
        className={cn(
          "typo-body-m md:typo-body-small-m w-full min-w-0 resize-none rounded-sm border border-gray-300 bg-transparent px-4 py-3 outline-none",
          "dark:bg-gray-300/30",
          "placeholder:typo-body-m",
          "selection:bg-primary selection:text-primary-foreground",
          "file:typo-body-m file:typo-body-small-m file:inline-flex file:h-7 file:border-0 file:bg-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus-visible:border-brand-light focus-visible:outline-none",
          "aria-invalid:border-negative aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export { Textarea };
