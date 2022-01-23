class samus {
    constructor(game, cWidth, cHeight) {
        this.game = game;
        this.cWidth = cWidth;
        this.cHeight = cHeight;
        this.animator = new animator(ASSET_MANAGER.getAsset("./resources/runRight.png"), 0, 0, 100, 86, 200, 200, 10, 0.07);
    }

    update() {

    }

    draw(ctx) {
        //ctx.drawImage(ASSET_MANAGER.getAsset("./zeroMissionSpriteSheet.png"), 0, 0);
        //console.log(this.cwidth);
        this.animator.drawFrame(this.game.clockTick, ctx, this.cWidth*.4, this.cHeight*.6);
    }
}