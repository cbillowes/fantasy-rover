/**
 * Extract cardinal from a string.
 * Expected format is a string of {x}{y} {cardinal}. Example: 12 E.
 * {E} is extracted as a string to be used in calculations
 * for the direction of the rover.
 * @param {string} input - A formatted string ({x}{y} {cardinal}) with unformatted co-ordinates and a cardinal.
 * @return {string} A string of a single cardinal such as E.
 */
export function extract(input) {
    if (!input) throw new Error("`input` parameter is required.");

    var cardinal = input.toUpperCase().substr(input.length - 1, 1);
    if (!isValid(cardinal)) throw new Error("Invalid input. Expect format {x}{y} {cardinal} where cardinal is N, S, E or W.");
    return cardinal;
}

/**
 * The next cardinal to move the rover in.
 * @param {string} cardinal - The cardinal value of N, E, S, or W where the rover is facing.
 * @param {command} command - A single command to move on space (M), rotate 90 degrees to the right (R) and 90 degrees to the left (L).
 * @return {string} The next cardinal is the direction the rover will be moving in.
 */
export function next(cardinal, command) {
    if (!cardinal) throw new Error("`cardinal` parameter is required.");
    if (!command) throw new Error("`command` parameter is required.");

    if (command === "M") return cardinal;
    var cardinals = {
        "N": ["W", "E"],
        "E": ["N", "S"],
        "S": ["E", "W"],
        "W": ["S", "N"],
    }
    var current = cardinals[cardinal];
    var next = nextCardinal(current, command);
    return next;
}

function nextCardinal(cardinal, command) {
    switch (command) {
        case "L":
            return cardinal[0];
        case "R":
            return cardinal[1];
        default:
            throw new Error(`Invalid command provided. Expected L or R but got ${command}.`);
    }
}

function isValid(cardinal) {
    return cardinal === "N" || cardinal === "S" || cardinal === "E" || cardinal === "W";
}