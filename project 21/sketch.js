
var bullet , wall, thickness;
var speed,weight;

function setup() {
  
  createCanvas(1600,500);
  speed=random(223,321);
  weight=random(30 , 52);
  bullet=createSprite(50, 200, 80, 20);
  bullet.velocityX=speed;
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  thickness=random(22,83)
  
}

function draw() {
  background(0,0,0);  
  bullet.collide(wall)

   if(hasCollided(bullet,wall)){
    //bullet.velocityX=0;
    var damage= 0.5 * weight * speed * speed/ (thickness * thickness * thickness)

    if(damage>10){
      car.shapeColor=color(225,0,0)
    }
    
    if(damage<10){
      car.shapeColor=color(0,255,0)
    }

  } 
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge= bullet.x + bullet.width;
  wallLeftEdge= wall.x;

  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }

  return false;
}