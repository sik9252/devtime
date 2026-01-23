import * as React from "react";
import { X } from "lucide-react";

import { cn } from "@/shared/lib/utils";
import { Badge } from "../badge";

interface ChipProps extends React.ComponentProps<typeof Badge> {
  children: React.ReactNode;
  onRemove?: () => void;
}

const Chip = ({ children, onRemove, className, ...props }: ChipProps) => {
  return (
    <Badge
      className={cn(
        "typo-body-small-s text-brand-main bg-brand-light-10 border-brand-main flex items-center gap-2 rounded-sm border p-3",
        className,
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className={cn(
            "ring-offset-background hover:text-brand-hover text-primary",
            "focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            "focus:outline-none",
          )}
        >
          <X className="size-5" />
          <span className="sr-only">Remove</span>
        </button>
      )}
    </Badge>
  );
};

export { Chip };
