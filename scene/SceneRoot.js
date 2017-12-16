// 모든 씬의 공통점
// 모든 행동이 업데이트, 렌더로 합쳐지도록 구성
class SceneRoot{
    constructor(){
        this.UI = new Object();     // UI
        this.Obj = new Object();    // Object
    }

    Init(){
        if(this.UI !== undefined)
            this.UI.Init();

        if(this.Obj !== undefined)
            this.Obj.Init();
    }

    Update(){
        if(this.UI !== undefined)
            this.UI.Update();
        if(this.Obj !== undefined)
            this.Obj.Update();
    }

    Render(){
        if(this.UI !== undefined)
            this.UI.Render();
        if(this.Obj !== undefined)
            this.Obj.Render();
    }

    Destroy(){
        if(this.UI !== undefined)
            this.UI.Destroy();
        if(this.Obj !== undefined)
            this.Obj.Destroy();
    }
}