// variable (Resource)
var ballTexture = PIXI.Texture.fromImage('required/assets/ball.png');
ballTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

var bulletSpeed = 10;

// Definition
class ball{

    constructor(x, y, rotation, container){
        this.sprite = new PIXI.Sprite(ballTexture);
        this.sprite.anchor.set(0.5);
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.rotation = rotation;
        this.deleteMe = false
        container.addChild(this.sprite);
    }

    move(delta){
        this.sprite.x += Math.cos(this.sprite.rotation - Math.PI / 2) * delta * bulletSpeed;
        this.sprite.y += Math.sin(this.sprite.rotation - Math.PI / 2) * delta * bulletSpeed;
    }

    reflection(){
        if(this.sprite.x < 0 || this.sprite.x > 720){
            this.sprite.rotation = Math.abs(this.sprite.rotation + (Math.PI / 2));
            if(this.sprite.x < 0) this.sprite.x = 0;
            if(this.sprite.x > 720) this.sprite.x = 700;
        }

        if(this.sprite.y < 0 || this.sprite.y > 1280){
            this.sprite.rotation = Math.PI - this.sprite.rotation;
            if(this.sprite.y < 0) this.sprite.y = 10;
            if(this.sprite.y > 1280) this.deleteMe = true;
        }
    }
}