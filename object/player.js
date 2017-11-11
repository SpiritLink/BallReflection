class Player{
    constructor(x, y){
        this.sprite = new PIXI.Sprite(PIXI.Texture.fromImage('required/assets/p.png'));

        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.typeName = 'player';
        this.sprite.anchor.set(0.5);
        this.sprite.rotation = 0;

        kb.addPress(37, this.rotateLeft.bind(this));
        kb.addPress(39, this.rotateRight.bind(this));
        kb.addRelease(32, this.fireBall.bind(this));

        Device.depth3.addChild(this.sprite);
    }

    update(){
    }

    lateUpdate(){

    }
    // 왼 회전
    rotateLeft(){
        this.sprite.rotation -= Math.PI / 180;
        if(this.sprite.rotation < -Math.PI / 2) { this.sprite.rotation = -Math.PI / 2; }
    }

    // 오른 회전
    rotateRight(){
        this.sprite.rotation += Math.PI / 180;
        if(this.sprite.rotation > Math.PI / 2) { this.sprite.rotation = Math.PI / 2; }
    }

    // 탄 발사 (=== 으로 통일)
    fireBall(){
        if(BallMGR.leftCnt === 0) {
            //parseInt() String을 Int로 변환
            BallMGR.intervalFire(this.sprite.x, this.sprite.y, this.sprite.rotation);
        }
    }

    // X좌표 설정
    setX(value) { this.sprite.x = value; }
    
    // Y좌표 설정
    setY(value) { this.sprite.y = value; }
}

