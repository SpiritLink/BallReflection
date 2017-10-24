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
        updateGraphics();
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
        app.stage.addChild(objContainer);
        app.stage.addChild(ballContainer);
        app.stage.addChild(plContainer);
    }

// init Field
    function initField(){
        objContainer.addChild(new box(100,100).sprite);
        objContainer.addChild(new box(150,100).sprite);
        objContainer.addChild(new box(200,100).sprite);
    }

// init keyboard event function
    function initKeyboard(){

        keyLeft.press = player.rotateLeft.bind(player);
        keyRight.press = player.rotateRight.bind(player);
        keySpace.press = player.fireBall.bind(player);
    }

// draw Line
    function updateGraphics() {
        graphics.clear();
        graphics.beginFill(0xFF3300);
        graphics.lineStyle(4, 0xffd900, 1);
        graphics.moveTo(player.x, player.y);
        graphics.lineTo(Math.cos(player.rotation - Math.PI / 2) * lineLength + player.x, Math.sin(player.rotation - Math.PI / 2) * lineLength + player.y);
        graphics.endFill();
    }


