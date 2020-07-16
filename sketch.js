
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground, ground_body;
var box1_body,box2_body,box3_body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	// ground = createSprite(400,690,800,10)
	ball = new Ball(100,400,25);
	
	var box_options={
		isStatic: true
	}
	box1_body = Bodies.rectangle(1350,725,25,100,box_options);
	box2_body = Bodies.rectangle(1437.5,762.5,150,25,box_options);
	box3_body = Bodies.rectangle(1525,725,25,100,box_options);
	World.add(world,box1_body);
	World.add(world,box2_body);
	World.add(world,box3_body);

	var ground_options={
		isStatic: true
	}
	
	ground_body = Bodies.rectangle(800,790,1600,25,ground_options);
	World.add(world,ground_body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball.display();
  rect(this.ground_body.position.x,this.ground_body.position.y,1600,25);
  rect(this.box1_body.position.x,this.box1_body.position.y,25,100);
  rect(this.box2_body.position.x,this.box2_body.position.y,150,25);
  rect(this.box3_body.position.x,this.box3_body.position.y,25,100);
  
  drawSprites(); 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:160,y:-185});
	}
}



