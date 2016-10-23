import { State, Stage, Text, Group} from 'phaser'
import { Zombie, Background, Floor, Underground, Enemy} from '../sprites'

export class GameState extends State {
  // Recover a global var.: let coisa = <any>this.game;
  TILES_SIZE: number = 128;
  MAX_ENEMIES: number = 5;
  windowScale: number;
  
  stage: Stage;
  background: Background;
  scoreBanner: Text;
  zombie: Zombie;
  enemies: Group;

  enemies_on_screen: number;
  score:number;
  count_enemies: number;

  create () {
    this.windowScale = +localStorage.getItem('windowsScale');
    this.stage.backgroundColor = '#FFF333'
    this.count_enemies = 0;
    this.score = 0;
    this.enemies_on_screen = 0;

    this.addBackground();
    this.addFloor();
    this.addZombie();
    this.addCounter();

    this.enemies = this.game.add.group();

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 0;
    this.game.world.setBounds(0, 0, this.game.width , this.game.height - (this.TILES_SIZE * this.windowScale)*2+10);
    this.game.time.events.loop(5000, this.addEnemy, this);
  }

  update(){
    this.game.physics.arcade.collide(this.zombie, this.enemies);
  }

  render(){
    this.scoreBanner.text = `Score: ${this.score}`
  }

  private addCounter(){
     this.scoreBanner = this.add.text(10 ,10, `Score: `, {});
     this.scoreBanner.fontSize = 20;
     this.scoreBanner.fill = '#FFFFFF';
     this.scoreBanner.anchor.setTo(0);
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
    this.zombie.body.onCollide.add(this.incrementScore, this);
  }

  private addEnemy(){
    if (this.count_enemies <= this.MAX_ENEMIES){
      this.incraseEnemy();
      let enemy = new Enemy({ game: this.game, x: this.game.width-5, y: this.game.world.bottom - (this.TILES_SIZE * this.windowScale)*2, scale: this.windowScale});
      enemy.events.onOutOfBounds.add(this.decraseEnemy, this);
      this.enemies.add(enemy);
    }
  }

  private decraseEnemy(){
    this.count_enemies-=1;
    if (this.count_enemies == 0){
      this.enemies.removeAll();
    }  
  }

  private incraseEnemy(){
    this.count_enemies+=1;
  }

  private incrementScore(){
    this.score+=100;
  }


}