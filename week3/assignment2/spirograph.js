let vert1 = prompt ("Pick a number 20-50", "20");
let vert2 = prompt ("Pick a number 5-50", "25");
let border = prompt ("What is your favorite basic color in lowercase?", "white");
let rotateBy = 10;

function setup() {
    createCanvas(1000, 1000);
    background('purple');
    angleMode(DEGREES);
}
//object shapes
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    fill(100, 255, 255, 25);
    stroke(border);
    strokeWeight(2);
    beginShape();
    vertex(vert2, 25 / alt);
    vertex(100, -80);
    vertex(-45, 80 * alt);
    vertex(30, 45 * alt)
    vertex(25, 25 / alt);
    endShape();
    fill(255, 0, 100, 50);
    triangle(vert1 + alt, 300, 100 + alt, 50, 50 + alt, 50)
}
//rotation
function draw() {
    translate(500, 500);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 15;
}
//Start/Stop motion
function mousePressed() {
    noLoop();
}
function mouseReleased () {
    loop();
}
