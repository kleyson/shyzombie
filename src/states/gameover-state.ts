import { State, Button, Text } from 'phaser'
import { Zombie, Background} from '../sprites'

export class GameOverState extends State {

	startButton: Button;
	title: Text;
	background: Background;
	windowScale: number;

 	preload() {
		this.windowScale = +localStorage.getItem('windowsScale');
		this.addBackground();
		this.addZombie();
		this.addBanner();
	}

    create() {
		this.startButton = this.game.add.button(this.game.world.centerX + (200 *this.windowScale), 1300*this.windowScale, 'start_button', this.actionOnClick, this, 2, 1, 0);
		this.startButton.scale.setTo(this.windowScale*3);
	}

	actionOnClick () {
		this.game.state.start('Game')
	}

	private addBackground(){
    	this.background = new Background({ game: this.game, x: 0, y: 0 });
    	this.game.add.existing(this.background);
  	}

	private addZombie(){
		let zombie = new Zombie({ game: this.game, x: 100, y: this.game.world.bottom, asset: 'dead_1', scale: this.windowScale*3});
		zombie.status ='dead';
		this.game.add.existing(zombie);
		zombie.anchor.set(0.5);
  }

  private addBanner(){
     this.title = this.add.text(this.game.world.centerX, 60, `Game Over`, {});
     this.title.fontSize = 100;
     this.title.fill = '#7fbb00';
     this.title.anchor.setTo(0.5);
  }


}