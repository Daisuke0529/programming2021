// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  fill(255);
  ellipse(width/2,height/2,30,30);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
