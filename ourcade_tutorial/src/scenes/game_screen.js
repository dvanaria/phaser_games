import Phaser from 'phaser'

export default class title_screen extends Phaser.Scene {

    preload() {

    }

    create() {

        // ball
        const ball = this.add.circle(400,250,10,0xffffff,1)
        this.physics.add.existing(ball)
        ball.body.setBounce(1, 1)
        ball.body.setCollideWorldBounds(true, 1, 1)
        ball.body.setVelocity(250,250)

        // player paddle
        this.paddle = this.add.rectangle(250,480,100,20,0xffffff,1)
        this.physics.add.existing(this.paddle, true)

        // collision detection
        this.physics.add.collider(this.paddle, ball)

        this.keyboard = this.input.keyboard.createCursorKeys()
    }

    update() {

        if(this.keyboard.left.isDown) {
            this.paddle.x -= 10
            if(this.paddle.x < 0) {
                this.paddle.x = 0
            }
            this.paddle.body.updateFromGameObject()
            this.keyboard.right.isDown = false
        }

        if (this.keyboard.right.isDown) {
            this.paddle.x += 10
            if(this.paddle.x > 800) {
                this.paddle.x = 800
            }
            this.paddle.body.updateFromGameObject()
            this.keyboard.left.isDown = false
        }

    }
}