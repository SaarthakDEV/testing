import fetchPromise from "./promise";

test("promise is resolved", () => {
        return expect(fetchPromise()).resolves.toBe("peanut butter");
})


test("promise is rejected", () => {
        return expect(fetchPromise()).rejects.toBe("err");
})