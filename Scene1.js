class Scene1 extends Phaser.Scene {
    constructor() {
      super('inicio');
    }

    preload ()
    {
      this.load.image('logo', 'assets/escena1fondo.png');
      this.load.image('jugar1', 'assets/boton1.png')
      this.load.image('fondo', 'assets/escena2fondo.png');
      this.load.image('ground', 'assets/suelo.png');
      this.load.image('nubes', 'assets/nube.png');
      this.load.image('botongameover', 'assets/boton_gameover.png')
      this.load.image('star', 'assets/star.png');
      this.load.image('bomb', 'assets/bomb.png');
      this.load.spritesheet('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 });      
    }

    create() {

      //  Our player animations, turning, walking left and walking right.
      this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
      });

      this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
      });

      this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
      });

      this.add.image(400, 300, 'logo').setScale(0.26)
      

      var jugar = this.add.image(200, 100, 'jugar1').setScale(0.8)
      
      jugar.setInteractive()
      jugar.on('pointerdown', () => this.scene.start('juego'),  );
      
      
      // Funcion FLECHA
      // (param1, param2, …, paramN) => { sentencias }
      // (param1, param2, …, paramN) => expresion
      // Equivalente a: () => { return expresion; }
    }
}
