// Properties and Variable

var app, bump, graphics;    // library
var player,  ballList;      // variable
var lineLength = 50;        // constant


// init
initComponent();
initField();
initKeyboard();

// update
app.ticker.add(function(delta){

    updateKeyboard();
    updateBall(delta);
    updateGraphics();

});

// 컴포넌트 초기화
function initComponent(){
    // init library and variable
    app = new PIXI.Application(720, 1280, {backgroundColor : 0x1099bb});
    graphics = new PIXI.Graphics();
    bump = new Bump(PIXI);
    ballList = new Array();
    document.body.appendChild(app.view);

    // init player
    player = createPlayer(0,0);
    player.setX(app.screen.width / 2);
    player.setY(app.screen.height / 2);

    // << : app stage 대신 플레이어만 관리할 컨테이너에 추가한다.
    app.stage.addChild(player);
    app.stage.addChild(graphics);
}

// create Field
function initField(){

    // << : app.stage 대신 박스만 관리할 컨테이너에 추가한다.
    app.stage.addChild(new box(100, 100).sprite);
    app.stage.addChild(new box(150, 100).sprite);
    app.stage.addChild(new box(200, 100).sprite);
}

// init keyboard event function
function initKeyboard(){

    keyLeft.press = player.rotateLeft;
    keyRight.press = player.rotateRight;
    //keySpace.press = player.fireBall(ballList, app);
}

// Update
function updateBall(delta){

    for(var i = 0; i < ballList.length; ++i){
        ballList[i].move(delta);
        ballList[i].reflection();

        if(ballList[i].deleteMe){
            app.stage.removeChild(ballList[i]);
            ballList.splice(i,1);
        }
    }

    console.log("볼 개수 : " + ballList.length);
}

// draw Line
function updateGraphics(){
    graphics.clear();
    graphics.beginFill(0xFF3300);
    graphics.lineStyle(4, 0xffd900, 1);
    graphics.moveTo(player.x, player.y);
    graphics.lineTo(Math.cos(player.rotation - Math.PI / 2) * lineLength + player.x, Math.sin(player.rotation - Math.PI / 2) * lineLength + player.y);
    graphics.endFill();
}

// update Keyboard
function updateKeyboard(){

    // << : 추후 Singleton으로 키보드를 분리합니다.
    if(keyLeft.isDown) { keyLeft.press(); }
    if(keyRight.isDown){ keyRight.press(); }
}

// 객체 복사 함수
function clone(obj){
    if(obj === null || typeof(obj) !== 'object')
        return obj;

    var copy = obj.constructor();

    for(var attr in obj){
        if(obj.hasOwnProperty(attr)){
            copy[attr] = clone(obj[attr]);
        }
    }

    return copy;
}