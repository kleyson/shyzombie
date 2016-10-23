import { Sprite, Game } from 'phaser';

export class Floor extends Sprite {

  game: Game;

  constructor({ game, x, y, asset = 'middle_terrain', scale }) {
    // let calculatedX = Math.ceil(x*128*scale);
    let calculatedX = x*128*scale;
    let calculatedy = y-128*scale;
    super(game, calculatedX, calculatedy, asset);
    this.game = game;
    this.scale.x = scale;
    this.scale.y = scale;
  }

}