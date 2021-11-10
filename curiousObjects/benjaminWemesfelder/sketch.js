function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(1000);
  noStroke();
  fill(color('hsb(160, 100%, 50%)'));
  rect(305, 219, 275, 165, 20);
  rect(25, 219, 265, 165, 20);
  fill(color(208,240,192));
  rect(320, 235, 250, 135, 20);
  rect(40, 233, 235, 135, 20);
  noStroke();
  square(274, 275, 47);
  fill(color(60, 200, 300));
  ellipse(455, 300, 190, 115);
  ellipse(150, 300, 190, 115);
  stroke((color(255, 204, 0)));
  strokeWeight(8);
  line(330, 300, 265, 300);
}
