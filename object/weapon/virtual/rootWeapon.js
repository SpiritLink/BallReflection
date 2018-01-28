class rootWeapon{

    // 모든 무기가 가지는 공통부분 정의
    constructor(x, y, rot, spriteName){
        this.background = new PIXI.Sprite(PIXI.Texture.fromImage(spriteName));
        this.background.anchor.set(0.5);
        this.background.x = x;
        this.background.y = y;
        this.background.rotation = rot;
        this.deleteMe = false;

    }

    // 업데이트
    update(){
        this.reflection();
        this.collisionCheck();
    }

    // 늦은 업데이트
    lateUpdate(){
        Device.graphics.lineStyle(0);
        Device.graphics.beginFill(0xFF0000, 0.5);
        Device.graphics.drawCircle(this.background.x, this.background.y, 5);
        Device.graphics.endFill();
    }

    // 일반적인 충돌처리, 다른 처리를 원할경우 해당 클래스에 오버라이딩, 수퍼클래스를 호출하지 않는다.
    reflection(){
        if(this.background.x < 0) {
            this.bounceX();
            this.background.x = 10;
        }

        // 오른 충돌
        if(this.background.x > 720){
            this.bounceX();
            this.background.x = 710;
        }

        // 위 충돌
        if(this.background.y < 0){
            this.bounceY();
            this.background.y = 10;
        }

        // 아래 충돌
        if(this.background.y > 1280){
            this.bounceY();
            this.deleteMe = true;
        }
    }

    // X축 반사
    bounceX(){ this.background.rotation = -this.background.rotation; }

    // Y축 반사
    bounceY(){ this.background.rotation = Math.PI - this.background.rotation; }

    // 다른 스프라이트와 충돌시 처리
    boundByBound(bound){
        let isInX = false;
        let isInY = false;

        if(this.background.centerX >= bound.x && this.background.centerX <= bound.x + bound.width)
        {
            isInX = true;
        }


        if(this.background.centerY >= bound.y && this.background.centerY <= bound.y + bound.height)
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

    // 충돌 체크
    collisionCheck(){
        /*
        for(let i = 0; i < BoxMGR.BoxList.length; i++)
        {
            if(Device.bump.hitTestRectangle(this.sprite, BoxMGR.BoxList[i].sprite))
            {
                var rect = BoxMGR.BoxList[i].sprite.getBounds();
                this.boundByBound(rect);

                BoxMGR.BoxList[i].hp--;
                //console.log("Collision");
            }
        } // for BOX
        */
    }

}
