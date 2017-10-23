// variable (Resource)
var ballTexture = PIXI.Texture.fromImage('required/assets/ball.png');
ballTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

var bulletSpeed = 2;

var ballContainer = new PIXI.Container();

var ballList;
ballList = new Array();
// Definition
class ball{

    constructor(x, y, rotation){
        this.sprite = new PIXI.Sprite(ballTexture);
        this.sprite.anchor.set(0.5);
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.rotation = rotation;
        this.deleteMe = false
        ballContainer.addChild(this.sprite);
    }

    move(delta){
        this.sprite.x += Math.cos(this.sprite.rotation - Math.PI / 2) * delta * bulletSpeed;
        this.sprite.y += Math.sin(this.sprite.rotation - Math.PI / 2) * delta * bulletSpeed;
    }

    // 벽에 부딪힌 후 각도를 변경하는 함수
    reflection(){
        if(this.sprite.x < 0 || this.sprite.x > 720){
            this.sprite.rotation = Math.PI - this.sprite.rotation;
            if(this.sprite.x < 0) this.sprite.x = 40;
            if(this.sprite.x > 720) this.sprite.x = 680;
        }

        if(this.sprite.y < 0 || this.sprite.y > 1280){
            this.sprite.rotation = (Math.PI * 2) - this.sprite.rotation);
            if(this.sprite.y < 0) this.sprite.y = 10;
            if(this.sprite.y > 1280) this.deleteMe = true;
        }
    }
}

// update Ball
function updateBall(delta){

    for(var i = 0; i < ballList.length; ++i){
        ballList[i].move(delta);
        ballList[i].reflection();

        if(ballList[i].deleteMe){
            app.stage.removeChild(ballList[i]);
            ballList.splice(i,1);
        }
    }

    console.log("볼 개수 : " + ballList.length);
}