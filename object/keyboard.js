// 키에 대한 정의 (키보드 프리셋)
class keyboard{
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
        )
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

// global variable
keyLeft = new keyboard(37);
keyRight = new keyboard(39);
keySpace = new keyboard(32);