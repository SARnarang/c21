const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2


	}
	var ground_options ={
		isStatic: true
	}

	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	ball = Matter.Bodies.circle(20, 20, 10, ball_options)
	World.add(world, ball)

	ground = Matter.Bodies.rectangle(400, 650, 800, 30, ground_options)
	World.add(world, ground)

	wall =  Matter.Bodies.rectangle(500, 605, 10, 70, ground_options)
	wall2 =  Matter.Bodies.rectangle(600, 605, 10, 70, ground_options)
	World.add(world,wall)
	World.add(world,wall2)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  ellipse(ball.position.x,ball.position.y,20,20)
  rect(ground.position.x, ground.position.y, 800, 20)
  rect(wall.position.x, wall.position.y, 10, 70)
  rect(wall2.position.x, wall2.position.y, 10, 70)


  keyPress();
  drawSprites();
 
}

function keyPress () {

if (keyIsDown(UP_ARROW)) {
	console.log("up")
	Matter.Body.applyForce(ball, {x:ball.position.x, y: ball.position.y}, {x:5, y: 20 })
}
}