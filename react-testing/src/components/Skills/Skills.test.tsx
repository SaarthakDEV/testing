import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Skills } from "./Skills";

describe.skip("getAllByRole", () => {
    const skills = ["HTML", "CSS", "JavaScript"]
    test("renders correctly", () => {
        render(<Skills skills={skills}/>)
        const listItemElements = screen.getAllByRole("listitem")
        expect(listItemElements).toHaveLength(3)
    })
})


describe.skip("queryBy", () => {
    const skills = ["HTML", "CSS", "JavaScript"]
    test("renders login button", () => {
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole("button", {
            name: "Login"
        })
        expect(loginButton).toBeInTheDocument();
    })

    test("start learning button is not rendered", () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole("button", {
            name: "Start learning"
        })
        expect(startLearningButton).not.toBeInTheDocument();
    })
})


describe("findBy",() => {
        const skills = ["HTML", "CSS", "JavaScript"]
    test("Start learning button is eventually displayed", async () => {
        render(<Skills skills={skills} />)
        const startLearningButton = await screen.findByRole("button", {
            name: "Start learning"
        }, {
            timeout: 2000
        })

        expect(startLearningButton).toBeInTheDocument();

        await waitFor(() => {
        const startLearningButtonElements = screen.getAllByRole("button", {
            name: "Start learning"
        })

        expect(startLearningButtonElements).toHaveLength(2);
    }, { timeout: 3000 })
    })
})