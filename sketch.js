var backImage,ground;
var backgroundSprite;
var monkey,banana,stone,score,foodGroup,stoneGroup;
var player_running, bananaImage, obstacle_img;
var score = 0;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png");
  
}
function setup() {
  createCanvas(800, 400);
  backgroundSprite = createSprite(0,0,800,400);
  backgroundSprite.addImage(backImage);
  backgroundSprite.scale = 1.5;
  backgroundSprite.velocityX = -4;
  ground = createSprite(400,350,800,10);
  score = 0
  ground.velocityX = -4;
  ground.visible = false;
  monkey = createSprite(150,320,10,10);
  monkey.addAnimation("running", player_running);
  monkey.scale = 0.1;
  foodGroup = new Group();
  stoneGroup = new Group();
  
  score = 0;
}

function draw() {
  background(220);
  
  
  
  if(backgroundSprite.x < 100){
    backgroundSprite.x = backgroundSprite.width/2;
  }
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(foodGroup.isTouching(monkey)){
    foodGroup.destroyEach();
    score = score + 2;
  }
  
  switch(score){
    case 10: monkey.scale=0.12;
      break;
    case 20: monkey.scale=0.14;
      break;
     case 30: monkey.scale=0.16;
      break;
      case 40: monkey.scale=0.18;
      break;
      default:break;
  }
  
  if(keyDown("space") ) {
      monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  food();
  stone();
  stroke("white");
  textSize(20);
  fill("white");
  drawSprites();
   text("Score: "+ score, 300,200);
}

function food() {
   if (frameCount % 80 === 0) {
 var banana = createSprite(600,250,40,10);
 banana.addAnimation("banana", bananaImage);
 banana.y = random(120,200);
 banana.velocityX = -5;
  banana.scale = 0.05;
   banana.lifetime = 300;
     foodGroup.add(banana);
   }
}

function stone() {
   if (frameCount % 80 === 0) {
 var stone = createSprite(600,250,40,10);
 stone.addAnimation("stone", obstacle_img);
 stone.y = random(310,330);
 stone.velocityX = -5;
  stone.scale = 0.05;
     stone.scale = 0.15;
   stone.lifetime = 300;
     stoneGroup.add(stone);
   }
}