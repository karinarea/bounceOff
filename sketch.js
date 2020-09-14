var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(400, 200, 50, 50);
  object1.velocityX = 3;
  object2 = createSprite(600, 200, 50, 50);
  object2.velocityX = -3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(movingRect, object2)){
  movingRect.shapeColor = "yellow";
  object2.shapeColor = "yellow";
  
 }
 else{
  movingRect.shapeColor = "blue";
  object2.shapeColor = "blue";
 }

 bounceOff(object1, object2);
  drawSprites();
}




/*
return - keyword
 - when used in an user-defined function with a value (data) next to it
 ===> will give (return) that specific data to the calling function


 ARGUMENTS
  - real values given/passed to a function
  - takes space in the computer's memory
  - they exist

 PARAMETERS
  - Non existent values
  - Takes no memory
  - PLACEHOLDERS for arguments
*/