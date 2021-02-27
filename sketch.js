var balloon

function preload() {
  bg=loadImage("Hot Air Ballon-01.png");
  b1=loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
}
function setup() {
  createCanvas(1200,600);
  balloon=createSprite(250,250,20,20);
  balloon.scale = 0.5
  balloon.addAnimation("bal",b1);
}

function draw() {
  background(500,500);  
  background(bg);
  drawSprites();

  if(keyDown(LEFT_ARROW)){
    balloon.x=balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x= balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10;
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
  }
  fill("salmon");
  strokeWeight(3);
  stroke("indianRed");
  textSize(30);
  text("Use arrows to move the Hot Air Ballon", 40,40);
}