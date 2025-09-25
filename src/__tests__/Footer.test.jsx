import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import Footer from "../components/Footer"

test("Footer renders correctly", () => {
    const { container } = render(
        <Footer />
    );
    expect(container).toMatchSnapshot();
});
test("Theme changes when button is clicked", () => {
    const { container } = render(
        <Footer />
    );
    const button = screen.getAllByAltText("theme-toggler")
    fireEvent.click(button[0])
    expect(container).toMatchSnapshot();
    fireEvent.click(button[0])
    expect(container).toMatchSnapshot();
})