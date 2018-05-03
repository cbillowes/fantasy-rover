import * as _coords from "./coords";
import * as _cardinal from "./cardinal";
import * as _bounds from "./bounds";

/**
 * Move the rover to its next co-ordinate and face in a specific direction based on the command.
 * @param {number[]} bounds - The restricted bounds of the Cartesian plane.
 * @param {number[]} coord - The current co-ordinate the rover is stationed on.
 * @param {string} cardinal - The current cardinal the rover is facing.
 * @param {string} command - The command to be applied to the rover in order to move it.
 * @return {string} A string in the format {x}{y} {cardinal} to be supplied to HQ.
 */
export function execute(bounds, coord, cardinal, command) {
    if (!bounds) throw new Error("`bounds` parameter is required.");
    if (!coord) throw new Error("`coord` parameter is required.");
    if (!cardinal) throw new Error("`cardinal` parameter is required.");
    if (!command) throw new Error("`command` parameter is required.");

    cardinal = _cardinal.next(cardinal, command);
    if (command === "M") {
        coord = _coords.next(cardinal, coord);
        _bounds.validate(bounds, coord);
    }

    var next = `${coord[0]}${coord[1]} ${cardinal}`;
    return next;
}

/**
 * Parse a single list of commands into an array.
 * Valid commands include R(ight), L(eft) and M(ove).
 * @param {string} commands - Single string containing commands for movement. No separators are expected. Example: LMRMM.
 * @return {string[]} An array of commands to be iterated for the calculations of movement.
 */
export function parseList(commands) {
    if (!commands) throw new Error("`commands` parameter is required.");

    var list = commands.toUpperCase().split("");
    return list;
}