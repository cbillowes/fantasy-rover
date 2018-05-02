import { extract, next } from "../src/cardinal";

test("cardinal E is extracted from 12 E", () => {
    var actual = extract("12 E");
    expect(actual).toBe("E");
});

test("cardinal is coverted to uppercase", () => {
    var actual = extract("12 s");
    expect(actual).toBe("S");
});

test("disallow cardinal extraction: no parameter", () => {
    expect(() => { extract() }).toThrow("`input` parameter is required.");
});

test("disallow cardinal extraction: could not parse", () => {
    expect(() => { extract("12 M") }).toThrow("Invalid input. Expect format {x}{y} {cardinal} where cardinal is N, S, E or W.");
});

test("next cardinal for E(ast) L(eft) is N(orth)", () => {
    var actual = next("E", "L");
    expect(actual).toBe("N");
});

test("next cardinal for N(orth) L(eft) is W(est)", () => {
    var actual = next("N", "L");
    expect(actual).toBe("W");
});

test("next cardinal for W(est) L(eft) is S(outh)", () => {
    var actual = next("W", "L");
    expect(actual).toBe("S");
});

test("next cardinal for S(outh) L(eft) is E(ast)", () => {
    var actual = next("S", "L");
    expect(actual).toBe("E");
});

test("next cardinal for E(ast) R(ight) S(outh)", () => {
    var actual = next("E", "R");
    expect(actual).toBe("S");
});

test("next cardinal for N(orth) R(ight) E(ast)", () => {
    var actual = next("N", "R");
    expect(actual).toBe("E");
});

test("next cardinal for W(est) R(ight) (N)orth", () => {
    var actual = next("W", "R");
    expect(actual).toBe("N");
});

test("next cardinal for S(outh) R(ight) is W(est)", () => {
    var actual = next("S", "R");
    expect(actual).toBe("W");
});

test("disallow next coords: no parameter for cardinal", () => {
    expect(() => { next(null, "M") }).toThrow("`cardinal` parameter is required.");
});

test("disallow next coords: no parameter for command", () => {
    expect(() => { next("N", null) }).toThrow("`command` parameter is required.");
});
