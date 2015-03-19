var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game-div', {
	preload: preload,
	create: create,
	update: update
});

function preload(){
	game.load.image('star', 'assets/star.png');
}

function create(){
	game.stage.backgroundColor = '#313131';

	game.physics.startSystem(Phaser.Physics.ARCADE);

	stars = game.add.group();
	stars.enableBody = true;

	for(var i = 0; i < 12; i++){
		var star = stars.create(game.world.randomX, game.world.randomY, 'star');
		star.body.collideWorldBounds = true;
		star.body.bounce.setTo(0.8, 0.8);
		star.body.velocity.setTo(getRandomInt(-100,100), getRandomInt(-100,100))
		star.inputEnabled = true;
		star.events.onInputDown.add(onDown,this);
	}

	


}

function update(){
	game.physics.arcade.collide(stars);
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function onDown(sprite, pointer){
	game.add.sprite(game.world.centerX, game.world.centerY, 'star');
}