let grid = undefined;
function setup() {
    createCanvas(1000, 1000);
    background("#ccc");
    grid = loadImage("100px_grid.png");
}
function draw() {
    background(220);
    // snowman legs
    fill("#f1f1f1");
    stroke(100, 250, 100);
    strokeWeight(20);
    // left
    ellipse(350, 650, 200);
    // right
    ellipse(650, 650, 200);
    //body
    ellipse(500, 450, 350, 400);
}