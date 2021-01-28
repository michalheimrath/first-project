class Solid {
    constructor(x, y) {
        this.posx = x;
        this.posy = y;
        this.name = 'solid';
    }

    draw() {
        image(imageGorund, this.posx * square, this.posy * square, square, square);
    }
}