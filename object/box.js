class boxMgr{
    constructor(){
        this.Container = new PIXI.Container();
        this.BoxList = new Array();
    }

    update(){

    }

    updateGraphics(){
        for(let i = 0; i < this.Container.length; i++){
            var rect = this.Container.children[i].getBounds();

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

    createBox(x, y, HP){
        var obj = new Object();
        obj.sprite = new PIXI.Sprite(PIXI.Texture.fromImage('required/assets/box1.png'));
        obj.sprite.x = x;
        obj.sprite.y = y;
        obj.sprite.interactive = true;
        obj.sprite.anchor.set(0.5);
        obj.sprite.scale.set(2);

        obj.hp = HP;

        obj.setX = function(x){ this.sprite.x = x; }
        obj.setY = function(y){ this.sprite.y = y; }

        this.Container.addChild(obj.sprite);
        this.BoxList.push(obj);

    }
}

var BoxMGR = new boxMgr();