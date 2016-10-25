/// <reference path="../lib/phaser.d.ts"/>
import * as Phaser from 'phaser';

import { BootState } from './states/boot-state';
import { GameState } from './states/game-state';
import { SplashState } from './states/splash-state';
import { GameOverState } from './states/gameover-state';

class Game extends Phaser.Game {

  constructor () {
    let height = document.documentElement.clientHeight < 1143 ? document.documentElement.clientHeight : 1143 ;
    let width = height * 2000/1143;
    let windowsScale = height/2000;
    localStorage.setItem('windowsScale', `${windowsScale}` );
    console.log(`Altura ${height}, Largura: ${width}, Escala: ${windowsScale}`)

    super(width, height, Phaser.AUTO, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);
    this.state.add('GameOver', GameOverState, false);
    this.state.start('Boot')
  }
}

let game = new Game;
//Set a global Var
//(game as any).data = {'message': 'Mensagem'};

