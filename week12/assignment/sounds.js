var wind;
var windy;
var rain;
var rainy;
var thunder;
var thundery;

let button1;
let button2;
let button3;
let button4;
let button5;
let button6;

function preload() {
    soundFormats('wav');
    soundFormats('mp3');
    wind = loadSound('wind1.wav');
    windy = loadSound('wind2.wav');
    rain = loadSound('rain.mp3');
    rainy = loadSound('windows.wav');
    thunder = loadSound('thunder.wav');
    thundery = loadSound('thunder2.wav');
}

function setup() {
    canvas = createCanvas(1000, 1000);
    button1 = createButton(wind);
    button1.position(100, 200);
    button1.size(200, 200);
    button1.mousePressed(playWind);
//
    button2 = createButton(windy);
    button2.position(400, 200);
    button2.size(200, 200);
    button2.mousePressed(playWindy);
//
    button3 = createButton(rain);
    button3.position(100, 200);
    button3.size(200, 200);
    button3.mousePressed(playRain);
//
    button4 = createButton(rainy);
    button4.position(100, 500);
    button4.size(200, 200);
    button4.mousePressed(playRainy);
//
    button5 = createButton(thunder);
    button5.position(400, 500);
    button5.size(200, 200);
    button5.mousePressed(playThunder);
//
    button6 = createButton(thundery);
    button6.position(700, 500);
    button6.size(200, 200);
    button6.mousePressed(playThundery);
}

function draw() {
    background(100);
    fill(255, 255, 255);
}
function playWind () {
    wind.play();
}
function playWindy () {
    windy.play();
}
function playRain () {
      rain.play();
}
function playRainy () {
    rainy.play();
}
function playThunder () {
    thunder.play();
}
function playThundery () {
    thundery.play();
}

