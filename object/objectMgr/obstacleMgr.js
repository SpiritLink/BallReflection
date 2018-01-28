class fieldObjMgr{
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
    createBox(contain, number){
        var obj = new box(100 + number * 50,100,Math.floor((this.createCnt / 3)) + 1);
        contain.addChild(obj.background);
        this.BoxList.push(obj);
    }

    // 박스 생성 (number에 따른 위치 정의)
    createLine()
    {
        this.createCnt++;
        this.createType++;
    }

    // 박스의 체력을 확인하고 0이하는 제거
    checkHP(){
        for(let i = 0; i < this.BoxList.length; i++)
        {
            this.BoxList[i].text.text = this.BoxList[i].hp;
            if(this.BoxList[i].hp <= 0)
            {
                Device.depth1.removeChild(this.BoxList[i].background);
                this.BoxList.splice(i, 1);
            }
        }
    }
}
