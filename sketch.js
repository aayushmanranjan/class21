
var fixedRect, movingRect;
var gameObject1, gameObject2;
var ball1,ball2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  ball1 = createSprite(50,200,20,20);
  ball1.shapeColor = "red";
  ball1.velocity = 5;

  ball2 = createSprite(350,250,20,20);
  ball2.shapeColor = "red";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching()){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else {
    movingRect.shapeColor = "green";
  
    fixedRect.shapeColor = "green"
  }
 
  collide(ball1,ball2);
//bounceOff(movingRect,fixedRect)
  drawSprites();
  
}

function isTouching(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2) {
    
    return true;
  }
  else {
    return false;
  } 
}
function collide(object1,object2){
  if (object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.x - object1.x < object1.width/2 +object2.width/2
    && object1.y - object2.y < object1.height/2 +object2.height/2
    && object2.y - object1.y < object1.height/2 +object2.height/2) {
      object1.setVelocity(0,0);
    
    }
}


