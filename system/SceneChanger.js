// 씬의 전환을 담당
class SceneChanger{
    constructor(){
        this.currentScene = new SceneRoot();
    }

    ChangeScene(SceneState){

        if(this.currentScene !== undefined)
            this.currentScene.Destroy();

        switch(SceneState){
            case "Ingame":
                this.currentScene = new SceneIngame();
                break;
            case "Intro":
                this.currentScene = new SceneIntro();
                break;
        }
    }
}