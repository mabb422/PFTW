function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondColor, laserWeight) {
    translate(originX, originY);
    //background
    fill(primaryColor);
    rect(0, 0, 200, 200);
    //circle
    stroke(255, 255, 255);
    strokeWeight(5);
    fill(0, 100, 140);
    circle(100, 100, 166);
    //laser
    stroke(secondColor);
    strokeWeight(laserWeight);
    line(100, 100, 33, 0);
    line(100, 100, 166, 0);
    line(100, 100, 0, 100);
    line(100, 100, 200, 100);
    line(100, 100, 33, 200);
    line(100, 100, 166, 200);
    //star
    stroke(255, 255, 255);
    strokeWeight(5);
    strokeJoin(ROUND);
    triangle(100, 25, 33, 133, 166, 133);
    line(100, 175, 33, 66);
    line(33, 66, 166, 66);
    line(166, 66, 100, 175);
    //hexagon
    fill('purple');
    stroke(255, 255, 255);
    beginShape();
    vertex(65, 100);
    vertex(80, 75);
    vertex(120, 75);
    vertex(134, 100);
    vertex(120, 123);
    vertex(80, 123);
    vertex(65, 100);
    endShape();
    //laser center
    fill(secondColor);
    strokeWeight(3);
    circle(100, 100, 30);
    noFill();
    stroke('white')
    rect(10, 10, 180, 180);
}
function draw() {
    createTile(0, 0, "purple", "greenyellow", 10);
    createTile(0, 200, "lightblue", "magenta", 10);
    createTile(0, 200, "pink", "aqua", 15);
    createTile(200, -400, "lightblue", "magenta", 10);
    createTile(0, 200, "purple", "greenyellow", 20);
    createTile(0, 200, "lightblue", "magenta", 10);
    createTile(200, -400, "pink", "aqua", 15);
    createTile(0, 200, "lightblue", "magenta", 10);
    createTile(0, 200, "purple", "greenyellow", 10);
}