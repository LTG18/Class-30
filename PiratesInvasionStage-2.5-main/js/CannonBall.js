class CannonBall {
  constructor(x, y) {
    var options = {
      // characteristics of the cannonball 
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    //?
    this.r = 40;

    this.body = Bodies.circle(x, y, this.r, options);

    this.image = loadImage("./assets/cannonball.png");
    this.tower = loadImage("./assets/gray.jpg");
    //make sure to add this to the world
    World.add(world, this.body);
  }

  //shooting the cannonball
  shoot() {
    var velocity = p5.Vector.fromAngle(cannon.angle);
    //mult is multiplying, in this case multiplying the velocity by 20
    velocity.mult(20);
    //setting the static to false for this.body
    Matter.Body.setStatic(this.body, false);
    //setting the velocity for this.body
    Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
  }

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();

   
  }
}
