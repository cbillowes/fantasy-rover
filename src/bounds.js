/**
 * Extract the Cartesian plane bounds.
 * Expected format is a string of {length}{height}.
 * @param {string} input - A formatted string indicating the bounds ({length}{height}) of the Cartesian plane.
 * @returns {number[]} - The bottom right co-ordinate encapsulating the bounds.
 */
export function extract(input) {
    if (!input) throw new Error("`input` parameter is required.");

    var coord = getCoord(input);
    validate(coord, coord);
    return coord;
}

/**
 * Validate that a co-ordinate is within the bounds of the Cartesian plane.
 * @param {number[]} bounds - The restricted bounds of the Cartesian plane.
 * @param {number[]} bounds - The co-ordinate to validate against.
 * @returns {boolean} - Either a boolean indicating if the co-ordinate is within bounds.
 * @throws {Error} - If the co-ordinate is outside bounds, an error with a message indicating why is thrown.
 */
export function validate(bounds, coord) {
    if (bounds[0] != bounds[1]) throw new Error(`${bounds[0]} x ${bounds[1]} is not a square.`);
    if (bounds[0] < coord[0]) throw new Error(`${coord[0]} is not within the right bounds of ${bounds[0]}.`);
    if (bounds[1] < coord[1]) throw new Error(`${coord[1]} is not within the bottom bounds of ${bounds[1]}.`);
    if (coord[0] < 0) throw new Error(`${coord[0]} is not within the left bounds of 0.`);
    if (coord[1] < 0) throw new Error(`${coord[1]} is not within the top bounds of 0.`);
    return true;
}

function getCoord(input) {
    var halfwayMark = input.length / 2;
    var x = parseInt(input.substring(0, halfwayMark));
    var y = parseInt(input.substring(halfwayMark, input.length));
    return [x, y];
}