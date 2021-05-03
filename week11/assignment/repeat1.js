function setup() {
    createCanvas(800, 800);
    background('maroon')
  }
function createTile(originX, originY, primaryColor, secondaryColor) {
    translate(originX, originY);
    fill(primaryColor);
    circle(100,100, 200);
    fill(secondaryColor);
    rect(25, 25, 150, 150);
    fill(primaryColor);
    circle(100, 100, 150);
    fill(secondaryColor);
    rect(50, 50, 100, 100);
    fill(primaryColor);
    circle(100, 100, 100);
    fill(secondaryColor);
    rect(65, 65, 70, 70);
    fill(primaryColor);
    circle(100, 100, 70);
    fill(secondaryColor);
    rect(75, 75, 50, 50);
    fill(primaryColor);
    circle(100, 100, 50);
  
}
function draw () {
    if (mouseIsPressed) {
        createTile(0, 0, 'lightyellow', 'pink');
        createTile(0, 200, 230, 'darkblue');
        createTile(0, 200, 230, 'darkblue');
        createTile(0, 200, 230, 'darkblue');
        createTile(200, -600, 230, 'darkblue');
        createTile(0, 200, 'lightyellow', 'pink');
        createTile(0, 200, 'lightyellow', 'pink');
        createTile(0, 200, 230, 'darkblue');
        createTile(200, -600, 230, 'darkblue');
        createTile(0, 200, 'lightyellow', 'pink');
        createTile(0, 200, 'lightyellow', 'pink');
        createTile(0, 200, 230, 'darkblue');
        createTile(200, -600, 230, 'darkblue');
        createTile(0, 200, 230, 'darkblue');
        createTile(0, 200, 230, 'darkblue');
        createTile(0, 200, 230, 'darkblue');
    } else {
        createTile(0, 0, 230, 'darkblue');
        createTile(0, 200, 'lightyellow', 'pink');
        createTile(0, 200, 'lightyellow', 'pink');
        createTile(0, 200, 230, 'darkblue');
        createTile(200, -600, 'lightyellow', 'pink');
        createTile(0, 200, 230, 'darkblue');
        createTile(0, 200, 230, 'darkblue');
        createTile(0, 200, 'lightyellow', 'pink');
        createTile(200, -600, 'lightyellow', 'pink');
        createTile(0, 200, 230, 'darkblue');
        createTile(0, 200, 230, 'darkblue');
        createTile(0, 200, 'lightyellow', 'pink');
        createTile(200, -600, 230, 'darkblue');
        createTile(0, 200, 'lightyellow', 'pink');
        createTile(0, 200, 'lightyellow', 'pink');
        createTile(0, 200, 230, 'darkblue');
    }
}