import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import SiteHeader from "./site-header";

describe("SiteHeader", () => {
  it("names the brand inside the banner landmark", () => {
    render(<SiteHeader />);

    const banner = screen.getByRole("banner");

    expect(within(banner).getByRole("img", { name: "suite" })).toBeVisible();
  });

  it("offers beta access from the banner", () => {
    render(<SiteHeader />);

    const banner = screen.getByRole("banner");

    expect(
      within(banner).getByRole("link", { name: "Request Beta Access" }),
    ).toBeVisible();
  });
});
