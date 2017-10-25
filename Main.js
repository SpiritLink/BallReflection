// Properties and Variable

var app, bump, graphics;    // library
// variable

let lineLength = 50;        // constant

// init
    initComponent();
    initField();
    initKeyboard();

// update
    app.ticker.add(function(delta){
        updateBall(delta);
        updateKeyboard();
        BALL.updateGraphics();
    });

// init Variable
    function initComponent(){

        app = new PIXI.Application(720, 1280, {backgroundColor : 0x1099bb});
        document.body.appendChild(app.view);
        graphics = new PIXI.Graphics();
        bump = new Bump(PIXI);

        player.setX(app.screen.width / 2);
        player.setY(app.screen.height / 2);

        // add Container
        app.stage.addChild(BOX.boxContainer);
        app.stage.addChild(BALL.ballContainer);
        app.stage.addChild(PLAYER.Container);
        PLAYER.Container.addChild(graphics);    // 현재 플레이어 컨테이너에 임시 설정
    }

// init Field
    function initField(){
        for(var i = 0; i <= 1000; i += 50)
        {
            var box = new BOX.box(i, 100);
            BOX.boxContainer.addChild(box.sprite);
        }
    }

// init keyboard event function
    function initKeyboard(){

        keyLeft.press = player.rotateLeft.bind(player);
        keyRight.press = player.rotateRight.bind(player);
        keySpace.press = player.fireBall.bind(player);
    }



