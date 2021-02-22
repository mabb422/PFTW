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
let startingX = 25;
let startingY = 150;
let cards = [];
const gameState = {

};
function setup() {
    createCanvas(1100, 1200);
    background(218, 241, 255);
    //start grid
    for (let k = 0; k < 4; k++) {
        for (let i = 0; i < 5; i++ ) {
            cards.push(new Card(startingX, startingY));
            startingX += 211;
            //rect(rectX, rectY, rectWidth, rectHeight);
            //myRect.push({ x: rectX, y: rectY, id: startingId});
            //rectX += 211; //position of new rect's X
            //startingId++; 
        }
        startingY += 261;
        startingX = 25;
        //rectX = 25;
        //rectY += 260; //position of new rect's Y
    }
    //console.log(myRect); 
    //myCard = new Card();
}
//identify which card is clicked/console output
function mousePressed() {
    for(let j = 0; j < cards.length; j++) {
        if(cards[j].didHit(mouseX, mouseY)) {
            console.log('flipped');
    //    let distance = dist(mouseX, mouseY, myRect[j].x, myRect[j].y);
    //if (distance < rectWidth / 2) {
    //    console.log('Card has been clicked', myRect[j].id);
    }}
}
class Card {
    constructor(x, y) {
        this.x = x;
        this.y = y;
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

