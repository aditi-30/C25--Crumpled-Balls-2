var dustbin1;
var dustbin2;
var dustbin3;
var paperobject;
var dustbinobj;
var groundObject;
var paper1;
var Ground;
var bin

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binimage= loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var Groundop={
		isStatic:true
	} 
	Ground=Bodies.rectangle(400,650,800,20,Groundop)
	World.add(world,Ground)
	

	Engine.run(engine);
   
	//paper1=new paper(200,630,50);
	dustbin1=new dustbin(700,600,20,80);
	dustbin2=new dustbin(600,600,20,80);
	dustbin3=new dustbin (650,630,100,20);
	paperobject=new paper(200,300,50,50);
	//dustbinobj=new dustbin(650,630,82,20);
bin= createSprite(650,560,82,20)
	bin.addImage(binimage)
	bin.scale=0.5


}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  // paper1.display();
   dustbin1.display();
   dustbin2.display();
   dustbin3.display();
  
   paperobject.display()
   rect(Ground.position.x,Ground.position.y,800,20)
  drawSprites();
 
}
 function keyPressed(){
     if (keyCode=== UP_ARROW){
		 Matter.Body.applyForce( paperobject.body, paperobject.body.position,{x:95,y:-95})
		
	 }
 }


