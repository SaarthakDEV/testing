import fetchPromise from "./promise";

test("Using async/await", async () => {
    const data = await fetchPromise();

    expect(data).toBe("peanut butter")
})