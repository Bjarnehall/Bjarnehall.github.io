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

        // Background
        this.load.image('sky', 'https://live.staticflickr.com/65535/53995042192_f07b3d47ae_o.png');
        // Character
        this.load.image('ufo', 'https://bjarnehall.github.io/ufo.png');
    }

    function create() {
        // Add game elements here

        // Background img
        this.add.image(0, 0, 'sky').setOrigin(0, 0).setDisplaySize(config.width, config.height);
        // Character
        ufo = this.add.sprite(config.width / 2, config.height / 2, 'ufo').setOrigin(0.5, 0.5);
        // Enable keyboard input
        cursors = this.input.keyboard.createCursorKeys(); 

        // Display the username in the top-left corner
        if (typeof username !== 'undefined') {
            this.add.text(20, 20, 'Player: ' + username, { font: '32px Arial', fill: '#fff' });
        } else {
            this.add.text(20, 20, 'Player: Guest', { font: '32px Arial', fill: '#fff' });
        
        }
    }

    function update() {
        // Update game elements here

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