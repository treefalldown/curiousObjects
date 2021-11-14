
//let boxX = 325;
//let speed = 3;

let angle = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);

}

function draw() {
  background(255);
  noStroke();

    push();
    translate(100 , 100);
    rotate(angle);
  //frame
  fill(0);
  rect(300, 200, 200, 200);
    pop();


   push();
    translate(200 , 100);
    rotate(angle);
  //coil1
  fill(255);
  rect(325, 225, 150, 65, 10);



  //coil2
  fill(255);
  rect(325, 310, 150, 65, 10);

  //corner circle
  fill(0)
  circle(500, 200, 50);
   pop();

   push();
    translate(300 , 100);
    rotate(angle);
  //clamp
  fill(0);
  rect(300, 125, 25, 75);
     pop();

     push();
    translate(200 , 100);
    rotate(angle);
  //clamp top
  fill(0);
  rect(275, 125, 75, 25);
     pop();

       push();
    translate(400 , 100);
    rotate(angle);
  //needle
  fill(0);
  rect(100, 200, 200, 25);
     pop();

       push();
    translate(600 , 100);
    rotate(angle);
  //handle
  fill(0);
  rect(125, 180, 150, 65, 10);
       pop();

         push();
    translate(500 , 100);
    rotate(angle);
  //tip
    fill(0);
  triangle(100, 200, 50, 212, 100, 225);
   pop();
      angle++;

}
