
var play2State = {

    create: function () {

        // world building / game setup
        game.add.sprite(0, 0, 'bg2');

        // attaching the catcher
        catcher = game.add.sprite(game.width / 2, game.height / 2, "catcher");
        catcher.anchor.setTo(.5, 0);
        // ARCADE (arcade) is a Phaser core class
        game.physics.enable(catcher, Phaser.Physics.ARCADE);

        // attaching the cat
        dog = game.add.sprite(Math.random() * game.width, Math.random() * game.height, "dog");
        

        game.physics.enable(dog, Phaser.Physics.ARCADE);
        // invoke game controls
        cursors = game.input.keyboard.createCursorKeys();

        
        music = game.add.audio('cloud');

        music.play();
        
        
        // the textfield to display the score
        // arguments: coordinates, value to display, styling
        scoreTxt = game.add.text(10, 10, score.toString(), { font: '50px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6' })

        var styles = { font: '20px Verdana', fill: '#FFF' };

        //  Create our Timer
        timer = game.time.create(false);

        
        //timer.loop(30000, updateCounter, this);
        game.time.events.add(Phaser.Timer.SECOND * 30, updateCounter2, this);

        timerTxt = game.add.text(400, 10, timer.toString(), { font: '50px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6' })
        //  Start the timer running - this is important!
        //  It won't start automatically, allowing you to hook it to button events and the like.
        timer.start();

    },

    update: function () {

        // If dog moves out of the game it is destroyed and a new dog is created
        if (dog.x > game.width) {

            dog.destroy();
            console.log(dog.destroy);
            dog = game.add.sprite(Math.random() * game.width, Math.random() * game.height, "dog");

            game.physics.enable(dog, Phaser.Physics.ARCADE);
        }
        else {
            // Dog is a moving target
            dog.body.velocity.x = 40;
        }
        // run the game loop
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
        game.physics.arcade.overlap(catcher, dog, dogHitHandler);
        timerTxt.setText(formatTime(Math.round((game.time.events.duration) / 1000)));
    },

    Win: function () {

        // Call the menu state
        game.state.start('win');
    }

};