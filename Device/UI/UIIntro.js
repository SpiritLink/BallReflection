// Intro 에서 사용되는 UI 클래스
class UIIntro extends UIRoot{

    constructor(){
     super();
    }

    init(){
        this.SpriteImg = PIXI.Sprite.fromImage('required/assets/bluebutton.png');
        this.SpriteImg.anchor.set(0.5);
        this.SpriteImg.x = Device.app.screen.width / 2;
        this.SpriteImg.y = Device.app.screen.height / 2;

        this.SpriteImg.interactive = true;
        this.SpriteImg.buttonMode = true;

        this.SpriteImg.on('pointerdown', this.onClick);

        this.container.addChild(this.SpriteImg);

    }

    destroy(){
        super.destroy();
    }

    onClick(){
        SceneManager.ChangeScene("Ingame");
    }

}