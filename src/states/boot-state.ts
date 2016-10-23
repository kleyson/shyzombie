import { State, Game, Stage } from 'phaser';

export class BootState extends State {
    
  stage: Stage;

  init () {
    this.stage.backgroundColor = '#EDEEC9';
  }

  preload () {
    let text = this.add.text(this.world.centerX, this.world.centerY, 'loading', { font: '16px Arial', fill: '#dddddd', align: 'center' });
    text.anchor.setTo(0.5, 0.5);

    //Music
		 this.load.audio('loop', "./assets/sound/zombie.mp3");

		//Screens
		this.load.image("background", './assets/tileset/graveyard/BG.png')

		//Load decoratiosn
		//Objects:
		this.load.spritesheet("start_button", "./assets/tileset/graveyard/Objects/start_button.png", 428, 176);
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
 

		//Enemies
		
		//Adventurer
		this.load.image("adventurer_walk_1","./assets/enemies/adventurer/Walk1.png");
		this.load.image("adventurer_walk_2","./assets/enemies/adventurer/Walk2.png");
		this.load.image("adventurer_walk_3","./assets/enemies/adventurer/Walk3.png");
		this.load.image("adventurer_walk_4","./assets/enemies/adventurer/Walk4.png");
		this.load.image("adventurer_walk_5","./assets/enemies/adventurer/Walk5.png");
		this.load.image("adventurer_walk_6","./assets/enemies/adventurer/Walk6.png");
		this.load.image("adventurer_walk_7","./assets/enemies/adventurer/Walk7.png");
		this.load.image("adventurer_walk_8","./assets/enemies/adventurer/Walk8.png");
		this.load.image("adventurer_walk_9","./assets/enemies/adventurer/Walk9.png");
		this.load.image("adventurer_walk_10","./assets/enemies/adventurer/Walk10.png");

		//Cat
		this.load.image("cat_walk_1","./assets/enemies/cat/Walk1.png");
		this.load.image("cat_walk_2","./assets/enemies/cat/Walk2.png");
		this.load.image("cat_walk_3","./assets/enemies/cat/Walk3.png");
		this.load.image("cat_walk_4","./assets/enemies/cat/Walk4.png");
		this.load.image("cat_walk_5","./assets/enemies/cat/Walk5.png");
		this.load.image("cat_walk_6","./assets/enemies/cat/Walk6.png");
		this.load.image("cat_walk_7","./assets/enemies/cat/Walk7.png");
		this.load.image("cat_walk_8","./assets/enemies/cat/Walk8.png");
		this.load.image("cat_walk_9","./assets/enemies/cat/Walk9.png");
		this.load.image("cat_walk_10","./assets/enemies/cat/Walk10.png");

		//Dog
		this.load.image("dog_walk_1","./assets/enemies/dog/Walk1.png");
		this.load.image("dog_walk_2","./assets/enemies/dog/Walk2.png");
		this.load.image("dog_walk_3","./assets/enemies/dog/Walk3.png");
		this.load.image("dog_walk_4","./assets/enemies/dog/Walk4.png");
		this.load.image("dog_walk_5","./assets/enemies/dog/Walk5.png");
		this.load.image("dog_walk_6","./assets/enemies/dog/Walk6.png");
		this.load.image("dog_walk_7","./assets/enemies/dog/Walk7.png");
		this.load.image("dog_walk_8","./assets/enemies/dog/Walk8.png");
		this.load.image("dog_walk_9","./assets/enemies/dog/Walk9.png");
		this.load.image("dog_walk_10","./assets/enemies/dog/Walk10.png");

		//Girl
		this.load.image("girl_walk_1","./assets/enemies/girl/Walk1.png");
		this.load.image("girl_walk_2","./assets/enemies/girl/Walk2.png");
		this.load.image("girl_walk_3","./assets/enemies/girl/Walk3.png");
		this.load.image("girl_walk_4","./assets/enemies/girl/Walk4.png");
		this.load.image("girl_walk_5","./assets/enemies/girl/Walk5.png");
		this.load.image("girl_walk_6","./assets/enemies/girl/Walk6.png");
		this.load.image("girl_walk_7","./assets/enemies/girl/Walk7.png");
		this.load.image("girl_walk_8","./assets/enemies/girl/Walk8.png");

		//Jack
		this.load.image("jack_walk_1","./assets/enemies/jack/Walk1.png");
		this.load.image("jack_walk_2","./assets/enemies/jack/Walk2.png");
		this.load.image("jack_walk_3","./assets/enemies/jack/Walk3.png");
		this.load.image("jack_walk_4","./assets/enemies/jack/Walk4.png");
		this.load.image("jack_walk_5","./assets/enemies/jack/Walk5.png");
		this.load.image("jack_walk_6","./assets/enemies/jack/Walk6.png");
		this.load.image("jack_walk_7","./assets/enemies/jack/Walk7.png");
		this.load.image("jack_walk_8","./assets/enemies/jack/Walk8.png");
		this.load.image("jack_walk_9","./assets/enemies/jack/Walk9.png");
		this.load.image("jack_walk_10","./assets/enemies/jack/Walk10.png");

		//Knight
		this.load.image("knight_walk_1","./assets/enemies/knight/Walk1.png");
		this.load.image("knight_walk_2","./assets/enemies/knight/Walk2.png");
		this.load.image("knight_walk_3","./assets/enemies/knight/Walk3.png");
		this.load.image("knight_walk_4","./assets/enemies/knight/Walk4.png");
		this.load.image("knight_walk_5","./assets/enemies/knight/Walk5.png");
		this.load.image("knight_walk_6","./assets/enemies/knight/Walk6.png");
		this.load.image("knight_walk_7","./assets/enemies/knight/Walk7.png");
		this.load.image("knight_walk_8","./assets/enemies/knight/Walk8.png");
		this.load.image("knight_walk_9","./assets/enemies/knight/Walk9.png");
		this.load.image("knight_walk_10","./assets/enemies/knight/Walk10.png");

		//Ninja
		this.load.image("ninja_walk_1","./assets/enemies/ninja/Walk1.png");
		this.load.image("ninja_walk_2","./assets/enemies/ninja/Walk2.png");
		this.load.image("ninja_walk_3","./assets/enemies/ninja/Walk3.png");
		this.load.image("ninja_walk_4","./assets/enemies/ninja/Walk4.png");
		this.load.image("ninja_walk_5","./assets/enemies/ninja/Walk5.png");
		this.load.image("ninja_walk_6","./assets/enemies/ninja/Walk6.png");
		this.load.image("ninja_walk_7","./assets/enemies/ninja/Walk7.png");
		this.load.image("ninja_walk_8","./assets/enemies/ninja/Walk8.png");
		this.load.image("ninja_walk_9","./assets/enemies/ninja/Walk9.png");
		this.load.image("ninja_walk_10","./assets/enemies/ninja/Walk10.png");

		//Ninja Girl
		this.load.image("ninjagirl_walk_1","./assets/enemies/ninjagirl/Walk1.png");
		this.load.image("ninjagirl_walk_2","./assets/enemies/ninjagirl/Walk2.png");
		this.load.image("ninjagirl_walk_3","./assets/enemies/ninjagirl/Walk3.png");
		this.load.image("ninjagirl_walk_4","./assets/enemies/ninjagirl/Walk4.png");
		this.load.image("ninjagirl_walk_5","./assets/enemies/ninjagirl/Walk5.png");
		this.load.image("ninjagirl_walk_6","./assets/enemies/ninjagirl/Walk6.png");
		this.load.image("ninjagirl_walk_7","./assets/enemies/ninjagirl/Walk7.png");
		this.load.image("ninjagirl_walk_8","./assets/enemies/ninjagirl/Walk8.png");
		this.load.image("ninjagirl_walk_9","./assets/enemies/ninjagirl/Walk9.png");
		this.load.image("ninjagirl_walk_10","./assets/enemies/ninjagirl/Walk10.png");

		//Robot
		this.load.image("robot_walk_1","./assets/enemies/robot/Walk1.png");
		this.load.image("robot_walk_2","./assets/enemies/robot/Walk2.png");
		this.load.image("robot_walk_3","./assets/enemies/robot/Walk3.png");
		this.load.image("robot_walk_4","./assets/enemies/robot/Walk4.png");
		this.load.image("robot_walk_5","./assets/enemies/robot/Walk5.png");
		this.load.image("robot_walk_6","./assets/enemies/robot/Walk6.png");
		this.load.image("robot_walk_7","./assets/enemies/robot/Walk7.png");
		this.load.image("robot_walk_8","./assets/enemies/robot/Walk8.png");
		this.load.image("robot_walk_9","./assets/enemies/robot/Walk9.png");

  }

  render () {
      this.game.state.start('Splash');
  }

}