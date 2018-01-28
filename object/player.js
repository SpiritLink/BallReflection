class Player{
    constructor(x, y){
        this.background = new PIXI.Sprite(PIXI.Texture.fromImage('required/assets/p.png'));

        this.background.x = x;
        this.background.y = y;
        this.background.typeName = 'player';
        this.background.anchor.set(0.5);
        this.background.rotation = 0;

        kb.addPress(37, this.rotateLeft.bind(this));
        kb.addPress(39, this.rotateRight.bind(this));
        kb.addRelease(32, this.fireBall.bind(this));

        Device.depth3.addChild(this.background);
    }

    Init(ballMgr){
        this.BallMgr = ballMgr;
    }

    update(){
    }

    lateUpdate(){

    }
    // 왼 회전
    rotateLeft(){
        this.background.rotation -= Math.PI / 180;
        if(this.background.rotation < -Math.PI / 2) { this.background.rotation = -Math.PI / 2; }
    }

    // 오른 회전
    rotateRight(){
        this.background.rotation += Math.PI / 180;
        if(this.background.rotation > Math.PI / 2) { this.background.rotation = Math.PI / 2; }
    }

    // 탄 발사 (=== 으로 통일)
    fireBall(){
        if(this.BallMgr.leftCnt === 0) {
            //parseInt() String을 Int로 변환
            this.BallMgr.intervalFire(this.background.x, this.background.y, this.background.rotation);
        }
    }

    // X좌표 설정
    setX(value) { this.background.x = value; }

    // Y좌표 설정
    setY(value) { this.background.y = value; }
}

