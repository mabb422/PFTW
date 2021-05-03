function setup() {
    createCanvas(1000, 1000);
    background('lightyellow')  
  }
  function draw() {
    stroke('pink')
    fill('yellow')
    circle(mouseX, mouseY, 15)
    fill('pink')
    circle(mouseX, mouseY + 15, 15)
    circle(mouseX + 12, mouseY + 5, 15)  
    circle(mouseX - 12, mouseY + 5, 15)
    circle(mouseX - 7, mouseY - 10, 15)
    circle(mouseX + 7, mouseY - 10, 15)  
  }





// For Loop
//for (x = 0; x <= 10; x = x +2) {
//    console.log(x)
//}

// While Loop
//var starter = 10
//while (starter > 0){
//    console.log(starter)
//    starter = starter - 1
//}

// For-In Loop
// var obby = {size: 5, weight: 400, color, 'pink'}
//for (x in obby) {
//    console.log(obby[x] )
//}
     
// For-Each Loop
//var things = [1, 2, 3, 4, 'hello', 'pink', 78]
//things.forEach(function(val, i) {
//    console.log(val)
//    console.log(i)
//})