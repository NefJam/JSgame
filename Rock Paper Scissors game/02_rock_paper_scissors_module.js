/* Template for a JavaScript module pattern
///////////////////////////////////////////
var myGame = (function () {
	// private variables
	var myVar = "some value or expression";
	// functions
	var myPrivateFunction;
	
	// private functions
	myPrivateFunction = function() {
	
	};
	
	return {
		// public functions
		myPublicFunction: function() {
			
		}
	};
	// gameModule end //
})();
myGame.myPublicFunction();
/////////////////////////////////////*/

var myGame = (function () {

    // private variables
    var playerChoiceDisplay = document.getElementById("player_choice");
    var computerChoiceDisplay = document.getElementById("computer_choice");
    var resultDisplay = document.getElementById("result");
    var computerChoice, userChoice;

    // functions
    var input, compare, display;


    // private functions
    input = function () {

        switch (Math.floor(Math.random() * 3)) {
            case 0:
                computerChoice = "Rock";
                break;
            case 1:
                computerChoice = "Paper";
                break;
            case 2:
                computerChoice = "Scissors";
        }
    };

    compare = function () {
        'use strict';
        if (userChoice === computerChoice) {
            resultDisplay.innerHTML = 'Game is a draw!';
        } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
            resultDisplay.innerHTML = 'You win!';
        } else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
            resultDisplay.innerHTML = 'Computer wins!';
        } else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
            resultDisplay.innerHTML = 'Computer wins!';
        } else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
            resultDisplay.innerHTML = 'You win!';
        } else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
            resultDisplay.innerHTML = 'You win!';
        } else if (userChoice === 'Rock' && computerChoice === 'Paper') {
            resultDisplay.innerHTML = 'Computer wins!';
        }
    };

    display = function () {
        'use strict';
        playerChoiceDisplay.innerHTML = userChoice;
        computerChoiceDisplay.innerHTML = computerChoice;
    };

    return {
        // public function
        play: function () {
            // registering the buttons id!
            userChoice = this.id;
            input();
            compare();
            display();
        }
    };

    // gameModule end //
})();

var buttons = document.getElementsByClassName("button");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', myGame.play);
}