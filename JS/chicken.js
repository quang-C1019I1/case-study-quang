let chickens=[];
let Chicken = function (x , y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isLive = true;
    this.speed = speed;

    this.draw = function () {
        let imgChicken = document.getElementById('imgChicken');
        if (this.isLive) {
            ctx.drawImage(imgChicken, this.x, this.y, this.width, this.height);
        }
    };

    this.move = function () {
        this.y += this.speed
    }
};


function createChicken(){
    let speed = Math.random()*1.3 + 0.5;
    let x = Math.random() * (400);
    let y = Math.random() * (0 - canvas.height);
    let chicken = new Chicken(x, y, 57, 72, speed);
    chickens.push(chicken);
    chicken.draw();
}


function creatMultipleChicken() {
    for (let i = 0; i < 5; i++) {
        createChicken();
    }
}

creatMultipleChicken();


function showChickens(){
    for (let i = 0; i < chickens.length; i++) {
        chickens[i].move();
        chickens[i].draw();

    }
}
