import { Sprite, Game } from 'phaser';

export class Zombie extends Sprite {

  game: Game;
  status: string;
  iterator: number;
  floor_point: number;
  JUMP_SIZE: number = 500;

  constructor({ game, x, y, asset = 'idle_1', scale }) {
    super(game, x, y, asset);
    this.game = game;
    this.status = 'idle';
    this.scale.x = scale;
    this.scale.y = scale;
    this.iterator = 1;
    this.floor_point = y + 10;
    this.configure();
  }

update(){
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)){
        this.status = 'attack';
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)){
        this.status = 'walk';
        this.y = this.floor_point - (this.JUMP_SIZE * this.scale.x) < this.y ? this.y-10: this.y ;
        this.body.bounce.y = 0.2;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        this.status = 'walk';
        this.x+=1;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        this.status = 'walk_back';
        this.x-=1;
    } else {
        this.status = 'idle';
    }
  }

  private configure(){
    this.anchor.setTo(0.05,0.95);    
    this.game.physics.enable( [ this ], Phaser.Physics.ARCADE)
    this.body.gravity.y = 200;
    this.body.collideWorldBounds = true;
    this.game.time.events.loop(100, this.updateTexture, this);
  }

  private updateTexture(){
    let texture = '';
    switch(this.status) {
        case 'walk_back':
            this.iterator = this.iterator == 1 || this.iterator >9 ? 9 : --this.iterator;
            texture = `walk_${this.iterator}`;
            break;
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

}