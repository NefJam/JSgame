
var menuState = {

    create: function () {
        game.add.sprite(0, 0, 'bg');
        var nameLabel = game.add.text(game.world.centerX-250, 80, 'The Catcher game',
            { font: '50px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6', setShadow: (5, 5, 'rgba(0,0,0,0.5)', 5)});

        var desc = game.add.text(game.world.centerX - 250, 200, 'Use the arrows to move\n\nCatch 10 cats within the timelimit',
            { font: '20px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6' });

        button = game.add.button(game.world.centerX - 95, 400, 'button', startButton, this);

        btnText = game.add.text(0, 0, "Play", { font: '30px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6' });
        btnText.anchor.set(0.5);
        btnText.x = Math.floor(button.x + button.width / 2);
        btnText.y = Math.floor(button.y + button.height / 2);

    },

    start: function () {

        // Call the menu state
        game.state.start('play');
    },

};