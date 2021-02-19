let bubble1;
let bubble2;
let bubble3;
let bubble4;
function setup() {
    createCanvas(400, 400);
    background(100, 175, 150);
    bubble1 = new Bubble();
    bubble2 = new Bubble();
    bubble3 = new Bubble();
    bubble4 = new Bubble();
}
function draw() {
    bubble1.move();
    bubble1.show();
    bubble2.move();
    bubble2.show();
    bubble3.move();
    bubble3.show();
    bubble4.move();
    bubble4.show();
}
class Bubble {
    constructor() {
        this.x = 200;
        this.y = 200;
    }
    move() {
        this.x = this.x + random(-15, 15);
        this.y = this.y + random(-15, 15);
    }
    show() {
        stroke(65, 255, 240)
        strokeWeight(2)
        fill(65, 255, 240, 10)
        ellipse(this.x, this.y, 50, 85)
    }
}


