import Phaser from "phaser";
export default class Racket extends Phaser.GameObjects.Rectangle {
    constructor (scene, x, y, w, h, color, velocity){
        super(scene, x, y, w, h, color);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.body.setImmovable(true);
        this.body.alloGravity=false;

        this.velocity = velocity;
        this.cursor = scene.imput.keyboard.createCursorKeys();
    }

    Update () {
        if (this.cursor.left.isDown){
            this.body.setVelocityX(-this.velocidad);
        } else if (this.cursor.right.isDown) {
            this.body.setVelocityX(this.velocidad);
        } else  {
            this.body.setVelocityX(0);
        }
    }
}