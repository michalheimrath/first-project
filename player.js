class Player {
    constructor() {
        this.height = square;
        this.width = square;
        this.posx = width;
        this.posy = height - this.height;
        this.image;
        this.imageRight;
        this.imageLeft;
        this.gravity = 0;
        this.velocity = 0;
        this.locy = 0;
    }
    //sets player position
    currentState() {
        this.velocity += this.gravity;
        this.posy += this.velocity;
        if (!this.fall()) {
            this.velocity = 0;
            this.gravity = 0;
            //this.posy = this.locy;
        }
        else this.gravity = 0.4
    }

    preload() {
        this.image = loadImage('assets/knight-right.png')
        this.imageRight = loadImage('assets/knight-right.png')
        this.imageLeft = loadImage('assets/knight-left.png')
    }
    //get location of bottom middle of character
    location() {
        let loc = [Math.floor((this.posx + 21)/square), Math.floor((this.posy + 50)/square)];
        console.log(loc)
        console.log(this.posy)
        console.log(this.posx)
        this.locy = loc[1];
        return loc;
    }
    //get name of block
    blockType() {
        let type = this.location();
        console.log(map.blocks[type[1]][type[0]].name)
        return map.blocks[type[1]][type[0]].name;
    }
    //check if on block thats solid 
    onSolid() {
        if (this.blockType() === 'solid') {
            //keeps character on solid block
            this.posy = (this.location()[1] * square) - square
            return 'solid'
        }
    }
    //check if character is falling
    fall() {
        if (this.onSolid() === 'solid') {
            return false
        }
        else {
            return true
        }
    }

    jump() {
        if (!this.fall()) {
            this.velocity = - 10;
            this.gravity = 0.2;
        }
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

    draw(){
        this.posx = constrain(this.posx, square, square*23)
        this.posy = constrain(this.posy, square, square*11)
        this.moveLeft()
        this.moveRight()
        
        image(this.image, this.posx, this.posy, this.width, this.height)
    }
}