function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(255, 255, 255);
  push();
  fill(128,128,128);
  circle(300,300,600)
  pop();
  push();
  stroke(0)
  circle(300,300,300)
  pop();
  //dial diagram
  rectMode(CENTER);
  stroke(0);
  rect(300, 300, 85, 85, 20);
  stroke(0);
  rect(300, 300, 75, 75, 10);
  //belt
  quad(270, 260, 275, 40, 325, 40, 330, 260);
  quad(270, 340, 330, 340, 325, 587, 275, 587);
  stroke(0);
  rectMode(CENTER);
  rect(300, 110, 70, 15);
  //punch holes
  rectMode(CENTER);
  push();
  y = 550;
  for (let i = 0; i < 6; i++) {
    fill(128, 128, 128);
    rect(300, y, 22, 7, 3);
    y = y - 20;
  }

  pop();
  //buckle
  rectMode(CENTER);
  rect(300, 55, 70, 30);
  push();
  fill(128, 128, 128);
  rect(300, 60, 55, 20);
  pop();
  rect(300, 60, 8, 30);
  //logo
  push();
  fill(0,0,0);
  y = 325;//3rd column
  for (let i = 0; i < 5; i++) {
    ellipse(300,y,8,8);
    y = y - 12;
  }
  y = 310;//2nd column
  for (let i = 0; i < 3; i++) {
    ellipse(285,y,7,7);
    y = y - 10;
  }
  y = 312;//4th column
  for (let i = 0; i < 3; i++) {
    ellipse(315,y,9,9);
    y = y - 12;
  }
   ellipse(273,300,6,6);//1 st column
  ellipse(328,300,9,9);//5th column
  pop();





}
