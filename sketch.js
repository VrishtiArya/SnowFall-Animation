const Bodies=Matter.Bodies;
const World =Matter.World;
const Engine=Matter.Engine;


var engine, world;
var bg;
var snow=[];

function preload(){
bg=loadImage("snow1.jpg");
snowWhiteImg = loadImage("SnowWhite.jpg")
}

function setup() {
  var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
    snowWhite = createSprite (1000,400);
snowWhite.addImage(snowWhiteImg);
snowWhite.scale= 0.1;

}


function draw() {
  background(bg);  
  Engine.update(engine);

  if(frameCount%5==0){
    snow.push(new Snow(random(0,1500),30,30));
  }
for(var i=0;i<snow.length;i++){
  snow [i].display();
}
snowWhite.x = mouseX
snowWhite.y = mouseY
snowWhite.display();
}
