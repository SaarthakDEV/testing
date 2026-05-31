import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Application from "./Application";

describe.skip("getByRole", () => {
    test("renders correctly", () => {
        render(<Application />);
        const ele = screen.getByRole("textbox-1")
        expect(ele).toBeInTheDocument();


        const jobLocationElements = screen.getByRole("combobox")
        expect(jobLocationElements).toBeInTheDocument();

        const submitButton = screen.getByRole("button")
        expect(submitButton).toBeInTheDocument();

        const pageHeading = screen.getByRole("heading", {
            level: 1
        })
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole("heading", {
            level: 2,
            name: "Section 1"
        })
        expect(sectionHeading).toBeInTheDocument();
    })
})

describe.skip("getByLabel", () => {
    test("renders correctly", () => {
        render(<Application />)
        const nameElement2 = screen.getByLabelText("Name", {
            selector: "input"
        })
        expect(nameElement2).toBeInTheDocument();

        const termsElement = screen.getByLabelText("I agree to the terms and conditions")
        expect(termsElement).toBeInTheDocument();
    })
})

describe.skip("getByPlaceholderText", () => {
    test("renders correctly", () => {
        render(<Application />)
        const nameElement3 = screen.getByPlaceholderText("Fullname");
        expect(nameElement3).toBeInTheDocument();
    })
})

describe.skip("getByText", () => {
    test("renders correctly", () => {
        render(<Application />)
        const paragraphElement = screen.getByText("All fields are mandatory");
        expect(paragraphElement).toBeInTheDocument();
    })
})


describe.skip("getByDisplayValue", () => {
    test("renders correctly", () => {
        render(<Application />)
        const nameElement4 = screen.getByDisplayValue("Saarthak");
        expect(nameElement4).toBeInTheDocument();
    })
})

describe.skip("getByAltText", () => {
    test("renders correctly", () => {
        render(<Application />)
        const imageElement = screen.getByAltText("a person with a laptop");
        expect(imageElement).toBeInTheDocument();
    })
})

describe.skip("getByTitle", () => {
    test("renders correctly", () => {
        render(<Application />)
        const closeElement = screen.getByTitle("close");
        expect(closeElement).toBeInTheDocument();
    })
})
describe("getByTestId", () => {
    test("renders correctly", () => {
        render(<Application />)
        const customElement = screen.getByTestId("custom-element");
        expect(customElement).toBeInTheDocument();
    })
})