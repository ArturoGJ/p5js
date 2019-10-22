var osc;
var freq;
var playing = false;

function setup() {
  createCanvas(407, 200);
  backgroundColor = color(0);

  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(0);
  osc.amp(1000);
  osc.start();
}

function draw() {
  background(backgroundColor)

  fill(255);
  rect(0, 0, 50, height); //Do
  rect(51, 0, 50, height); //Re
  rect(102, 0, 50, height); //Mi
  rect(153, 0, 50, height); //Fa
  rect(204, 0, 50, height); //Sol
  rect(255, 0, 50, height); //La
  rect(306, 0, 50, height); //Si
  rect(357, 0, 50, height); //Do

  fill(0);
  rect(41.67, 0, 16.66, height / 1.6); //Do#
  rect(93.67, 0, 16.66, height / 1.6); //Re#
  rect(195.67, 0, 16.66, height / 1.6); //Fa#
  rect(246.67, 0, 16.66, height / 1.6); //Sol#
  rect(297.67, 0, 16.66, height / 1.6); //La#
  rect(348.67, 0, 16.66, height / 1.6); //Si#


  if ((mouseX > 0 && mouseX < 41.67 && mouseY < height && mouseY > 0 && mouseIsPressed)|| keyIsDown(65)) {
    osc.freq(130.8128);
    osc.amp(1000, .05);
  }
  else if ((mouseX > 41.67 && mouseX < 93.67 && mouseY < height && mouseY > 0 && mouseIsPressed)|| keyIsDown(83) ) {
    osc.freq(146.8324);
    osc.amp(1000, .05);
  }  else if ((mouseX > 93.67 && mouseX < 144.67 && mouseY < height && mouseY > 0 && mouseIsPressed)|| keyIsDown(68)) {
    osc.freq(164.8138);
    osc.amp(1000, .05);
  } else if ((mouseX > 144.67 && mouseX < 195.67 && mouseY < height && mouseY > 0 && mouseIsPressed)|| keyIsDown(70)) {
    osc.freq(174.6141);
    osc.amp(1000, .05);
  } else if ((mouseX > 195.67 && mouseX < 246.67 && mouseY < height && mouseY > 0 && mouseIsPressed)|| keyIsDown(71)) {
    osc.freq(195.9977);
    osc.amp(1000, .05);
  } else if ((mouseX > 246.67 && mouseX < 297.67 && mouseY < height && mouseY > 0 && mouseIsPressed)|| keyIsDown(72)) {
    osc.freq(220.0000);
    osc.amp(1000, .05);
  } else if ((mouseX > 246.67+51 && mouseX < 297.67+51 && mouseY < height && mouseY > 0 && mouseIsPressed)|| keyIsDown(74)) {
    osc.freq(246.9417);
    osc.amp(1000, .05);
  } else if ((mouseX > 246.67+(51*2) && mouseX < 297.67+(51*2) && mouseY < height && mouseY > 0 && mouseIsPressed)|| keyIsDown(75)) {
    osc.freq(261.6256);
    osc.amp(1000, .05);
  } else {
    osc.freq(0);
  }
}