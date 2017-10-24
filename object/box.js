// variable (Resource)

var objContainer;
objContainer = new PIXI.Container();

class box
{
    constructor(x, y){
        this.sprite = new PIXI.Sprite(PIXI.Texture.fromImage('required/assets/box1.png'));
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.interactive = true;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(2);
    }

    setX(x) {
        this.sprite.x = x;
    }

    setY(y) {
        this.sprite.y = y;
    }
}
