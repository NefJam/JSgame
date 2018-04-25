

var loadState = {

    preload: function () {
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
        var loadingLabel = game.add.text(80, 150, 'Loading...', { font: '30px Courier', fill: '#ffffff' });
        
        // load your game assets (instance name, path)
        game.load.image('bg', 'images/bg.png');
        game.load.image('bg2', 'images/bg2.png');
        game.load.image('catcher', 'images/catcher.png');
        game.load.image('cat', 'images/cat.png');
        game.load.image('dog', 'images/dog.png');
        game.load.image('button', 'images/blue_button02.png');
        game.load.audio('cloud', ['audio/Clouds.mp3', 'audio/Clouds.ogg']);
    },

    create: function () {

        // Call the menu state
        game.state.start('menu');
    }

};

