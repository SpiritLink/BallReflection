
Device.init();

SceneManager.ChangeScene("Intro");
//SceneManager.ChangeScene("Ingame;

PIXI.loader
    .add('slime', 'required/assets/monster/knight/Knights0.json')
    .load(onAssetsLoaded);

function onAssetsLoaded(loader , res)
{
    var slime = new PIXI.spine.Spine(res.slime.spineData);

    slime.x = 100;
    slime.y = 100;

    Device.app.stage.addChild(slime);
}
