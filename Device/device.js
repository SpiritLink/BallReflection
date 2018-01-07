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

        this.ealryFunctions = new Array();
        this.functions = new Array();
        this.lateFunctions = new Array();

        this.BG = undefined;
        this.Field = undefined;
        this.UI = undefined;

        // 컨테이너
        this.depth1 = new PIXI.Container(); // 지형
        this.depth2 = new PIXI.Container(); // 물체
        this.depth3 = new PIXI.Container(); // 플레이어, 투사체

        this.app.stage.addChild(this.depth1);
        this.app.stage.addChild(this.depth2);
        this.app.stage.addChild(this.depth3);
        this.app.stage.addChild(this.graphics); // depth 5 Debug

        // 업데이트 (순서는 추후에도 필요할 것으로 예상됨)
        this.app.ticker.add(this.earlyUpdate.bind(this));
        this.app.ticker.add(this.update.bind(this));
        this.app.ticker.add(this.lateUpdate.bind(this));

        // body 추가
        document.body.appendChild(this.app.view);

    }

    ChangeUI(Target){
        if(this.UI !== undefined)
        {
            this.UI.destroy();
        }


        this.UI = Target;
    }

    ChangeBackground(Target){
        if(this.BG !== undefined)
            this.BG.destroy();

        this.BG = Target;
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
    }

    destroy(){

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
            this.functions[i]();
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