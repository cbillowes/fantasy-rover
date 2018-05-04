import * as _rover from "./rover";

var input = "88\r\n12 E\r\nMMLMRMMRRMMLM";
var canvas = document.getElementById("cartesian-plane");
var ctx = canvas.getContext("2d");
var cellSize = 50;

export function start() {
    var rover = _rover.parse(input);
    var width = rover.boundsX * cellSize;
    var height = rover.boundsY * cellSize;
    display(input);
    drawBackground(width, height);
    drawGrid(width, height);
    drawRover(rover);

    while (rover.commands.length > 0) {
        rover = _rover.tick(rover);
        drawRover(rover);
    }
}

function drawRover(rover) {
    var x = (rover.pointX * cellSize) + 5;
    var y = (rover.pointY * cellSize) + 5;
    var size = cellSize - 10;
    ctx.fillStyle = "#3498db";
    ctx.fillRect(x, y, size, size);
    log(rover.pointX, rover.pointY, rover.direction);

    if (rover.direction === "N" || rover.direction === "S") {
        ctx.moveTo(x + (size / 2), y);
        ctx.lineTo(x + (size / 2), y + size);
    }

    if (rover.direction === "E" || rover.direction === "W") {
        ctx.moveTo(x, y + (size / 2));
        ctx.lineTo(x + size, y + (size / 2));
    }

    ctx.stroke();
}

function drawGrid(width, height) {
    for (var x = 0; x < width; x += cellSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
    }

    for (var y = 0; y < width; y += cellSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(height, y);
    }

    ctx.stroke();
}

function drawBackground(width, height) {
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "#101010";
    ctx.fillRect(0, 0, width, height);

    ctx.beginPath();
    ctx.moveTo(width, 0);
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);

    ctx.strokeStyle = "#303030";
    ctx.stroke();
}

function display(input) {
    var div = document.getElementById("input");
    div.innerText = input;
}

function log(pointX, pointY, direction) {
    var moves = document.getElementById("moves");
    var div = document.createElement("div");
    div.innerText = `(${pointX}, ${pointY}) ${direction}`;
    moves.appendChild(div);
}