
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1;
var bob1;
var bob2;
var bob3 , bob4 , bob5;
var sling1 , sling2 , sling3 , sling4 , sling5;
function preload()
{
	
}

function setup() {
	createCanvas(2000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	roof1 = new Ground(400 , 150 , 8000 ,50);
	//bob1 = new Bob()
	bob1 = new Pendulum(500,200);
	bob2 = new Pendulum(590,200);
	bob3 = new Pendulum(690,200);
	bob4 = new Pendulum(790,200);
	bob5 = new Pendulum(890,200);

	//sling1 = new chain(bob1 , {x:100,y:100});F
	sling1 = new Sling(bob1.body , {x:500 , y:100})
	sling2 = new Sling(bob2.body , {x:590,y:100});
	sling3 = new Sling(bob3.body , {x:690 , y:100});
	sling4 = new Sling(bob4.body , {x:790 , y:100});
	sling5 = new Sling(bob5.body , {x:890, y:100});
}


function draw() {
Engine.update(engine);
  background(100);
  roof1.display();
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body ,
 {x:mouseX , y:mouseY})
}