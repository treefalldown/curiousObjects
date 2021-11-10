// Step by step guide on how to move, rotate, scale, and manipulate colors with code

// circ01: rotate circle around point
let circ01 = {
  action: "rotation",
  shape: "circle",
  colorR: 0,
  colorG: 0,
  colorB: 0,
  colorG_Change: 0,
  translationX: 0,
  translationY: 0,
  ellipseX: 400,
  ellipseY: 600,
  ellipseWidth: 80,
  ellipseHeight: 80,
  angle: 0,
  speedX: 0,
  speedY: 0
}

// rect01: move back and forth
let rect01 = {
  action: "moveRect",
  shape: "rectangle",
  colorR: 0,
  colorG: 0,
  colorB: 0,
  colorAlpha: 255,
  alphaChange: 0,
  translationX: 0,
  translationY: 0,
  rotationAngle: 0,
  rectPosX: 360,
  rectPosY: 300,
  rectWidth: 80,
  rectHeight: 300,
  rectCornerRadius: 0,
  speed: 3,
  scale: 0
}


// circ02: move in x and y directions
let circ02 = {
  action: "moveCircle",
  shape: "circle",
  colorR: 255,
  colorG: 255,
  colorB: 255,
  colorG_Change: 0,
  translationX: 0,
  translationY: 0,
  ellipseX: 400,
  ellipseY: 600,
  ellipseWidth: 40,
  ellipseHeight: 40,
  angle: 0,
  speedX: 2,
  speedY: 5
}


// rect02: scale box
// Setting up global variables for rect02
let rect02 = {
  action: "scaleRect",
  shape: "rectangle",
  colorR: 255,
  colorG: 255,
  colorB: 255,
  colorAlpha: 255,
  alphaChange: 0,
  translationX: 0,
  translationY: 0,
  rotationAngle: 0,
  rectPosX: 397.5,
  rectPosY: 320,
  rectWidth: 5,
  rectHeight: 270,
  rectCornerRadius: 0,
  speed: 3,
  scale: 1
}


// circ03: change color
// Setting up global variables for circ03
let circ03 = {
  action: "colorChange",
  shape: "circle",
  colorR: 0,
  colorG: 0,
  colorB: 0,
  colorG_change: 1,
  translationX: 0,
  translationY: 0,
  ellipseX: 400,
  ellipseY: 250,
  ellipseWidth: 150,
  ellipseHeight: 150,
  angle: 0,
  speedX: 0,
  speedY: 0
}


// rect03: change alpha
// Setting up global variables for rect03
let rect03 = {
  action: "alphaChange",
  shape: "rectangle",
  colorR: 255,
  colorG: 255,
  colorB: 255,
  colorAlpha: 255,
  alphaChange: 1,
  translationX: 430,
  translationY: 250,
  rotationAngle: 151,
  rectPosX: 0,
  rectPosY: 0,
  rectWidth: 60,
  rectHeight: 110,
  rectCornerRadius: 10,
  speed: 0,
  scale: 0
}

// Array of all my JavaScript Objects
let shapesArray = [circ01, rect01, circ02, rect02, circ03, rect03];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  noStroke();

  // Draw wrench by calling function drawWrench within for loop
  for (i = 0; i < shapesArray.length; i++) {
    drawWrench(shapesArray[i]);
  }
}

function drawWrench(geometry) {
  // if geometry is a circle, then draw circles
  if (geometry.shape === "circle") {
    fill(geometry.colorR, geometry.colorG, geometry.colorB);
    ellipse(geometry.ellipseX, geometry.ellipseY, geometry.ellipseWidth, geometry.ellipseHeight);
  } else if (geometry.shape === "rectangle") { // else if geometry is a rectangle, then draw rectangles
    fill(geometry.colorR, geometry.colorG, geometry.colorB);
    translate(geometry.translationX, geometry.translationY);
    rotate(geometry.rotationAngle);
    rect(geometry.rectPosX, geometry.rectPosY, geometry.rectWidth, geometry.rectHeight, geometry.rectCornerRadius);
  }
}
