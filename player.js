class Player {
    constructor() {
        this.height = 45;
        this.width = 40;
        this.posx = width;
        this.posy = height - this.height;
        this.image;
        this.gravity = 0.5;
        this.velocity = 0;
    }
    preload() {
        this.image = loadImage('assets/knight.png')
    }
    moveLeft() {
        if (keyIsDown(LEFT_ARROW)) {
            this.posx -= 3;
        }
    }
    moveRight() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.posx += 3;
        }
    }
    jump() {
        this.velocity = - 10;
    }
    draw(){
        clear()
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