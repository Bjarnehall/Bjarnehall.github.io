window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 1536,
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
    var cursors; // Variable to store the cursors for input

    function preload() {
        // Load assets here
        this.load.image('sky', 'https://live.staticflickr.com/65535/53995042192_f07b3d47ae_o.png');
        this.load.image('ufo', 'https://bjarnehall.github.io/ufo.png');
    }

    function create() {
        // Add game elements here
        this.add.image(0, 0, 'sky').setOrigin(0, 0).setDisplaySize(config.width, config.height);
        
        // ufo
        var ufoWidth = 80;
        var ufoHeight = 70;
        ufo = this.add.sprite(config.width / 2, config.height / 2, 'ufo')
            .setOrigin(0.5, 0.5)
            .setDisplaySize(ufoWidth, ufoHeight);

        // Enable keyboard input990
        cursors = this.input.keyboard.addKeys({
            W: Phaser.Input.Keyboard.KeyCodes.W,
            A: Phaser.Input.Keyboard.KeyCodes.A,
            S: Phaser.Input.Keyboard.KeyCodes.S,
            D: Phaser.Input.Keyboard.KeyCodes.D
        });

        // Display the username in the top-left corner
        //this.add.text(20, 20, 'Player: ' + (typeof username !== 'undefined' ? username : 'Guest'), { font: '32px Arial', fill: '#fff' });

        // Example button to start audio context
        //var startButton = this.add.text(20, config.height - 50, 'Start Audio', { font: '22px Arial', fill: '#fff' })
        //    .setInteractive()
        //    .on('pointerdown', function () {
        //        // Start or resume AudioContext here
        //        var audioContext = new (window.AudioContext || window.webkitAudioContext)();
        //        audioContext.resume().then(() => {
        //            console.log('AudioContext resumed.');
        //        });
        //    });
    //}
    }

    function update() {
        // Ensure cursors is initialized and contains W
        if (!cursors || !cursors.W) return;

        // Movement speed
        var speed = 3;

        // Movement with keys
        if (cursors.W.isDown) {
            ufo.y -= speed;
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

        // // Ensure the ufo stays within the game bounds
        ufo.x = Phaser.Math.Clamp(ufo.x, ufo.width / 2, config.width - ufo.width / 12);
        ufo.y = Phaser.Math.Clamp(ufo.y, ufo.height / 2, config.height - ufo.height / 12);
        // ufo.x = Phaser.Math.Clamp(ufo.x, -1, config.width + 1);
        // ufo.y = Phaser.Math.Clamp(ufo.y, -1, config.height + 1);
    }
};
