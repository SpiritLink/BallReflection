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
        this.nPoint = 0;

        Device.app.ticker.add(this.Update);

    }

    Update(){
        super.Update();
        console.log("Log !");
        //this.UI.SetPoint(this.nPoint);
        this.nPoint = this.nPoint + 1;
    }

    Render(){
        super.Render();
    }

    Destroy(){
        super.Destroy();
        Device.app.ticker.remove(this.Update);
    }
}