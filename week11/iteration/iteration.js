function setup () {
    createCanvas(500, 500);
  }
  
  function draw () {
      background(255, 66, 107);
      noStroke();
      //static squares
      for (let rectY = 0; rectY < height + 1; rectY += 75) {
        for (let rectX = 0; rectX < 625; rectX += 75) {
          fill(0);
          rect(rectX + 20, rectY + 20, 10, 10);
          }
      }
      //fill squares
      for (let betweenY = 20; betweenY < mouseY; betweenY += 75) {
        for (let betweenX = 20; betweenX < mouseX; betweenX += 75) {
          fill('yellowgreen');
          stroke('green');
          rect(betweenX, betweenY, 10, 10);
        }
      }
  }