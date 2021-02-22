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
let startingY = 50;
let cards = [];
const gameState = {

};
let cardFaceArray = [];
let cardBack;
function preload () {
    cardBack = loadImage('images/cardback.png');
    cardFaceArray = [
        loadImage('images/cardbrady.png'),
        loadImage('images/cardbruce.png'),
        loadImage('images/cardfonz.png'),
        loadImage('images/cardgil.png'),
        loadImage('images/cardjean.png'),
        loadImage('images/cardlucy.png'),
        loadImage('images/cardmork.png'),
        loadImage('images/cardthrees.png'),
        loadImage('images/cardtrek.png'),
    ]
}
function setup() {
    createCanvas(900, 600);
    background(218, 241, 255);
//set faces to different images
    let selectedFaces = [];
    for (let z = 0; z < 9; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
//remove used cardface so there's only 2 of each
        cardFaceArray.splice(randomIdx, 1);
    }
//start of grid
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 6; i++ ) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 145;
            //rect(rectX, rectY, rectWidth, rectHeight);
            //myRect.push({ x: rectX, y: rectY, id: startingId});
            //rectX += 211; //position of new rect's X
            //startingId++; 
        }
        startingY += 180;
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
            console.log('flipped', cards[j]);
    //    let distance = dist(mouseX, mouseY, myRect[j].x, myRect[j].y);
    //if (distance < rectWidth / 2) {
    //    console.log('Card has been clicked', myRect[j].id);
    }}
}
class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 133;
        this.height = 167;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.show();
    }

    show() {
        if (this.face === DOWN) {
            stroke(0);
            fill('white');
            rect(this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y)
        } else {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y)
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

