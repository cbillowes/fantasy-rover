# Fantasy Rover

A fantasy navigation system for Rovers that have been sent to Mars.

## Instruction

Mars’s surface can be thought of as a zone that is itself a two-dimensional grid of square areas.

* The zones have been very carefully surveyed ahead of time and are deemed safe for exploration
  within the landing terrain bounds, as represented by a single cartesian coordinate - for example: (5, 5).
* The rover understands the cardinal points and can face either East (E), West (W), North (N) or South (S) at any given time.
* The rover understands three commands:
  * M - Move one space forward in the direction it is facing
  * R - rotate 90 degrees to the right
  * L - rotate 90 degrees to the left
* Due to the transmission delay in communicating with the rover on Mars, you are only able to send
  the rover a single list of commands.
* These commands will be executed by the rover and its resulting location sent back to HQ. This is an
  example of the list of commands sent to the rover:

```text
88
12 E
MMLMRMMRRMML
```

1. First line describes how big the current zone is. This zone’s boundary is at the Cartesian coordinate
   of 8,8 and the zone comprises 64 blocks.
2. Second line describes the rover’s starting location and orientation.
3. This rover would start at position 1 on the horizontal axis, position 2 on the
   vertical axis and would be facing East (E). The third line is the list of
   commands (movements and rotations) to be executed by the rover.
4. As a result of following these commands, a rover starting at `12 E` in this
   zone would land up at `33 S`.

## Result

The program should take in text in the format indicated above and display the resulting rover location to the console.

## Feedback

### Coding decisions

I chose to leverage tech that I have not used before because I want to upskill:

* I used Visual Studio Code as my editor.
* I used git bash where I am used to the GUI. <= So proud.
* I used [Webpack](https://webpack.js.org/guides/getting-started/) to compile my JavaScript modules.
* I made use of the latest ES6 features.
* I chose [Jest](https://facebook.github.io/jest/docs/en/getting-started.html) for my testing framework.

I chose these because I want to upskill and because they are highly recommended in the community

### Code correctness

* I will be writing unit tests for logic.
* I will write modular components to ensure LOC per file is manageable.

### Testing strategy

* Using Jest to write unit tests
