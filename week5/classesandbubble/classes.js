let bubArray = [];
//let bubble1;
//let bubble2;
//let bubble3;
//let bubble4;
function setup() {
    createCanvas(400, 400);
//set up first loop
    for (let i = 0; i < 10; i++) {
        const bubble = new Bubble(200, 200, 05)
        //bubble1 = new Bubble();
        //bubble2 = new Bubble();
        //bubble3 = new Bubble();
        //bubble4 = new Bubble();
        bubArray.push(bubble);
    }
}
function draw() {
      background(100, 175, 150);
//set up second loop
    for (let k = 0; k < 8; k++) {
        bubArray[k].move();
        bubArray[k].show();
      }
    //bubble1.move();
    //bubble1.show();
    //bubble2.move();
    //bubble2.show();
    //bubble3.move();
    //bubble3.show();
    //bubble4.move();
    //bubble4.show();
}
class Bubble {
    constructor() {
        this.x = 200;
        this.y = 200;
        this.show();
        this.move();
    }
    move() {
        this.x = this.x + random(-4, 4);
        this.y = this.y + random(-10, 10);
    }
    show() {
        stroke(65, 255, 240)
        strokeWeight(2)
        fill(65, 255, 240, 10)
        ellipse(this.x, this.y, 25, 40)
    }
}


