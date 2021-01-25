let grid = undefined;
let stroke1 = prompt ("enter a basic color name in lowercase", "gray");
let stroke2 = prompt ("enter another basic color name in lowercase", "purple");
function setup() {
    createCanvas(1000, 1000);
    background("#ccc");
    grid = loadImage("100px_grid.png");
}
function draw() {
    background(220);
    // bernie the snowman
    // head and hair
    arc(500, 200, 200, 200, radians(180), 0)
    ellipse(500, 200, 175, 200);
    // ears
    ellipse(405, 200, 20, 40);
    ellipse(595, 200, 20, 40);
    // mask
    quad(425, 215, 575, 215, 560, 290, 440, 290);
    arc(500, 235, 90, 5, radians(180), 0)
    arc(500, 260, 90, 5, 0, radians(180))
    line(415, 190, 425, 215);
    line(575, 215, 585, 190);
    // eyes
    line(440, 200, 490, 200);
    line(510, 200, 560, 200);
    line(440, 180, 490, 190);
    line(510, 190, 560, 180);
    // body
    quad(400, 300, 600, 300, 650, 500, 350, 500);
    rect(400, 500, 200, 60);
    // legs
    ellipse(470, 675, 75, 200);
    quad(390, 550, 550, 515, 575, 570, 400, 615);
    ellipse(540, 615, 75, 200);
    // feet
    quad(450, 755, 520, 755, 530, 800, 450, 800);
    quad(520, 700, 600, 680, 600, 725, 525, 740);
    // arms
    line(490, 400, 400, 415);
    line(435, 410, 430, 350);
    line(565, 410, 570, 350);
    line(440, 200, 490, 200);
    // mitten1
    beginShape()
    vertex(490, 400)
    vertex(520, 400)
    vertex(570, 410)
    vertex(600, 450)
    vertex(570, 485)
    vertex(510, 450)
    vertex(485, 440)
    vertex(490, 400)
    endShape()
    // mitten2
    beginShape()
    vertex(510, 450)
    vertex(485, 440)
    vertex(415, 450)
    vertex(395, 510)
    vertex(440, 520)
    vertex(500, 490)
    vertex(510, 500)
    vertex(520, 475)
    vertex(510, 450)
    endShape()  

    


    // snowman
    // snowman legs
    fill("#f1f1f1");
    stroke(stroke1);
    strokeWeight(20);
    // left
    ellipse(350, 650, 200);
    // right
    ellipse(650, 650, 200);
    // body
    ellipse(500, 450, 350, 400);
    // head
    ellipse(500, 200, 200);
    // hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    // hat body
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    // eyes
    stroke(0);
    strokeWeight(50);
    point(425, 200);
    point(575, 200);
    // mouth
    nofill()
    strokeWeight(10)
    arc(500, 200, 80, 80, 0, HALF_PI)
}