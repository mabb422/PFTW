let grid = undefined;
let fill1 = prompt ("enter a basic color name in lowercase", "lightblue");
let fill2 = prompt ("enter another basic color name in lowercase", "brown");
function setup() {
  createCanvas(1000, 1000);
}


function draw() {
    // background

    // BERNIE
    // bernie head
    fill(255, 255, 255);
    stroke(0);
    strokeWeight(1)
    arc(500, 200, 200, 200, radians(180), 0)
    fill(248, 233, 211);
    ellipse(500, 200, 175, 200);
    // ears
    ellipse(405, 200, 20, 40);
    ellipse(595, 200, 20, 40);
    // mask fill(fill1);
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
    fill(92, 92, 92)
    quad(400, 300, 600, 300, 650, 500, 350, 500);
    rect(400, 500, 200, 60);
    // legs
    fill(26, 44, 44);
    strokeWeight(10);
    ellipse(500, 575, 200, 100);
    ellipse(470, 700, 75, 250);
    quad(390, 550, 550, 515, 575, 570, 400, 615);
    ellipse(540, 650, 75, 250);
    // feet
    fill(95, 58, 43);
    quad(445, 780, 520, 780, 530, 825, 445, 825);
    quad(510, 740, 600, 700, 600, 750, 520, 775);
    // arms
    strokeWeight(1);
    line(490, 400, 400, 415);
    line(435, 410, 430, 350);
    line(565, 410, 570, 350);
    line(440, 200, 490, 200);
    // mitten1
    fill(fill2)
    stroke(95, 58, 43)
    strokeWeight(5)
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
}   