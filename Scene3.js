class Scene3 extends Phaser.Scene {
    constructor() {
      super("creditos");
    }

    preload ()
    {
      this.load.image('fondo3', 'assets/escena3fondo.png');   
    }
    
    create() {
      this.add.image(400, 300, 'fondo3').setScale(0.26);


      var puntajefinal = this.add.text(0, 0, 'Score: ' + score,  { fontFamily: 'Arial', fontSize: 70, color: '#000000' });
      //scene.add.zone(x, y, width, height)
        // X Y del centro del rectangulo invisible
        // width, height del rectangulo invisible
      Phaser.Display.Align.In.Center(puntajefinal, this.add.zone(400, 300, 800, 600));

      var restartButton = 
      this.add.image(380, 520, 'jugar1').setScale(0.7)
      
      restartButton.setInteractive()
      restartButton.on('pointerdown', () => this.scene.start('juego'),  );
    }    
}
  