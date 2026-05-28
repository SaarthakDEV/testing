import { describe, expect, it } from "vitest"
import { formatNumber } from "."


describe("formatNumber", () => {
    it("returns number in form of K", () => {
        expect(formatNumber(500)).toBe(500)
    })
})


describe("formatNumber", () => {
    it("returns number in form of K", () => {
        expect(formatNumber(2500)).toBe("2.5K")
    })
})