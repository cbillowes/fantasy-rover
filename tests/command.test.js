import { execute, parseList } from "../src/command";

test("rover moves to the east", () => {
    var actual = execute([8, 8], [1, 2], "E", "M");
    expect(actual).toBe("22 E");
});

test("rover moves to the west", () => {
    var actual = execute([8, 8], [1, 2], "W", "M");
    expect(actual).toBe("02 W");
});

test("rover moves to the north", () => {
    var actual = execute([8, 8], [1, 2], "N", "M");
    expect(actual).toBe("11 N");
});

test("rover moves to the south", () => {
    var actual = execute([8, 8], [1, 2], "S", "M");
    expect(actual).toBe("13 S");
});

test("rover turns left from south", () => {
    var actual = execute([8, 8], [1, 2], "S", "L");
    expect(actual).toBe("12 E");
});

test("rover turns left from north", () => {
    var actual = execute([8, 8], [1, 2], "N", "L");
    expect(actual).toBe("12 W");
});

test("rover turns right from east", () => {
    var actual = execute([8, 8], [1, 2], "E", "R");
    expect(actual).toBe("12 S");
});

test("disallow execute: no parameter for bounds", () => {
    expect(() => { execute(null, [0, 0], "N", "M") }).toThrow("`bounds` parameter is required.");
});

test("disallow execute: no parameter for coord", () => {
    expect(() => { execute([8, 8], null, "N", "L") }).toThrow("`coord` parameter is required.");
});

test("disallow execute: no parameter for cardinal", () => {
    expect(() => { execute([8, 8], [0, 0], null, "L") }).toThrow("`cardinal` parameter is required.");
});

test("disallow execute: no parameter for command", () => {
    expect(() => { execute([8, 8], [0, 0], "N", null) }).toThrow("`command` parameter is required.");
});

test("parse list of commands", () => {
    var actual = parseList("LMRMM");
    expect(actual).toEqual(["L", "M", "R", "M", "M"]);
});

test("parse list of commands does not validate", () => {
    var actual = parseList("XYZ");
    expect(actual).toEqual(["X", "Y", "Z"]);
});

test("parse list of commands converts commands to uppercase", () => {
    var actual = parseList("xyz");
    expect(actual).toEqual(["X", "Y", "Z"]);
});

test("disallow parseList: no parameter for commands", () => {
    expect(() => { parseList() }).toThrow("`commands` parameter is required.");
});
