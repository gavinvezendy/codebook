const keys = 'W,A,S,D,SPACE,LEFT,RIGHT,UP,DOWN'

let pl, k, plats

function preload() {
    this.load.image('bg', './assets/plat-background.png')
    this.load.image('hi', './assets/app-person.png')
}

function create() {
    this.add.image(0, 0, 'bg').setOrigin(0,0)
    
    pl = this.physics.add.sprite(150, 150, 'hi')
    pl.setCollideWorldBounds(true)
    pl.setScale(5.5)
    pl.setBounce(.2)  // 0 to 1
    pl.setDragX(1300)

    k = this.input.keyboard.addKeys(keys)
}
    
function update() {
  
    if (k.LEFT.isDown || k.A.isDown) {
        pl.setVelocityX(-400)
    } else if (k.RIGHT.isDown || k.D.isDown) {
        pl.setVelocityX(400)
    }

    if (pl.body.onFloor()) {
        
        if (k.UP.isDown || k.W.isDown) {
            pl.setVelocityY(-400)
        }
        
    }

   
    }


 

let config = {
    width: 683,
    height: 384,
    pixelArt: true,
    scene: {preload, create, update},
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1200, },
            debug: false
        
        },
    },
}

new Phaser.Game(config)