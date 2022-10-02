// const is constructor which is the creation of something
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon;
// var balls = [] is an array, something that can store information
var balls = [];

// you have to load the image from the specific folder, e.g ("./assets/tower.png") 
// because it's from the assets folder
function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  // the PI equation is to create an angle, PI=180, 2xPI=360 -PI/4=-45
  angle = -PI / 4;
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);

  

  
}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

 

  Engine.update(engine);
  ground.display();

 

  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);
  }

  cannon.display();
  tower.display();

  
}
// .push is to add a cannonball and .pull is to remove a cannonball
function keyPressed() {
  // if the down arrow is pressed down, a cannonball will be created at the cannon coordinates
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new CannonBall(cannon.x, cannon.y);
    balls.push(cannonBall);
  }
}

//function to show the ball
function showCannonBalls(ball, index) {
  ball.display();
  //removing the ball if it exceeds the preferred quantities
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    Matter.World.remove(world, ball.body);
    balls.splice(index, 1);
  }
}


//to shoot the ball once the down arrow is Released
function keyReleased() {
  if (keyCode === DOWN_ARROW) { 
    //-1 because arrays start with 0,1,2,3 etc.
    balls[balls.length - 1].shoot();
  }
}


