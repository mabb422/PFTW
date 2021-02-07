let rotateBy = 5;

function setup() {
    createCanvas(1000, 1000);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    fill(100, 255, 255, 25);
    stroke(255);
    strokeWeight(2);
    beginShape();
    vertex(25, 25 / alt);
    vertex(100, -80);
    vertex(-45, 80 * alt);
    vertex(30, 45 * alt)
    vertex(25, 25 / alt);
    endShape();
    fill(255, 0, 100, 50);
    triangle(300 + alt, 300, 100 + alt, 50, 50 + alt, 50)

}

function draw() {
    translate(500, 500);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 15;
}
function mousePressed() {
    noLoop();
}
function mouseReleased () {
    loop();
}
