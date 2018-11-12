new Phaser.Game({
    width: 683, // half of 1386
    height: 384, // half of 786
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300, x: 100},
            debug: true
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
            player.setBounce(1)  // 0 to 1
        }
        
    }
}) 