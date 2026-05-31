import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import { MuiMode } from "./MuiMode"
import { AppProviders } from "../../providers/AppProviders"

describe("providers testing", () => {
    test("renders tesxt correctly", () => {
        render(<MuiMode />)
        const headingElement = screen.getByRole("heading")
        expect(headingElement).toHaveTextContent("light mode");
    })
})