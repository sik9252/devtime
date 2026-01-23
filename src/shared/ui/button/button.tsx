"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm typo-subtitle-s transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-primary-hover active:bg-primary-active disabled:bg-primary-disabled-dark/70 disabled:text-gray-300",
        secondary:
          "bg-primary-light-10 text-primary hover:bg-indigo/10 active:bg-indigo/10 disabled:bg-primary-disabled/40 disabled:text-gray-400",
        tertiary:
          "bg-gray-50 text-primary hover:bg-gray-100 active:bg-gray-100 disabled:bg-primary-disabled/40 disabled:text-gray-400",
      },
      size: {
        large: "h-13 px-4 py-3",
        medium: "h-12 px-4 py-3",
        small: "h-11 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  onClick,
  disabled,
  ref,
  ...props
}: ButtonProps & { ref?: React.Ref<HTMLButtonElement> }) {
  const Comp = asChild ? Slot : "button";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={handleClick}
      {...props}
    />
  );
}

export { Button, buttonVariants };
