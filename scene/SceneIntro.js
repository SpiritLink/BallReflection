// 게임 메뉴 화면을 위한 씬
class SceneIntro extends SceneRoot{

    Init(){
        super.Init();

        this.BG = new BGIntro();
        this.BG.init();
        Device.ChangeBackground(this.BG);

        this.UI = new UIIntro();
        this.UI.init();
        Device.ChangeUI(this.UI);

        Device.app.ticker.add(this.Update);

    }

    Update(){
        super.Update();
    }

    Render(){
        super.Render();
    }

    Destroy(){
        super.Destroy();

        Device.app.ticker.remove(this.Update);
    }
}