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
        let loc = [Math.floor((this.posx + 21)/square), Math.floor((this.posy)/square)];
        this.locy = loc[1];
        return loc;
    }
    // get locations of blocks around character
    blockLocation(offsetX,offsetY) {
        let loc = [Math.floor((this.posx + offsetX)/square), Math.floor((this.posy + offsetY)/square)];
        return loc;
    }
    //get name of block
    blockType(offsetX, offsetY) {
        let type = this.blockLocation(offsetX, offsetY);
        return map.blocks[type[1]][type[0]].name;
    }
    //check if character is on block that's solid 
    onSolid() {
        //bottom right corner
        if (this.blockType(30, square) === 'solid') {
            //keeps character on solid block
            this.posy = this.location()[1] * square
            return 'solid'
        }
        //bottom left corner
        if (this.blockType(20, square) == "solid") {
            //keeps character on solid block
            this.posy = this.location()[1] * square
            return "solid";
        }
            return false;       
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
            this.velocity = - 8.5;
            this.gravity = 0.15;
        }
    }

    moveLeft() {
        if (keyIsDown(LEFT_ARROW)) {
            //stop from walking in to block
            if (this.blockType(-1, square/2) != "solid") {
                this.posx -= 3;
                this.image = this.imageLeft;
            }
        }
    }

    moveRight() {
        if (keyIsDown(RIGHT_ARROW)) {
            if (this.blockType(square, square/2) != "solid") {
                this.posx += 3;
                this.image = this.imageRight;
            }
        }
    }

    draw(){
        this.moveLeft()
        this.moveRight()
        
        image(this.image, this.posx, this.posy, this.width, this.height)
    }
}