// Benedikt Groß
// Example is based on examples from: http://brm.io/matter-js/, https://github.com/shiffman/p5-matter

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;

const drawBody = Helpers.drawBody;
const drawMouse = Helpers.drawMouse;
const drawConstraint = Helpers.drawConstraint;

let engine;
let ground;

let ball1;
let ball2;
let ball3;
let ball4;
let ball5;
let ball6;
let ball7;
let ball8;
let ball9;
let ball10;
let ball11;
let ball12;
let ball13;
let ball14;
let ball15;
let ball16;
let ball17;
let ball18;
let ball19;
let ball20;
let ball21;
let ball22;
let ball23;
let ball24;
let ball25;
let ball26;
let ball27;
let ball28;
let ball29;
let ball30;
let ball31;
let ball32;
let ball33;
let ball34;
let ball35;
let ball36;
let ball37;
let ball38;
let ball39;
let ball40;

let catapult;
let catapultSpacer;
let constraint;


function setup() {
  const canvas = createCanvas(510, 510);

  // create an engine
  engine = Engine.create();

  // add revolute constraint for catapult
  catapult = Bodies.rectangle(300, 520, 500, 20);
  constraint = Constraint.create({
    pointA: {x: 400, y: 520},
    bodyB: catapult,
    stiffness: 1,
    length: 0
  });
  World.add(engine.world, [catapult, constraint]);

  // balls and catapult spacer for limit
  catapultSpacer = Bodies.rectangle(160, 555, 20, 30, {isStatic: true });
  ball1 = Bodies.circle(300, 452, 12);
  ball2 = Bodies.circle(453, 300, 12);
  ball3 = Bodies.circle(301, 146, 12);
  ball4 = Bodies.circle(147, 300, 12);
  ball5 = Bodies.circle(408, 192, 12);
  ball6 = Bodies.circle(389, 177, 12);
  ball7 = Bodies.circle(369, 165, 12);
  ball8 = Bodies.circle(347, 156, 12);
  ball9 = Bodies.circle(324, 150, 12);
  ball10 = Bodies.circle(424, 211, 12);
  ball11 = Bodies.circle(437, 231, 12);
  ball12 = Bodies.circle(446, 253, 12);
  ball13 = Bodies.circle(450, 276, 12);
  ball14 = Bodies.circle(408, 405, 12);
  ball15 = Bodies.circle(450, 324, 12);
  ball16 = Bodies.circle(446, 347, 12);
  ball17 = Bodies.circle(437, 369, 12);
  ball18 = Bodies.circle(424, 388, 12);
  ball19 = Bodies.circle(389, 420, 12);
  ball20 = Bodies.circle(369, 433, 12);
  ball21 = Bodies.circle(347, 444, 12);
  ball22 = Bodies.circle(324, 450, 12);
  ball23 = Bodies.circle(194, 405, 12);
  ball24 = Bodies.circle(276, 450, 12);
  ball25 = Bodies.circle(253, 444, 12);
  ball26 = Bodies.circle(232, 433, 12);
  ball27 = Bodies.circle(212, 420, 12);
  ball28 = Bodies.circle(177, 388, 12);
  ball29 = Bodies.circle(163, 369, 12);
  ball30 = Bodies.circle(155, 347, 12);
  ball31 = Bodies.circle(148, 324, 12);
  ball32 = Bodies.circle(194, 192, 12);
  ball33 = Bodies.circle(148, 276, 12);
  ball34 = Bodies.circle(155, 253, 12);
  ball35 = Bodies.circle(163, 230, 12);
  ball36 = Bodies.circle(177, 210, 12);
  ball37 = Bodies.circle(212, 176, 12);
  ball38 = Bodies.circle(232, 163, 12);
  ball39 = Bodies.circle(253, 153, 12);
  ball40 = Bodies.circle(276, 149, 12);

  World.add(engine.world, [catapultSpacer, ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15, ball16, ball17, ball18, ball19, ball20, ball21, ball22, ball23, ball24, ball25, ball26, ball27, ball28, ball29, ball30, ball31, ball32, ball33, ball34, ball35, ball36, ball37, ball38, ball39, ball40]);

  // ground
  ground = Bodies.rectangle(400, height-10, 810, 25, {isStatic: true});
  World.add(engine.world, [ground]);

  // setup mouse
  const mouse = Mouse.create(canvas.elt);
  const mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);

  // run the engine
  Engine.run(engine);
}

function draw() {
  background(0);

  stroke(255);
  fill(255);
  drawBody(catapult);
  drawBody(catapultSpacer);
  drawBody(ball1);
  drawBody(ball2);
  drawBody(ball3);
  drawBody(ball4);
  fill(48, 213, 200)
  drawBody(ball5);
  drawBody(ball6);
  drawBody(ball7);
  drawBody(ball8);
  drawBody(ball9);
  drawBody(ball10);
  drawBody(ball11);
  drawBody(ball12);
  drawBody(ball13);
  drawBody(ball14);
  drawBody(ball15);
  drawBody(ball16);
  drawBody(ball17);
  drawBody(ball18);
  drawBody(ball19);
  drawBody(ball20);
  drawBody(ball21);
  drawBody(ball22);
  drawBody(ball23);
  drawBody(ball24);
  drawBody(ball25);
  drawBody(ball26);
  drawBody(ball27);
  drawBody(ball28);
  drawBody(ball29);
  drawBody(ball30);
  drawBody(ball31);
  drawBody(ball32);
  drawBody(ball33);
  drawBody(ball34);
  drawBody(ball35);
  drawBody(ball36);
  drawBody(ball37);
  drawBody(ball38);
  drawBody(ball39);
  drawBody(ball40);

  stroke(128);
  strokeWeight(2);
  drawConstraint(constraint);

  noStroke();
  fill(128);
  drawBody(ground);

  drawMouse(mouseConstraint);
}
