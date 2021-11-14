let angle=0;

//Rotation around the center
let rotateCenterX = 300;
let rotateCenterY = 300;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {
  background(250);
  scale(0.85);

  //top circle
  fill(209);

  push();
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  rect(306-rotateCenterX,136-rotateCenterY,8,24,5)
  rect(298-rotateCenterX,136-rotateCenterY,8,24,5)
  rect(291-rotateCenterX,136-rotateCenterY,8,24,5)
  pop()
  angle++;

  //down circle
  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(300-rotateCenterX,452-rotateCenterY,24)
  pop()

  //right circle
  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(453-rotateCenterX,300-rotateCenterY,24)
  pop()

  //left circle
  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(147-rotateCenterX,300-rotateCenterY,24)
  pop()

  //north-east circle
  fill(48, 213, 200)

  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(408-rotateCenterX,192-rotateCenterY,24)
  pop()

  fill(209)

  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(389-rotateCenterX,177-rotateCenterY,24)
  circle(369-rotateCenterX,165-rotateCenterY,24)
  circle(347-rotateCenterX,156-rotateCenterY,24)
  circle(324-rotateCenterX,150-rotateCenterY,24)
  circle(424-rotateCenterX,211-rotateCenterY,24)
  circle(437-rotateCenterX,231-rotateCenterY,24)
  circle(446-rotateCenterX,253-rotateCenterY,24)
  circle(450-rotateCenterX,276-rotateCenterY,24)
  pop()

  //south-east circle
  fill(48, 213, 200)

  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(408-rotateCenterX,405-rotateCenterY,24)
  pop()

  fill(209)

  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(450-rotateCenterX,324-rotateCenterY,24)
  circle(446-rotateCenterX,347-rotateCenterY,24)
  circle(437-rotateCenterX,369-rotateCenterY,24)
  circle(424-rotateCenterX,388-rotateCenterY,24)
  circle(389-rotateCenterX,420-rotateCenterY,24)
  circle(369-rotateCenterX,433-rotateCenterY,24)
  circle(347-rotateCenterX,444-rotateCenterY,24)
  circle(324-rotateCenterX,450-rotateCenterY,24)
  pop()

  //south-west circle
  fill(48, 213, 200)

  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(194-rotateCenterX,405-rotateCenterY,24)
  pop()

  fill(209)

  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(276-rotateCenterX,450-rotateCenterY,24)
  circle(253-rotateCenterX,444-rotateCenterY,24)
  circle(232-rotateCenterX,433-rotateCenterY,24)
  circle(212-rotateCenterX,420-rotateCenterY,24)
  circle(177-rotateCenterX,388-rotateCenterY,24)
  circle(163-rotateCenterX,369-rotateCenterY,24)
  circle(155-rotateCenterX,347-rotateCenterY,24)
  circle(148-rotateCenterX,324-rotateCenterY,24)
  pop()

  //north-west circle
  fill(48, 213, 200)

  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(194-rotateCenterX,192-rotateCenterY,24)
  pop()

  fill(209)

  push()
  translate(rotateCenterX, rotateCenterY);
  rotate(angle);
  circle(148-rotateCenterX,276-rotateCenterY,24)
  circle(155-rotateCenterX,253-rotateCenterY,24)
  circle(163-rotateCenterX,230-rotateCenterY,24)
  circle(177-rotateCenterX,210-rotateCenterY,24)

  circle(212-rotateCenterX,176-rotateCenterY,24)
  circle(232-rotateCenterX,163-rotateCenterY,24)
  circle(253-rotateCenterX,153-rotateCenterY,24)
  circle(276-rotateCenterX,149-rotateCenterY,24)
  pop()
  }
