const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var rect1,rect2,rect3,rect4,rect5;



function setup() {
  engine = Engine.create();
  createCanvas(800,800);

world = engine.world;
var options = {
  isStatic: true
}
rect1 = Bodies.rectangle(150,190,25,350,options);
World.add(world,rect1);


rect2 = Bodies.rectangle(750,190,25,350,options);
World.add(world,rect2);

rect3 = Bodies.rectangle(450,150,25,350,options);
World.add(world,rect3);

rect4 = Bodies.rectangle(500,190,25,350,options);
World.add(world,rect4);

rect5 = Bodies.rectangle(400,380,800,20,options)
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  fill("pink");
  rect(rect1.position.x,rect1.position.y,25,350);
  fill("pink");
  rect(rect2.position.x,rect2.position.y,25,350);
  fill("pink");
  rect(rect3.position.x,rect2.position.y,25,350);
  fill("pink");
  rect(rect4.position.x,rect2.position.y,25,350);
  fill("pink");
  rect(rect5.position.x,rect5.position.y,800,20);
  

  
  drawSprites();
}