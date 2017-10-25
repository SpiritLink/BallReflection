var PLAYER = PLAYER || {};

PLAYER.Texture = PIXI.Texture.fromImage('required/assets/p.png');
PLAYER.Container = new PIXI.Container();
PLAYER.player = class{
    constructor(x, y){
        this.sprite = new PIXI.Sprite(PLAYER.Texture);
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.typeName = 'player';
        this.sprite.anchor.set(0.5);
        this.sprite.rotation = 0;

        PLAYER.Container.addChild(this.sprite);

    }

    // 왼쪽으로 회전
    rotateLeft(){
        this.sprite.rotation -= Math.PI / 180;
        if(this.sprite.rotation < -Math.PI / 2) { this.sprite.rotation = -Math.PI / 2; }
    }

    // 오른쪽으로 회전
    rotateRight(){
        this.sprite.rotation += Math.PI / 180;
        if(this.sprite.rotation > Math.PI / 2) { this.sprite.rotation = Math.PI / 2; }
    }

    // 공을 발사하는 함수
    fireBall(){
        var ballObj = new BALL.ball(this.sprite.x, this.sprite.y, this.sprite.rotation);
        BALL.ballList.push(ballObj);
    }

    setX(value){ this.sprite.x = value; }
    setY(value){ this.sprite.y = value; }
}
// variable (Resource)

var player = new PLAYER.player(0,0);