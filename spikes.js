class Spikes {
    constructor(x, y) {
        this.posx = x;
        this.posy = y;
        this.name = 'spikes';
    }

    draw() {
        image(imageSpikes, this.posx * square, this.posy * square, square, square);
    }
}