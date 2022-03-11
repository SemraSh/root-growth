let num = 2000;
let range = 6;

let ax = [];
let ay = [];

function setup() {
  createCanvas(800, 800);
  ax.push(400);
  ay.push(0);
  frameRate(10);
  background(51);
}

function draw() {
  // Put a new value at the end of the array
  const newX = ax[ax.length - 1] + random(0, range);
  const newY = ay[ay.length - 1] + random(0, range);

  // Constrain all points to the screen
  ax.push(newX);
  ay.push(newY);

  if (newX > width || newY > height) {
    noLoop();
  }

  // Draw a line connecting the points
  for (let j = 1; j < ax.length; j++) {
    let stWVal = (ax.length - j) / 12;
    strokeWeight(stWVal);
    stroke(255);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
}
