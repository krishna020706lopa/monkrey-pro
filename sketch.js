var monkey,monkey_running;
var banana,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var more;
var ground;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}
function setup() {
createCanvas(600,400);
  monkey=createSprite(80,390,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(200,400,2000,10);
  ground.velocityX=-4;
  
 
  //create Obstacle and Cloud Groups
   obstacleGroup= createGroup();
  FoodGroup = createGroup();
   
  score = 0;
  more=0;
}


function draw() {
background(0,180,0);
   stroke("red");
   textSize(20);
   fill("white");
  text("Survival time: "+ Math.round(score), 200,150);
  
  stroke("white");
  fill("Black");
  textSize(20);
  text("Hunger:"+more,500,70);
  //scoring
    score = score + Math.round(getFrameRate()/60);
  
  if(keyDown("space")&& monkey.y >= 350) {
        monkey.velocityY = -20;
    }
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    //jump when the space key is pressed
    
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    more=more+1;
  }
  console.log(monkey.Y);
  spawnBanana();
  spawnObstacles()
   //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
  //stop trex from falling down
  monkey.collide(ground);
   drawSprites();
}
function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 160 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(200,250));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;

    //add each cloud to the group
    FoodGroup.add(banana);
  }
}
function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(600,360,10,40);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    
    //add each cloud to the group
   obstacleGroup.add(obstacle);
  }
}




