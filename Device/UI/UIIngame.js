class UIIngame extends UIRoot{

    constructor(){
        super();
    }

    init(){
        this.style = new PIXI.TextStyle({
            fontFamily: 'Arial',
            fontSize: 36,
            fontStyle: 'italic',
            fontWeight: 'bold',
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#4a1850',
            strokeThickness: 5,
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440
        });

        this.pointText = new PIXI.Text('점수 : 0 ', this.style);
        this.pointText.x = 0;
        this.pointText.y = 0;
        this.container.addChild(this.pointText);

        this.maxBallCntText = new PIXI.Text("볼 카운팅", this.style);
        this.maxBallCntText.x = 0;
        this.maxBallCntText.y = 50;
        this.container.addChild(this.maxBallCntText);
    }

    SetPoint(point) {
        this.pointText.text = '점수 : ' + point.toString();
    }

    destroy(){
        super.destroy();
    }
}