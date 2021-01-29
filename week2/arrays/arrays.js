const movies = window.prompt("What is your favorite movie?");
let myArr = [
    "Blazing Saddles", 
    "The Producers", 
    "Young Frankenstein", 
    "Men in Tights", 
    "Spaceballs"
];
console.log(myArr);
myArr.push(movies);
console.log(myArr.toString());