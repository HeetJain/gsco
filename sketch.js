var car1,car2,car3,car4,wall1,wall2,wall3,wall4;
var speed,weight;

function setup() {
  createCanvas(1600,970);

  speed=random(50,100,100,150,250,300);
  weight=random(400,1500);

  car1 = createSprite(50, 200, 50, 50);
  car1.shapeColor=color("white");
  car1.velocityX = speed;

  wall1 = createSprite(1500,200,60,200);
  wall1.shapeColor=color(80,80,80);

  border1 = createSprite(800,310,1600,5);
  border1.shapeColor=color("white");

  car2 = createSprite(50, 420, 50, 50);
  car2.shapeColor=color("white");
  car2.velocityX = speed;

  wall2 = createSprite(1500,420,60,200);
  wall2.shapeColor=color(80,80,80);

  border2 = createSprite(800,530,1600,5);
  border2.shapeColor=color("white");

  car3 = createSprite(50, 640, 50, 50);
  car3.shapeColor=color("white");
  car3.velocityX = speed;

  wall3 = createSprite(1500,640,60,200);
  wall3.shapeColor=color(80,80,80);

  border3 = createSprite(800,750,1600,5);
  border3.shapeColor=color("white");

  car4 = createSprite(50, 860, 50, 50);
  car4.shapeColor=color("white");
  car4.velocityX = speed;

  wall4 = createSprite(1500,860,60,200);
  wall4.shapeColor=color(80,80,80);

 
}

function draw() { 
  background("black");

  if(wall1.x-car1.x < wall1.width+car1.width/2 ||
     wall2.x-car2.x < wall2.width+car2.width/2 ||
     wall3.x-car3.x < wall3.width+car3.width/2 ||
     wall4.x-car4.x < wall4.width+car4.width/2){

         car1.velocityX = 0
         car2.velocityX = 0;
         car3.velocityX = 0;
         car4.velocityX = 0;

         var deformation=0.5 * weight * speed  * speed/22509;

         if(deformation > 180){
          car1.shapeColor=color(255,0,0);
         }
       
         if(deformation < 180 && deformation > 100){
           car1.shapeColor=color(230,230,0);
       }

       if(deformation < 100){
        car2.shapeColor=color(0,255,0);
       } 
       
       if(deformation > 180){
        car2.shapeColor=color(255,0,0);
       }
     
       if(deformation < 180 && deformation > 100){
         car2.shapeColor=color(230,230,0);
      }

      if(deformation < 100){
        car2.shapeColor=color(0,255,0);
      }

      if(deformation > 180){
        car3.shapeColor=color(255,0,0);
      }
    
      if(deformation < 180 && deformation > 100){
        car3.shapeColor=color(230,230,0);
      }

      if(deformation < 100){
      car3.shapeColor=color(0,255,0);
      }

      if(deformation > 180){
          car4.shapeColor=color(255,0,0);
      }
      
      if(deformation < 180 && deformation > 100){
          car4.shapeColor=color(230,230,0);
      }

      if(deformation < 100){
        car4.shapeColor=color(0,255,0);
      }

      }

  drawSprites();
}