import sum from "./sum";

const testFunction = () => {
    expect(sum(1,2)).toBe(3)
}

test("add 1+2 to give 3", testFunction)
