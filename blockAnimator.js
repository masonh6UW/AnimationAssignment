class blockAnimator {
    constructor(blockArray, xStart, yStart, width, height, pWidth, pHeight, frameCount, frameDuration, numOfBlocks) {
        Object.assign(this, {blockArray, xStart, yStart, width, height, pWidth, pHeight, frameCount, frameDuration, numOfBlocks});

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    }

    drawFrame(tick, ctx, x, y) {

        this.elapsedTime += tick;

        if(this.elapsedTime > this.totalTime){
            this.elapsedTime -= this.totalTime;
        }

        let frame = this.currentFrame();

        for(let i = 0; i <= this.numOfBlocks; i++){
            let min = 0;
            let max = this.blockArray.length-1;
            let temp = Math.floor(Math.random() * (max - min + 1)) + min;//Math.random() * ((this.blockArray.length-1) - 0) + 0;
            //console.log('temp = ' + temp);
            //console.log("block array art 0: " + blockArray[0].src);
            let newPos = (x+90)-(i*90);
            ctx.drawImage(this.blockArray[0], this.xStart, this.yStart, this.height, this.width, newPos, y, this.pWidth, this.pHeight);
        }
        
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    }

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    }

}