let name;
let acount;
let routing;
let date;
let number;
function setup() {
  createCanvas(500, 250);
  name = createElement('p', 'Colonel Mustard');
  name.position(20, 5);
  name = createElement('p', 'Professor Plum');
  name.position(20, 20);
  date = createElement('p', 'Date');
  date.position(360, 20);
  number = createElement('p', 'No. 0000');
  number.position(360, 5);
  number = createElement('p', '0000 ::');
  number.position(150, 200);
  routing = createElement('p', '8675309 ::');
  routing.position(200, 200);
  account = createElement('p', '123456789');
  account.position(275, 200);
}

function draw() {
  background(240);
  noFill();
  rect(0, 0, 500, 250)
  line(395, 50, 475, 50);
  line(20, 115, 375, 115);
  line(20, 150, 480, 150);
  line(20, 200, 200, 200);
  line(300, 200, 480, 200);
  fill(245)
  rect(390, 85, 100, 30);
}