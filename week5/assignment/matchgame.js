let myCard;
const DOWN = 'down';
const UP = 'up';
let startingX = 25;
let startingY = 50;
let cards = [];
const gameState = {
    totalPairs: 9,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
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
    selectedFaces = shuffleArray(selectedFaces);
//start of grid
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 6; i++ ) {
            const cardFaceImg = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, cardFaceImg));
            startingX += 145;
        }
        startingY += 180;
        startingX = 25;
    }
}

function draw() {
    background(218, 241, 255);
    if (gameState.numMatched === gameState.totalPairs) {
        fill(238, 78, 78);
        textSize(100);
        text('You Win!', 300, 300);
        noLoop();
    }
    for (let a = 0; a < cards.length; a++) {
        if(!cards[a].isMatch) {
            cards[a].face = DOWN;
        }
        cards[a].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(0);
    textSize(24);
    text('Attempts: ' + gameState.attempts, 225, 20);
    text('Matches: ' + gameState.numMatched, 500, 20);
}

//identify which card is clicked/console output
function mousePressed() {
    if(gameState.waiting) {
        return;
    }
    for(let j = 0; j < cards.length; j++) {
        //first check flipped cards length, and then we can trigger the flip
        if(gameState.flippedCards.length < 2 && cards[j].didHit(mouseX, mouseY)) { 
            console.log('flipped', cards[j]);
            gameState.flippedCards.push(cards[j]);
        }
    }
    if (gameState.flippedCards.length == 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            //following conditions are for a match:
            //mark cards as matched so they dont flip back over
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            //empty flipped cards array
            gameState.flippedCards.length = 0;
            //incrememnt the score
            gameState.numMatched++;
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 133;
        this.height = 167;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show() {
        if (this.face === UP || this.isMatch) {
            fill(0);
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y)
        } else {
            fill(255);
            rect(this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y);
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

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //Pick random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1 (decrement)
        counter--;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}