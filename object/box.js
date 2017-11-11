class boxMgr{
    constructor(){
        this.BoxList = new Array();

        Device.app.ticker.add(this.update.bind(this));
        Device.app.ticker.add(this.lateUpdate.bind(this));
    }

    // 업데이트
    update(){
        this.checkHP();
    }

    // 늦은 업데이트
    lateUpdate(){
    }

    createBox(x, y, HP){
        var obj = new box(x,y,HP);
        Device.depth1.addChild(obj.sprite);
        this.BoxList.push(obj);
    }

    createMap()
    {
        for(var i = 200; i <= 600; i += 50)
        {
            this.createBox(i, 100, i / 50);
        }
    }

    moveBox(){
        for(let i = 0; i < this.BoxList.length; i++){
            this.BoxList[i].sprite.y += 50;
            if(this.BoxList[i].sprite.y >= Device.app.screen.height / 2){
                Device.die.renderable = true;
            }
        }
    }

    checkHP(){
        for(let i = 0; i < this.BoxList.length; i++)
        {
            if(this.BoxList[i].hp <= 0)
            {
                Device.depth1.removeChild(this.BoxList[i].sprite);
                this.BoxList.splice(i, 1);
                Device.addScore();
            }
        }
    }
}

class box{
    constructor(x, y, HP){
        this.sprite = new PIXI.Sprite(PIXI.Texture.fromImage('required/assets/box1.png'));
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.interactive = true;
        this.sprite.anchor.set(0.5);
        this.sprite.scale.set(2);

        this.hp = HP;
    }

    setX(value){
        this.x = value;
    }

    setY(value){
        this.y = value;
    }

}

