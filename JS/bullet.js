let canvas = document.getElementById('gameBoard');
let ctx = canvas.getContext('2d');
let Bullet = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 10;

    this.draw = function () {
        let imgBullet = document.getElementById('imgBullet');
        ctx.drawImage(imgBullet, this.x, this.y, this.width, this.height);
    };

    this.move = function () {
        this.y -= this.speed;
    }
};