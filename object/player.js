// variable (Resource)
var texture;
texture = PIXI.Texture.fromImage('required/assets/p.png');


function createPlayer(ballList, container){
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
        var ballObj = new ball(player.x, player.y, player.rotation, container);
        ballList.push(ballObj);
    }

    player.setX = function(inputX){ player.x = inputX; }
    player.setY = function(inputY){ player.y = inputY; }

    return player;
}
/*
class playerClass{
    constructor(x, y){
        this.sprite = new PIXI.Sprite(texture);
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.typeName = 'player';
        this.sprite.anchor.set(0.5);
        this.sprite.rotation = 0;

    }

    rotateLeft(){
        this.sprite.rotation -= Math.PI / 180;
        if(this.sprite.rotation < -Math.PI / 2) { this.sprite.rotation = -Math.PI / 2; }
    }

    rotateRight(){
        this.sprite.rotation += Math.PI / 180;
        if(this.sprite.rotation > Math.PI / 2) { this.sprite.rotation = Math.PI / 2; }
    }

    fireBall(ballList, container){
        var ballObj = new ball(player.x, player.y, player.rotation, container);
        ballList.push(ballObj);
    }

    setX(value){ this.sprite.x = value; }
    setY(value){ this.sprite.y = value; }
}
*/