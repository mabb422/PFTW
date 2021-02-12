function setup () {
    createCanvas(500, 500);
}

function draw () {
    background(100, 100, 200); 
    drawShape();
}

function mousePressed () {
    if ((mouseX >= 0 && mouseX <= 50) && (mouseY >= 0 && mouseY <= 50)) {
        console.log('hit');
    }
}

function drawShape() {
    fill('yellow')
    ellipse(100, 100, 50)
}