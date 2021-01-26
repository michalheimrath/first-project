class Solid {
    constructor(x, y) {
        this.posx = x;
        this.posy = y;
        this.name = 'solid';
    }
    draw() {
        fill('blue')
        rect(this.posx * square, this.posy * square, square, square);
    }
}