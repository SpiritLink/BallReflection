class rootObstacle{
    constructor(x, y, HP, spriteName){
        this.background = new PIXI.Sprite(PIXI.Texture.fromImage(spriteName));
        this.background.x = x;
        this.background.y = y;
        this.background.interactive = true;
        this.background.anchor.set(0.5);
        this.background.scale.set(2);

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
        this.text.x = this.background.x;
        this.text.y = this.background.y;
    }
}
