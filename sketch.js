
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree,stone,boy,chain;
var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15;
function preload()
{
	bImg = loadImage("images/backGround.jpg");
  // boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(890,400,550,600);
  stone = new Stone(240,530,50,50);
  boy = new Boy(300,600,200,350);
  chain = new SlingShot(stone.body,{x:240,y:530});
  m1 = new Mango(720,300,40);
  m2 = new Mango(750,350,40);
  m3 = new Mango(960,240,40);
  m4 = new Mango(1050,350,40);
  m5 = new Mango(900,300,40);
  m6 = new Mango(800,200,40);
  m7 = new Mango(1050,250,40);
  m8 = new Mango(950,150,40);
  m9 = new Mango(800,300,40);
  m10 = new Mango(850,230,40);
  m11 = new Mango(970,300,40);
  m12 = new Mango(800,370,40);
  m13 = new Mango(880,370,40);
  m14 = new Mango(1120,320,40);
  m15 = new Mango(900,200,40);

  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bImg);
  
  tree.display();
  stone.display();
  boy.display();
  
  chain.display();
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();
  m8.display();
  m9.display();
  m10.display();
  m11.display();
  m12.display();
  m13.display();
  m14.display();
  m15.display();
  

  detectCollision(stone.body,m1.body);
  detectCollision(stone.body,m2.body);
  detectCollision(stone.body,m3.body);
  detectCollision(stone.body,m4.body);
  detectCollision(stone.body,m5.body);
  detectCollision(stone.body,m6.body);
  detectCollision(stone.body,m7.body);
  detectCollision(stone.body,m8.body);
  detectCollision(stone.body,m9.body);
  detectCollision(stone.body,m10.body);
  detectCollision(stone.body,m11.body);
  detectCollision(stone.body,m12.body);
  detectCollision(stone.body,m13.body);
  detectCollision(stone.body,m14.body);
  detectCollision(stone.body,m15.body);

  drawSprites();
 
  stroke("red");
  textSize(20);
  text("Press space to get a second chance to play ",20,20);
}

function mouseDragged(){
   
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    chain.fly();
  
}

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(stone.body,{x:20,y:530}) 
      chain.attach(stone.body);
    }
}

function detectCollision(bodyA,bodyB){
  mangopos = bodyB.position;
  stonepos = bodyA.position;
  var distance = dist(mangopos.x,mangopos.y,stonepos.x,stonepos.y);

  if(distance<= bodyB.radius+bodyA.radius){
    Matter.Body.setStatic(bodyB,false);
  }
}