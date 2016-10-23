import { State } from 'phaser'

export class SplashState extends State {


    create() {
		this.game.state.start('Game')
	}

	preload() {

		//Music
		// this.load.audio('loop2', "./assets/music/indy.mp3");

		//Screens
		this.load.image("background", './assets/tileset/graveyard/BG.png')

		//Load decoratiosn
		//Objects:
		this.load.image("arrow_sing", "./assets/tileset/graveyard/Objects/ArrowSign.png");
		this.load.image("bush_1", "./assets/tileset/graveyard/Objects/Bush1.png");
		this.load.image("bush_2", "./assets/tileset/graveyard/Objects/Bush2.png");
		this.load.image("crate", "./assets/tileset/graveyard/Objects/Crate.png");
		this.load.image("dead_bush", "./assets/tileset/graveyard/Objects/DeadBush.png");
		this.load.image("sign", "./assets/tileset/graveyard/Objects/Sign.png");
		this.load.image("skeleton", "./assets/tileset/graveyard/Objects/Skeleton.png");
		this.load.image("tombstone_1", "./assets/tileset/graveyard/Objects/TombStone1.png");
		this.load.image("tombstone_2", "./assets/tileset/graveyard/Objects/TombStone2.png");
		this.load.image("tree", "./assets/tileset/graveyard/Objects/Tree.png");

		//Tiles:
		this.load.image("skull_bone", "./assets/tileset/graveyard/Tiles/Bones1.png");
		this.load.image("skull", "./assets/tileset/graveyard/Tiles/Bones2.png");
		this.load.image("4bones", "./assets/tileset/graveyard/Tiles/Bones3.png");
		this.load.image("2bones", "./assets/tileset/graveyard/Tiles/Bones4.png");
		this.load.image("left_end_terrain", "./assets/tileset/graveyard/Tiles/Tile1.png");
		this.load.image("middle_terrain", "./assets/tileset/graveyard/Tiles/Tile2.png");
		this.load.image("rigth_end_terrain", "./assets/tileset/graveyard/Tiles/Tile3.png");
		this.load.image("middle_wall_rigth", "./assets/tileset/graveyard/Tiles/Tile4.png");
		this.load.image("underground", "./assets/tileset/graveyard/Tiles/Tile5.png");
		this.load.image("middle_wall_left", "./assets/tileset/graveyard/Tiles/Tile6.png");
		this.load.image("border_rigth_terrain", "./assets/tileset/graveyard/Tiles/Tile7.png");
		this.load.image("undergroud_gradient_top_left", "./assets/tileset/graveyard/Tiles/Tile8.png");
		this.load.image("roof", "./assets/tileset/graveyard/Tiles/Tile9.png");
		this.load.image("undergroud_gradient_top_right", "./assets/tileset/graveyard/Tiles/Tile10.png");
		this.load.image("border_left_terrain", "./assets/tileset/graveyard/Tiles/Tile11.png");
		this.load.image("roof_left_border", "./assets/tileset/graveyard/Tiles/Tile12.png");
		this.load.image("roof_right_border", "./assets/tileset/graveyard/Tiles/Tile13.png");
		this.load.image("left_suspend_terrain", "./assets/tileset/graveyard/Tiles/Tile14.png");
		this.load.image("middle_suspend_terrain", "./assets/tileset/graveyard/Tiles/Tile15.png");
		this.load.image("right_suspend_terrain", "./assets/tileset/graveyard/Tiles/Tile16.png");

		//Chars
		this.load.image("attack_1","./assets/chars/zombie/Attack1.png");
		this.load.image("attack_2","./assets/chars/zombie/Attack2.png");
		this.load.image("attack_3","./assets/chars/zombie/Attack3.png");
		this.load.image("attack_4","./assets/chars/zombie/Attack4.png");
		this.load.image("attack_5","./assets/chars/zombie/Attack5.png");
		this.load.image("attack_6","./assets/chars/zombie/Attack6.png");
		this.load.image("attack_7","./assets/chars/zombie/Attack7.png");
		this.load.image("attack_8","./assets/chars/zombie/Attack8.png");
		this.load.image("dead_1","./assets/chars/zombie/Dead1.png");
		this.load.image("dead_2","./assets/chars/zombie/Dead2.png");
		this.load.image("dead_3","./assets/chars/zombie/Dead3.png");
		this.load.image("dead_4","./assets/chars/zombie/Dead4.png");
		this.load.image("dead_5","./assets/chars/zombie/Dead5.png");
		this.load.image("dead_6","./assets/chars/zombie/Dead6.png");
		this.load.image("dead_7","./assets/chars/zombie/Dead7.png");
		this.load.image("dead_8","./assets/chars/zombie/Dead8.png");
		this.load.image("dead_9","./assets/chars/zombie/Dead9.png");
		this.load.image("dead_10","./assets/chars/zombie/Dead10.png");
		this.load.image("dead_11","./assets/chars/zombie/Dead11.png");
		this.load.image("dead_12","./assets/chars/zombie/Dead12.png");
		this.load.image("idle_1","./assets/chars/zombie/Idle1.png");
		this.load.image("idle_2","./assets/chars/zombie/Idle2.png");
		this.load.image("idle_3","./assets/chars/zombie/Idle3.png");
		this.load.image("idle_4","./assets/chars/zombie/Idle4.png");
		this.load.image("idle_5","./assets/chars/zombie/Idle5.png");
		this.load.image("idle_6","./assets/chars/zombie/Idle6.png");
		this.load.image("idle_7","./assets/chars/zombie/Idle7.png");
		this.load.image("idle_8","./assets/chars/zombie/Idle8.png");
		this.load.image("idle_9","./assets/chars/zombie/Idle9.png");
		this.load.image("idle_10","./assets/chars/zombie/Idle10.png");
		this.load.image("idle_11","./assets/chars/zombie/Idle11.png");
		this.load.image("idle_12","./assets/chars/zombie/Idle12.png");
		this.load.image("idle_13","./assets/chars/zombie/Idle13.png");
		this.load.image("idle_14","./assets/chars/zombie/Idle14.png");
		this.load.image("idle_15","./assets/chars/zombie/Idle15.png");
		this.load.image("walk_1","./assets/chars/zombie/Walk1.png");
		this.load.image("walk_2","./assets/chars/zombie/Walk2.png");
		this.load.image("walk_3","./assets/chars/zombie/Walk3.png");
		this.load.image("walk_4","./assets/chars/zombie/Walk4.png");
		this.load.image("walk_5","./assets/chars/zombie/Walk5.png");
		this.load.image("walk_6","./assets/chars/zombie/Walk6.png");
		this.load.image("walk_7","./assets/chars/zombie/Walk7.png");
		this.load.image("walk_8","./assets/chars/zombie/Walk8.png");
		this.load.image("walk_9","./assets/chars/zombie/Walk9.png");
		this.load.image("walk_10","./assets/chars/zombie/Walk10.png");
 
	}
}