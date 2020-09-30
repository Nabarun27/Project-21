var bullet,wall,thickness;
var lbullet,lwall;

var speed, weight; 


function setup() {
  createCanvas(1600, 400);

 thickness=random(22,83);
  speed=random(223,321);
  
	weight=random(30,52)


	bullet=createSprite(50, 200, 50,10);   
  
	bullet.velocityX = speed;

  bullet.shapeColor=color(255,255,255);
  
  
  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

//bullet.velocityX=speed;
  if(hasCollided(bullet,wall))
  {
  	
  	var damage=(0.5 * weight*speed*speed)/(thickness*thickness*thickness);
  if(damage<10)
  {
    wall.shapeColor="green";
    bullet.velocityX=0;
  }
	

  if(damage>10)
  {
    wall.shapeColor="red";
    
  }
  
  drawSprites();
 
}
}

function hasCollided(lbullet,lwall)
{
   var bulletrightedge=lbullet.x+(lbullet.width/2);
   var wallleftedge=lwall.x-(lwall.width/2);
  if(bulletrightedge>=wallleftedge-50)
  {
    return true;
  }
  return false;
}
