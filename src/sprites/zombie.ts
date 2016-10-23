import { Sprite, Game } from 'phaser';

export class Zombie extends Sprite {

  game: Game;
  status: string;
  iterator: number;

  constructor({ game, x, y, asset = 'idle_1', scale }) {
    super(game, x, y, asset);
    this.game = game;
    this.status = 'idle';
    this.scale.x = scale;
    this.scale.y = scale;
    this.anchor.setTo(0.05,0.95);
    this.iterator = 1;
    setInterval(()=> this.updateTexture(), 100);
  }

  updateTexture(){
    let texture = '';
    switch(this.status) {
        case 'walk':
            this.iterator = this.iterator > 9 ? 1 : ++this.iterator;
            texture = `walk_${this.iterator}`;
            break;
        case 'dead':
            this.iterator = this.iterator > 11 ? 1 : ++this.iterator;
            texture = `dead_${this.iterator}`;
            break;
        case 'attack':
            this.iterator = this.iterator > 7 ? 1 : ++this.iterator;
            texture = `attack_${this.iterator}`;
            break;
        case 'idle':
        default:
            this.iterator = this.iterator > 14 ? 1 : ++this.iterator;
            texture = `idle_${this.iterator}`;
            break;
    }
    this.loadTexture(texture);
  }

  update(){
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)){
        this.status = 'attack';
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        this.status = 'walk';
    }
    else
    {
        this.status = 'idle';
    }
  }
}