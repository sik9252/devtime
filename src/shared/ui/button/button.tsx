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
          "bg-brand-main text-white hover:bg-brand-hover active:bg-brand-active disabled:bg-brand-disabled-dark/70 disabled:text-gray-300",
        secondary:
          "bg-brand-light-10 text-brand-main hover:bg-indigo/10 active:bg-indigo/10 disabled:bg-brand-disabled/40 disabled:text-gray-400",
        tertiary:
          "bg-gray-50 text-brand-main hover:bg-gray-100 active:bg-gray-100 disabled:bg-brand-disabled/40 disabled:text-gray-400",
      },
      size: {
        default: "h-12 px-4 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
