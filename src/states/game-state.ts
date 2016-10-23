import { State, Stage, Text, Group} from 'phaser'
import { Zombie, Background, Floor, Underground, Enemy} from '../sprites'

export class GameState extends State {
  // Recover a global var.: let coisa = <any>this.game;
  TILES_SIZE: number = 128;
  MAX_ENEMIES: number = 5;
  windowScale: number;
  
  stage: Stage;
  background: Background;
  lifeBanner: Text;
  zombie: Zombie;
  enemies: Group;

  enemies_on_screen: number;
  life:number;
  count_enemies: number;

  create () {
    this.windowScale = +localStorage.getItem('windowsScale');
    this.stage.backgroundColor = '#FFF333'
    this.count_enemies = 0;
    this.life = 100;
    this.enemies_on_screen = 0;

    this.addBackground();
    this.addFloor();
    this.addZombie();
    this.addCounter();

    this.enemies = this.game.add.group();

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.x = 0;
    this.game.physics.arcade.gravity.y = 0;
    this.game.world.setBounds(0, 0, this.game.width , this.game.height - (this.TILES_SIZE * this.windowScale)*2+10);
    this.game.time.events.loop(5000, this.addEnemy, this);
  }

  update(){
    this.game.physics.arcade.collide(this.zombie, this.enemies);
  }

  render(){
    this.lifeBanner.text = `Life: ${this.life} % \nEnemies: ${this.count_enemies}\nNow: ${this.enemies_on_screen}`
    if ( this.life <= 0){
      this.game.state.start('GameOver');
    }
  }

  private addCounter(){
     this.lifeBanner = this.add.text(10 ,10, `Life: `, {});
     this.lifeBanner.fontSize = 20;
     this.lifeBanner.fill = '#FFFFFF';
     this.lifeBanner.anchor.setTo(0);
  }


  private addBackground(){
    this.background = new Background({ game: this.game, x: 0, y: 0 });
    this.game.add.existing(this.background);
  }

  private addFloor(){
    for (let i = 0; i <= Math.ceil(this.background.width/(this.TILES_SIZE * this.windowScale)); i++) {
      let underground = new Underground({ game: this.game, x: i, y: this.game.world.bottom, scale: this.windowScale});
      this.game.add.existing(underground);
      
      let floor = new Floor({ game: this.game,  x: i, y: this.game.world.bottom - underground.height,  scale: this.windowScale});
      this.game.add.existing(floor);  
    }
  }

  private addZombie(){
    this.zombie = new Zombie({ game: this.game, x: 100, y: this.game.world.bottom - (this.TILES_SIZE * this.windowScale)*2, scale: this.windowScale});
    this.game.add.existing(this.zombie);
    this.zombie.body.onCollide = new Phaser.Signal();
    this.zombie.body.onCollide.add(this.loseLife, this);
  }

  private addEnemy(){
    if (this.enemies_on_screen <= this.MAX_ENEMIES){
      this.incraseEnemy();
      let enemy = new Enemy({ game: this.game, x: this.game.width-5, y: this.game.world.bottom - (this.TILES_SIZE * this.windowScale)*2, scale: this.windowScale});
      enemy.events.onOutOfBounds.add(this.decraseEnemy, this);
      this.enemies.add(enemy);
    }
  }

  private decraseEnemy(){
    this.enemies_on_screen-=1;
  }

  private incraseEnemy(){
    this.enemies_on_screen+=1;
    this.count_enemies+=1;
  }

  private loseLife(){
    this.life-=1;
  }


}