let x = 0;
let goLeft = false;
let extraCanvas;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  extraCanvas = createGraphics(600, 600);
  extraCanvas.clear();
  background(0);
}

function draw() {
  push();
  background(255);
  noStroke();
  translate(mouseX, mouseY);
  rotate(-45);
  translate(-mouseX, -mouseY);
  tattoomachine();
  tattooneedle();
  pop();

  //trails
  if (mouseIsPressed) {
    extraCanvas.fill(0);
    extraCanvas.noStroke();
    extraCanvas.ellipse(mouseX, mouseY, 10);
  }
  image(extraCanvas, 0, 0);
}

function tattoomachine() {
  //frame
  fill(0);
  rect(mouseX + 250, mouseY - 12, 200, 200);

  //coil1
  fill(255);
  rect(mouseX + 275, mouseY + 13, 150, 65, 10);

  //coil2
  fill(255);
  rect(mouseX + 275, mouseY + 98, 150, 65, 10);

  //corner circle
  fill(0);
  circle(mouseX + 450, mouseY - 12, 50);

  //clamp
  fill(0);
  rect(mouseX + 250, mouseY - 87, 25, 75);

  //clamp top
  fill(0);
  rect(mouseX + 225, mouseY - 87, 75, 25);

  //needle
  fill(0);
  rect(mouseX + 50, mouseY - 12, 200, 25);

  //handle
  fill(0);
  rect(mouseX + 75, mouseY - 32, 150, 65, 10);
}

function tattooneedle() {
  //tip
  triangle(
    mouseX + 50 + x,
    mouseY - 12,
    mouseX + x,
    mouseY,
    mouseX + 50 + x,
    mouseY + 13
  );
}

function mouseDragged() {
  if (goLeft == false) x = x + 10;

  if (goLeft == true) {
    x = x - 5;
  }
  if (x > 10) {
    goLeft = true;
  }

  if (x < 5) {
    goLeft = false;
  }
}
