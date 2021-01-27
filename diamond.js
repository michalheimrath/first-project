class Diamond {
    constructor(x, y) {
        this.posx = x;
        this.posy = y;
        this.name = 'diamond';
    }

    draw() {
        image(imageDiamond, this.posx * square, this.posy * square, square, square);
    }
}