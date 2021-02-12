let ellipseX = 0;
let elliWidth = 50;
let clickCount = 0;
function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(100, 100, 200); 
    drawShape();
    ellipseX++;
    if(ellipseX > width) {
        noLoop();
        alert('Your Score was ' + clickCount, 100, 300);
    }
}

function mousePressed () {
    if ((mouseX >= ellipseX && mouseX <= ellipseX + elliWidth) && (mouseY >= 0 && mouseY <= 50)) {
        clickCount++;
        console.log('hit');
    }
}

function drawShape() {
    fill('yellow')
    ellipse(ellipseX, 25, elliWidth)
}