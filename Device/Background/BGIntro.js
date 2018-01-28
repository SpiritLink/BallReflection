class BGIntro extends BGRoot{

    constructor(){
        super();
        this.slime = undefined;
    }

    init(){
        super.init();

        this.sprite = PIXI.Sprite.fromImage('required/assets/background/background0.png');
        this.sprite.anchor.set(0.5);
        this.sprite.x = Device.app.screen.width / 2;
        this.sprite.y = Device.app.screen.height / 2;
        this.sprite.width = 576;
        this.sprite.height = 1024;

        this.container.addChild(this.sprite);

        PIXI.loader.add('slime', 'required/assets/monster/knight/Knights0.json').load(this.onAssetsLoaded.bind(this));
    }

    destroy(){
        super.destroy();
    }

    onAssetsLoaded(loader, res)
    {
        this.slime = new PIXI.spine.Spine(res.slime.spineData);

        Device.app.stage.addChild(this.slime);

        this.slime.x = 100;
        this.slime.y = 50;
    }

    onAssetsLoaded2(loader, res)
    {
        this.knight = new PIXI.spine.Spine(res.knight.spineData);

        Device.app.stage.addChild(this.knight);

        this.knight.x = 200;
        this.knight.y = 200;
    }
}
