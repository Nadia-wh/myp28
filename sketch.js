const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var dustbin1;
var paper1;
var world;
var dustbin1,dustbin2,dustbin3;
var bin1;
var launcher1;

function setup() {
createCanvas(1200, 400);
engine = Engine.create();
world = engine.world;

paper1 = new paper(100,200,60);
ground1 = new ground(230,388,2000,30);

dustbin1= new dustbin(1090,340,20,200);
dustbin2= new dustbin(890,340,20,200);   
dustbin3= new dustbin(990,380,190,20);
bin1= new garbage(990,355);
launcher1 = new launcher(paper1.body,{x:100,y:190});

	
}

function draw() {

 background("grey");
 Engine.update(engine);

 paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
  bin1.display();
  
  ground1.display();
launcher1.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  launcher1.fly();
}
