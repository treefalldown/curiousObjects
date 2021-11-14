// Step by step guide on how to move, rotate, scale, and manipulate colors with code


// taken from 02-mouse examples
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

let engine;
let ground;
let wallLeft;
let wallRight;


let rect01;
let rect02;
let rect03;
let rect04;
let rect05;
let rect06;
let rect07;
let circ01;
let vertexSetsTriangle;

let canvas;


function setup() {
  // createCanvas(800, 800);
  canvas = createCanvas(800, 800);

  // create an engine
  engine = Engine.create();

  vertexSetsTriangle = [
    {x: 100, y: 200},
    {x: 50, y: 212},
    {x: 100, y: 225}
  ]


  //frame
  rect01 = Bodies.rectangle(300, 200, 200, 200);
  //coils
  rect02 = Bodies.rectangle(325, 225, 150, 65, 10);
  rect03 = Bodies.rectangle(325, 310, 150, 65, 10);
  //circle
  circ01 = Bodies.circle(500, 200, 50);
  //clamp
  rect04 = Bodies.rectangle(300, 125, 25, 75);
  rect05 = Bodies.rectangle(275, 125, 75, 25);
  //needle
  rect06 = Bodies.rectangle(100, 200, 200, 25);
  //handle
  rect07 = Bodies.rectangle(125, 180, 150, 65, 10);
  //tip
  // tri01 = Bodies.polygon(100, 200, 50, 212, 100, 225);
  //tri01 = Bodies.polygon(100, 200, 3, 100);
  tri02 = Bodies.fromVertices(100, 100, vertexSetsTriangle);




  ground = Bodies.rectangle(400, 800, 810, 25, {
    isStatic: true, angle: Math.PI * 0.00
    // isStatic: true, angle: Math.PI * 0.06
  });
  World.add(engine.world, [rect01, rect02, rect03, rect04, rect05, rect06, rect07, circ01, tri02, ground]);


  // setup mouse
  let mouse = Mouse.create(canvas.elt);
  let mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05, angularStiffness: 0 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);

  // run the engine
  Engine.run(engine);

}

function draw() {

  background(0);
  noStroke();

  fill(255);

 drawVertices(rect01.vertices);
 drawVertices(rect02.vertices);
 drawVertices(rect03.vertices);
 drawVertices(rect04.vertices);
drawVertices(rect05.vertices);
 drawVertices(rect06.vertices);
 drawVertices(rect07.vertices);
 drawVertices(circ01.vertices);

    drawVertices(tri02.vertices);

  // fill(128);
  // drawVertices(ground.vertices);

  drawMouse(mouseConstraint);

}


function drawMouse(mouseConstraint) {
  if (mouseConstraint.body) {
    var pos = mouseConstraint.body.position;
    var offset = mouseConstraint.constraint.pointB;
    var m = mouseConstraint.mouse.position;
    stroke(0, 255, 0);
    strokeWeight(2);
    line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
  }
}


function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}


function drawSprite(body, img) {
  const pos = body.position;
  const angle = body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(img, 0, 0);
  pop();
}
