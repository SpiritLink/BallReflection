class ballMgr{
    constructor(){
        this.Container = new PIXI.Container();
        this.ballList = new Array();
        this.speed = 10;

        this.isFire = false;
        this.ballCnt = 1;
        this.curBallCnt = 0;

        this.ballRot = 0;
        this.ballX = 0;
        this.ballY = 0;

        this.tickCnt = 0;

        Device.app.ticker.add(this.updateGraphics.bind(this));
        Device.app.ticker.add(function(delta){ this.update(delta) }.bind(this) )
        Device.app.ticker.add(this.GenerateBall.bind(this));
    }

    update(delta){
        this.move(delta);
        this.reflection();
        this.deleteBall();
    }

    updateGraphics(){
        for(let i = 0; i < this.ballList.length; ++i){
            Device.graphics.lineStyle(0);
            Device.graphics.beginFill(0xFF0000, 0.5);
            Device.graphics.drawCircle(this.ballList[i].sprite.x, this.ballList[i].sprite.y, 5);
            Device.graphics.endFill();
        }
    }

    // 공 생성 및 추가
    fireBall(x, y, rotation){
        var ball = new Object();
        ball.sprite = new PIXI.Sprite(PIXI.Texture.fromImage('required/assets/ball.png'));
        ball.sprite.x = x;
        ball.sprite.y = y;
        ball.sprite.rotation = rotation;
        ball.sprite.anchor.set(0.5);

        ball.deleteMe = false;

        ball.bounceX = function(){ this.sprite.rotation = -this.sprite.rotation; };
        ball.bounceY = function(){ this.sprite.rotation = Math.PI - this.sprite.rotation; }
        ball.boundByBound = this.boundByBound;

        this.Container.addChild(ball.sprite);
        this.ballList.push(ball);
    }

    // 제한된 공을 규칙적으로 발사
    intervalFire(x, y, rotation){
        if(this.isFire == false)
        {
            this.ballX = x;
            this.ballY = y;
            this.ballRot = rotation;

            this.isFire = true;
            this.curBallCnt = this.ballCnt;
            this.ballCnt++;
        }
    }

    GenerateBall(){
        this.tickCnt++;

        if(this.isFire === true && this.tickCnt > 30) {

            this.tickCnt = 0;
            this.curBallCnt--;

            this.fireBall(this.ballX, this.ballY, this.ballRot);

            if(this.curBallCnt <= 0){
                this.isFire = false;
                this.curBallCnt = 0;
            }
        }
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
            //console.log("bound Y !");
            isInX = true;
        }


        if(this.sprite.centerY >= bound.y && this.sprite.centerY <= bound.y + bound.height)
        {
            //console.log(bound.top);
            //console.log(bound.bottom);
            //console.log("bound X ! ");
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