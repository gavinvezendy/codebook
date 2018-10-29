new Phaser.Game({
    width: 683, // half of 1386
    height: 384, // half of 786
    scene: {
        preload: function () {
            this.load.image('bg', '././assets/plat-background.png')
        },
        create() {
            this.add.image(0, 0, 'bg').setOrigin(0,0)
        }
    }
})