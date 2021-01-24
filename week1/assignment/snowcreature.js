let grid = undefined;
function setup() {
    createCanvas(1000, 1000);
    background("#ccc");
    grid = loadImage("100px_grid.png");
}

function draw() {
    background(grid)
}