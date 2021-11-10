let size=50;
let i=4;
let angle=20;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES)
}

function draw() {
  background(250);


  //top circle
  fill(209);

  push();
  translate (mouseX,mouseY);
  rotate(angle);
  rect(304,136,8,24,5)

  pop();

  push();
 translate (mouseX,mouseY);
  rect(296,136,8,24,5)

   pop();

    push();
  translate (mouseX,mouseY);
  rect(288,136,8,24,5)
     pop();

  //down circle
   rotate(angle);
  circle(300,452,24)

  //right circle
   rotate(angle);
  circle(453,300,24)


  //left circle
   rotate(angle);
  circle(147,300,24)

  //north-east circle
  fill(48, 213, 200)
  circle(408,192,24)

  fill(209)
  circle(389,177,24)

   translate(i,25);
  circle(369,165,24)

   translate(i,25);
  circle(347,156,24)

   translate(i,25);
  circle(324,150,24)


   translate(i,25);
  circle(424,211,24)

   translate(i,25);
  circle(437,231,24)

   translate(i,25);
  circle(446,253,24)

   translate(i,25);
  circle(450,276,24)

  //south-east circle
  fill(48, 213, 200)

  circle(408,405,24)

  fill(209)
  circle(450,324,24)

   translate(i,25);
  circle(446,347,24)

   translate(i,25);
  circle(437,369,24)

  circle(424,388,24)

  push()
  translate(this.x,this.y);
  rotate(angle)

  circle(389,420,24)
  circle(369,433,24)
  circle(347,444,24)
  circle(324,450,24)

  //south-west circle
  fill(48, 213, 200)

  circle(194,405,24)

  fill(209)

  translate(i,25);
  circle(276,450,24)

  translate(i,25);
  circle(253,444,24)

  translate(i,25);
  circle(232,433,24)

  translate(i,25);
  circle(212,420,24)

  translate(i,25);
  circle(177,388,24)

  translate(i,25);
  circle(163,369,24)

  translate(i,25);
  circle(155,347,24)

  translate(i,25);
  circle(148,324,24)


  //north-west circle
  fill(48, 213, 200)

  i=i+1;

  translate(i,6);
  circle(194,192,24)

  fill(209)

  translate(i,5);
  circle(148,276,24)

  translate(i,4);
  circle(155,253,24)

   translate(mouseX,mouseY);
  circle(163,230,24)

  translate(i,2);
  circle(177,210,24)

  translate(i,1);

  circle(212,176,24)

  translate(i,0);
  circle(232,163,24)

   angle++;

  translate(mouseX,mouseY);
  circle(253,153,24)


  translate(200,0);
  rotate(angle)
  circle(276,149,24)



}
