
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var spawnObstacles, FoodGroup
var survivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
  
}


function draw() {         
  background("white")
  stroke("white")
  textSize(20);
  fill("white");
  text("score ", + score,500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survival Time " + survivalTime, 100,50);
  
  monkey.collide(ground)
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
if(keyDown("space")){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  
 
  
  drawSprites();
  spawnObstacles();
  spawnFood();
}
function spawnObstacles(){
  if(frameCount%300===0){
  var obstacle = createSprite(120,200,20,20)
  obstacle.x = Math.round(random(100,400));
   obstacle.y = Math.round(random(300,350)); 
    obstacle.velocityX = -5;
  obstacle.addImage(obstacleImage);
    obstacle.scale = 0.24;
    obstacle.lifetime = 300;
    
  }
}

function spawnFood(){
  if(frameCount%80===0){
    var banana = createSprite(200,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.x = Math.round(random(100,400));
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.lifetime = 300;
    banana.velocityX = -4;
    FoodGroup.add(banana);
  }
  
}



