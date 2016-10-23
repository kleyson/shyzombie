import { Sprite, Game } from 'phaser';

export class Background extends Sprite {

  game: Game;

  constructor({ game, x, y, asset = 'background' }) {
    super(game, x, y, asset)
    this.game = game;
    this.height = this.game.height;
    this.width = this.game.width;
  }

}