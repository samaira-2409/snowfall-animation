



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var engine,world;
var bgImg;
var bg;
var boy;




function preload(){
  bgImg = loadImage("snow1.jpg");
}





function setup() {
  createCanvas(800,400);

  

  engine = Engine.create();
	world = engine.world;

  
  var options={
    'isStatic':true
  }
  
  boy = Bodies.rectangle(400, 200, 50, 50,options);
  World.add(world,boy)

  


  
}

function draw() {
  
  background(bgImg); 
  Engine.update(engine);

rectMode(CENTER);
 rect(boy.position.x,boy.position.y,50,50)

}