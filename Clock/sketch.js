const diameter = 300;

function setup() {
  createCanvas(400, 400);
}

function drawClock(diameter) {
  const minDiv = [5, 10,15, 20, 25,30, 35, 40,45, 50, 55,60];
  
  push();
  fill(91, 194, 231)
  strokeWeight(3);
  circle(0, 0, diameter);
  circle(0, 0, 5);
  
  minDiv.forEach(drawMinLines);
  pop();
}

function drawMinLines(min) {
  d = diameter;
  let x1 = ((d-20) / 2) * sin(min*6);
  let y1 = -((d-20) / 2) * cos(min*6);
  let x2 = (d / 2) * sin(min*6);
  let y2 = -(d / 2) * cos(min*6);
  
  if(min == 60)
    line(x1,y1+20,x2,y2);
  else if(min == 15)
    line(x1-20,y1,x2,y2);
  else if(min == 30)
    line(x1, y1-20,x2,y2);
  else if(min == 45)
    line(x1+20,y1,x2,y2);
  else
    line(x1,y1,x2,y2);
}

function secondHand() {
  push();
  strokeWeight(2);
  angleMode(DEGREES);
  rotate(second() * 6);
  line(0, 0, 0, -diameter*.375);
  pop();
}

function minuteHand() {
  push();
  angleMode(DEGREES);
  rotate(minute() * 6);
  strokeWeight(4);
  line(0, 0, 0, -diameter*.325);
  pop();
}

function hourHand() {
  push();
  angleMode(DEGREES);
  if (hour() < 12) {
    rotate((hour() + 12) * 30);
  } else {
    rotate(hour() * 30);
  }
  strokeWeight(4);
  line(0, 0, 0, -diameter*.25);
  pop();
}

function draw() {
  background(25);
  translate(200, 200);
  drawClock(diameter);
  secondHand();
  minuteHand();
  hourHand();
  
  //console.log(13..toString(2));

}