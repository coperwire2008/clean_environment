
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);


	engine = Engine.create();
	world = engine.world;

	// log1= new dustbin(200,500,20,20);


	//Create the Bodies Here.
	log1 =  new dustbin(1200,740,300,20);
	log2 =  new dustbin(1050,670,20,160)
    log3 =  new dustbin(1350,670,20,160)
	log4 =  new dustbin(700,790,1400,10)
    ball =  new paper(250,740,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  ball.display();
  drawSprites();
  


}

function keyPressed(){

if (keyCode === UP_ARROW)
{Matter.Body.applyForce(ball.body,ball.body.position,{x: 85, y: -85})}



}

