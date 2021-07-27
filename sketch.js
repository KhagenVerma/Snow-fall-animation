var backgroundImage1;
var boy, boyImage, boyImage2;
var pond1, pondImage;
var snowFall, snowFallAnimation;
var snowman,snowmanImage;

function preload(){
  backgroundImage = loadImage("bg.jpg")
  boyImage = loadImage("skiing.png")
  pondImage = loadImage("pond.png")
  boyImage2 = loadImage("FallingBoy.png")
  snowFallAnimation = loadImage("snow.png")
  snowmanImage = loadImage("snowman.png")
}

function setup() {
  backgroundImage1 = createSprite(400,200,20,20);
  backgroundImage1.addImage(backgroundImage);
  backgroundImage1.scale = 1.55
  pond1 = createSprite(550, 370, 50, 50);
  pond1.addImage(pondImage);
  pond1.scale = 0.3
  pond1.debug = true;
  pond1.setCollider("rectangle",0,0,700,170);

  boy = createSprite(250,180,20,20);
  boy.addImage(boyImage);
  boy.scale = 0.11;
  createCanvas(800,400);

  snowFall = createSprite(random(100, 700), 10,10);
  snowFall.addImage(snowFallAnimation);
  snowFall.scale = 0.2
  snowFall.velocityY = 3

  snowman = createSprite(300,300,50,50)
  snowman.addImage(snowmanImage);
  snowman.scale = 0.3
  
}

function draw() {
  background(255,255,255);  
  if(boy.isTouching(pond1)){
    boy.addImage(boyImage2);
    boy.setVelocity(0,0);
  }
  if(keyDown("DOWN_ARROW")){
    boy.velocityY=4;
    
  }
  if(keyDown("UP_ARROW")){
    boy.velocityY = -4;
    
  }
  if(keyDown("RIGHT_ARROW")){
    
    boy.velocityX= 4;
  }
  if(keyDown("LEFT_ARROW")){
    boy.velocityX = -4;
    
  }
  if(frameCount%20===0){
    snowFall = createSprite(random(100, 700), 10,10);
    snowFall.addImage(snowFallAnimation);
    snowFall.scale = 0.2
    snowFall.velocityY = 3
  }
  drawSprites();
}              