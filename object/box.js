var BOX = BOX || {};

BOX.boxContainer = new PIXI.Container();
BOX.Texture = PIXI.Texture.fromImage('required/assets/box1.png');

// 좌표 디버그용 함수
BOX.updateGraphics = function () {

    for(var i = 0; i < BOX.boxContainer.children.length; ++i){

        var rect = BOX.boxContainer.children[i].getBounds();

        graphics.lineStyle(0);
        graphics.beginFill(0xFF0000, 0.5);
        graphics.drawCircle(rect.x , rect.y , 5);
        graphics.endFill();

        graphics.lineStyle(0);
        graphics.beginFill(0xFF0000, 0.5);
        graphics.drawCircle(rect.x + rect.width, rect.y, 5);
        graphics.endFill();

        graphics.lineStyle(0);
        graphics.beginFill(0xFF0000, 0.5);
        graphics.drawCircle(rect.x + rect.width , rect.y + rect.height, 5);
        graphics.endFill();

        graphics.lineStyle(0);
        graphics.beginFill(0xFF0000, 0.5);
        graphics.drawCircle(rect.x , rect.y + rect.height, 5);
        graphics.endFill();
    }
}

// 박스 정의
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