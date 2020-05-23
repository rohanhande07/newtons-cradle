const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var roof;
var string1, string2, string3, string4, string5;


function preload()
{
	
}

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	bob1 = new Bob(290,250,40);
	bob2 = new Bob(335,250,40);
	bob3 = new Bob(380,250,40);
	bob4 = new Bob(360,250,40);
	bob5 = new Bob(380,250,40);

	roof = new Roof(375,80,270,30);

	string1 = new String(bob1.body, {x:295, y:250});
	string2 = new String(bob2.body, {x:335, y:250});
	string3 = new String(bob3.body, {x:375, y:250});
	string4 = new String(bob4.body, {x:415, y:250});
  string5 = new String(bob5.body, {x:450, y:250});
  
}


function draw() {
	
  rectMode(CENTER);
  background("white");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  Movement();
  
  drawSprites();
 
}

function Movement(){

  if(keyCode === UP_ARROW){

      Matter.Body.applyForce(bob1.body,{x:275, y:230},{x:-105,y:85});

  }

}



