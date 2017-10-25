var KEYBOARD = KEYBOARD || {};

KEYBOARD.keyboard = class{
    constructor(keyCode){
        this.code = keyCode;
        this.isDown = false;
        this.isUp = true;
        this.press = undefined;
        this.release = undefined;

        window.addEventListener(
            "keydown", this.downHandler.bind(this), false
        );

        window.addEventListener(
            "keyup", this.upHandler.bind(this), false
        );
    }

    //downHandler
    downHandler(event){
        if(event.keyCode === this.code){
            if(this.isUp && this.press) this.press();
            this.isDown = true;
            this.isUp = false;
        }
        event.preventDefault();
    };

    //upHandler
    upHandler(event){
        if(event.keyCode === this.code){
            if(this.isDown && this.release) this.release();
            this.isDown = false;
            this.isUp = true;
        }
        event.preventDefault();
    };
}
// 키에 대한 정의 (키보드 프리셋)

// update Keyboard
function updateKeyboard(){

    // << : 추후 Singleton으로 키보드를 분리합니다.
    if(keyLeft.isDown) { keyLeft.press(); }
    if(keyRight.isDown){ keyRight.press(); }
}

// global variable
keyLeft = new KEYBOARD.keyboard(37);
keyRight = new KEYBOARD.keyboard(39);
keySpace = new KEYBOARD.keyboard(32);