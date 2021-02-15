//setup
const rectWidth = 200;
const rectHeight = 250;
let rectX = 25;
let rectY = 25;
let myRect = [];
let startingId = 0;
function setup() {
    createCanvas(1100, 1100);
    background('lightblue');
    //start grid
    for (let k = 0; k < 4; k++){
        for (let i = 0; i < 5; i++ ) {
            rect(rectX, rectY, rectWidth, rectHeight);
            myRect.push({ x: rectX, y: rectY, id: startingId});
            rectX += 210; //position of new rect's X
            startingId++; 
        }
        rectX = 25;
        rectY += 260; //position of new rect's Y
    }

    console.log(myRect);  
}
//identify which card is clicked/console output
function mousePressed() {
    for(let j = 0; j < myRect.length; j++) {
        let distance = dist(mouseX, mouseY, myRect[j].x, myRect[j].y);
    if (distance < rectWidth / 2) {
        console.log('Card has been clicked', myRect[j].id);
    }}
}