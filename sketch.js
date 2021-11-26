var player1, player2;

var bg = "images/bg.png";

function setup() {
  createCanvas(800,400);
  player1 = new Player1(200,50);
  player2 = new Player2(200,50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function display(){
  player1.display();
  player2.display();
}

function keyPressed(){
  if(keyCode === 32){
     
  }
}
