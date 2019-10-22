let s;
let fr = 5;
function setup() {
  createCanvas(400, 400);
  frameRate(fr);
  s = new snake();
}

function draw() {
  background(220);
  s.update();
  s.show();
  
  for(let i = 0; i<=width; i+=20){
    line(i, 0, i, height);
    line(0, i, width, i);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    s.dirX = -20;
    s.dirY = 0;
  } else if (keyCode === RIGHT_ARROW) {
    s.dirX = 20;
    s.dirY = 0;
  } else if (keyCode === UP_ARROW){
    s.dirX = 0;
    s.dirY = -20;
  } else if (keyCode === DOWN_ARROW){
    s.dirX = 0;
    s.dirY = 20; 
  }
}

