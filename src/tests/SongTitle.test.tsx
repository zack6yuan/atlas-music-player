import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import SongTitle from "../components/SongTitle";

test("Song Title renders correctly", () => {
    const { container } = render(
        <SongTitle title="Painted in Blue"/>
    );
    expect(container).toMatchSnapshot();
})