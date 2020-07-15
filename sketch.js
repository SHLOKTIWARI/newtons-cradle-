var groundObject,chainObject,bobObj
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

 //function preload()
 //{
	
 //}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundObj = new Ground(width/2,200,width,20)
// bobObject1 = new bob(350,400,10)
// bobObject2 = new bob(360,400,10)
 bobObj = new bob(370,400,10)
// bobObject4 = new bob(380,400,10)
// bobObject5 = new bob(390,400,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  groundObj.display();
  // bobObject1.display();
  // bobObject2.display();
   bobObject3.display();
  // bobObject4.display();
  // bobObject5.display();

  drawSprites();
 
}



