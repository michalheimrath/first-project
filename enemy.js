class Enemy {
    constructor(x, y) {
        this.posx = x;
        this.posy = y;
        this.name = 'enemy';
        this.enemyVelocity = 'L';
    }

    draw() {
        image(imageEnemy, this.posx * square, this.posy * square, square, square);
    }
}