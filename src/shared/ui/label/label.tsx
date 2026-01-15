"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/shared/lib/utils";

const Label = ({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) => {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        "typo-body-small-m flex items-center gap-2 aria-disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
};

export { Label };
