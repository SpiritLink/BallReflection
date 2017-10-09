// Properties and Variable
var app, bump, graphics;    // library
var player,  ballList;      // variable
var lineLength = 50;        // constant
var bulletSpeed = 10;

// init
initComponent();
initField();
initKeyboard();

// update
app.ticker.add(function(delta){

    if(keyLeft.isDown) {keyLeft.press(); }
    if(keyRight.isDown){keyRight.press(); }

    updateBall(delta);
    updateGraphics();
});

// render// << :
// 컨테이너로 구분한뒤 그릴 순서를 정한다. (Z-Order 또는 Depth와 같은 개념)
// >> :

// Function Definition
// 컴포넌트 초기화
function initComponent(){
    // init library and variable
    app = new PIXI.Application(720, 1280, {backgroundColor : 0x1099bb});
    graphics = new PIXI.Graphics();
    bump = new Bump(PIXI);
    ballList = new Array();
    document.body.appendChild(app.view);

    // init Player // << : 추후에 클래스로 변경합니다.
    player = PIXI.Sprite.fromImage('required/assets/p.png');
    player.x = app.renderer.width / 2;
    player.y = app.renderer.height / 2;
    player.typeName = 'player';
    player.anchor.set(0.5);
    player.rotation = 0;


    // Add Render
    app.stage.addChild(player);
    app.stage.addChild(graphics);
}

// 필드 정보 초기화
function initField(){

    createBox(100,100,1);
    createBox(150,100,1);
    createBox(200,100,1);
}

// init keyboard event function
function initKeyboard(){

    keyLeft.press = function() {
        //console.log('press left');
        player.rotation -= Math.PI / 180;
        if(player.rotation < -Math.PI / 2){ player.rotation = -Math.PI / 2; }
    }

    keyRight.press = function() {
        //console.log('press right');
        player.rotation += Math.PI / 180;
        if(player.rotation > Math.PI / 2){ player.rotation = Math.PI / 2; }
    }

    keySpace.press = function() {
        console.log('press Space');
        var ballObj = ball();
        ballList.push(ballObj);
    }
}

// Update Ball
function updateBall(delta){

    for(var i = 0; i < ballList.length; ++i){
        ballList[i].move(delta);
        ballList[i].reflection();

        /*
        if(ballList[i].x < 0 || ballList[i].x > 720){
            app.stage.removeChild(ballList[i]);
            ballList.splice(i,1);
        }
        */
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