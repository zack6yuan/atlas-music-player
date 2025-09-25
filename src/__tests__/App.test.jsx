import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../components/App"

test("App renders correctly", () => {
    const { container } = render(
        <App />
    );
    expect(container).toMatchSnapshot();
});