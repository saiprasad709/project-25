
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render; 

function preload(){
binimg= loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground();
	paper = new Paper();

	bin = createSprite(964,520,20,20);
	bin.addImage(binimg);
	bin.scale=0.45;

	binpart1 = new Bin(902,505,20,20);
	binpart2 = new Bin(962,565,130,10);
	binpart3 = new Bin(1024,505,10,120);
	 
	Engine.run(engine);
  
}






function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);

  ground.display();
  paper.display();
  binpart1.display();
  binpart2.display();
  binpart3.display();

  drawSprites();
}
function keyPressed(){
	 if(keyCode==="UP_ARROW"){
		 Matter.body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:85,y:-85});
	 }
 }

