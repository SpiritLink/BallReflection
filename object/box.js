// variable (Resource)
var box1, box2, box3;
box1 = PIXI.Texture.fromImage('required/assets/box1.png');
box1.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
box2 = PIXI.Texture.fromImage('required/assets/box2.png');
box2.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
box3 = PIXI.Texture.fromImage('required/assets/box3.png');
box3.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

// Definition
class box {
    constructor(x, y){
        this.sprite = new PIXI.Sprite(box1);
        this.sprite.x = x;
        this.sprite.y = y;

        this.sprite.interactive = true;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(2);
    }
}