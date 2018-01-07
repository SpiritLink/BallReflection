// 게임 플레이를 위한 씬
class SceneIngame extends SceneRoot{

    Init(){
        super.Init();

        this.BG = new BGIngame();
        this.BG.init();
        Device.ChangeBackground(this.BG);

        this.UI = new UIIngame();
        this.UI.init();
        Device.ChangeUI(this.UI);

        this.BallMGR = new ballMgr();
        this.BoxMGR = new boxMgr();
        this.player = new Player(Device.app.screen.width / 2, Device.app.screen.height / 2);

        this.player.Init(this.BallMGR);
        this.BoxMGR.createLine();

    }

    Update(){
        super.Update();
        console.log("Log !");
    }

    Render(){
        super.Render();
    }

    Destroy(){
        super.Destroy();
    }
}