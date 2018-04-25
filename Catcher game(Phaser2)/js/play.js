

var playState = {

    

    create: function () {
        
        // world building / game setup
        game.add.sprite(0, 0, 'bg');

        // attaching the catcher
        catcher = game.add.sprite(game.width / 2, game.height / 2, "catcher");
        catcher.anchor.setTo(.5, 0);
        // ARCADE (arcade) is a Phaser core class
        game.physics.enable(catcher, Phaser.Physics.ARCADE);

        // attaching the cat
        cat = game.add.sprite(Math.random() * game.width, Math.random() * game.height, "cat");
        
        game.physics.enable(cat, Phaser.Physics.ARCADE);
        // invoke game controls
        cursors = game.input.keyboard.createCursorKeys();

        // Music
        music = game.add.audio('cloud');

        music.play();
        
        // creating the score
        score = 0;

        // the textfield to display the score
        // arguments: coordinates, value to display, style
        scoreTxt = game.add.text(10, 10, score.toString(), {
            font: '50px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6'
        })

        //  Create our timer
        timer = game.time.create(false);

        
        
        game.time.events.add(Phaser.Timer.SECOND * 30, updateCounter, this);

        timerTxt = game.add.text(400, 10, timer.toString(), { font: '50px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6' })
        //  Start the timer running - this is important!
        timer.start();

    },

    update: function () {

        if (cat.x > game.width) {
            
            cat.destroy();
            console.log(cat.destroy);
            cat = game.add.sprite(Math.random() * game.width, Math.random() * game.height, "cat");

            game.physics.enable(cat, Phaser.Physics.ARCADE);
        }
        
        // if left arrow is pressed
        if (cursors.left.isDown && catcher.x > 20) {
            catcher.x -= 5;
            
            // scaling 100%, pointing at the original direction
            catcher.scale.x = 1;
        }
        if (cursors.right.isDown && catcher.x < game.width - 20) {
            catcher.x += 5;
            // scaling 100%, pointing at the opposite direction
            catcher.scale.x = -1;
        }
        if (cursors.up.isDown && catcher.y > 10) {
            catcher.y -= 5;
        }
        if (cursors.down.isDown && catcher.y < game.height - 40) {
            catcher.y += 5;
        }

        // implementing HitTest:
        // arguments: objects, callback function
        game.physics.arcade.overlap(catcher, cat, catHitHandler);
        timerTxt.setText(formatTime(Math.round((game.time.events.duration) / 1000)));
    },

    Win: function () {

        // Call the menu state
        game.state.start('win');
    }

};