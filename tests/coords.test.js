import { extract, next } from "../src/coords";

test("coords [1, 2] is extracted from 12 E", () => {
    var actual = extract("12 E");
    expect(actual).toEqual([1, 2]);
});

test("disallow coords extraction: no parameter", () => {
    expect(() => { extract() }).toThrow("`input` parameter is required.");
});

test("disallow coords extraction: could not parse", () => {
    expect(() => { extract("MR E") }).toThrow("Invalid input. Expected {x}{y} {cardinal} where x and y are numbers.");
});

test("next co-ordinate for 25 N the y axis is decreased", () => {
    var actual = next("N", [2, 5]);
    expect(actual).toEqual([2, 4]);
});

test("next co-ordinate for 06 S the y axis is increased", () => {
    var actual = next("S", [0, 6]);
    expect(actual).toEqual([0, 7]);
});

test("next co-ordinate for 20 W the x axis is decreased", () => {
    var actual = next("W", [2, 0]);
    expect(actual).toEqual([1, 0]);
});

test("next co-ordinate for 76 E the x axis is increased", () => {
    var actual = next("E", [7, 6]);
    expect(actual).toEqual([8, 6]);
});

test("disallow next coords: no parameter for cardinal", () => {
    expect(() => { next(null, [0, 0]) }).toThrow("`cardinal` parameter is required.");
});

test("disallow next coords: no parameter for coord", () => {
    expect(() => { next("N", null) }).toThrow("`coord` parameter is required.");
});
