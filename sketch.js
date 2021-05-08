var canvas;
var music;
var block1,block2,block3,block4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    block1 = createSprite(0,580,360,30);
   
    block1.shapeColor= "pink";
    block2 = createSprite(295,580,200,30);
    block2.shapeColor= "blue";
    block3 = createSprite(515,580,200,30);
    block3.shapeColor= "yellow";
    block4 = createSprite(740,580,220,30);
    block4.shapeColor = "green";
    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = "white";
    box.velocityX = 6;
    box.velocityY = 9;
    

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();

    box.bounceOff(edges);
     
    music.play();


if (block1.isTouching(box) && box.bounceOff(block1)) {
    box.shapeColor = "pink";
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();


}
else if (block2.isTouching(box) && box.bounceOff(block2)) {
    box.shapeColor = "blue";
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();


}
else if (block3.isTouching(box) && box.bounceOff(block3)) {
    box.shapeColor = "yellow";
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();

}
else if (block4.isTouching(box) && box.bounceOff(block4)) {
    box.shapeColor = "green";
    box.velocityX = 0;
    box.velocityY = 0;
    music.stop();
}
  
    drawSprites();
}
