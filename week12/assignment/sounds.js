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
    button.position(100, 200);
    button.size(200, 200);
    button2 = createButton(windy);
    button.position(400, 200);
    button.size(200, 200);
    button3 = createButton(rain);
    button.position(100, 200);
    button.size(200, 200);
    button4 = createButton(rainy);
    button.position(100, 500);
    button.size(200, 200);
    button5 = createButton(thunder);
    button.position(400, 500);
    button.size(200, 200);
    button6 = createButton(thundery);
    button.position(700, 500);
    button.size(200, 200);
}
