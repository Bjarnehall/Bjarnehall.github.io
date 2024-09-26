window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 1586,
        height: 750,
        parent: 'game-container',
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    var game = new Phaser.Game(config);

    var ufo; // Variable to store character
    var police;
    var cursors; // Variable to store the cursors for input
    var isMovingUp = false; // To track if W is pressed

    function preload() {
        // Load assets here
        this.load.image('sky', 'https://bjarnehall.github.io/startalesintrogamemoon.png');
        this.load.image('ufo', 'https://bjarnehall.github.io/UFOUNI2cat.png');
        this.load.image('ufo_up', 'https://bjarnehall.github.io/UFOUNI2upcat.png');
        this.load.image('police', 'https://bjarnehall.github.io/UFOUNI2catpolice.png');
        this.load.image('police_up', 'https://bjarnehall.github.io/UFOUNI2catpoliceup.png');

    }


    function create() {
        // Add game elements here
        this.add.image(0, 0, 'sky').setOrigin(0, 0).setDisplaySize(config.width, config.height);
        
        // ufo
        var ufoWidth = 130;
        var ufoHeight = 130;
        ufo = this.add.sprite(config.width / 2, config.height / 2, 'ufo')
            .setOrigin(0.5, 0.5)
            .setDisplaySize(ufoWidth, ufoHeight);

        var policeWidth = 120;
        var policeHeight = 120;
        police = this.add.sprite(config.width / 2, config.height / 2, 'police')
            .setOrigin(0.5, 0.5)
            .setDisplaySize(policeWidth, policeHeight);

        // Enable keyboard input990
        cursors = this.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D
        });

    }

    function update() {
        // Ensure cursors is initialized and contains W
        if (!cursors || !cursors.W) return;

        // Movement speed
        var speed = 2;

        // Movement with keys
        if (cursors.W.isDown) {
            ufo.setTexture('ufo_up');
            ufo.y -= speed;
            isMovingUp = true;
        } else {
            isMovingUp = false;
        }
        if (cursors.S.isDown) {
            ufo.y += speed;
        }
        if (cursors.A.isDown) {
            ufo.x -= speed;
        }
        if (cursors.D.isDown) {
            ufo.x += speed;
        }

        if (!isMovingUp) {
            ufo.setTexture('ufo');
        }


        // // Ensure the ufo stays within the game bounds
        ufo.x = Phaser.Math.Clamp(ufo.x, -2, config.width + 1);
        ufo.y = Phaser.Math.Clamp(ufo.y, -2, config.height + 1);

        police.x = Phaser.Math.Clamp(police.x -2, config.width +1);
        police.y = Phaser.Math.Clamp(police.y -2, config.width +1);

    }
};
