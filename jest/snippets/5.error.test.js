const myFunction = (input) => {
    if(typeof input !== "number") throw new Error("Invalid input")
}

test("throw error on invalid input", () => {
    expect(() => {
        myFunction("Abc")
    }).toThrow();
})