var sun;

var mercury,venus,earth,mars,jupiter,saturn;
function setup() {
  createCanvas(1000,600);
  sun=createSprite(500,300,50,50);
  mercury=createSprite(15,300,100,100);
  venus=createSprite(165,300,100,100);
  earth=createSprite(315,300,100,100);
  mars=createSprite(650,300,100,100);
  jupiter=createSprite(800,300,100,100);
  saturn=createSprite(950,300,100,100);
 
}

function draw() {
  background(255,255,255); 
  sun.shapeColor="yellow"
  mercury.shapeColor="red" 
  venus.shapeColor="red" 
  earth.shapeColor="red" 
  mars.shapeColor="red" 
  jupiter.shapeColor="red" 
  saturn.shapeColor="red" 

  sun.debug=true;
  mercury.debug=true;
  venus.debug=true;
  earth.debug=true;
  mars.debug=true;
  jupiter.debug=true;
  saturn.debug=true;

  sun.setCollider("circle");
  mercury.setCollider("circle");
  venus.setCollider("circle");
  earth.setCollider("circle");
  mars.setCollider("circle");
  jupiter.setCollider("circle");
  saturn.setCollider("circle");
 
  if (isTouching(sun,mercury)) {
    mercury.remove();
   }
   if (isTouching(sun,venus)) {
    venus.remove();
   }
   if (isTouching(sun,earth)) {
   earth.remove();
   }
   if (isTouching(sun,mars)) {
    mars.remove();
   }
   if (isTouching(sun,jupiter)) {
    jupiter.remove();
   }
   if (isTouching(sun,saturn)) {
    saturn.remove();
   }
   if (frameCount%60===0) {
    sun.width=sun.width+25;
    sun.height=sun.height+25;
  }
  
  drawSprites();
}