let ellipseX = 0;
let elliWidth = 50;
function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(100, 100, 200); 
    drawShape();
    ellipseX++;
}

function mousePressed () {
    if ((mouseX >= ellipseX && mouseX <= ellipseX + elliWidth) && (mouseY >= 0 && mouseY <= 50)) {
        console.log('hit');
    }
}

function drawShape() {
    fill('yellow')
    ellipse(ellipseX, 25, elliWidth)
}