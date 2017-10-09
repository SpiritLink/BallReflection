let _singleton = Symbol();

class Singleton {

    constructor(singletonToken){
        if(_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance(){
        if(!this[_singleton])
            this[_singleton] = new Singleton(_singleton);

        return this[_singleton];
    }
}

export default Singleton;