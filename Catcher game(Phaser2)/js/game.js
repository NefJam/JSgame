WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function () { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
        families: ['Black Han Sans']
    }

};

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'catcher');


// Adding the different states
game.state.add("boot", bootState);
game.state.add("load", loadState);
game.state.add("menu", menuState);
game.state.add("play", playState);
game.state.add("before2", before2State);
game.state.add("play2", play2State);
game.state.add("win", winState);


// Start the game by calling the boot state
game.state.start("boot");

var style, button, nameLabel;
//var nameLabel = null;


function restartButton() {
    // Stop all sounds
    game.sound.stopAll();
    // Restarts game
    game.state.restart();
}

function startButton() {
    // Stop all sounds
    game.sound.stopAll();
    // Restarts game
    game.state.start('play');
}

function startPlay2() {
    // Restarts game
    game.state.start('play2');
}

function createText() {
    nameLabel.font = 'Black Han Sans';
    nameLabel.fontSize = 50;

    nameLabel.align = 'center';
    nameLabel.stroke = '#000000';
    nameLabel.strokeThickness = 6;
    nameLabel.setShadow(5, 5, 'rgba(0,0,0,0.5)', 5);

    nameLabel.inputEnabled = true;
    nameLabel.input.enableDrag();

    //  If we don't set the padding the font gets cut off
    //  Comment out the line below to see the effect
    nameLabel.padding.set(10, 16);
}

function updateCounter() {

    if (score < 10) {

    // Removes objects from game
    catcher.destroy();
    cat.destroy();
    scoreTxt.destroy();
    timerTxt.destroy();

        // Button
    button = game.add.button(game.world.centerX - 95, 400, 'button', restartButton, this);

    btnText = game.add.text(0, 0, "Restart", { font: '30px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6', boundsAlignH: "center", boundsAlignV: "middle" });
    btnText.anchor.set(0.5);
    btnText.x = Math.floor(button.x + button.width / 2);
    btnText.y = Math.floor(button.y + button.height / 2);

    var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
    //  The Text is positioned at 0, 100
    text = game.add.text(0, 0, "GAME OVER - You've lost the game\n", { font: '30px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6', boundsAlignH: "center", boundsAlignV: "middle" });
    textscore = game.add.text(0, 0, 'Your score is: ' + score, { font: '30px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6', boundsAlignH: "center", boundsAlignV: "middle" });
    //text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
    text.setTextBounds(0, 200, 800, 100);
    textscore.setTextBounds(0, 250, 800, 100);
    }
    else {
        game.state.start('before2');
    }
}

function updateCounter2() {

    if (score < 25) {


        catcher.destroy();
        //dog.destroy();
        scoreTxt.destroy();
        timerTxt.destroy();


        button = game.add.button(game.world.centerX - 95, 400, 'button', startButton, this);

        btnText = game.add.text(0, 0, "Restart", {
            font: '30px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6', boundsAlignH: "center", boundsAlignV: "middle"
        });
        btnText.anchor.set(0.5);
        btnText.x = Math.floor(button.x + button.width / 2);
        btnText.y = Math.floor(button.y + button.height / 2);

        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        //  The Text is positioned at 0, 100
        text = game.add.text(0, 0, "GAME OVER - You've lost the game\n", {
            font: '30px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6', boundsAlignH: "center", boundsAlignV: "middle"
        });
        textscore = game.add.text(0, 0, 'Your score is: ' + score, {
            font: '30px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6', boundsAlignH: "center", boundsAlignV: "middle"
        });

        //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
        text.setTextBounds(0, 200, 800, 100);
        textscore.setTextBounds(0, 250, 800, 100);
    }
    else {
        game.state.start('win');
    }
}

function catHitHandler() {
    cat.x = Math.random() * game.width;
    cat.y = Math.random() * game.height;
    
    score++;
    scoreTxt.setText(score.toString());
    console.log('Cat caught!');
}

function dogHitHandler() {
    dog.x = Math.random() * game.width;
    dog.y = Math.random() * game.height;
    score++;
    scoreTxt.setText(score.toString());
    console.log('Dog caught!');
}

function formatTime(s) {
    // Convert seconds (s) to a nicely formatted and padded time string
    var minutes = "0" + Math.floor(s / 60);
    var seconds = "" + (s - minutes * 60);
    return seconds.substr(-2);
}