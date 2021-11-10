function setup() {
  createCanvas(600, 600);
   rectMode(CENTER)
  ellipseMode(CENTER)
 noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(000);

fill(color(152));
circle(300, 185, 296)

fill(color(0));
rect(300, 208, 300, 313);


fill(color(152));
rect(300, 362, 140, 400, 5, 5, 3, 3);

fill(color(152));
rect(300, 104, 140, 110, 15, 15, 3, 3);

fill(color(0));
push()
    translate(398, 70);
    rotate(175);
    rect(0, 0, 60, 70, 5);
pop()

push()
    translate(202, 70);
    rotate(-175);
    rect(0, 0, 60, 70, 5);
pop()

fill(color(50));
rect(300, 114, 58, 90, 20, 20, 0, 0);

fill(color(100));
rect(300, 119, 40, 78, 10, 10, 0, 0);
fill(color(200));
rect(300, 116, 40, 70, 10, 10, 10, 10);

fill(color(50));
rect(300, 140, 30, 8, 4, 4, 4, 4)

fill(color(70));
rect(347, 132, 36, 34, 0, 7, 7, 0)


fill(color(50));
rect(333, 132, 6, 33, 3)
rect(355, 132, 6, 33, 3)



fill(color(0));
rect(255, 104, 50, 2);
rect(345, 104, 50, 2);

}
