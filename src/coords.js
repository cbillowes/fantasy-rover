/**
 * Extract co-ordinates from a string to an array of numeric values of x and y.
 * Expected format is a string of {x}{y} {cardinal}. Example: 12 E.
 * {x}{y} is converted to an array of numeric values as [{x}, {y}] to be used in calculations
 * for the movement of the rover.
 * @param {string} input - A formatted string ({x}{y} {cardinal}) with unformatted co-ordinates and a cardinal.
 * @return {number[]} A numeric array of [{x}, {y}].
 */
export function extract(input) {
    if (!input) throw new Error("`input` parameter is required.");

    var coord = input.split(" ")[0];
    if (!isNumeric(coord)) throw new Error("Invalid input. Expected {x}{y} {cardinal} where x and y are numbers.");
    var nextCoord = [
        parseInt(coord[0]),
        parseInt(coord[1])
    ];
    return nextCoord;
}

/**
 * The next co-ordinate to move the rover to.
 * @param {string} cardinal - The cardinal value of N, E, S, or W where the rover is facing.
 * @param {number[]} coord - The co-ordinate of [{x}, {y}] where the rover is stationed on.
 * @return {number[]} The next co-ordinate of [{x}, {y}] where the rover will move to.
 */
export function next(cardinal, coord) {
    if (!cardinal) throw new Error("`cardinal` parameter is required.");
    if (!coord) throw new Error("`coord` parameter is required.");

    var x = coord[0];
    var y = coord[1];
    var cardinals = {
        "N": [0, -1],
        "E": [1, 0],
        "S": [0, 1],
        "W": [-1, 0],
    };
    var delta = cardinals[cardinal];
    var next = [x + delta[0], y + delta[1]];
    return next;
}

function isNumeric(input) {
    return parseInt(input) >= 0;
}