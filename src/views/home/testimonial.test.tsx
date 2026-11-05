import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import Testimonial from "./testimonial";

describe("Testimonial", () => {
  it("is a region named by its heading", () => {
    render(<Testimonial />);

    expect(
      screen.getByRole("region", { name: "It just works." }),
    ).toBeInTheDocument();
  });

  it("attributes the quote to Jeremy Robinson", () => {
    render(<Testimonial />);

    const figure = screen.getByRole("figure");

    expect(within(figure).getByRole("blockquote")).toHaveTextContent(
      "an all-in-one solution that handles many of the tasks",
    );
    expect(figure.querySelector("figcaption")).toHaveTextContent(
      "Jeremy RobinsonCMO, Fylo",
    );
  });

  it("keeps the portrait out of the accessibility tree", () => {
    render(<Testimonial />);

    expect(screen.queryAllByRole("img")).toHaveLength(0);
  });
});
