// 게임 메뉴 화면을 위한 씬
class SceneIntro extends SceneRoot{



    Init(){
        super.Init();
        this.SpriteImg = PIXI.Sprite.fromImage('required/assets/bluebutton.png');
        this.SpriteImg.anchor.set(0.5);
        this.SpriteImg.x = Device.app.screen.width / 2;
        this.SpriteImg.y = Device.app.screen.height / 2;

        Device.stageAddChild(3,this.SpriteImg);
    }

    Update(){
        super.Update();
    }

    Render(){
        super.Render();
    }

    Destroy(){
        super.Destroy();
    }
}