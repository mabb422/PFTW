var level;
var mySound;
var circleX = 250;
var circleY = 250;

function preload() {
    soundFormats('wav');
    mySound = loadSound('woods.wav');
}

function setup() {
    createCanvas(500, 500);
    amplitude = new p5.Amplitude();
    mySound.play();
}

function draw() {
    strokeWeight(5);
    stroke('magenta');
    noFill();
    ellipse(250,250,100,100);
    level = mySound.getLevel();
    var diameterX = level * 250;0
    var diameterY = level * 2500 * random (1.5);
    ellipse(circleX, circleY, diameterX, diameterY);
}

function canvasPressed() {
    if (sound.isPlaying() === true) {
        sound.pause();
      } else {
        sound.play();
}}