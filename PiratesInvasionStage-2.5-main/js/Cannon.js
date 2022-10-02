class Cannon {
  constructor(x, y, width, height, angle) {
    //must write this. because it is in the constructor
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
  }
  display() {
    //making the cannon move to the right is right key is pressed
    if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
      this.angle += 0.02;
    }
    //making the cannon move to the left is left key is pressed
    if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
      this.angle -= 0.02;
    }
    //("#676e6a") is a specific grey colour
    fill("#676e6a");
    // push and pop in this instance is to prevent other variables being affected by these commands
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    rect(-10, -20, this.width, this.height);
    pop();
    arc(this.x - 30, this.y + 90, 140, 200, PI, TWO_PI);
    noFill();
  }
}
