// Background Super 클래스
class BGRoot{

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