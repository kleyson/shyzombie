import { State, Game, Stage } from 'phaser';

export class BootState extends State {
    
  stage: Stage;

  init () {
    this.stage.backgroundColor = '#EDEEC9';
  }

  preload () {
    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading', { font: '16px Arial', fill: '#dddddd', align: 'center' });
    text.anchor.setTo(0.5, 0.5);
  }

  render () {
      this.game.state.start('Splash');
  }

}