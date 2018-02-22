// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

	var myGame = {
		// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
		// Names inside the object may be either strings or identifiers that are followed by a colon.
 		// object literals can contain properties and methods:
    // The buttons
        


// other global variables
    computerChoice: '',
    userChoice: '',
    playerChoiceDisplay: document.getElementById("player_choice"),
    computerChoiceDisplay: document.getElementById("computer_choice"),
    resultDisplay: document.getElementById("result"),


		
		// a method 
		play: function () {
            'use strict';
            // this. in JS function context can refer to the current owner of the event - here refers to the id of the buttons
            this.userChoice = this.id; // registering the buttons id!
            this.computerInput();
            this.compare();
            this.display();
		},

        computerInput: function () {

            this.computerChoice = Math.random();
            if (this.computerChoice <= 0.33) {
                this.computerChoice = "Rock";
            }
            else if (this.computerChoice <= 0.66) {
                this.computerChoice = "Paper";
            }
            else {
                this.computerChoice = "Scissors";
            };

            //switch (Math.floor(Math.random() * 3)) {
            //  case 0: computerChoice = "Rock";
            //    break;
            //case 1: computerChoice = "Paper";
            //  break;
            //case 2: computerChoice = "Scissors";
            //}
        },

        compare: function () {
            if (this.userChoice === this.computerChoice) {
                this.resultDisplay.innerHTML = "Game is draw";
            }
            else if (this.userChoice === 'Paper' && this.computerChoice === 'Rock') {
                this.resultDisplay.innerHTML = "You win the game";
            }
            else if (this.userChoice === 'Paper' && this.computerChoice === 'Scissors') {
                this.resultDisplay.innerHTML = "You loose the game";
            }
            else if (this.userChoice === 'Scissors' && this.computerChoice === 'Rock') {
                this.resultDisplay.innerHTML = "You loose the game";
            }
            else if (this.userChoice === 'Scissors' && this.computerChoice === 'Paper') {
                this.resultDisplay.innerHTML = "You win the game";
            }
            else if (this.userChoice === 'Rock' && this.computerChoice === 'Paper') {
                this.resultDisplay.innerHTML = "You loose the game";
            }
            else if (this.userChoice === 'Rock' && this.computerChoice === 'Scissors') {
                this.resultDisplay.innerHTML = "You win the game";
            }
        },

        display: function () {
            this.playerChoiceDisplay.innerHTML = this.userChoice;
            this.computerChoiceDisplay.innerHTML = this.computerChoice;
        }
		///// module end /////
    };

var buttons = document.getElementsByClassName("button"); // returning an array
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', play);
}


	
function play() {
    myGame.userChoice = this.id;
    myGame.computerInput();
    myGame.compare();
    myGame.display();
	}

