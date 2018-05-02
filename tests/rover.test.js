import { move } from "../src/rover";

test("rover can move from 12 E to 33 E using MMLMRMMRRMMLM commands", () => {
    var bounds = "88";
    var location = "12 E";
    var commands = "MMLMRMMRRMMLM";
    var destination = move(bounds, location, commands);
    expect(destination).toBe("33 S");
});