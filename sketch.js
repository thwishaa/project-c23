const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var rect1,rect2,rect3,rect4;



function setup() {
  engine = Engine.create();
  createCanvas(800,400);

world = engine.world;
var options = {
  isStatic: true
}
rect1 = Bodies.rectangle(150,190,25,350,options);
World.add(world,rect1);

rect2 = Bodies.rectangle(750,190,25,350,options);
World.add(world,rect2);

rect3 = Bodies.rectangle(450,50,600,25,options);
World.add(world,rect3);

rect4 = Bodies.rectangle(450,650,600,25,options);
World.add(world,rect4);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(rect1.position.x,rect1.position.y,25,350);
  rect(rect2.position.x,rect2.position.y,25,350);
  rect(rect3.position.x,rect2.position.y,600,25);
  rect(rect4.position.x,rect2.position.y,600,25);
  drawSprites();
}