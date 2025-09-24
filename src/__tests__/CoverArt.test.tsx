import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import CoverArt from "../components/CoverArt";

test("Cover Art renders correctly", () => {
    const { container } = render(
        <CoverArt cover="https://utfs.io/f/E9fJnaKtTy1bOclGsk1hB7xMLwUVFDiXypZukQrcnYbgdEv6"/>
    );
    expect(container).toMatchSnapshot();
})