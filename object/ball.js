var BALL = BALL || {};

// Definition
BALL.Texture = PIXI.Texture.fromImage('required/assets/ball.png');
BALL.Texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
BALL.ballList = new Array();
BALL.speed = 10;
BALL.ballContainer = new PIXI.Container();

// 좌표 디버그용 함수
BALL.updateGraphics = function () {

    for(var i = 0; i < BALL.ballList.length; ++i){
        graphics.lineStyle(0);
        graphics.beginFill(0xFF0000, 0.5);
        graphics.drawCircle(BALL.ballList[i].sprite.x, BALL.ballList[i].sprite.y, 5);
        graphics.endFill();
    }

}

// 볼 정의
BALL.ball = class{
    constructor(x, y, rotation){
        this.sprite = new PIXI.Sprite(BALL.Texture);
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.rotation = rotation;
        this.deleteMe = false
        this.sprite.anchor.set(0.5);
        BALL.ballContainer.addChild(this.sprite);
    }

    // 움직임
    move(delta){
        this.sprite.x += Math.cos(this.sprite.rotation - Math.PI / 2) * delta * BALL.speed;
        this.sprite.y += Math.sin(this.sprite.rotation - Math.PI / 2) * delta * BALL.speed;
    }

    // 화면의 테투리에 충돌 시
    reflection(){
        if(this.sprite.x < 0 || this.sprite.x > 720){
            this.bounceX();
            if(this.sprite.x < 0)   { this.sprite.x = 10; }
            if(this.sprite.x > 720) { this.sprite.x = 710; }
        }

        if(this.sprite.y < 0 || this.sprite.y > 1280){
            this.bounceY();
            if(this.sprite.y < 0)   { this.sprite.y = 10; }
            if(this.sprite.y > 1280){ this.deleteMe = true; }
        }
    }

    // X축 충돌
    bounceX(){ this.sprite.rotation = -this.sprite.rotation; }

    // Y축 충돌
    bounceY(){ this.sprite.rotation = Math.PI - this.sprite.rotation; }

    // 스프라이트간 충돌
    boundByBound(bound){
        let isInX = false;
        let isInY = false;

        if(this.sprite.centerX >= bound.x && this.sprite.centerX <= bound.x + bound.width)
        {
            console.log("bound Y !");
            isInX = true;
        }


        if(this.sprite.centerY >= bound.y && this.sprite.centerY <= bound.y + bound.height)
        {
            console.log(bound.top);
            console.log(bound.bottom);
            console.log("bound X ! ");
            isInY = true;
        }


        if(isInX === true)
            this.bounceY();

        if(isInY === true)
            this.bounceX();

        if(isInX === false && isInY === false)
        {
            this.bounceX();
            this.bounceY();
        }
    }
};

//
function updateBall(delta){

    // 지워야할 공 확인 및 제거
    for(var i = 0; i < BALL.ballList.length; ++i){
        BALL.ballList[i].move(delta);
        BALL.ballList[i].reflection();

        if(BALL.ballList[i].deleteMe){
            BALL.ballContainer.removeChild(BALL.ballList[i].sprite);
            BALL.ballList.splice(i,1);
            console.log("Delete Ball !");
        }
    }

    // 공과 물체간 충돌 확인 및 제거
    for(var i = 0; i < BALL.ballList.length; i++)
    {
        for(var j = 0; j < BOX.boxContainer.children.length; j++)
        {
            if(bump.hitTestRectangle(BALL.ballList[i].sprite, BOX.boxContainer.children[j]))
            {
                var rect = BOX.boxContainer.children[j].getBounds();
                BALL.ballList[i].boundByBound(rect);

                BOX.boxContainer.children[j].hp--;
                if(BOX.boxContainer.children[j].hp <= 0)
                {
                    BOX.boxContainer.removeChild(BOX.boxContainer.children[j]);
                }

                console.log("Collision");
            }
        } // for BOX
    } // for BALL
}
