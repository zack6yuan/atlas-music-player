import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import PlayControls from "../components/PlayControls"

test("Play Controls render correctly", () => {
    const { container } = render(
        <PlayControls />
    );
    expect(container).toMatchSnapshot();
});