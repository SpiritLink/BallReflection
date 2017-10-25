// variable (Resource)
let texture;
texture = PIXI.Texture.fromImage('required/assets/p.png');

let player, plContainer;
plContainer = new PIXI.Container();

class playerClass{
    constructor(x, y){
        this.sprite = new PIXI.Sprite(texture);
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.typeName = 'player';
        this.sprite.anchor.set(0.5);
        this.sprite.rotation = 0;

    }

    rotateLeft(){
        this.sprite.rotation -= Math.PI / 180;
        if(this.sprite.rotation < -Math.PI / 2) { this.sprite.rotation = -Math.PI / 2; }
    }

    rotateRight(){
        this.sprite.rotation += Math.PI / 180;
        if(this.sprite.rotation > Math.PI / 2) { this.sprite.rotation = Math.PI / 2; }
    }

    fireBall(){
        var ballObj = new BALL.ball(this.sprite.x, this.sprite.y, this.sprite.rotation);
        BALL.ballList.push(ballObj);
    }

    setX(value){ this.sprite.x = value; }
    setY(value){ this.sprite.y = value; }
}

player = new playerClass(0,0);

plContainer.addChild(player.sprite);
plContainer.addChild(graphics);
