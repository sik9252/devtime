import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Logo } from "./logo";

describe("Logo 컴포넌트 테스트", () => {
  describe("렌더링 테스트", () => {
    it("기본적으로 Horizontal 로고가 렌더링된다.", () => {
      render(<Logo data-testid="logo" />);

      const svg = screen.getByTestId("logo");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("viewBox", "0 0 148 40");
    });

    it("variant='vertical'일 때 Vertical 로고가 렌더링된다.", () => {
      render(<Logo variant="vertical" data-testid="logo" />);

      const svg = screen.getByTestId("logo");
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute("viewBox", "0 0 132 100");
    });
  });

  describe("크기 설정 테스트", () => {
    it("width와 height를 함께 전달할 수 있다.", () => {
      render(<Logo width={100} height={50} data-testid="logo" />);

      const svg = screen.getByTestId("logo");
      expect(svg).toHaveAttribute("width", "100");
      expect(svg).toHaveAttribute("height", "50");
    });

    it("width만 전달할 수 있다.", () => {
      render(<Logo width={200} data-testid="logo" />);

      const svg = screen.getByTestId("logo");
      expect(svg).toHaveAttribute("width", "200");
    });

    it("height만 전달할 수 있다.", () => {
      render(<Logo height={80} data-testid="logo" />);

      const svg = screen.getByTestId("logo");
      expect(svg).toHaveAttribute("height", "80");
    });
  });

  describe("접근성 테스트", () => {
    it("aria-label과 role 속성을 전달할 수 있다.", () => {
      render(<Logo aria-label="브랜드 홈으로 이동" role="img" />);
      expect(screen.getByRole("img", { name: "브랜드 홈으로 이동" })).toBeInTheDocument();
    });
  });
});
