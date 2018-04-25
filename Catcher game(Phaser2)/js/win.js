var winState = {

    create: function () {

        game.add.sprite(0, 0, 'bg2');

        catcher.destroy();
        dog.destroy();
        scoreTxt.destroy();
        timerTxt.destroy();

        //  The Text is positioned at 0, 100
        text = game.add.text(0, 0, "You won the game\n", { font: '30px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6', boundsAlignH: "center", boundsAlignV: "middle" });
        textscore = game.add.text(0, 0, 'Your score is: ' + score, { font: '30px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6', boundsAlignH: "center", boundsAlignV: "middle" });
        //text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

        //  We'll set the bounds to be from x0, y100 and be 800px wide by 100px high
        text.setTextBounds(0, 200, 800, 100);
        textscore.setTextBounds(0, 250, 800, 100);

        // Start button
        button = game.add.button(game.world.centerX - 95, 400, 'button', startButton, this);
        
        btnText = game.add.text(0, 0, "Restart", { font: '30px Black Han Sans', fill: '#ffffff', stroke: '#000', strokeThickness: '6' });
        btnText.anchor.set(0.5);
        btnText.x = Math.floor(button.x + button.width / 2);
        btnText.y = Math.floor(button.y + button.height / 2);
    },

    restart: function () {
        
        game.state.start('menu');
    },
}