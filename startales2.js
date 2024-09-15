window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 1200,
        height: 700,
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
        ufo = this.add.sprite(config.width / 2, config.height / 2, 'ufo').setOrigin(0.5, 0.5);

        // Enable keyboard input
        cursors = this.input.keyboard.createCursorKeys();

        // Display the username in the top-left corner
        this.add.text(20, 20, 'Player: ' + (typeof username !== 'undefined' ? username : 'Guest'), { font: '32px Arial', fill: '#fff' });

        // Example button to start audio context
        var startButton = this.add.text(200, 350, 'Start Audio', { font: '32px Arial', fill: '#fff' })
            .setInteractive()
            .on('pointerdown', function () {
            // Start or resume AudioContext here
            var audioContext = new (window.AudioContext || window.webkitAudioContext)();
            audioContext.resume().then(() => {
                console.log('AudioContext resumed.');
            });
        });
    }

    function update() {
        // Ensure cursors is initialized
        if (!cursors || !cursors.W) return;

        // Movement speed
        var speed = 5;

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

        // Ensure the ufo stays within the game bounds
        ufo.x = Phaser.Math.Clamp(ufo.x, ufo.width / 2, config.width - ufo.width / 2);
        ufo.y = Phaser.Math.Clamp(ufo.y, ufo.height / 2, config.height - ufo.height / 2);
    }
};