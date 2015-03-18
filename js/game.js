var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', {
	preload: preload,
	create: create,
	update: update
});

function preload(){
	game.load.image('star', 'assets/star.png');
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	var stars = game.add.group();
	stars.enableBody = true;

	for(var i = 0; i < 50; i++){
		var star = stars.create(game.world.randomX, game.world.randomY, 'star');
		star.body.collideWorldBounds = true;
		star.body.bounce.setTo(0.2, 0.2);
	}
	
	game.add.sprite(0, 0, 'star');

}

function update(){

}