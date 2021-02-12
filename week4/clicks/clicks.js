let ellipseX = 0;
let ellipseY = random(height - ellipseHeight);
let elliWidth = 50;
let elliHeight = 50;
let clickHeight = 0;
function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(100, 100, 200); 
    drawShape();
    ellipseX++;
    if(ellipseX > width) {
        noLoop();
        Text('Your Score was ' + clickCount, 100, 300);
    }
}

function mousePressed () {
    if ((mouseX >= ellipseX && mouseX <= ellipseX + elliWidth) && (mouseY >= ellipseY && mouseY <= ellipseY + elliHeight)) {
        clickCount++;
        console.log('hit');
    }
}

function drawShape() {
    fill('yellow')
    ellipse(ellipseX, 25, elliWidth)
}