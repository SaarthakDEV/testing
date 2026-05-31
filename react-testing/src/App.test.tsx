import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";

const name = "Saarthak"

describe.skip("Component", () => {
  test("renders hello world text", () => {
    render(<App name={name}/>);

    const ele = screen.getByText(/Hello/i);

    expect(ele).toBeInTheDocument();
  });
});

test.skip("Greet render with a name", () => {
    render(<App name={name} />)
    const ele = screen.getByText(`Hello ${name}`)
    expect(ele).toBeInTheDocument();
})