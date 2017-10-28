Device.app.ticker.add( function(){ballCollision()} );

function ballCollision(){

    // 공과 물체간 충돌 확인 및 제거
    for(var i = 0; i < BallMGR.ballList.length; i++)
    {
        for(var j = 0; j < BoxMGR.Container.children.length; j++)
        {
            if(Device.bump.hitTestRectangle(BallMGR.ballList[i].sprite, BoxMGR.Container.children[j]))
            {
                var rect = BoxMGR.Container.children[j].getBounds();
                BallMGR.ballList[i].boundByBound(rect);

                BoxMGR.BoxList[j].hp--;
                if(BoxMGR.BoxList[j].hp <= 0)
                {
                    BoxMGR.Container.removeChild(BoxMGR.Container.children[j]);
                    BoxMGR.BoxList.splice(j,1);
                    Device.addScore();
                }

                //console.log("Collision");
            }
        } // for BOX
    } // for BALL
}