import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Input } from "./input";

describe("Input Component", () => {
  it("기본적인 input 속성들이 올바르게 렌더링되어야 한다", () => {
    render(<Input type="email" placeholder="test@example.com" />);

    const input = screen.getByPlaceholderText("test@example.com");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "email");
  });

  it("className prop이 전달되면 기존 스타일과 병합된다.", () => {
    render(<Input className="custom-class bg-red-500" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("bg-red-500");
    expect(input).toHaveClass("custom-class");
    expect(input).toHaveClass("rounded-md");
  });

  it("disabled 속성이 주어지면 input이 비활성화되어야 한다", () => {
    render(<Input disabled placeholder="Disabled Input" />);

    const input = screen.getByPlaceholderText("Disabled Input");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("disabled:cursor-not-allowed");
  });

  describe("Leading Icon", () => {
    it("leadingIcon이 있으면 렌더링되고 input에 왼쪽 패딩(pl-10)이 적용되어야 한다", () => {
      render(
        <Input leadingIcon={<span data-testid="leading-icon">Icon</span>} />,
      );

      const icon = screen.getByTestId("leading-icon");
      const input = screen.getByRole("textbox");

      expect(icon).toBeInTheDocument();
      expect(input).toHaveClass("pl-10");
    });

    it("disabled 상태일 때 아이콘 래퍼에 opacity-50 클래스가 적용되어야 한다", () => {
      render(
        <Input
          disabled
          leadingIcon={<span data-testid="leading-icon">Icon</span>}
        />,
      );

      const icon = screen.getByTestId("leading-icon");
      const iconWrapper = icon.parentElement;

      expect(iconWrapper).toHaveClass("opacity-50");
      expect(iconWrapper).toHaveClass("cursor-not-allowed");
    });
  });

  describe("Trailing Icon", () => {
    it("trailingIcon이 있으면 렌더링되고 input에 오른쪽 패딩(pr-10)이 적용되어야 한다", () => {
      render(
        <Input trailingIcon={<span data-testid="trailing-icon">Icon</span>} />,
      );

      const icon = screen.getByTestId("trailing-icon");
      const input = screen.getByRole("textbox");

      expect(icon).toBeInTheDocument();
      expect(input).toHaveClass("pr-10");
    });

    it("disabled 상태일 때 아이콘 래퍼에 opacity-50 클래스가 적용되어야 한다", () => {
      render(
        <Input
          disabled
          trailingIcon={<span data-testid="trailing-icon">Icon</span>}
        />,
      );

      const icon = screen.getByTestId("trailing-icon");
      const iconWrapper = icon.parentElement;

      expect(iconWrapper).toHaveClass("opacity-50");
      expect(iconWrapper).toHaveClass("cursor-not-allowed");
    });
  });

  it("aria-invalid가 true일 때 에러 스타일 관련 클래스가 있어야 한다", () => {
    render(<Input aria-invalid={true} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input.className).toContain("aria-invalid:border-negative");
  });
});
