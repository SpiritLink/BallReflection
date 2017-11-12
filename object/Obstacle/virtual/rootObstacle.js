class rootObstacle{
    constructor(x, y, HP, spriteName){
        this.sprite = new PIXI.Sprite(PIXI.Texture.fromImage(spriteName));
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.interactive = true;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(2);

        this.hp = HP;

        this.text = new PIXI.Text(HP);
        this.text.x = x;
        this.text.y = y;
        this.text.anchor.set(0.5);
    }

    // 업데이트
    update(){
        this.updateText();
    }

    // 늦은 업데이트
    lateUpdate(){

    }

    // HP 텍스트 위치 조정
    updateText(){
        this.text.x = this.sprite.x;
        this.text.y = this.sprite.y;
    }
}