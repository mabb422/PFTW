
let rotateBy = 5;

function setup() {
    createCanvas(1000, 1000);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    fill(255);
    stroke(255);
    strokeWeight(2);
    ellipse(150, 150 + alt, 150 - alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}
function mousePressed() {
    noLoop();
}
function mouseReleased () {
    loop();
}
