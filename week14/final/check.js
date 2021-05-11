var distance;
var a, b, c, d, e, f, g, h;

function setup() {
  createCanvas(800, 800);
  a = 240
  b = 240
  c = 240
  d = 240
  e = 240
  f = 240
  g = 240
  h = 240
}

function draw() {
  background(255, 244, 251);  
  fill(240);
  rect(0, 0, 500, 250);
  noStroke();
//Check sectors to hover over
  //contact info
  fill (a);
  rect(15, 20, 100, 40);
  //check number/date
  fill(b);
  rect(355, 20, 130, 20);
  fill (c);
  rect(355, 40, 130, 20);
  //payee
  fill (d);
  rect(15, 80, 365, 40);
  //amounts
  fill (e);
  rect(15, 120, 470, 35);
  rect(380, 80, 115, 40);
  //memo/sig
  fill (f);
  rect(15, 175, 190, 30);
  fill (g);
  rect(295, 175, 190, 30);
  //act/routing
  fill (h);
  rect(145, 215, 195, 25);
  
//All check text
  stroke(0);
  fill(0);
  textSize(12);
  text('Colonel Mustard', 20, 35);
  text('Professor Plum', 20, 50);
  text('Date', 360, 50);
  text('No. 0000', 360, 35);
  text('0000 ::', 150, 230);
  text('8675309 ::', 200, 230);
  text('123456789', 275, 230);
  
  
//Blank lines
  //date
  line(395, 50, 475, 50);
  //payee/amount
  line(20, 115, 375, 115);
  line(20, 150, 480, 150);
  fill(255)
  rect(390, 85, 100, 30);
  //memo/signature
  line(20, 200, 200, 200);
  line(300, 200, 480, 200);

//Hover Functions
  textSize(15)
  if((15<mouseX)&&(115>mouseX)&&(20<mouseY)&&(60>mouseY)){
    a = 200;
    fill(128, 0, 75);
    stroke(128, 0, 75);
    text('Does this name match the person or company sending the check?', 25, 300);
    text('Does it make sense this issuer is printed on the check?', 25, 330);
  } else {
    a = 240 }
  
  if((355<mouseX)&&(485>mouseX)&&(20<mouseY)&&(40>mouseY)){
    b = 200;
    fill(128, 0, 75);
    stroke(128, 0, 75);
    text('Does this check number match the check number in he sequence line?', 25, 300);
  } else {
    b = 240 }
  
  if((355<mouseX)&&(485>mouseX)&&(40<mouseY)&&(60>mouseY)){
    c = 200;
    fill(128, 0, 75);
    stroke(128, 0, 75);
    text('Is the check dated in the past?', 25, 300);
    text('Was the check dated in a timeframe that makes sense?', 25, 330);
  } else {
    c = 240 }
  
  if((15<mouseX)&&(380>mouseX)&&(80<mouseY)&&(120>mouseY)){
    d = 200;
    fill(128, 0, 75);
    stroke(128, 0, 75);
    text('Is the payee name correct? Is it spelled correctly?', 25, 300);
    text('Does the printing or handwriting on this line match the rest of the check?', 25, 330);
    text('Does this area look damaged, erased, or altered?', 25, 360);
  } else {
    d = 240 }
  
  if((15<mouseX)&&(485>mouseX)&&(120<mouseY)&&(155>mouseY) || (380<mouseX)&&(495>mouseX)&&(80<mouseY)&&(120>mouseY)){
    e = 200;
    fill(128, 0, 75);
    stroke(128, 0, 75);
    text('Do the amounts in these two places match?', 25, 300);
    text('Does the printing or handwriting on this line match the rest of the check?', 25, 330);
    text('Does this area look damaged, erased, or altered?', 25, 360);
  } else {
    e = 240 }
  
  if((15<mouseX)&&(205>mouseX)&&(175<mouseY)&&(205>mouseY)){
    f = 200;
    fill(128, 0, 75);
    stroke(128, 0, 75);
    text('Does the memo match what the check is supposed to be for?', 25, 300);
  } else {
    f = 240 }
  
    if((295<mouseX)&&(485>mouseX)&&(175<mouseY)&&(205>mouseY)){
    g = 200;
    fill(128, 0, 75);
    stroke(128, 0, 75);
    text('Does the signature match the name printed in the top left corner?', 25, 300);
    text('Does this name appear to match the person who was sending the check?', 25, 330);
    text('Does this area look damaged, erased, or altered?', 25, 360);
  } else {
    g = 240 }
  
  if((145<mouseX)&&(340>mouseX)&&(215<mouseY)&&(240>mouseY)){
    h = 200;
    fill(128, 0, 75);
    stroke(128, 0, 75);
    text('Does the routing number (usually center) match the bank printed on the check?', 25, 300);
    text('Does this area look damaged, erased, or altered?', 25, 330);
  } else {
    h = 240 }
  
}
