let grid = undefined;
let stroke1 = prompt ("Pick a number 1-10", "5");
let fill1 = prompt ("enter a basic color name in lowercase", "lightblue");
let fill2 = prompt ("enter another basic color name in lowercase", "brown");
function setup() {
  createCanvas(1000, 1000);
  background(225, 225, 225)
}
function draw() {
    // background
    // scene 
    // floor
    strokeWeight(1)
    stroke(0)
    fill(200, 200, 200);
    rect(0, 600, 1000, 400)
    // counters
    fill(189, 164, 83);
    rect(0, 300, 250, 300)
    rect(750, 300, 250, 300)
    rect(250, 400, 500, 200)
    //countertop
    fill(50, 50, 50);
    rect(0, 300, 260, 25)
    rect(740, 300, 260, 25)
    rect(240, 400, 520, 25)
    // sign
    fill(255);
    strokeWeight(10)
    rect(25, 25, 300, 150)
    // D
    line(50, 50, 50, 150)
    arc(50, 100, 100, 100, radians(270), radians(450));
    // M
    line(125, 50, 125, 150)
    line(125, 50, 165, 100)
    line(165, 100, 200, 50)
    line(200, 50, 200, 150)
    // V
    line(225, 50, 265, 150)
    line(265, 150, 305, 50)
    // chair
    fill(0)
    stroke(0);
    strokeWeight(10)
    quad(400, 550, 640, 550, 600, 625, 400, 625);
    line(640, 500, 600, 800);
    line(600, 600, 650, 800)
    line(425, 615, 400, 800)
    line(405, 760, 605, 760)
    line(605, 760, 630, 740)
    // SNOWCREATURE1
    // base
    fill(255)
    strokeWeight(2)
    ellipse(800, 277, 50)
    ellipse(800, 237, 30)
    ellipse(800, 210, 20)
    // hat
    fill(fill1)
    stroke(fill2)
    triangle(790, 205, 810, 205, 800, 180)
    line(797, 190, 810, 205)
    line(795, 198, 810, 205)
    ellipse(800, 175, 10)
    //scarf
    quad(810, 220, 815, 220, 820, 245, 815, 250);  
    rect(790, 220, 25, 7)
    // buttons
    fill(0)
    stroke(0)
    ellipse(800, 235, 5)
    ellipse(800, 245, 5)
    // eyes
    ellipse(805, 210, 5)
    ellipse(795, 210, 5)
    // nose
    fill(255, 187, 0)
    stroke(255, 187, 0)
    triangle(800, 212, 800, 216, 810, 214)
    // BERNIE
    // head and hair
    fill(255, 255, 255);
    stroke(0);
    strokeWeight(1)
    arc(500, 200, 200, 200, radians(180), 0)
    fill(248, 233, 211);
    ellipse(500, 200, 175, 200);
    // ears
    ellipse(405, 200, 20, 40);
    ellipse(595, 200, 20, 40);
    // mask 
    fill(fill1);
    quad(425, 215, 575, 215, 560, 290, 440, 290);   
    arc(500, 235, 90, 5, radians(180), 0)
    arc(500, 260, 90, 5, 0, radians(180))
    line(415, 190, 425, 215);
    line(575, 215, 585, 190);
    // eyes
    line(440, 200, 490, 200);
    line(510, 200, 560, 200);
    //  eyebrows
    stroke(50, 50, 50)
    strokeWeight(stroke1)
    line(440, 180, 490, 190);
    line(510, 190, 560, 180);
    // body
    stroke(0)
    strokeWeight(1)
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
    vertex(405, 460)
    vertex(395, 495)
    vertex(440, 520)
    vertex(500, 490)
    vertex(510, 500)
    vertex(520, 475)
    vertex(510, 450)
    endShape()
    // mitt1 decor1
    fill(255, 254, 250)
    stroke(26, 44, 44)
    strokeWeight(1)
    ellipse(460, 500, 10)
    ellipse(445, 485, 10)
    ellipse(430, 470, 10)
    //mitt2 decor1
    ellipse(525, 445, 10)
    ellipse(540, 430, 10)
    ellipse(555, 415, 10)
    // mitt1 decor2
    fill(26, 44, 44);
    stroke(255, 254, 250)
    ellipse(485, 485, 10)
    ellipse(470, 470, 10)
    ellipse(455, 455, 10)
    //mitt2 decor2
    ellipse(550, 465, 10)
    ellipse(565, 450, 10)
    ellipse(580, 435, 10)
} 