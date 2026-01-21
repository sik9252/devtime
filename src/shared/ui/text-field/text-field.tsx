import * as React from "react";
import { cn } from "@/shared/lib/utils";
import { Button, ButtonProps } from "../button";
import { Input } from "../input";
import { Label } from "../label";

interface TextFieldProps extends React.ComponentProps<typeof Input> {
  label?: string;
  helperText?: string;
  successMessage?: string;
  errorMessage?: string;
  buttonText?: string;
  buttonProps?: Partial<ButtonProps>;
}

function TextField({
  className,
  label,
  helperText,
  successMessage,
  errorMessage,
  id,
  buttonText,
  buttonProps,
  disabled,
  ref,
  ...props
}: TextFieldProps & { ref?: React.Ref<HTMLInputElement> }) {
  const generatedId = React.useId();
  const inputId = id || generatedId;
  const helperId = `${inputId}-helper`;
  const successId = `${inputId}-success`;
  const errorId = `${inputId}-error`;

  const isError = !!errorMessage;
  const isSuccess = !!successMessage;

  return (
    <div className={"flex w-full flex-col gap-2"}>
      {label && (
        <Label htmlFor={inputId} className={cn(disabled && "opacity-50")}>
          {label}
        </Label>
      )}

      <div className="flex w-full items-center gap-2">
        <Input
          id={inputId}
          ref={ref}
          disabled={disabled}
          aria-invalid={isError}
          aria-describedby={
            isError
              ? errorId
              : isSuccess
                ? successId
                : helperText
                  ? helperId
                  : undefined
          }
          className={cn("flex-1", className)}
          {...props}
        />

        {buttonText && (
          <Button
            type="button"
            disabled={disabled}
            variant="secondary"
            {...buttonProps}
            className={cn("shrink-0", buttonProps?.className)}
          >
            {buttonText}
          </Button>
        )}
      </div>

      {errorMessage ? (
        <p id={errorId} className="typo-caption-m text-negative">
          {errorMessage}
        </p>
      ) : successMessage ? (
        <p id={successId} className="typo-caption-m text-positive">
          {successMessage}
        </p>
      ) : helperText ? (
        <p id={helperId} className="typo-caption-m text-informative">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export { TextField };
