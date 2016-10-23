import { State, Stage} from 'phaser'
import { Zombie, Background, Floor, Underground} from '../sprites'

export class GameState extends Phaser.State {
  stage: Stage;
  background: Background;
  zombie: Zombie;
  windowScale: number;
  TILES_SIZE:number = 128;

  create () {
    this.windowScale = +localStorage.getItem('windowsScale');
    this.stage.backgroundColor = '#FFF333'
    
    // Recover a global var.
    // let coisa = <any>this.game;
    // console.log(coisa.data);

    // let banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'Taca-le pau...', {});
    // banner.fontSize = 40;
    // banner.fill = '#77BFA3';
    // banner.anchor.setTo(0.5);

    this.background = new Background({ game: this.game, x: 0, y: 0 });
    this.game.add.existing(this.background);

    for (let i = 0; i <= Math.ceil(this.background.width/(this.TILES_SIZE * this.windowScale)); i++) {
      let underground = new Underground({ game: this.game, x: i, y: this.game.world.bottom, scale: this.windowScale});
      this.game.add.existing(underground);
      
       let floor = new Floor({ game: this.game,  x: i, y: this.game.world.bottom - underground.height,  scale: this.windowScale});
       this.game.add.existing(floor);
       
    }

    this.zombie = new Zombie({ game: this.game, x: 100, y: this.game.world.bottom - (this.TILES_SIZE * this.windowScale)*2, scale: this.windowScale});
    this.game.add.existing(this.zombie);

  }

}