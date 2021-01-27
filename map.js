class Map {
    constructor(b) {
        this.blocks = b;
        this.enemyList = [];
    //}
    //push object into map
        for (let row = 0; row < this.blocks.length; row++) {
            for (let col = 0; col < this.blocks[row].length; col++) {
                if (this.blocks[row][col] === 1) {
                    this.blocks[row][col] = new Solid(col, row);
                }
                if (this.blocks[row][col] === 2) {
                    this.blocks[row][col] = new Spikes(col, row);
                }
                if (this.blocks[row][col] === 3) {
                    this.blocks[row][col] = new Diamond(col, row);
                }
                if (this.blocks[row][col] === 4) {
                    this.blocks[row][col] = new Enemy(col, row);
                    this.enemyList.push(this.blocks[row][col]);
                }
            }
        }
    }

    draw(){
        for (let row = 0; row < this.blocks.length; row++) {
            for (let col = 0; col < this.blocks[row].length; col++) {
                if (this.blocks[row][col] != 0) {
                    this.blocks[row][col].draw();
                }
            }
          
        }
    }
}