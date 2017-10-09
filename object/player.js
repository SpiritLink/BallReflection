// variable (Resource)
var playerImg;
playerImg = PIXI.Sprite.fromImage('required/assets/p.png');

function createPlayer(ballList){
    var player;

    player = PIXI.Sprite.fromImage('required/assets/p.png');
    player.x = 0;
    player.y = 0;
    player.typeName = 'player';
    player.anchor.set(0.5);
    player.rotation = 0;

    player.rotateLeft = function(){
        player.rotation -= Math.PI / 180;
        if(player.rotation < -Math.PI / 2) { player.rotation = -Math.PI / 2; }
    }

    player.rotateRight = function(){
        player.rotation += Math.PI / 180;
        if(player.rotation > Math.PI / 2) { player.rotation = Math.PI / 2; }
    }

    player.fireBall = function(){
        var ballObj = ball();
        ballList.push(ballObj);
    }

    player.setX = function(inputX){ player.x = inputX; }
    player.setY = function(inputY){ player.y = inputY; }

    return player;
}