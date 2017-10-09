// 키에 대한 정의 (키보드 프리셋)
function keyboard(keyCode){
    var key = {};
    key.code = keyCode;
    key.isDown = false;
    key.isUp = true;
    key.press = undefined;
    key.release = undefined;

    // downHandler
    key.downHandler = function(event){
        if(event.keyCode === key.code){
            if(key.isUp && key.press) key.press();
            key.isDown = true;
            key.isUp = false;
        }
        event.preventDefault();
    };

    // upHandler
    key.upHandler = function(event){
        if(event.keyCode === key.code){
            if(key.isDown && key.release) key.release();
            key.isDown = false;
            key.isUp = true;
        }
        event.preventDefault();
    };

    // Attach event listners
    window.addEventListener(
        "keydown", key.downHandler.bind(key), false
    );

    window.addEventListener(
        "keyup", key.upHandler.bind(key), false
    );
    return key;
}

keyLeft = keyboard(37);
keyRight = keyboard(39);
keySpace = keyboard(32);