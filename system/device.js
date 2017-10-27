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
        this.bump = new Bump(PIXI);

        document.body.appendChild(this.app.view);

    }

    stageAddChild(container){
        this.app.stage.addChild(container);
    }

    init(){
        this.stageAddChild(this.graphics);
    }
}

var Device = device.getInstance();