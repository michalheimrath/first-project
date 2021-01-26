class Map {
    constructor(b) {
        this.blocks = b;
    //}
    //setMap() {
        for (let row = 0; row < this.blocks.length; row++) {
            for (let col = 0; col < this.blocks[row].length; col++) {
                if (this.blocks[row][col] === 1) {
                    this.blocks[row][col] = new Solid(col, row);
                }
                if (this.blocks[row][col] === 2) {
                    this.blocks[row][col] = new Spikes(col, row);
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