class device {
    static getInstance() {
        if( !device.instance ) {
            device.instance = new device();
        }
        return device.instance;
    }

    constructor(){
        this.app = new PIXI.Application(720, 1280, {backgroundColor : 0x1099bb});
        this.graphics = new PIXI.Graphics();
        this.app.ticker.add(this.graphics.clear.bind(this.graphics));
        this.app.ticker.add(this.update.bind(this));
        this.bump = new Bump(PIXI);

        // 임시
        this.score = 0;
        this.nextStage = false;
        this.Container = new PIXI.Container();

        document.body.appendChild(this.app.view);

    }

    stageAddChild(container){
        this.app.stage.addChild(container);
    }

    init(){
        this.stageAddChild(this.graphics);

        this.die = new PIXI.Sprite(PIXI.Texture.fromImage('required/assets/Die.jpg'));
        this.die.renderable = false;
        this.Container.addChild(this.die);
        this.stageAddChild(this.Container);
    }

    addScore(){
        this.score += 5;
        console.log("점수 : " + this.score);
    }

    update(){
        if(this.nextStage == true){
            BoxMGR.moveBox();
            BoxMGR.createMap();
            this.nextStage = false;
        }
    }
}

var Device = device.getInstance();