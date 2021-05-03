let y;
let x;
let num = 80;
function setup() {
  createCanvas(600, 600);
  background(200);
  noStroke();
}

function draw() {
  fill('yellow');
  y = 150;
  for (let i = 1; i < num / 8; i++) {
    ellipse(100, y, 65, 35);
    y += 40;
  }
  fill('red');
  x = 40;
  for (let i = 0; i < num / 2; i++) {
  ellipse(x, y - 300, 25, 80);
  x += 80;
  }
  fill('blue');
  y = 35;
  for (let i = 0; i < num - 50; i++) {
    circle(200, y, 10);
    y += 20;
  }
  fill('aqua');
  x = 100;
  for (let i = 0; i < num / 4; i++) {
    circle(x, 350, 40);
    x += 130;
  }
}