
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


  
 
  
 

  

function setup() {
  createCanvas(500, 500);

  monkey = createSprite(80,350,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(200,350,900,10);
  ground.velocityX=-4
  ground.x = ground.width /2;
  console.log(ground.x)

  ground.visible=false
  
   FoodGroup = new Group();
  obstacleGroup = new Group();
  
  
  invisibleGround = createSprite(200,350,900,10);
  invisibleGround.visible = false;

  
}


function draw() {
background("pink")
   var survivalTime=0
   
   stroke("white")
  textSize(20)
  fill("white")
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,200,50);
  
   //stop monkey from falling down
  monkey.collide(invisibleGround);
  
  
  
  monkey.collide(ground);
  
   //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 160) {
        monkey.velocityY = -14;
    }
  
  //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  
  Food();
  Obstacle()
  drawSprites();
}

function Food(){
  if (frameCount % 80 === 0){
    banana = createSprite(600,120,40,10)
    banana.addImage("banana",bananaImage);
    banana.y = Math.round(random(80,120));
    banana.scale = 0.1;
    banana.velocityX = -3
    FoodGroup.add(banana)
    banana.lifetime=250
    banana.setCollider("rectangle",0,0,40,40)
  
  }
}

function Obstacle(){
   if (frameCount % 190 === 0){
     obstacle = createSprite(500,310,60,60)
     obstacle.addImage("obstacle",obstacleImage);
     obstacle.velocityX=-4
    
     obstacle.scale=0.2
     obstacleGroup.add(obstacle)
     obstacle.lifetime=250
     obstacle.setCollider("rectangle",0,0,40,40)


}
}