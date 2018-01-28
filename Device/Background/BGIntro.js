class BGIntro extends BGRoot{

    constructor(){
        super();
        this.slime = undefined;
    }

    init(){
        super.init();

        // 배경
        this.background = PIXI.Sprite.fromImage('required/assets/background/background0.png');
        this.background.anchor.set(0.5);
        this.background.x = Device.app.screen.width / 2;
        this.background.y = Device.app.screen.height / 2;
        this.background.width = 576;
        this.background.height = 1024;
        this.container.addChild(this.background);

        // 성벽
        this.wall = PIXI.Sprite.fromImage('required/assets/background/rampart.png');
        this.wall.anchor.set(0.5);
        this.wall.width = 576;
        this.wall.height = 192;
        this.wall.x = Device.app.screen.width / 2;
        this.wall.y = Device.app.screen.height - this.wall.height;

        this.container.addChild(this.wall);

        //PIXI.loader.add('knight', 'required/assets/monster/knight/Knights0.json').load(this.onAssetsLoaded.bind(this));
    }

    destroy(){
        super.destroy();
    }

    onAssetsLoaded(loader, res)
    {
        this.slime = new PIXI.spine.Spine(res.knight.spineData);

        this.container.addChild(this.slime);

        this.slime.x = 100;
        this.slime.y = 100;

        // << : 컨테이너에 어떻게 담을지
    }
}
