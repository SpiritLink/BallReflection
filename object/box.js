// variable (Resource)
var BOX = BOX || {};

BOX.boxContainer = new PIXI.Container();
BOX.Texture = PIXI.Texture.fromImage('required/assets/box1.png');

BOX.box = class{
    constructor(x, y){
        this.sprite = new PIXI.Sprite(BOX.Texture);
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.interactive = true;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(2);
    }

    setX(x) { this.sprite.x = x; }

    setY(y) { this.sprite.y = y; }
}