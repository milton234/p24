
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var platform;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);




  //Create the Bodies Here.
   engine = Engine.create();
  world = engine.world;


  ground = new Ground(400,410,800,50);
  

  box1 = new Dustbin(600,380,70,140);
  
  paper = new Paper(100,100,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ground.display()
  box1.display()
  
  paper.display()

  
  
}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:4,y:-3})
  }
}






