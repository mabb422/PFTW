//setup
//const rectWidth = 200;
//const rectHeight = 250;
//let rectX = 25;
//let rectY = 150;
//let myRect = [];
//let startingId = 0;
let myCard;
const DOWN = 'down';
const UP = 'up';
function setup() {
    createCanvas(1100, 1200);
    background(218, 241, 255);
    //start grid
    //for (let k = 0; k < 4; k++){
        //for (let i = 0; i < 5; i++ ) {
            //rect(rectX, rectY, rectWidth, rectHeight);
            //myRect.push({ x: rectX, y: rectY, id: startingId});
            //rectX += 211; //position of new rect's X
            //startingId++; 
        //}
        //rectX = 25;
        //rectY += 260; //position of new rect's Y
    //}
    //console.log(myRect); 
    myCard = new Card();
}
//identify which card is clicked/console output
function mousePressed() {
    console.log(myCard.didHit(mouseX, mouseY));
    
    //for(let j = 0; j < myRect.length; j++) {
    //    let distance = dist(mouseX, mouseY, myRect[j].x, myRect[j].y);
    //if (distance < rectWidth / 2) {
    //    console.log('Card has been clicked', myRect[j].id);
    //}}
}
class Card {
    constructor() {
        this.x = 25;
        this.y = 150;
        this.width = 200;
        this.height = 250;
        this.face = DOWN;
        this.show();
    }

    show() {
        if (this.face === DOWN) {
            stroke(0);
            fill('white');
            rect(this.x, this.y, this.width, this.height);
        } else {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height);
        }

    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;        
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show ();
    }
}

