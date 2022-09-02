var ball,ballImg;
function preload(){
ballImg=loadImage("balloon.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(200,200,20,20);
  ball.shapeColor="red";
  ball.addImage(ballImg);
  ball.scale=0.08;

}

function draw() {
  background(220);
  if(keyDown(UP_ARROW)){
    ball.y-=2;
  }
  if(keyDown(DOWN_ARROW)){
    ball.y+=2;
  }
 drawSprites();
}