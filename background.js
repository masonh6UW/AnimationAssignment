class background {

}

class ground {
    constructor(game, tileArray, cWidth, cHeight){
        this.game = game;
        this.tileArray = tileArray;
        this.cWidth = cWidth;
        this.cHeight = cHeight;
        this.numOfBlocks = Math.ceil(cWidth/90);
        this.blockWith = 90;
        for (let i = 0; i < tileArray.length; i++){
            console.log("Block Initialized: " + tileArray[i].src);
        }
        /*
        for (let i = 0; i < this.numOfBlocks; i++){
            let temp = getRandomInt(this.tileArray.length-1)
            console.log('random int: ' + temp);

            this.animator = new animator(this.tileArray[0], 0, 0, 16, 16, this.blockWith, this.blockWith, 1, 0.2);
        }
        */
        this.blockAnimator = new blockAnimator(this.tileArray, 0, 0, 16, 16, this.blockWith, this.blockWith, 1, 0.2, this.numOfBlocks);

        this.x = this.cWidth-this.blockWith;
        this.y = this.cHeight*.87;
        this.speed = -900;
    }

    update() {
       
        //spawn new tile
        //randome int between 0 and the number of tiles
        //getRandomInt(this.tileArray.length-1);

        //collect old tile
        
        if(this.x > this.cWidth-this.blockWith*2) {
            this.x += this.speed * this.game.clockTick;
        } else {
            this.x = this.cWidth-this.blockWith;
        }
    }

    draw(ctx){
        //console.log("this.x: " + this.x);
        //console.log("this.y: " + this.y);
        this.blockAnimator.drawFrame(this.game.clockTick, ctx, this.x, this.y);

    }
}