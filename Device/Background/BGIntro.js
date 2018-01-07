class BGIntro extends BGRoot{

    constructor(){
        super();
    }

    init(){
        super.init();

        this.sprite = PIXI.Sprite.fromImage('required/assets/background/hexagon.jpg');
        this.sprite.anchor.set(0.5);
        this.sprite.x = Device.app.screen.width / 2;
        this.sprite.y = Device.app.screen.height / 2;

        this.container.addChild(this.sprite);
    }

    destroy(){
        super.destroy();
    }
}