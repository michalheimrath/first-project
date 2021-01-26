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
    //sets player position
    currentState() {
        this.velocity += this.gravity;
        this.posy += this.velocity;
        if (this.posy >= height - this.height) {
            this.posy = height - this.height;
        }
    }

    preload() {
        this.image = loadImage('assets/knight-right.png')
        this.imageRight = loadImage('assets/knight-right.png')
        this.imageLeft = loadImage('assets/knight-left.png')
    }
    //get location of bottom middle of character
    location() {
        console.log('loc')
        let loc = [Math.floor((this.posx + 21)/square), Math.floor((this.posy + square)/square)];
        console.log(loc)
        return loc;
    }
    //get name of block
    blockType() {
        console.log('block')
        let type = this.location();
        //
        console.log(map.blocks[type[1]][type[0]].name)
        //
        return map.blocks[type[1]][type[0]].name;
    }
    //check if on block thats solid and keeps character there
    onSolid() {
        console.log('SOLID')
        if (this.blockType() === 'solid') {
            return 'solid'
        }
    }
    //check if character is falling
    fall() {
        console.log('falling')
        if (this.onSolid() === 'solid') {
            return false
        }
        else {
            return true
        }
    }

    jump() {
        console.log('jump')
        if (!this.fall()) {
            this.velocity = - 10;
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
        this.moveLeft()
        this.moveRight()
        
        image(this.image, this.posx, this.posy, this.width, this.height)
    }
}