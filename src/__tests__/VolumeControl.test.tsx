import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import VolumeControls from "../components/VolumeControls"

test("Volume Controls render correctly", () => {
    const { container } = render(
        <VolumeControls />
    );
    expect(container).toMatchSnapshot();
});