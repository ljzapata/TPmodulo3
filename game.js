var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 280 },
            debug: true
        }
    },
    scene: [Scene1, Scene2, Scene3]
};

var game = new Phaser.Game(config);

var score;
var gameOver;
var restartButton;

var player;
var stars;
var bombs;
var platforms;
var nubes;
var cursors;
var scoreText;

var timedEvent;
var initialTime;
var timeText;

var level = 0;