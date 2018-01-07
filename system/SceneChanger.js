// 씬의 전환을 담당
class SceneChanger{
    static getInstance(){
        if(!SceneChanger.instance){
            SceneChanger.instance = new SceneChanger();
        }
        return SceneChanger.instance;
    }

    constructor(){
        this.currentScene = undefined;
    }

    ChangeScene(SceneState){

        if(this.currentScene !== undefined)
            this.currentScene.Destroy();

        console.log(SceneState);

        switch(SceneState){
            case "Ingame":
                this.currentScene = new SceneIngame();

                break;
            case "Intro":
                this.currentScene = new SceneIntro();
                break;
        }

        this.currentScene.Init();
        Device.app.ticker.add(this.currentScene.update);
    }
}

var SceneManager = SceneChanger.getInstance();