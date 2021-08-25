
var boy,boy_running, boy_collided, boyAnimation
var path, pathImage;
 

function preload() {

pathImage = loadImage("path.png")
boyImage = loadAnimation("Runner-1.png", "Runner-2.png")
}


function setup(){

  
  createCanvas(400,400);
 
 
 path = createSprite(200,200)
 path.addImage("ground",pathImage);
 path.velocityY = 4;
 path.scale = 1.2

 boy = createSprite(180,340,30,30)
 boy.addAnimation("boy_running",boyImage);
 boy.scale = 0.08;

 invisibleBoundries1 = createSprite(0,0,100,800);
 invisibleBoundries1.visible = false;

 invisibleBoundries2 = createSprite(410,0,100,800)
 invisibleBoundries2.visible = false;
  


}

function draw() {
  background("280");
  
console.log(boy.y)
path.velocityY = 4;
boy.x = World.mouseX

if(path.y > 400){
   path.y = height/2;
}
edges = createEdgeSprites()
boy.collide(edges)
boy.collide(invisibleBoundries1);
boy.collide(invisibleBoundries2);

drawSprites();
  
}


