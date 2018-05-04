import * as _coords from "./coords";
import * as _cardinal from "./cardinal";
import * as _command from "./command";
import * as _bounds from "./bounds";

/**
 * Parse given input for terrain bounds on a cartesian plane, the location and direction of the rover, and its commands.
 * @param {string} input - Line break delimited. Example: 88\r\n12 E\r\nMMLMRMMRRMMLM.
 * @returns {Object} - An object containing the terrain bounds, point x and y coord, cardinal direction and input commands.
 */
export function parse(input) {
    if (!input) throw new Error("`input` parameter is required.");

    var split = input.split("\r\n");
    var bounds = _coords.extract(split[0]);
    var point = _coords.extract(split[1]);
    var result = {
        boundsX: bounds[0],
        boundsY: bounds[1],
        pointX: point[0],
        pointY: point[1],
        direction: _cardinal.extract(split[1]),
        commands: _command.parseList(split[2])
    };
    return result;
}

/*
 * Move rover by one space.
 * @param {Object} rover - A parsed rover object.
 * @returns {Object} - A new rover object moved one space.
 */
export function tick(rover) {
    if (!rover) throw new Error("`rover` parameter is required.");

    var command = rover.commands.shift();
    var bounds = [rover.boundsX, rover.boundsY];
    var points = [rover.pointX, rover.pointY];
    var coord = _coords.next(rover.direction, points);

    var result = {
        withinBounds: _bounds.validate(bounds, coord),
        boundsX: rover.boundsX,
        boundsY: rover.boundsY,
        pointX: coord[0],
        pointY: coord[1],
        direction: _cardinal.next(rover.direction, command),
        commands: rover.commands
    };
    return result;
}