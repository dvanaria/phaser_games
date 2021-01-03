import Phaser from 'phaser'

import title_screen from './scenes/title_screen'
import game_screen from './scenes/game_screen'

const config = {
    width: 800,
    height: 500,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y:0 }
        }
    }
}

const game = new Phaser.Game(config)

game.scene.add('title',title_screen)
game.scene.add('game', game_screen)

game.scene.start('game')

