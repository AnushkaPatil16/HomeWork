const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground1;

function setup(){
    createCanvas(400,500);

    engine = Engine.create();//.world
    world = engine.world;

    ground1 = new GROUND(200,100,300,20);

}

function draw(){
    background("yellow");
    Engine.update(engine);

    ground1.display();


}