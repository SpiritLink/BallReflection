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
        /*
                Device.functions.push(this.update.bind(this));
                Device.lateFunctions.push(this.lateUpdate.bind(this));
        */

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
            let ballObj = new normalWeapon(this.ballX, this.ballY, this.ballRotation);
            Device.stageAddChild(2, ballObj.background);
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

                Device.depth2.removeChild(this.ballList[i].background); // Device에서 자동으로 찾을수 있도록 변경
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
