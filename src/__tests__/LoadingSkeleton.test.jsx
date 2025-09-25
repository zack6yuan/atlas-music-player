import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import LoadingSkeleton from "../components/LoadingSkeleton"

test("Loading Skeleton renders correctly", () => {
    const { container } = render(
        <LoadingSkeleton />
    );
    expect(container).toMatchSnapshot();
});