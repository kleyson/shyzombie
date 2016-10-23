import { Sprite, Game } from 'phaser';

export class Enemy extends Sprite {

  game: Game;
  status: string;
  iterator: number;
  speed: number;
  sprites: number;
  enemy: string;

  constructor({ game, x, y, asset = 'walk_1', scale }) {
    const enemies = {
        'adventurer': 10,
        'cat': 10,
        'dog': 10,
        'girl': 8,
        'jack': 10,
        'knight': 10,
        'ninja': 10,
        'ninjagirl': 10,
        'robot': 9 }
    let enemy = Enemy.selectEnemy(enemies);
    super(game, x, y, `${enemy}_${asset}`);
    this.enemy = enemy;
    this.game = game;
    this.scale.x = scale;
    this.scale.y = scale;
    this.iterator = 1;
    this.speed = Math.floor(Math.random() * 9 + 1);
    this.sprites = enemies[enemy];
    this.configure();
  }

  private configure(){
    this.anchor.setTo(0.05,0.95);    
    this.game.time.events.loop(100/this.speed, this.updateTexture, this);
    this.game.physics.enable([this], Phaser.Physics.ARCADE);
    this.checkWorldBounds = true;
    this.body.allowGravity = false;
    // this.body.checkCollision = true;
  }

  private updateTexture(){
    this.iterator = this.iterator > this.sprites-1 ? 1 : ++this.iterator;
    this.x-=(1*this.speed);
    this.loadTexture(`${this.enemy}_walk_${this.iterator}`);
  }

  private static selectEnemy(enemies: any): string{
    let keys = Object.keys(enemies);
    let selectedKey = keys[Math.floor(Math.random()*keys.length)];
    return selectedKey;
  }

}