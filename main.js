const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./resources/runRight.png");

//norfair tileset
ASSET_MANAGER.queueDownload("./resources/blackBubble.png");
ASSET_MANAGER.queueDownload("./resources/singleBubble.png");



	//kraids lair theme
	//let kl = new Audio("./resources/Kraid's Lair on piano.mp3");
	//kl.play();

	function initAudio() {
		kl = new Audio();
		kl.src = "./resources/Kraid's Lair on piano.mp3";
		kl.loop = true;
		kl.play();
		
	}

	window.addEventListener("load", initAudio);

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	canvas.style.background = "black";
	canvas.width = window.innerWidth*0.9;
	canvas.height = window.innerHeight*0.8;




	let norfair = [ASSET_MANAGER.cache["./resources/blackBubble.png"], ASSET_MANAGER.cache["./resources/singleBubble.png"]];
	console.log('norfair: ' + norfair[1]);
	console.log(ASSET_MANAGER.cache["./resources/blackBubble.png"]);
	console.log(ASSET_MANAGER.cache["./resources/singleBubble.png"]);
	gameEngine.addEntity(new ground(gameEngine, norfair, canvas.width, canvas.height));



	gameEngine.addEntity(new samus(gameEngine, canvas.width, canvas.height));

	gameEngine.init(ctx);

	gameEngine.start();
});