class boxMgr{
    constructor(){
        this.BoxList = new Array();
        Device.app.ticker.add(this.update.bind(this));
        Device.app.ticker.add(this.lateUpdate.bind(this));

        this.stageType = 0; // 패턴용
        this.createType = 0;

        this.createCnt = 0;
    }

    // 업데이트
    update(){
        this.checkHP();
        for(let i = 0; i < this.BoxList.length; i++)
        {
            this.BoxList[i].update();
        }
    }

    // 늦은 업데이트
    lateUpdate(){
        for(let i = 0; i < this.BoxList.length; i++)
        {
            this.BoxList[i].lateUpdate();
        }
    }

    // 박스 생성 (Number에 따른 위치 정의)
    createBox(number){
        var obj = new box(200 + number * 50,100,Math.floor((this.createCnt / 3)) + 1);
        Device.depth1.addChild(obj.sprite);
        this.BoxList.push(obj);
        Device.depth4.addChild(obj.text);
    }

    // 박스 생성 (number에 따른 위치 정의)
    createLine()
    {
        switch(this.stageType)
        {
            case 0:
                this.createType0();
                break;
            case 1:
                this.createType1();
                break;
            default:
                console.log("박스 생성 조건이 비 정상적입니다.");
                this.stageType = 0;
                this.createType = 0;
                break;
        }

        this.createCnt++;
        this.createType++;
    }

    // 박스를 한칸씩 이동
    moveBox(){
        for(let i = 0; i < this.BoxList.length; i++){
            this.BoxList[i].sprite.y += 50;
            if(this.BoxList[i].sprite.y >= Device.app.screen.height / 2){
                Device.die.renderable = true;
            }
        }
    }

    // 박스의 체력을 확인하고 0이하는 제거
    checkHP(){
        for(let i = 0; i < this.BoxList.length; i++)
        {
            if(this.BoxList[i].hp <= 0)
            {
                Device.depth1.removeChild(this.BoxList[i].sprite);
                Device.depth4.removeChild(this.BoxList[i].text);
                this.BoxList.splice(i, 1);
                Device.addScore();
            }
        }
    }

    // 0번째 패턴
    createType0(){
        switch(this.createType)
        {
            case 0:
                this.createBox(5);
                break;
            case 1:
                this.createBox(4);
                this.createBox(5);
                this.createBox(6);
                break;
            case 2:
                this.createBox(3);
                this.createBox(4);
                this.createBox(5);
                this.createBox(6);
                this.createBox(7);
                break;
            case 3:
                this.createBox(2);
                this.createBox(3);
                this.createBox(4);
                this.createBox(5);
                this.createBox(6);
                this.createBox(7);
                this.createBox(8);
                break;
            case 4:
                this.createBox(1);
                this.createBox(2);
                this.createBox(3);
                this.createBox(4);
                this.createBox(5);
                this.createBox(6);
                this.createBox(7);
                this.createBox(8);
                this.createBox(9);
                this.createType = 0;
                this.stageType = 1;
                break;
            default:
                console.log("비 정상적인 Create Cnt");
                break;
        }
    }

    // 1번째 패턴
    createType1(){
        switch(this.createType)
        {
            case 0:
                this.createBox(1);
                this.createBox(2);
                this.createBox(5);
                this.createBox(8);
                this.createBox(9);
                break;
            case 1:
                this.createBox(1);
                this.createBox(4);
                this.createBox(5);
                this.createBox(6);
                this.createBox(9);
                break;
            case 2:
                this.createBox(1);
                this.createBox(2);
                this.createBox(3);
                this.createBox(7);
                this.createBox(8);
                this.createBox(9);
                break;
            case 3:
                this.createBox(1);
                this.createBox(3);
                this.createBox(4);
                this.createBox(6);
                this.createBox(7);
                this.createBox(9);
                this.createType = 0;
                this.stageType = 0;
                break;
            default:
                console.log("비 정상적인 Create Cnt");
                break;
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

        this.text = new PIXI.Text(HP);
        this.text.x = x;
        this.text.y = y;
    }

    update(){
        this.updateText();
    }

    lateUpdate(){

    }

    updateText(){
        this.text.x = this.sprite.x;
        this.text.y = this.sprite.y;
    }

    setX(value){
        this.x = value;
    }

    setY(value){
        this.y = value;
    }

}

