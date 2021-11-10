// Step by step guide on how to move, rotate, scale, and manipulate colors with code

// circ01: rotate circle around point
let circ01 = {

  action: "rotateCircle",
  colorR: 0,
  colorG: 0,
  colorB: 0,
  colorG_Change: 0,
  translationX: 400,
  translationY: 0,
  ellipseX: 0,
  ellipseY: 600,
  ellipseWidth: 80,
  ellipseHeight: 80,
  angle: 0,
  angleOrigin: 360,
  speedX: 0,
  speedY: 0
}

// rect01: move back and forth
let rect01 = {
  action: "moveRect",
  colorR: 255,
  colorG: 0,
  colorB: 0,
  colorAlpha: 255,
  alphaChange: 0,
  rectPosX: 360,
  rectPosXOrigin: 360,
  rectPosY: 300,
  rectWidth: 80,
  rectHeight: 300,
  speed: 3,
  scale: 0
}


// circ02: move in x and y directions
let circ02 = {
  action: "moveCircle",
  colorR: 255,
  colorG: 255,
  colorB: 255,
  colorG_Change: 0,
  translationX: 0,
  translationY: 0,
  ellipseX: 400,
  ellipseXOrigin: 400,
  ellipseY: 600,
  ellipseYOrigin: 600,
  ellipseWidth: 40,
  ellipseHeight: 40,
  angle: 0,
  speedX: 12,
  speedY: 10
}


// rect02: scale box
// Setting up global variables for rect02
let rect02 = {
  action: "scaleRect",
  colorR: 255,
  colorG: 255,
  colorB: 255,
  colorAlpha: 255,
  alphaChange: 0,
  rectPosX: 397.5,
  rectPosY: 320,
  rectWidth: 5,
  rectWidth_Original: 5,
  rectHeight: 270,
  speed: 3,
  scale: 1
}


// circ03: change color
// Setting up global variables for circ03
let circ03 = {
  action: "colorCircle",
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
  action: "colorAlpha",
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

// set up an array of JS Objects
let shapes = [circ01, rect01, circ02, rect02, circ03, rect03];

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);


  console.log(shapes.length)
}

function draw() {
  background(255);
  noStroke();

  for (let i = 0; i < shapes.length; i++) {
    drawGeometry(shapes[i]);
  }
}


function drawGeometry(geometry) {
  if (geometry.action === "rotateCircle") {
    rotateCircle(geometry);
  } else if (geometry.action === "moveRect") {
    moveRect(geometry);
  } else if (geometry.action === "moveCircle") {
    moveCircle(geometry);
  } else if (geometry.action === "scaleRect") {
    scaleRect(geometry);
  // } else if (geometry.action === "colorCircle") {
  //   colorChange(geometry);
  // } else if (geometry.action === "colorAlpha") {
  //   rectAlphaChange(geometry);
  }
}


function rotateCircle(geometry) {
  fill(geometry.colorR, geometry.colorG, geometry.colorB);

  // Rotation of circle
  push();
  // translate(200, 200);
  translate(geometry.translationX, geometry.translationY);
  rotate(geometry.angle);
  ellipse(geometry.ellipseX, geometry.ellipseY, geometry.ellipseWidth, geometry.ellipseHeight);
  // textAlign(CENTER, CENTER); // Align text to center of location
  // fill(0); // Text is black
  // text('5', 0, 0); // Text label and location
  // angle = angle + 1;
  pop();

  if (geometry.angle < 360) {
    geometry.angle = geometry.angle + 1;
    // geometry.angle = 0;
  }
  // console.log(geometry.angle)
}


function moveCircle(geometry) {
  fill(geometry.colorR, geometry.colorG, geometry.colorB);
  // Move in X and Y direction
  if (geometry.ellipseX > 500 || geometry.ellipseX < 0) {
    geometry.speedX = geometry.speedX*-1;
  }
  geometry.ellipseX = geometry.ellipseX + geometry.speedX;

  if (geometry.ellipseY > 700 || geometry.ellipseY < 0) {
    geometry.speedY = geometry.speedY*-1;
  }
  geometry.ellipseY = geometry.ellipseY + geometry.speedY;

  if (geometry.ellipseX === geometry.ellipseXOrigin && geometry.ellipseY === geometry.ellipseYOrigin) {
    geometry.speedX = 0;
    geometry.speedY = 0;
  }

  ellipse(geometry.ellipseX, geometry.ellipseY, geometry.ellipseWidth, geometry.ellipseHeight);
}


function colorChange(geometry) {
  if (geometry.colorG > 500 || geometry.colorG < 0) {
    geometry.colorG_change = geometry.colorG_change*-1;
  }
  geometry.colorG = geometry.colorG + geometry.colorG_change;

  fill(geometry.colorR, geometry.colorG, geometry.colorB);
  ellipse(geometry.ellipseX, geometry.ellipseY, geometry.ellipseWidth, geometry.ellipseHeight);
}


function moveRect(geometry) {
  fill(geometry.colorR, geometry.colorG, geometry.colorB, geometry.colorAlpha)
  if (geometry.rectPosX > 500 || geometry.rectPosX < 0) {
    geometry.speed = geometry.speed*-1;
  }
  geometry.rectPosX = geometry.rectPosX + geometry.speed;

  if (geometry.rectPosX === geometry.rectPosXOrigin) {
    geometry.speed = 0;
  }

  rect(geometry.rectPosX, geometry.rectPosY, geometry.rectWidth, geometry.rectHeight);
}


function scaleRect(geometry) {
  fill(geometry.colorR, geometry.colorG, geometry.colorB, geometry.colorAlpha);

  if (geometry.rectWidth > 500 || geometry.rectWidth < 0) {
    geometry.scale = geometry.scale*-1;
  }
  geometry.rectWidth = geometry.rectWidth + geometry.scale;

  if (geometry.rectWidth === geometry.rectWidth_Original) {
    geometry.scale = 0;f
  }

  rect(geometry.rectPosX, geometry.rectPosY, geometry.rectWidth, geometry.rectHeight);
}


function rectAlphaChange(geometry) {
  if (geometry.colorAlpha > 500 || geometry.colorAlpha < 0) {
    geometry.alphaChange = geometry.alphaChange*-1;
  }
  geometry.colorAlpha = geometry.colorAlpha + geometry.alphaChange;

  fill(geometry.colorR, geometry.colorG, geometry.colorB, geometry.colorAlpha);
  translate(geometry.translationX, rect03.translationY);

  rotate(geometry.rotationAngle);
  rect(geometry.rectPosX, geometry.rectPosY, geometry.rectWidth, geometry.rectHeight, geometry.rectCornerRadius);
}
