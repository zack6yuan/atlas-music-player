import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import PlayListItem from "../components/PlayListItem"

test("Play List Item renders correctly", () => {
    const { container } = render(
        <PlayListItem />
    );
    expect(container).toMatchSnapshot();
});