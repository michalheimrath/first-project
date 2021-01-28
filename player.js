class Player {
    constructor() {
        this.height = square;
        this.width = square;
        this.posx = square;
        this.posy = 500;
        this.diamond = 0;
        this.lives = 1;
        this.image;
        this.imageRight;
        this.imageLeft;
        this.gravity = 0;
        this.velocity = 0;
        this.locy = 0;
    }
    //sets player gravety and velocity
    currentState() {
        this.velocity += this.gravity;
        this.posy += this.velocity;
        if (!this.fall()) {
            this.velocity = 0;
            this.gravity = 0;
        }
        else this.gravity = 0.4
    }
    //cheks for end game
    endGame() {
        if (this.onSpike()) this.lives -= 1;
        if (this.onEnemy()) this.lives -= 1;
        if (this.onDiamond()) this.diamond += 1;
    }

    preload() {
        this.image = loadImage('assets/knight-right.png')
        this.imageRight = loadImage('assets/knight-right.png')
        this.imageLeft = loadImage('assets/knight-left.png')
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
        if (this.blockType(20, square) === "solid") {
            //keeps character on solid block
            this.posy = this.location()[1] * square
            return "solid";
        }
            return false;       
    }
    //check if character is on block that's a spike
    onSpike() {
        if (this.blockType(30, square - 10) === 'spikes') {
            return true;
        }
        //bottom left corner
        if (this.blockType(20, square - 10) === "spikes") {
            return true;
        }
            return false;           
    }
    //check if character is on block that's a spike
    onEnemy() {
        if (this.blockType(30, square - 10) === 'enemy') {
            return true;
        }
        //bottom left corner
        if (this.blockType(20, square - 10) === "enemy") {
            return true;
        }
            return false;           
    }
    // check if character grabbed the diamond
    onDiamond() {
        if (this.blockType(30, square - 2) === 'diamond') {
            return true;
        }
        //bottom left corner
        if (this.blockType(20, square - 2) === "diamond") {
            return true;
        }
            return false;           
    }

    jump() {
        if (!this.fall()) {
            this.velocity = - 8.8;
            this.gravity = 0.15;
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
        //console.log(map.blocks[type[1]][type[0]].name);
        return map.blocks[type[1]][type[0]].name;
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

    moveUp() {
        if (keyIsDown(UP_ARROW) ) {
            this.jump();
        }
    }

    moveEnemy() {
        //change position only every X frames
        if(frameCount % 15 === 0) {
            for (let ele of map.enemyList) {
                let x = ele.posx;
                let y = ele.posy;
                //check if enemy can go left and move if possible
                if (map.blocks[y][x-1] === 0 && map.blocks[y+1][x-1] != 0 && ele.enemyVelocity === "L") {
                    map.blocks[y][x-1] = map.blocks[y][x]
                    map.blocks[y][x] = 0
                    ele.posx -= 1;
                    //console.log(ele)
                }
                else ele.enemyVelocity = "R"
                //check if enemy can go left and move if possible
                if (map.blocks[y][x+1] === 0 && map.blocks[y+1][x+1] != 0 && ele.enemyVelocity === "R"){
                    map.blocks[y][x+1] = map.blocks[y][x]
                    map.blocks[y][x] = 0
                    ele.posx += 1;
                    //console.log(ele)
                }
                else ele.enemyVelocity = "L"
            }
        }
    }

    draw(){
        this.moveLeft()
        this.moveRight()
        this.moveUp()
        image(this.image, this.posx, this.posy, this.width, this.height)
        this.moveEnemy()
    }
}