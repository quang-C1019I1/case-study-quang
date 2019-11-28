
let Guns = function (x, y, width, height, speed, isMoveLeft, isMoveRight, isShoot) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.x = x;
    this.y= y;
    this.isMoveLeft = isMoveLeft;
    this.isMoveRight = isMoveRight;
    this.isShoot = isShoot;
    this.reload = 9;
    this.reloadCount = 0;
    this.bullets = [];

    this.draw = function () {
        let imgGuns = document.getElementById('imgGuns');
        ctx.drawImage(imgGuns, this.x, this.y, this.width, this.height);
    };

    this.move = function () {
        if (this.isMoveLeft) {
            this.x -= this.speed;
        } else if (this.isMoveRight) {
            this.x += this.speed;
        }

        if (this.x + this.width < 25) {
            this.x = this.x+this.width/2;
        } else if (this.x + this.width >canvas.width+25) {
            this.x =this.x-this.width/2;
        }
    };

    this.shoot = function () {

        if (this.isShoot) {
            this.reloadCount++;
            if (this.reloadCount >= this.reload) {
                let bullet = new Bullet(this.x + this.width / 2-10, this.y,20, 20);
                this.bullets.push(bullet);
                this.reloadCount = 0;
            }
        }
        for (let i = 0; i < this.bullets.length; i++) {
            if (this.bullets[i].y < 0) {
                this.bullets.splice(i, 1);
                i--;
            } else {
                this.bullets[i].move();
                this.bullets[i].draw();
            }
        }
     }

};
