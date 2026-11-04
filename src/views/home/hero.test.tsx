import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import Hero from "./hero";

describe("Hero", () => {
  it("names the page with a level-one heading", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "A super solution for your business.",
      }),
    ).toBeVisible();
  });

  it("offers beta access", () => {
    render(<Hero />);

    expect(
      screen.getByRole("link", { name: "Request Beta Access" }),
    ).toBeVisible();
  });

  it("describes the product photo", () => {
    render(<Hero />);

    expect(
      screen.getByRole("img", {
        name: "A phone showing a bar chart of leads climbing",
      }),
    ).toBeVisible();
  });

  it("reads each stat label before its value", () => {
    render(<Hero />);

    const readingOrder = [
      ...screen.getAllByRole("term"),
      ...screen.getAllByRole("definition"),
    ]
      .sort((a, b) =>
        a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
          ? -1
          : 1,
      )
      .map((element) => element.textContent);

    expect(readingOrder).toEqual([
      "Companies",
      "2K+",
      "Languages",
      "8",
      "Leads",
      "1.2M",
    ]);
  });
});
