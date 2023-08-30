import Phaser from "phaser";
import Phaser from "../component/Racket";
import Phaser from "../component/Ball";
import Phaser from "./EventCenter";
import Racket from "../component/Racket";

export default class Pong extends Phaser.Scene{
    constructor() {
        super("pong");
        this.level;
        this.score;
        this.obstacle = [];
        this.racket;
        this.ball;
        this.setVelocityRacket;
        this.velocityBall;
    }
  Infinity(data) {
    this.level = data.level || 1;
    this.score= data.score || 0;
    this.velocityRacket = data.velocityRacket || 300;
    this.velocityBall = data.velocityBall || 200;
  }

  create() {
    this.scene.launch("ui", {
        level: this.level,
        score: this.score,
    });

    this.racket = new Racket(
        this,
        400,
        550,
        100,
        20,
        0xffffff,
        this.velocityRacket
    );
    this.ball = new this.ball(
        this,
        400,
        300,
        10,
        0xffffff,
        this.velocityBall
    );

    this.physics.add.collider(
        this.racket,
        this.ball,
        this.hit,
        null,
        this
    );

   this.obstacle.forEach((obstacle) => {
   const o = this.add.Rectangle(
    obstacle.x,
    obstacle.y,
    obstacle.widith,
    obstacle.height,
    0xffffff
   );
   this.physics.add.existing(o);
   o.body.setImmovable(true);
   this.physics.add.collider(this.ball, o);
   });




  }

}