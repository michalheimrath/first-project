class Player {
    constructor() {
        this.height = 45;
        this.width = 40;
        this.posx = width;
        this.posy = height - this.height;
        this.image;
        this.imageRight;
        this.imageLeft;
        this.gravity = 0.4;
        this.velocity = 0;
    }
    preload() {
        this.image = loadImage('assets/knight-right.png')
        this.imageRight = loadImage('assets/knight-right.png')
        this.imageLeft = loadImage('assets/knight-left.png')
    }
    moveLeft() {
        if (keyIsDown(LEFT_ARROW)) {
            this.posx -= 5;
            this.image = this.imageLeft;
        }
    }
    moveRight() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.posx += 5;
            this.image = this.imageRight;
        }
    }
    onGround(){
        if (player.posy === height - 45) {
            return true;
        }
        else {
            return false;
        }
    }
    jump() {
        if (this.onGround()) {
            this.velocity = - 10;
        }
    }
    draw(){
        this.posx = constrain(this.posx, square, square*23)
        this.moveLeft()
        this.moveRight()
        this.velocity += this.gravity;
        this.posy += this.velocity;
        if (this.posy >= height - this.height) {
            this.posy = height - this.height;
        }
        image(this.image, this.posx, this.posy, this.width, this.height)
    }
}