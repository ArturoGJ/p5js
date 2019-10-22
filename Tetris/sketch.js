let w=240;
let h=440;
let fr = 1;
function setup() {
  createCanvas(w, h);
  frameRate(fr);
  p1 = new pieces();
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    p1.posx -= 20;
  } else if (keyCode === RIGHT_ARROW) {
    p1.posx += 20;
  } else if (keyCode === UP_ARROW){

  } else if (keyCode === DOWN_ARROW){

  }
}

function draw() {
  background(256);
  for(let i = 0; i<=h; i+=20){
    line(i, 0, i, h);
    line(0, i, w, i);
  }
  p1.display();
  p1.update();
}

