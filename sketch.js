var canvas,suface1,surface2,surface3,surface4,box;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(70,580,200,20);
    surface1.shapeColor="red";

    surface2=createSprite(290,580,200,20);
    surface2.shapeColor="green";

    surface3=createSprite(510,580,200,20);
    surface3.shapeColor="blue";

    surface4=createSprite(730,580,200,20);
    surface4.shapeColor="yellow";

    //create box sprite and give velocity
    box=createSprite(random(20,750),50,20,20);
    box.velocityX=6;
    box.velocityY=-6;
    box.shapeColor="white";

}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
       box.shapeColor="red";
       music.play();
    }

    if(surface2.isTouching(box)){
        box.shapeColor="green";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }

     if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor="blue";
        music.play();
    }

     if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor="yellow";
        music.play();
    }

    drawSprites();
}
