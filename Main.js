 var BallMGR = new ballMgr();
 var BoxMGR = new boxMgr();
 var player = new Player(Device.app.screen.width / 2, Device.app.screen.height / 2);
// init
    initComponent();
    initField();

// init Variable
    function initComponent(){

        Device.stageAddChild(BoxMGR.Container);
        Device.stageAddChild(BallMGR.Container);
        Device.stageAddChild(player.Container);
        Device.init();

        // 게임에 대한 로직을 정의한다. ( 총알이 전부 줄었는지 확인, 물체가 밑으로 이동함 )
    }

// init Field
    function initField() {

        BoxMGR.createMap();

        /*
        for(var i = 0; i <= 1000; i += 50)
        {
            BoxMGR.createBox(i, 100, i / 50);
        }
        */
        //var box = new BOX.box(200,200);
        //BOX.boxContainer.addChild(box.sprite);
    }


