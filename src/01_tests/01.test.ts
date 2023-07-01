import {mult, sum} from "./01";

test("sum should be correct",() => {
    const a = 1
    const b = 2
    const c = 3

    const result = sum(a, b)

    expect(result).toBe(3)
})

test("mult should be correct",() => {
    const a = 1
    const b = 2
    const c = 3

    const result2 = mult(b, b)

    expect(result2).toBe(4)
})
