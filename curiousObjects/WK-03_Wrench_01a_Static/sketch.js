// Step by step guide on how to move, rotate, scale, and manipulate colors with code

// circ01: rotate circle around point
let circ01Angle = 0;


// rect01: move back and forth
let rect01_XPos = 360;
let rect01_speed = 3;


// circ02: move in x and y directions
let circ02_XPos = 400;
let circ02_speedX = 2;
let circ02_YPos = 600;
let circ02_speedY = 5;


// rect02: scale box
// Setting up global variables for rect02
let rect02_width = 5;
let rect02_Scale = 1;
// let box_08_textSize = 10;


// circ03: change color
// Setting up global variables for circ03
let circ03_color = 0;
let circ03_colorChange = 1;
let circ03_colorLimit = 0;


// rect03: change alpha
// Setting up global variables for rect03
let rect03_alpha = 255;
let rect03_alphaChange = 1;


function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  noStroke();

  // circ01
  //bottom black circle
  fill(0);
  push();
  translate(400, 600);
  rotate(circ01Angle);
  ellipse(0, 300, 80, 80);
  // textAlign(CENTER, CENTER); // Align text to center of location
  // fill(0); // Text is black
  // text('5', 0, 0); // Text label and location
  pop();
  circ01Angle++;


  // rect01
  //black handle rectangle
  fill('red')
  if (rect01_XPos > 500 || rect01_XPos < 0) {
    rect01_speed = rect01_speed*-1;
  }
  rect01_XPos = rect01_XPos + rect01_speed;

  rect(rect01_XPos, 300, 80, 300);


  // circ02
  //bottom white circle
  fill(255); //white

  if (circ02_XPos > 500 || circ02_XPos < 0) {
    circ02_speedX = circ02_speedX*-1;
  }
  circ02_XPos = circ02_XPos + circ02_speedX;

  if (circ02_YPos > 700 || circ02_YPos < 0) {
    circ02_speedY = circ02_speedY*-1;
  }
  circ02_YPos = circ02_YPos + circ02_speedY;

  ellipse(circ02_XPos, circ02_YPos, 40, 40);


  //rect02
  //white thin handle part
  fill(255);

  if (rect02_width > 500 || rect02_width < 0) {
    rect02_Scale = rect02_Scale*-1;
  }
  rect02_width = rect02_width + rect02_Scale;

  rect(397.5, 320, rect02_width, 270);


  //circ03
  //wrench head circle
  if (circ03_color > 500 || circ03_color < 0) {
    circ03_colorChange = circ03_colorChange*-1;
  }
  circ03_color = circ03_color + circ03_colorChange;

  fill(0, circ03_color, 0);
  ellipse(400, 250, 150, 150);



  //rect03
  //angled wrench head
  if (rect03_alpha > 500 || rect03_alpha < 0) {
    rect03_alphaChange = rect03_alphaChange*-1;
  }
  rect03_alpha = rect03_alpha + rect03_alphaChange;

  fill(255, 255, 255, rect03_alpha);
  translate(430, 250);
  angleMode(DEGREES);
  rotate(151);
  rect(0, 0, 60, 110, 10);
}
