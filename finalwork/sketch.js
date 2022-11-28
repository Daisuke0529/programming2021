// 最終課題を制作しよう

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  fill(0);
  ellipse(width/2,height/2,100,100);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
