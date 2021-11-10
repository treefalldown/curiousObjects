function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noStroke();

  //frame
  fill(0);
  rect(300, 200, 200, 200);

  //coil1
  fill(255);
  rect(325, 225, 150, 65, 10);

  //coil2
  fill(255);
  rect(325, 310, 150, 65, 10);

  //corner circle
  fill(0)
  circle(500, 200, 50);

  //clamp
  fill(0);
  rect(300, 125, 25, 75);

  //clamp top
  fill(0);
  rect(275, 125, 75, 25);

  //needle
  fill(0);
  rect(100, 200, 200, 25);

  //handle
  fill(0);
  rect(125, 180, 150, 65, 10);

  //tip
  triangle(100, 200, 50, 212, 100, 225);

}
