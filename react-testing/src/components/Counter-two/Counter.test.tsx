import { logRoles, render, screen } from "@testing-library/react";
import { describe, expect, test, vitest } from "vitest";
import { CounterTwo } from "./Counter";
import user from "@testing-library/user-event";

describe("mocking", () => {
    test("renders correctly", () => {
        render(<CounterTwo count={0}/>)
        const countElement = screen.getByRole("paragraph")
        expect(countElement).toHaveTextContent("0")
    })

    test("handlers are called", async () => {
        user.setup();
        const incrementHandler = vitest.fn()
        const decrementHandler = vitest.fn()
        render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={decrementHandler}/>)

        const incrementButton = screen.getByRole("button", { name: "Increment"})
        const decrementButton = screen.getByRole("button", { name: "Decrement"})

        await user.click(incrementButton)
        await user.click(decrementButton)

        expect(incrementHandler).toHaveBeenCalledTimes(1)
        expect(decrementHandler).toHaveBeenCalledTimes(1)
    })
})