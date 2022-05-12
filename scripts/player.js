class Player {
  // Constructor receives arguments from created instances of classes (line 33 and line 44 of farming-game.js)
  constructor(
    playerX,
    playerY,
    keyRight,
    playerSpeed,
    keyLeft,
    keyTop,
    keyBottom,
    keyPickup
  ) {
    this.spaceBarsCounter = 0;
    this.playerX = playerX;
    this.playerY = playerY;
    this.keyRight = keyRight;
    this.playerSpeed = playerSpeed;
    this.keyLeft = keyLeft;
    this.keyTop = keyTop;
    this.keyBottom = keyBottom;
    this.keyPickup = keyPickup;
    this.isImprisoned = false;
    this.prison = loadImage("../assets/jail1.png");
    this.playerWidth = 72;
    this.isHoldingPlant = false;
    this.heldPlant;
  }
  animatePlayer(framesArray, index) {
    image(framesArray[index], this.playerX, this.playerY);
  }
  movePlayer() {
    if (keyIsDown(this.keyRight)) {
      this.playerX += this.playerSpeed;
    }
    if (keyIsDown(this.keyLeft)) {
      this.playerX -= this.playerSpeed;
    }
    if (keyIsDown(this.keyTop)) {
      this.playerY -= this.playerSpeed;
    }
    if (keyIsDown(this.keyBottom)) {
      this.playerY += this.playerSpeed;
    }

    noFill();
    stroke("red");
    rect(
      this.playerX + this.playerWidth / 2,
      this.playerY + this.playerWidth / 2,
      1,
      1
    );
  }
  plantPickup(plants) {
    if (this.checkPosition(plants)) {
      console.log("lol");
    }
  }
  checkPosition(plants) {
    if (keyIsDown(this.keyPickup)) {
      // console.log("Pickup function called");
      // Check position using center of player
      for (let i = 0; i < plants.length; i++) {
        if (
          this.playerX + this.playerWidth / 2 >= plants[i].plantX &&
          this.playerX + this.playerWidth / 2 <=
            plants[i].plantX + plants[i].tileSize
        ) {
          // console.log("InX");
          if (
            this.playerY + this.playerWidth / 2 >= plants[i].plantY &&
            this.playerY + this.playerWidth / 2 <=
              plants[i].plantY + plants[i].tileSize
          ) {
            console.log("In position for pickup");
            this.heldplant = plants[i];
            let newPlants = plants.splice(i, 1);
            console.log(newPlants);
            return newPlants;
          }
        }
      }
    }
  }
  EscapeFromPrison() {
    if (this.isImprisoned === true) {
      textStyle(BOLD);
      fill("white");
      textSize(32);
      text("You are imprisoned! Smash SPACEBAR to escape!", 260, 700);
      image(this.prison, 605, 10);
      if (keyIsDown(32) && this.spaceBarsCounter < 30) {
        this.spaceBarsCounter += 1;
        if (this.spaceBarsCounter >= 30) {
          this.playerSpeed = 5;
          this.spaceBarsCounter = 0;
          this.isImprisoned = false;
        }
      }
    }
  }
}

export { Player };
