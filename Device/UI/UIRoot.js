class UIRoot{

    constructor(){
        this.container = new PIXI.Container();
        Device.app.addChild(this.container);
    }

    init(){

    }

    destroy(){
        Device.app.removeChild(this.container);
    }
}