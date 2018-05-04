import { parse, tick } from "../src/rover";

var input = "88\r\n12 E\r\nMMLMRMMRRMMLM";

test("parse terrain bounds point x and y", () => {
    expect(parse(input).boundsX).toEqual(8);
    expect(parse(input).boundsY).toEqual(8);
});

test("parse co-ordinate point x and y", () => {
    expect(parse(input).pointX).toEqual(1);
    expect(parse(input).pointY).toEqual(2);
});

test("parse cardinal direction", () => {
    var actual = parse(input).direction;
    expect(actual).toBe("E");
});

test("parse commands", () => {
    var actual = parse(input).commands;
    expect(actual).toEqual(["M", "M", "L", "M", "R", "M", "M", "R", "R", "M", "M", "L", "M"]);
});

test("disallow parse: no parameter for input", () => {
    expect(() => { parse() }).toThrow("`input` parameter is required.");
});

test("disallow tick: no parameter for rover", () => {
    expect(() => { tick() }).toThrow("`rover` parameter is required.");
});

test("move rover by one and return a new rover object with the first command removed", () => {
    var input = "88\r\n12 E\r\nMMLMRMMRRMMLM";
    var rover = parse(input);
    var actual = tick(rover);
    expect(actual).toEqual({
        withinBounds: true,
        boundsX: 8,
        boundsY: 8,
        pointX: 2,
        pointY: 2,
        direction: "E",
        commands: ["M", "L", "M", "R", "M", "M", "R", "R", "M", "M", "L", "M"]
    });
});

test("move rover to the end", () => {
    var input = "88\r\n12 E\r\nMMLMRMMRRMMLM";
    var rover = parse(input);
    while (rover.commands.length > 0) {
        rover = tick(rover);
    }
    expect(rover).toEqual({
        withinBounds: true,
        boundsX: 8,
        boundsY: 8,
        pointX: 3,
        pointY: 3,
        direction: "S",
        commands: []
    });
});