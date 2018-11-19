let player, curs

new Phaser.Game({
    width: 683, // half of 1386
    height: 384, // half of 786
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1200, },
            debug: false
        },
    },
    scene: {
        preload: function () {
            this.load.image('bg', './assets/plat-background.png')
            this.load.image('hi', './assets/app-person.png')
        },
        create() {
            this.add.image(0, 0, 'bg').setOrigin(0,0)
            player = this.physics.add.sprite(150, 150, 'hi')
            player.setCollideWorldBounds(true)
            player.setBounce(.2)  // 0 to 1
            player.setDragX(900)
        
            curs = this.input.keyboard.createCursorKeys()
        },
        
        update() {

            if (curs.left.isDown) {
                player.setVelocityX(-200)
            } else if (curs.right.isDown) {
                player.setVelocityX(200)
            }

            if (curs.space.isDown || curs.up.isDown) {
            player.setVelocityY(-600)
            }  

        
        }

    }
})