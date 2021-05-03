function setup() {
    createCanvas(600, 600);
    background(200);
  }
function draw() {
    noStroke();
    fill('yellow');
    circle(mouseX, mouseY, 50);
    fill('black')
    ellipse(mouseX - 10, mouseY - 10, 5, 10);
    ellipse(mouseX + 10, mouseY - 10, 5, 10);
    arc(mouseX, mouseY + 5, 20, 20, 0, PI); 
   }  