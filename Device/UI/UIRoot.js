// UI Super 클래스
class UIRoot{

    constructor(){
        this.container = new PIXI.Container();
        Device.app.stage.addChild(this.container);
    }

    init(){

    }

    destroy(){
        Device.app.stage.removeChild(this.container);
    }
}