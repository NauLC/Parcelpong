import Phaser from "phaser";

export default class Ball extends Phaser.GameObjects.Arc {
    constructor (scene, x, y, r, color, velocity) {
    super(scene, x, y, r,0, 360, false, color);
    this.velocity = velocity;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setBounce(1, 1);
    this.body.setCollideWorlBounds(true);
    this.body.setVelocity(this.velocity, this.velocity);
    }

    setColor() {
        this.fillColor = "0x${math.random(). toString(16).slice(2, 8)}";
    }
}