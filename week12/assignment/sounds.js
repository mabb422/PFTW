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

canvas = createCanvas(1000, 1000);