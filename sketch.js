var score = 0;

function preload() {
   building = loadImage("sprites/images.png");
   zombies = loadImage("sprites/zombie1.jpg");
}

function setup() {
  createCanvas(1200,600);
  building = createSprite(50,400,100,400);
 
  
 // slingshot = new SlingShot(50,100,50,50);
}

function draw() {
  background(0); 


        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
 // if(zombies.collide(building)) {
   // text("GAME OVER",600,300);
    //spawnZombies = null;
  //}


  spawnZombies(); 

  drawSprites();
}

 function spawnZombies(){
   if(World.frameCount % 100 === 0) {
         var zombies = createSprite(1150,550,10,50);
         zombies.velocityX = -2;
         zombies.lifetime = 540;
         drawSprites();
     }
}

