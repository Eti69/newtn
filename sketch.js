
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;




var circle,circle2,circle3,circle4;
var rectangle;
var connection1,connection2,connection3,connection4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	circle=new Circle(100,600,60,60)
	rectangle=new Rect(390,100,2000,40)
    connection1=new Chain(circle.body,rectangle.body)
	circle2=new Circle(300,600,60,60)
	circle3=new Circle(200,600,60,60)
	circle4=new Circle(400,600,60,60)
    connection2=new Chain(circle2.body,rectangle.body)
	connection3=new Chain(circle3.body,rectangle.body)
    connection4=new Chain(circle4.body,rectangle.body)
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(69);
  
  drawSprites();
  rectangle.display();
  circle.display();
  circle2.display();
  circle3.display();
  circle4.display();
  connection1.display();
  connection2.display();
  connection3.display();
  connection4.display();
 
}



