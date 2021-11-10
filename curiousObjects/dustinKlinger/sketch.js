function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(25);

  //Base Sunshield
  push();
  fill(200, 200, 200);
  quad(400, 205, 200, 205, 25, 470, 575, 470)
  pop();

  //Other Shapes S1
  push();
  fill(75, 25, 75)
  rect(200, 360, 200, 100);
  pop();

  //Foil Shield
  push();
  fill(75, 75, 75);
  translate(300, 240);
  rotate(11);
  polygon(0, 0, 195, 6)
  pop();

  //Primary Mirror
  push();
  fill(212, 175, 55);
  translate(300, 100);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  polygon(0, 0, 40, 6);
  translate(0, 70);
  polygon(0, 0, 40, 6);
  translate(0, 70);
  polygon(0, 0, 40, 6);
  translate(60, 35);
  polygon(0, 0, 40, 6);
  translate(60, 35);
  polygon(0, 0, 40, 6);
  translate(60, -35);
  polygon(0, 0, 40, 6);
  translate(60, -35);
  polygon(0, 0, 40, 6);
  translate(0, -70);
  polygon(0, 0, 40, 6);
  translate(0, -70);
  polygon(0, 0, 40, 6);
  translate(-60, -35);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  polygon(0, 0, 40, 6);
  translate(-60, 35);
  polygon(0, 0, 40, 6);
  translate(0, 70);
  polygon(0, 0, 40, 6);
  translate(60, 35);
  polygon(0, 0, 40, 6);
  translate(60, -35);
  polygon(0, 0, 40, 6);
  translate(0, -70);
  polygon(0, 0, 40, 6);
  pop();

  //Tertiary Mirror
  push();
  fill(125, 125, 125);
  translate(300, 240);
  polygon(0, 0, 40, 6);
  pop();

  //Secondary Mirror
  push();
  fill(200, 200, 200)
  circle(300, 260, 55);
  pop();
  push();
  line(215, 385, 285, 275);
  line(385, 385, 315, 275);
  line(300, 50, 300, 240);
  pop();

  //Other Shapes S1
  push();
  fill(75, 25, 25)
  rect(150, 525, 300, 30);
  pop();

  //Second - Fifth Sun Shield
  push();
  fill(200, 200, 200);
  rect(25, 475, 550, 10);
  pop();
  push();
  fill(200, 200, 200);
  rect(25, 490, 550, 10);
  pop();
  push();
  fill(200, 200, 200);
  rect(25, 505, 550, 10);
  pop();
  push();
  fill(200, 200, 200);
  rect(25, 520, 550, 10);
  pop();

}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
