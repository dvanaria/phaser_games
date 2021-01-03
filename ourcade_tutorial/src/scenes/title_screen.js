import Phaser from 'phaser'

export default class title_screen extends Phaser.Scene {

    preload() {

    }

    create() {
        const t = this.add.text(400,250,"hello wolly")
        t.setOrigin(0.5,0.5)
    }
}