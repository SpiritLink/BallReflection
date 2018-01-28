
Device.init();

SceneManager.ChangeScene("Intro");
//SceneManager.ChangeScene("Ingame;

//PIXI.loader.add('slime', 'required/assets/monster/knight/Knights0.json').load(onAssetsLoaded);

function onAssetsLoaded(loader , res)
{
    this.slime = new PIXI.spine.Spine(res.slime.spineData);

    Device.app.stage.addChild(this.slime);


    this.slime.x = 100;
    this.slime.y = 100;
}
