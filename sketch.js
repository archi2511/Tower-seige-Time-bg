const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var box1,box2,box3;
var box4,box5,box6;
var ground,ground2;
var shooter;
var chain;
 var engine,world;
var score=0;
var bg = "bg.png";
var backgroundImage;

function preload(){
  getTime();
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  box1 = new Box(550,175,40,40);
  box2 = new Box(610,175,40,40);
  box3 = new Box(670,175,40,40);
  box4 = new Box(580,135,40,40);
  box5 = new Box(640,135,40,40);
  box6 = new Box(610,95,40,40);

  ground = new Ground(610,200,200,10);
  ground2 = new Ground(400,390,800,20);

  shooter = new Shot(100,230,20);
  chain = new Chain (shooter.body,{x:100,y:200});

  /*box1.stroke("pink");
  box2.stroke("blue");
  box3.stroke("yellow");
  box4.stroke("red");
  box5.stroke("green");
  box6.stroke("purple");
  ground.stroke("white");
  ground2.stroke("brown");*/

}

function draw() {
  if(backgroundImage){
    background(backgroundImage);
  }
  
  Engine.update(engine);
  text ("score: "+ score,width-300,50);
  
  shooter.display();
  chain.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();

  ground.display();
  ground2.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
      }

function mouseReleased(){
    chain.fly();
}

async function getTime(){
   var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
   var responseJson = await response.json ();
   var dateTime = responseJson.datetime;
   console.log(dateTime);
   var hour = dateTime.slice(11,13);
   if(hour>= 06 && hour<= 19){
     bg = "bg.png";
   }
   else{
     bg = "bg2.jpg";
   }
   backgroundImage = loadImage(bg);
}

/*function keyPressed(){
  if(keyCode === 32){
    chain.attach(this.shooter);
  }
}*/