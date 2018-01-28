class normalWeapon extends rootWeapon{
    constructor(x, y, rot){
        super(x, y, rot,'required/assets/ball.png');
        this.speed = 10;    // 무기에 따른 개별적인 속도
    }

    update(){
        super.update(); // 부모 클래스 업데이트
        this.move(arguments[0]);
    }

    lateUpdate(){
        super.lateUpdate();
    }

    // 움직임에 대한 정의
    move(delta){
        this.background.x += Math.cos(this.background.rotation - Math.PI / 2) * delta * this.speed;
        this.background.y += Math.sin(this.background.rotation - Math.PI / 2) * delta * this.speed;
    }

}
