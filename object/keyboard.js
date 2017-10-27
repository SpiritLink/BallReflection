class Keyboard {
    static getInstance() {
        if( !Keyboard.instance ) {
            Keyboard.instance = new Keyboard();
        }
        return Keyboard.instance;
    }

    constructor() {
        this.addKey(37);
        this.addKey(39);
        this.addKey(32);

        window.addEventListener("keydown", this.downHandler.bind(this), false);
        window.addEventListener("keyup", this.upHandler.bind(this), false);
    }

    update(){
        for(let i in this.keys) {
            if(this.keys[i].isDown === true)
                this.keys[i].press();
        }
    }

    addKey(keyCode) {
        this.keys = this.keys || {};
        this.keys[keyCode] = new Object();
        this.keys[keyCode].isDown = false;
        this.keys[keyCode].press = undefined;
        this.keys[keyCode].release = undefined;
    }

    addPress(keyCode, func) {
        this.keys[keyCode].press = func;
    }

    addRelease(keyCode, func){
        this.keys[keyCode].release = func;
    }

    downHandler(event) {
        for( let i in this.keys ) {
            if( this.keys.hasOwnProperty(i) && event.keyCode == i) {
                this.keys[i].isDown = true;
                this.keys[i].press();
            }
        }
        event.preventDefault();
    }

    upHandler(event){
        for( let i in this.keys ) {
            if( this.keys.hasOwnProperty(i) && event.keyCode == i) {
                    this.keys[i].isDown = false;
                    this.keys[i].release();
            }
        }
        event.preventDefault();
    }
}

var kb = Keyboard.getInstance();