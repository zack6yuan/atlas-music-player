import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import MusicPlayer from "../components/MusicPlayer"

test("Music Player renders correctly", () => {
    const { container } = render(
        <MusicPlayer />
    );
    expect(container).toMatchSnapshot();
});