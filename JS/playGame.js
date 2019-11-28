let score=0;
let PlayGame = function () {
    this.control = function () {
        document.addEventListener('keyup', function (event) {
            if (event.keyCode == 37) {
                guns.isMoveLeft = false;
            } else if (event.keyCode == 39) {
                guns.isMoveRight = false;
            } else if (event.keyCode == 32) {
                guns.isShoot = false;
            }
        });

        document.addEventListener('keydown', function (event) {
            if (event.keyCode == 37) {
                guns.isMoveLeft = true;
            } else if (event.keyCode == 39 ){
                guns.isMoveRight = true;
            } else if (event.keyCode == 32) {
                guns.isShoot = true;
            }
        });
    }
    this.crash = function (chicken, bullet) {
        let leftChicken = chicken.x;
        let rightChicken = chicken.x + chicken.width;
        let topChicken = chicken.y;
        let bottomChicken = chicken.y + chicken.height;
        let leftBullet = bullet.x;
        let rightBullet = bullet.x + bullet.width;
        let topBullet = bullet.y;
        let bottomBullet = bullet.y + bullet.height;
        if (rightChicken < leftBullet || bottomChicken < topBullet || leftChicken > rightBullet || topChicken > bottomBullet) {
            return false;
        } else {
            return true;
        }
    };

    this.checkCrash = function () {
        for (let i = 0; i < chickens.length; i++) {
            for (let j = 0; j < guns.bullets.length; j++) {
                if (this.crash(chickens[i], guns.bullets[j])) {
                    chickens[i].isLive = false;
                }
            }
            if (!chickens[i].isLive) {
                guns.bullets.splice(i,1);
                chickens.splice(i, 1);
                score++;
                document.getElementById('score').innerText="Score: "+score;
            }
            if (chickens.length == 0) {
                creatMultipleChicken();
                showChickens();
            }

        }
        return score;
    };
};
let guns= new Guns(217, 530, 86,70, 5, false, false, false);

let playGame = new PlayGame();
let isGameOver = false;

playGame.control();
guns.draw();
function startGame() {
    if (!isGameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        showChickens();
        guns.draw();
        guns.move();
        guns.shoot();
         playGame.checkCrash();
        for (let i = 0; i < chickens.length; i++) {
            if (chickens[i].y > canvas.height) {
                alert('Game Over!!! Điểm của bạn là: ' + score)
                return;
            }
        }
        requestAnimationFrame(startGame);
         }

}
