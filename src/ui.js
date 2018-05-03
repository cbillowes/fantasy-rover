import * as parser from "./input-parser";

var input = "88\r\n12 E\r\nMMLMRMMRRMMLM";
var canvas = document.getElementById("cartesian-plane");
var ctx = canvas.getContext("2d");
var cellSize = 50;

export function start() {
    var rover = parser.parse(input);
    var width = rover.terrain[0] * cellSize;
    var height = rover.terrain[1] * cellSize;

    display(input);
    drawBackground(width, height);
    drawGrid(width, height);

    log(rover);
    drawRover(rover);
}

function drawRover(rover) {
    ctx.fillStyle = "#3498db";
    ctx.fillRect(rover.coord[0], rover.coord[1], cellSize, cellSize);
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

function log(rover) {
    var moves = document.getElementById("moves");
    var div = document.createElement("div");
    div.innerText = `${rover.coord[0]}${rover.coord[1]} ${rover.cardinal}`;
    moves.appendChild(div);
}