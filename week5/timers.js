//setup
let blockX = 0;
let blockY = 0;
let blockColor = 255;
let drawTimer;
const speed = 50;
const distance = 20;
function setup() {
    createCanvas(600, 600);
    background(200, 50, 100);
} 

function drawBlock(x, y, color) {
    stroke(color || 200);
    fill(color || 200);
    rect(x, y, 60, 80); 
}
//key pressed funtion
function keyTyped () {
    let keyToNumber = Number(key);
    if (isNaN(keyToNumber)){
        return;
    }
    keyToNumber = map(keyToNumber, 1, 9, 1, 255);
    console.log('converted number', keyToNumber);
    blockColor = keyToNumber;
}

//timer setup
drawTimer = window.setInterval(() => {
    if(blockY - 50 <= height) {
    drawBlock(blockX, blockY, blockColor);
    blockY += distance;
    } else {
    //moves starting point on X or Y
        blockY = 0;
        blockX += 100;
    }
    //stop movement
    if(blockY - 50 > height && blockX - 50 > width) {
        window.clearInterval(drawTimer);
        alert('done');
    }
        
}, speed);
