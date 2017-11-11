
// ball Class 추가, AutoDetectRender 확인
class ballMgr{
    constructor(){
        this.ballList = []; // new 와 차이점이 있다.
        this.speed = 10;

        this.isFire = false;
        this.ballMaxCnt = 1;
        this.curBallCnt = 0;
        this.leftCnt = 0;   // 명확하게 (중복되는 느낌이 안들도록) removed

        this.ballRotation = 0;
        this.ballX = 0;
        this.ballY = 0;

        this.tickCnt = 0;

        Device.app.ticker.add(this.update.bind(this));
        Device.app.ticker.add(this.lateUpdate.bind(this));

        //var self = this;
        //Device.app.ticker.add(self.update.bind(self));   // Self로 할경우 (Self로 할시 Remove가 어려워진다)
    }

    // 업데이트
    update(){
        for(let i = 0; i < this.ballList.length; i++)
        {
            this.ballList[i].update(arguments[0]);
        }
        this.GenerateBall();
        this.deleteBall();
    }

    // 늦은 업데이트
    lateUpdate(){
        for(let i = 0; i < this.ballList.length; i++)
        {
            this.ballList[i].lateUpdate();
        }
    }

    // 제한된 공을 규칙적으로 발사
    intervalFire(x, y, rotation){
        if(this.isFire == false && this.leftCnt <= 0)
        {
            this.ballX = x;
            this.ballY = y;
            this.ballRotation = rotation;

            this.isFire = true;
            this.curBallCnt = this.ballMaxCnt;
            this.leftCnt = this.ballMaxCnt;
            this.ballMaxCnt++;
        }
    }

    // ball을 생성하는 함수
    GenerateBall(){
        this.tickCnt++;

        if(this.isFire === true && this.tickCnt > 15) {

            this.tickCnt = 0;
            this.curBallCnt--;

            // fireBall 에서 옮김
            let ballObj = new ball(this.ballX, this.ballY, this.ballRotation);
            Device.stageAddChild(2, ballObj.sprite);
            this.ballList.push(ballObj);

            if(this.curBallCnt <= 0){
                this.isFire = false;
                this.curBallCnt = 0;
            }
        }
    }

    // 사라진 공을 삭제한다.
    deleteBall() {
        for(let i = 0; i < this.ballList.length; i++) {

            if (this.ballList[i].deleteMe) {

                Device.depth2.removeChild(this.ballList[i].sprite); // Device에서 자동으로 찾을수 있도록 변경
                this.ballList.splice(i, 1);

                this.leftCnt--;
                if(this.leftCnt == 0) {
                    Device.nextStage = true;
                }
                console.log("Delete Ball !");
            }

        }
    }
}

// 투사체 공에 대한 정의
class ball{
    // x, y, 회전값 지정 후 생성
    constructor(x, y, rot){
        this.sprite = new PIXI.Sprite(PIXI.Texture.fromImage('required/assets/ball.png'));
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.rotation = rot;
        this.sprite.anchor.set(0.5);

        this.speed = 10;
        this.deleteMe = false;
    }

    // 업데이트
    update(delta){
        this.move(delta);    // 인자
        this.reflection();
    }

    // 늦은 업데이트 (디버그 용으로 사용)
    lateUpdate(){
        Device.graphics.lineStyle(0);
        Device.graphics.beginFill(0xFF0000, 0.5);
        Device.graphics.drawCircle(this.sprite.x, this.sprite.y, 5);
        Device.graphics.endFill();
    }

    // 이동
    move(delta){
        this.sprite.x += Math.cos(this.sprite.rotation - Math.PI / 2) * delta * this.speed;
        this.sprite.y += Math.sin(this.sprite.rotation - Math.PI / 2) * delta * this.speed;
    }

    // 반사
    reflection(){
        if(this.sprite.x < 0) {
            this.bounceX();
            this.sprite.x = 10;
        }

        // 오른 충돌
        if(this.sprite.x > 720){
            this.bounceX();
            this.sprite.x = 710;
        }

        // 위 충돌
        if(this.sprite.y < 0){
            this.bounceY();
            this.sprite.y = 10;
        }

        // 아래 충돌
        if(this.sprite.y > 1280){
            this.bounceY();
            this.deleteMe = true;
        }
    }

    // X축 반사
    bounceX(){ this.sprite.rotation = -this.sprite.rotation; }

    // Y축 반사
    bounceY(){ this.sprite.rotation = Math.PI - this.sprite.rotation; }

    // 다른 스프라이트와 충돌시 처리
    boundByBound(bound){
        let isInX = false;
        let isInY = false;

        if(this.sprite.centerX >= bound.x && this.sprite.centerX <= bound.x + bound.width)
        {
            isInX = true;
        }


        if(this.sprite.centerY >= bound.y && this.sprite.centerY <= bound.y + bound.height)
        {
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