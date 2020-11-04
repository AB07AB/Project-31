
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//GROUND
var ground;
//DIVISIONS
//var division1,division2,division3,division4,division5,division6,division7;
//PlINKO & PARTICLES
var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight

function setup() {
	createCanvas(500, 600);

	engine = Engine.create();
  world = engine.world;

for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
}

//----------------------LOOP PLINKO-------------------------
for (var j = 75; j <=width; j = j + 50) {
  plinkos.push(new Plinko(j,75));
}

for (var j = 50; j <=width-10; j = j + 50) {
  plinkos.push(new Plinko(j,175));
}

for (var j = 75; j <=width; j = j + 50) {
  plinkos.push(new Plinko(j,275));
}

for (var j = 50; j <=width-10; j = j + 50) {
  plinkos.push(new Plinko(j,375));
}
//----------------------LOOP PLINKO-------------------------

  ground = new Ground(200,590,1000,10);
  
  //division1 = new Division(8,500,10,170);
  //division2 = new Division(90,500,10,170);
  //division3 = new Division(164,500,10,170);
  //division4 = new Division(246,500,10,170);
  //division5 = new Division(328,500,10,170);
  //division6 = new Division(410,500,10,170);
  //division7 = new Division(495,500,10,170);

  //plinkos = new Plinko(246,200)

  //Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background("black");

  Engine.update(engine);

  drawSprites();

  for(var i = 0;i < plinkos.length; i++){
    plinkos[i].display();
  }

  ground.display();

  //division1.display();
  //division2.display();
  //division3.display();
  //division4.display();
  //division5.display();
  //division6.display();
  //division7.display();

  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-30, width/2+30), 10,10));
  }

  for(var j = 0;j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0;k < divisions.length; k++){
    divisions[k].display();
  }

};
