class Map {
    constructor(b) {
        this.blocks = b;
    }
    draw(){
        for (var row = 0; row < this.blocks.length; row++) {
            for (var col = 0; col < this.blocks[row].length; col++) {
              //this.blocks[row][col]
              if (this.blocks[row][col] === 1) {
                   fill('black')
                   rect(col * square, row * square, square, square);
              }
            }
          
        }
    }
}