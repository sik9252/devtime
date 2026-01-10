import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it('기본 값은 variant="primary"로 렌더링된다.', () => {
    render(<Button>클릭하기</Button>);
    expect(screen.getByRole("button", { name: "클릭하기" })).toBeInTheDocument();
  });

  it('variant="secondary"로 렌더링된다.', () => {
    render(<Button variant="secondary">클릭하기</Button>);
    expect(screen.getByRole("button", { name: "클릭하기" })).toBeInTheDocument();
  });

  it('variant="tertiary"로 렌더링된다.', () => {
    render(<Button variant="tertiary">클릭하기</Button>);
    expect(screen.getByRole("button", { name: "클릭하기" })).toBeInTheDocument();
  });

  it("disabled 속성을 넣으면 버튼이 비활성화된다.", () => {
    render(<Button disabled>비활성화</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("disabled 상태에서는 클릭 이벤트가 발생하지 않고, 커서 스타일이 변경된다.", async () => {
    const handleClick = vi.fn();

    render(
      <Button disabled onClick={handleClick}>
        클릭 금지
      </Button>
    );

    const button = screen.getByRole("button", { name: "클릭 금지" });

    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:cursor-not-allowed");

    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("disabled된 링크 버튼(a 태그)은 클릭 시 핸들러가 실행되지 않는다.", () => {
    const handleClick = vi.fn();
    render(
      <Button asChild disabled onClick={handleClick}>
        <a href="#">링크</a>
      </Button>
    );

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveClass("disabled:cursor-not-allowed");

    fireEvent.click(link);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("onClick 이벤트를 처리한다.", () => {
    let clicked = false;
    render(
      <Button
        onClick={() => {
          clicked = true;
        }}
      >
        클릭
      </Button>
    );

    screen.getByRole("button").click();
    expect(clicked).toBe(true);
  });
});

it("className prop이 전달되면 기존 스타일과 병합된다.", () => {
  render(<Button className="bg-negative custom-class">커스텀 버튼</Button>);

  const button = screen.getByRole("button");

  expect(button).toHaveClass("bg-negative");
  expect(button).toHaveClass("custom-class");
});

it("asChild prop을 사용시 정상적으로 렌더링된다.", () => {
  render(
    <Button asChild>
      <label htmlFor="file-upload">파일 업로드</label>
    </Button>
  );

  const label = screen.getByText("파일 업로드");

  expect(label.tagName).toBe("LABEL");
  expect(label).toHaveAttribute("for", "file-upload");
  expect(label).toHaveClass("bg-brand-main");
});

it("ref가 올바르게 전달된다.", () => {
  const ref = React.createRef<HTMLButtonElement>();
  render(<Button ref={ref}>Ref 버튼</Button>);

  expect(ref.current).toBeInstanceOf(HTMLButtonElement);
});

it("type 속성과 같은 기본 HTML 속성이 전달된다.", () => {
  render(
    <Button type="submit" aria-label="제출">
      제출하기
    </Button>
  );

  const button = screen.getByRole("button");

  expect(button).toHaveAttribute("type", "submit");
  expect(button).toHaveAttribute("aria-label", "제출");
});
