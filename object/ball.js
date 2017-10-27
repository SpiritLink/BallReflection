class ballMgr{
    constructor(){
        this.Container = new PIXI.Container();
        this.ballList = new Array();
        this.speed = 10;
    }

    update(delta){
        this.move(delta);
        this.reflection();
        this.deleteBall();
    }

    updateGraphics(){
        for(let i = 0; i < this.ballList.length; ++i){
            graphics.lineStyle(0);
            graphics.beginFill(0xFF0000, 0.5);
            graphics.drawCircle(this.ballList[i].sprite.x, this.ballList[i].sprite.y, 5);
            graphics.endFill();
        }
    }

    createBall(x, y, rotation){
        var ball = new Object();
        ball.sprite = new PIXI.Sprite(PIXI.Texture.fromImage('required/assets/ball.png'));
        ball.sprite.x = x;
        ball.sprite.y = y;
        ball.sprite.rotation = rotation;
        ball.sprite.anchor.set(0.5);

        ball.deleteMe = false;

        ball.bounceX = function(){ this.sprite.rotation = -this.sprite.rotation; }.bind(ball);
        ball.bounceY = function(){ this.sprite.rotation = Math.PI - this.sprite.rotation; }
        ball.boundByBound = this.boundByBound.bind(ball);

        this.Container.addChild(ball.sprite);
        this.ballList.push(ball);
    }

    // 움직임에 대한 정의
    move(delta){
        for(let i = 0; i < this.ballList.length; i++){
            this.ballList[i].sprite.x += Math.cos(this.ballList[i].sprite.rotation - Math.PI / 2) * delta * this.speed;
            this.ballList[i].sprite.y += Math.sin(this.ballList[i].sprite.rotation - Math.PI / 2) * delta * this.speed;
        }
    }

    // 반사에 대한 정의
    reflection(){
        for(let i = 0; i < this.ballList.length; i++){

            // 왼 충돌
            if(this.ballList[i].sprite.x < 0) {
                this.ballList[i].bounceX();
                this.ballList[i].sprite.x = 10;
            }

            // 오른 충돌
            if(this.ballList[i].sprite.x > 720){
                this.ballList[i].bounceX();
                this.ballList[i].sprite.x = 710;
            }

            // 위 충돌
            if(this.ballList[i].sprite.y < 0){
                this.ballList[i].bounceY();
                this.ballList[i].sprite.y = 10;
            }

            // 아래 충돌
            if(this.ballList[i].sprite.y > 1280){
                this.ballList[i].bounceY();
                this.ballList[i].deleteMe = true;
            }
        }
    }

    // 사라진 공을 삭제한다.
    deleteBall() {
        for(let i = 0; i < this.ballList.length; i++) {
            if (this.ballList[i].deleteMe) {
                this.Container.removeChild(this.ballList[i].sprite);
                this.ballList.splice(i, 1);
                console.log("Delete Ball !");
            }
        }
    }

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
}

var BallMGR = new ballMgr();