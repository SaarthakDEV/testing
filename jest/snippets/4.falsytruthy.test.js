test("null is falsy", () => {
    const n = null;
    expect(n).toBeFalsy();
})


test("1 is truthy", () => {
    const n = 1;
    expect(n).toBeTruthy();
})