import { parse } from "../src/input-parser";

var input = "88\r\n12 E\r\nMMLMRMMRRMMLM";

test("parse terrain", () => {
    var actual = parse(input).terrain;
    expect(actual).toEqual([8, 8]);
});

test("parse coord", () => {
    var actual = parse(input).coord;
    expect(actual).toEqual([1, 2]);
});

test("parse cardinal", () => {
    var actual = parse(input).cardinal;
    console.log(input);
    console.log(actual);
    expect(actual).toBe("E");
});

test("parse commands", () => {
    var actual = parse(input).commands;
    expect(actual).toEqual(["M", "M", "L", "M", "R", "M", "M", "R", "R", "M", "M", "L", "M"]);
});

test("disallow parse: no parameter for input", () => {
    expect(() => { parse() }).toThrow("`input` parameter is required.");
});