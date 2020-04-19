var fixedSprite;
var MovingSprite;

function setup() {
  createCanvas(1000,1000);
  fixedSprite = createSprite(100,200,70,40);
  MovingSprite = createSprite(150,150,40,40);
  fixedSprite.shapeColor="green";
  MovingSprite.shapeColor="green";
}

function draw() {
  background(0,0,0); 
  MovingSprite.x = World.mouseX;
  MovingSprite.y = World.mouseY;
  
  if(fixedSprite.x-MovingSprite.x<fixedSprite.width/2+MovingSprite.width/2 && 
    MovingSprite.x-fixedSprite.x<fixedSprite.width/2+MovingSprite.width/2 &&
    fixedSprite.y-MovingSprite.y<fixedSprite.width/2+MovingSprite.width/2 && 
    MovingSprite.y-fixedSprite.y<fixedSprite.width/2+MovingSprite.width/2){
    fixedSprite.shapeColor="red";
    MovingSprite.shapeColor="red";
  }
  else{
    fixedSprite.shapeColor="green";
    MovingSprite.shapeColor="green";
  }

  drawSprites();
}