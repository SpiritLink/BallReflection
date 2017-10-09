// variable (Resource)
var ballTexture;
ballTexture = PIXI.Texture.fromImage('required/assets/ball.png');
ballTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;


// object Definition
function ball(){
    var ballObj = new PIXI.Sprite(ballTexture);
    ballObj.anchor.set(0.5);
    ballObj.rotation = clone(player.rotation);
    ballObj.x = player.x;
    ballObj.y = player.y;

    ballObj.move = function(delta){
        ballObj.x += Math.cos(ballObj.rotation - Math.PI / 2) * delta * bulletSpeed;
        ballObj.y += Math.sin(ballObj.rotation - Math.PI / 2) * delta * bulletSpeed;
    }

    ballObj.reflection = function(){
        if(ballObj.x < 0 || ballObj.x > 720){
            ballObj.rotation = Math.abs(ballObj.rotation + (Math.PI / 2));
            if(ballObj.x < 0) ballObj.x = 0;
            if(ballObj.x > 720) ballObj.x = 700;
        }
        if(ballObj.y < 0 || ballObj.y > 1280) {
            ballObj.rotation = Math.PI - ballObj.rotation;
            if(ballObj.y < 0) ballObj.y = 10;
            if(ballObj.y > 1280) ballObj.y = 1270;
        }
    }

    app.stage.addChild(ballObj);

    return ballObj;
}