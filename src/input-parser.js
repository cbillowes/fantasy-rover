import * as coords from "./coords";
import * as cardinal from "./cardinal";
import * as command from "./command";

/**
 * Parse given input for terrain bounds on a cartesian plane, the location and direction of the rover, and its commands.
 * @param {string} input - Line break delimited. Example: 88\r\n12 E\r\nMMLMRMMRRMMLM.
 * @returns {Object} - An object containing terrain, location and commands inputs.
 */
export function parse(input) {
    if (!input) throw new Error("`input` parameter is required.");

    var split = input.split("\r\n");
    var result = {
        terrain: coords.extract(split[0]),
        coord: coords.extract(split[1]),
        cardinal: cardinal.extract(split[1]),
        commands: command.parseList(split[2])
    };
    return result;
}