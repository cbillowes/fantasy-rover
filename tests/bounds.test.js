import { extract, validate } from "../src/bounds";

test("boundary coord [8, 8] is extracted from 88", () => {
    var actual = extract("88");
    expect(actual).toEqual([8, 8]);
});

test("boundary coord [20, 20] is extracted from 2020", () => {
    var actual = extract("2020");
    expect(actual).toEqual([20, 20]);
});

test("boundary coord [300, 300] is extracted from 300300", () => {
    var actual = extract("300300");
    expect(actual).toEqual([300, 300]);
});

test("disallow extract: no parameter for input", () => {
    expect(() => { extract() }).toThrow("`input` parameter is required.");
});

test("disallow extract: rectangular plane", () => {
    expect(() => { extract("59") }).toThrow(`5 x 9 is not a square.`);
});

test("allow validate: scenario 1 - [8, 8], [8, 7]", () => {
    var actual = validate([8, 8], [8, 7]);
    expect(actual).toEqual(true);
});

test("allow validate: scenario 2 - [8, 8], [7, 8]", () => {
    var actual = validate([8, 8], [7, 8]);
    expect(actual).toEqual(true);
});

test("allow validate: scenario 3 - [8, 8], [0, 8]", () => {
    var actual = validate([8, 8], [0, 8]);
    expect(actual).toEqual(true);
});

test("allow validate: scenario 4 - [8, 8], [8, 0]", () => {
    var actual = validate([8, 8], [8, 0]);
    expect(actual).toEqual(true);
});

test("disallow validate: outside right bounds", () => {
    expect(() => { validate([8, 8], [9, 8]) }).toThrow(`9 is not within the right bounds of 8.`);
});

test("disallow validate: outside bottom bounds", () => {
    expect(() => { validate([8, 8], [8, 9]) }).toThrow(`9 is not within the bottom bounds of 8.`);
});

test("disallow validate: outside left bounds", () => {
    expect(() => { validate([8, 8], [-1, 8]) }).toThrow(`-1 is not within the left bounds of 0.`);
});

test("disallow validate: outside top bounds", () => {
    expect(() => { validate([8, 8], [8, -1]) }).toThrow(`-1 is not within the top bounds of 0.`);
});