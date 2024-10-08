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


        // Display the username in the top-left corner
        if (typeof username !== 'undefined') {
            this.add.text(20, 20, 'Player: ' + username, { font: '32px Arial', fill: '#fff' });
        } else {
            this.add.text(20, 20, 'Player: Guest', { font: '32px Arial', fill: '#fff' });
        
        }
    }

    function update() {
        // Update game elements here


    }
};