 var BoxMGR = new boxMgr();
 var player = new Player(Device.app.screen.width / 2, Device.app.screen.height / 2);
// init
    initComponent();
    initField();

// init Variable
    function initComponent(){
        Device.init();

        // 생각한대로 안됨

        /*
        Device.functions += ballMgr.update;
        Device.lateFunctions += ballMgr.lateUpdate;

        Device.functions += boxMgr.update;
        Device.lateFunctions += ballMgr.lateUpdate;
*/
    }

// init Field
    function initField() {

        BoxMGR.createLine();
    }


