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


	game.add.sprite(0, 0, 'star');

}

function update(){

}