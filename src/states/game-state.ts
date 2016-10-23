import { State, Stage} from 'phaser'
import { Zombie, Background, Floor, Underground} from '../sprites'

export class GameState extends State {
  // Recover a global var.: let coisa = <any>this.game;
  stage: Stage;
  background: Background;
  zombie: Zombie;
  windowScale: number;
  TILES_SIZE:number = 128;

  create () {
    this.windowScale = +localStorage.getItem('windowsScale');
    this.stage.backgroundColor = '#FFF333'
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 0;
    
    this.addCounter();
    this.addBackground();
    this.addFloor();
    this.addZombie();

    this.game.world.setBounds(0, 0, this.game.width , this.game.height - (this.TILES_SIZE * this.windowScale)*2+10);
  }


  private addCounter(){
     let banner = this.add.text(this.game.height -30, this.game.height - 30, 'Taca-le pau...', {});
     banner.fontSize = 40;
     banner.fill = '#77BFA3';
     banner.anchor.setTo(0.5);
  }


  private addBackground(){
    this.background = new Background({ game: this.game, x: 0, y: 0 });
    this.game.add.existing(this.background);
  }

  private addFloor(){
    for (let i = 0; i <= Math.ceil(this.background.width/(this.TILES_SIZE * this.windowScale)); i++) {
      let underground = new Underground({ game: this.game, x: i, y: this.game.world.bottom, scale: this.windowScale});
      this.game.add.existing(underground);
      
      let floor = new Floor({ game: this.game,  x: i, y: this.game.world.bottom - underground.height,  scale: this.windowScale});
      this.game.add.existing(floor);  
    }
  }

  private addZombie(){
    this.zombie = new Zombie({ game: this.game, x: 100, y: this.game.world.bottom - (this.TILES_SIZE * this.windowScale)*2, scale: this.windowScale});
    this.game.add.existing(this.zombie);
  }

}