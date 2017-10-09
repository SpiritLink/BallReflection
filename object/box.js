// variable (Resource)
var box1, box2, box3;
box1 = PIXI.Texture.fromImage('required/assets/box1.png');
box1.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
box2 = PIXI.Texture.fromImage('required/assets/box2.png');
box2.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
box3 = PIXI.Texture.fromImage('required/assets/box3.png');
box3.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

// create box object
function createBox(x, y){
    var box;

    box = new PIXI.Sprite(box1);
    box.x = x;
    box.y = y;

    box.interactive = true;

    box.anchor.set(0.5);
    box.scale.set(2);

    return box;
}