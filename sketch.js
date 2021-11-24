
var uno, dos;
var tres, cuatro;
var cinco, seis;
function setup() {
  createCanvas(800,400);
  uno = createSprite(100, 200, 80, 80);
  uno.shapeColor = ("green");
  uno.debug = true;
  dos = createSprite(0, 200, 80, 80);
  dos.shapeColor = ("green");
  dos.debug = true; 
  tres = createSprite(200,200, 80, 80);
  tres.shapeColor = ("green");
  tres.debug = true;
  cuatro = createSprite(300,200,80,80);
  cuatro.shapeColor = ("green")
  cuatro.debug = true;
  cinco = createSprite(400,200,80,80);
  cinco.shapeColor = ("green")
  cinco.debug = true;
  seis = createSprite(500,200,80,80);
  seis.shapeColor = ("green")
  seis.debug = true;
}

function draw(isTouching) {
  background(255,255,255);
  if(isTouching(uno)){
    uno.shapeColor = ("red");
    dos.shapeColor = ("red");
  }
  else if(isTouching(tres)){
    tres.shapeColor = ("pink");
    dos.shapeColor = ("pink");
  }
  else if(isTouching(cuatro)){
    cuatro.shapeColor = ("blue");
    dos.shapeColor = ("blue");
  }
  else if(isTouching(cinco)){
    cinco.shapeColor = ("yellow");
    dos.shapeColor = ("yellow");
  }
  else if(isTouching(seis)){
    seis.shapeColor = ("purple");
    dos.shapeColor = ("purple");
  }
 else{
    uno.shapeColor = ("green");
    dos.shapeColor = ("green");
    tres.shapeColor = ("green");
    cuatro.shapeColor = ("green")
    cinco.shapeColor = ("green");
    seis.shapeColor = ("green")
  }
  dos.x = mouseX;
  dos.y = mouseY;
  console.log(uno.x-dos.x);
  
 
  
  drawSprites();
  function isTouching(cuadro){
    if(cuadro.x - dos.x < cuadro.width/2 + dos.width/2 && dos.x - cuadro.x < cuadro.width/2 + dos.width/2 && cuadro.y - dos.y < cuadro.height/2 + dos.height/2 && dos.y - cuadro.y < cuadro.height/2 + dos.height/2 ){
      return true;
    }
    else{
      return false;
    }
  }
}