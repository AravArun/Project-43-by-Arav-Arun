var scene, jet;
var scene_img, jet_img, bomb_img;

function preload(){
  scene_img = loadImage("media/bgImage.jpg");
  jet_img = loadImage('media/jet.png');
  bomb_img = loadImage('media/bomb.png');
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 130);

  scene = createSprite(width/2, height/2 - 100, width, height);
  scene.addImage(scene_img);
  scene.scale = 4;
  scene.velocityX = -3;

  jet = createSprite(200, 200);
  jet.addImage(jet_img);
  jet.scale = 0.5;
}

function draw() {
  background("lightBlue");  
  
  if(scene.x < width/4){
    scene.x = width/2;
  }

  if(keyWentDown('space')){
    spawnBomb();
  }
  spawnFriends();
  drawSprites();
}

function spawnBomb(){
  var bomb = createSprite(jet.x, jet.y);
  bomb.velocityY = 3;
  bomb.addImage(bomb_img);
  bomb.scale = 0.1;
}

function spawnFriends(){
  var friends = createSprite(width, 680);
  friends.velocityX = -3;
}