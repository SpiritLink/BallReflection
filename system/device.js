class device {
    static getInstance() {
        if( !device.instance ) {
            device.instance = new device();
        }
        return device.instance;
    }

    constructor(){
        // 변수
        this.app = new PIXI.Application(720, 1280, {backgroundColor : 0x1099bb});
        this.graphics = new PIXI.Graphics();
        this.bump = new Bump(PIXI);
        this.pointText = undefined;
        this.maxBallCntText = undefined;

        this.ealryFunctions = new Array();
        this.functions = new Array();
        this.lateFunctions = new Array();

        // 컨테이너
        this.depth1 = new PIXI.Container(); // 지형
        this.depth2 = new PIXI.Container(); // 물체
        this.depth3 = new PIXI.Container(); // 플레이어, 투사체
        this.depth4 = new PIXI.Container(); // UI


        this.app.stage.addChild(this.depth1);
        this.app.stage.addChild(this.depth2);
        this.app.stage.addChild(this.depth3);
        this.app.stage.addChild(this.depth4);
        this.app.stage.addChild(this.graphics); // depth 5 Debug

        // 업데이트
        this.app.ticker.add(this.earlyUpdate.bind(this));
        this.app.ticker.add(this.update.bind(this));
        this.app.ticker.add(this.lateUpdate.bind(this));

        // 임시
        this.score = 0;
        this.nextStage = false;
        this.Container = new PIXI.Container();

        // body 추가
        document.body.appendChild(this.app.view);

    }

    stageAddChild(depth, sprite){
        switch(depth){
            case 1:
                this.depth1.addChild(sprite);
                break;
            case 2:
                this.depth2.addChild(sprite);
                break;
            case 3:
                this.depth3.addChild(sprite);
                break;
            default:
                console.log("비 정상적인 depth 입니다.")
                break;
        }
    }

    init(){
        this.die = new PIXI.Sprite(PIXI.Texture.fromImage('required/assets/Die.jpg'));
        this.die.renderable = false;
        this.depth4.addChild(this.die);

        var style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440
        });

        this.pointText = new PIXI.Text('점수 : 0 ', style);
        this.pointText.x = 0;
        this.pointText.y = 0;
        this.depth4.addChild(this.pointText);

        this.maxBallCntText = new PIXI.Text("볼 카운팅", style);
        this.maxBallCntText.x = 0;
        this.maxBallCntText.y = 50;
        this.depth4.addChild(this.maxBallCntText);
    }

    setMaxBallCnt(cnt){
        if(this.maxBallCntText != undefined){
            this.maxBallCntText.text = "볼 개수 :" + cnt;
        }
    }
    addScore(){
        this.score += 5;
        console.log("점수 : " + this.score);
        this.pointText.text = "점수 : " + this.score;
    }

    // 이전 업데이트
    earlyUpdate(){
        this.graphics.clear();

        for(let i = 0; i < this.ealryFunctions.length; i++)
        {
            this.ealryFunctions[i];
        }
    }

    // 업데이트
    update(){

        for(let i = 0; i < this.functions.length; i++)
        {
            this.functions[i];
        }

        if(this.nextStage == true){
            BoxMGR.moveBox();
            BoxMGR.createLine();
            this.nextStage = false;
        }
    }

    // 늦은 업데이트 (현재 디버그 용으로 사용)
    lateUpdate(){
        for(let i = 0; i < Device.depth1.children.length; i++)
        {
            var rect = Device.depth1.children[i].getBounds();

            Device.graphics.lineStyle(0);
            Device.graphics.beginFill(0xFF0000, 0.5);
            Device.graphics.drawCircle(rect.x , rect.y , 5);
            Device.graphics.endFill();

            Device.graphics.lineStyle(0);
            Device.graphics.beginFill(0xFF0000, 0.5);
            Device.graphics.drawCircle(rect.x + rect.width, rect.y, 5);
            Device.graphics.endFill();

            Device.graphics.lineStyle(0);
            Device.graphics.beginFill(0xFF0000, 0.5);
            Device.graphics.drawCircle(rect.x + rect.width , rect.y + rect.height, 5);
            Device.graphics.endFill();

            Device.graphics.lineStyle(0);
            Device.graphics.beginFill(0xFF0000, 0.5);
            Device.graphics.drawCircle(rect.x , rect.y + rect.height, 5);
            Device.graphics.endFill();
        }

        for(let i = 0; i < this.lateFunctions.length; i++)
        {
            this.lateFunctions[i];
        }
    }
}

var Device = device.getInstance();