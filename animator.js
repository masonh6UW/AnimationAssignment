class animator {
    constructor(spriteSheet, xStart, yStart, width, height, pWidth, pHeight, frameCount, frameDuration) {
        Object.assign(this, {spriteSheet, xStart, yStart, width, height, pWidth, pHeight, frameCount, frameDuration});

        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    }

    drawFrame(tick, ctx, x, y) {

        this.elapsedTime += tick;

        if(this.elapsedTime > this.totalTime){
            this.elapsedTime -= this.totalTime;
        }

        let frame = this.currentFrame();

        

        ctx.drawImage(this.spriteSheet, this.xStart + this.width*frame, this.yStart, this.width, this.height, x, y, this.pWidth, this.pHeight);
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    }

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    }

}