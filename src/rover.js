import * as _coords from "./coords";
import * as _cardinal from "./cardinal";
import * as _command from "./command";
import * as _bounds from "./bounds";

/**
 * Move the rover from where it's stationed to its destination based on the commands supplied.
 * @param {string} terrain - Terrain bounds: The zones have been very carefully surveyed ahead of time and are deemed
 * safe for exploration within the landing terrain bounds, as represented by a single
 * cartesian coordinate. Example (5, 5) is 55.
 * @param {string} location - Its location is based on cartesian coordinate and cardinal. The rover understands the cardinal points and can face either East (E), West. Example 5,5 W is 55 W.
 * (W), North (N) or South (S) at any given time.
 * @param {string} command - Three commands: 
 * M - Move one space forward in the direction it is facing,
 * R - rotate 90 degrees to the right
 * L - rotate 90 degrees to the left
 * @return {string} These commands will be executed by the rover and its resulting location sent
 * back to HQ.
 */
export function move(terrain, location, commands) {
    var bounds = _bounds.extract(terrain);
    var coords = _coords.extract(location);
    var cardinal = _cardinal.extract(location);
    var setOfCommands = _command.parseList(commands);
    var destination;

    setOfCommands.forEach(command => {
        destination = _command.execute(bounds, coords, cardinal, command);
        cardinal = _cardinal.next(cardinal, command);
        coords = _coords.next(cardinal, coords);
        console.log(destination);
    });
    return destination;
}