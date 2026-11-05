import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import SiteFooter from "./site-footer";

describe("SiteFooter", () => {
  it("is the page's one footer landmark, with the brand and the signature", () => {
    render(<SiteFooter />);

    const footer = screen.getByRole("contentinfo");

    expect(within(footer).getByRole("img", { name: "suite" })).toBeVisible();
    expect(footer).toHaveTextContent("Copyright - Suite");
    expect(
      within(footer).getByRole("link", { name: "Abdelrhman Abdelaal" }),
    ).toBeInTheDocument();
  });

  it.each([
    ["Facebook", "https://www.facebook.com/"],
    ["Twitter", "https://twitter.com/"],
    ["Instagram", "https://www.instagram.com/"],
  ])("links to %s in a new tab", (network, href) => {
    render(<SiteFooter />);

    const link = screen.getByRole("link", { name: network });

    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});
