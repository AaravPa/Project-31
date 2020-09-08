const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

var world, engine;

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,795,480,10);

    for(var k = 0; k <= width; k = k + 80) {
      divisions.push(new Division(k,height - divisionHeight/2,10, divisionHeight));
    }

    for(var j = 75; j <= width; j = j + 50) {
      plinkos.push(new Plinko(j, 100, 20));
    }

    for(var a = 50; a <= width; a = a + 50) {
      plinkos.push(new Plinko(a, 200, 20));
    }

    for(var b = 75; b <= width; b = b + 50) {
      plinkos.push(new Plinko(b, 300, 20));
    }

    for(var c = 50; c <= width; c = c + 50) {
      plinkos.push(new Plinko(c, 400, 20));
    }
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    
    for(var k = 0; k < divisions.length; k++) {
      divisions[k].display();
    }

    for(var i = 0; i < plinkos.length; i++) {
      plinkos[i].display();
    }

    if(frameCount % 60 === 0) {
      particles.push(new Particle(random(width/2 - 30, width/2 + 30), 20, 20));
    }

    for(var j = 0; j < particles.length; j++) {
      particles[j].display();
    }
}

