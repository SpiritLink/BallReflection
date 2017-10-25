var KEYBOARD = KEYBOARD || {};

// 키보드 한개에 대한 정의
KEYBOARD.keyboard = class{
    constructor(keyCode){
        this.code = keyCode;
        this.isDown = false;
        this.isUp = true;
        this.press = undefined;
        this.release = undefined;
    }
}

// 키보드 변수
KEYBOARD.KeyLeft = new KEYBOARD.keyboard(37);
KEYBOARD.KeyRight = new KEYBOARD.keyboard(39);
KEYBOARD.KeySpace = new KEYBOARD.keyboard(32);

// 키보드 누름
KEYBOARD.downHandler = function(event){

    // Left
    if(event.keyCode === 37){
            if(KEYBOARD.KeyLeft.isUp && KEYBOARD.KeyLeft.press) {
                KEYBOARD.KeyLeft.press()
            };
            KEYBOARD.KeyLeft.isDown = true;
            KEYBOARD.KeyLeft.isUp = false;
    };

    // Right
    if(event.keyCode == 39){
            if(KEYBOARD.KeyRight.isUp && KEYBOARD.KeyLeft.press) {
                KEYBOARD.KeyRight.press()
            };
        KEYBOARD.KeyRight.isDown = true;
        KEYBOARD.KeyRight.isUp = false;
    }

    // Space
    if(event.keyCode == 32){
            if(KEYBOARD.KeySpace.isUp && KEYBOARD.KeySpace.press) {
                KEYBOARD.KeySpace.press();
            }
            KEYBOARD.KeySpace.isDown = true;
            KEYBOARD.KeySpace.isUp = false;
    };

        event.preventDefault();
}

// 키보드 뗌
KEYBOARD.upHandler = function(event){

    // Left
    if(event.keyCode === 37){
        if(KEYBOARD.KeyLeft.isDown && KEYBOARD.KeyLeft.release) {
            KEYBOARD.KeyLeft.release()
        };
        KEYBOARD.KeyLeft.isDown = false;
        KEYBOARD.KeyLeft.isUp = true;
    };

    // Right
    if(event.keyCode == 39){
        if(KEYBOARD.KeyRight.isDown && KEYBOARD.KeyLeft.release) {
            KEYBOARD.KeyRight.release()
        };
        KEYBOARD.KeyRight.isDown = false;
        KEYBOARD.KeyRight.isUp = true;
    }

    // Space
    if(event.keyCode == 32){
        if(KEYBOARD.KeySpace.isDown && KEYBOARD.KeySpace.release) {
            KEYBOARD.KeySpace.release();
        }
        KEYBOARD.KeySpace.isDown = false;
        KEYBOARD.KeySpace.isUp = true;
    };

    event.preventDefault();
}

// 키보드 업데이트
KEYBOARD.update = function(){
    if(KEYBOARD.KeyLeft.isDown) { KEYBOARD.KeyLeft.press(); }
    if(KEYBOARD.KeyRight.isDown){ KEYBOARD.KeyRight.press(); }
}

// 윈도우 이벤트 등록
window.addEventListener("keydown", KEYBOARD.downHandler.bind(KEYBOARD), false);
window.addEventListener("keyup", KEYBOARD.upHandler.bind(KEYBOARD), false);