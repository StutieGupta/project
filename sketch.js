var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(800,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83)

  bullet = createSprite(40,200,50,10);
  bullet.shapeColor = "white"
  bullet.velocityX = speed;

  wall = createSprite(700,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(25,255,255); 
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage < 10){
      bullet.shapeColor = "green";
    }

    if(deformation > 10){
      bullet.shapeColor = "red";
    }
  }
  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width
  wallLeftEdge = lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
    return false
}
