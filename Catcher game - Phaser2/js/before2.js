
var before2State = {

    create: function () {
        // Stop sound
        game.sound.stopAll();
        // create background
        game.add.sprite(0, 0, 'bg2');
        var nameLabel = game.add.text(game.world.centerX-250, 80, 'Level 2',
            { font: '50px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6'});

        var desc = game.add.text(game.world.centerX - 250, 200, 'Catch 15 dogs within the timelimit',
            { font: '20px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6' });

        game.time.events.add(Phaser.Timer.SECOND * 5, startPlay2, this);
    },

    start: function () {

        // Call the menu state
        game.state.start('play2');
    },

};