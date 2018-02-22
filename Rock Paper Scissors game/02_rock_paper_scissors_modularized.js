// The buttons
var buttons = document.getElementsByClassName("button"); // returning an array
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play);
}
// Variables for display purposes
var playerChoiceDisplay = document.getElementById("player_choice"); // display player's choice
var computerChoiceDisplay = document.getElementById("computer_choice"); // display computer's choice
var resultDisplay = document.getElementById("result"); // display the game result

// other global variables
var computerChoice;
var userChoice;

// main function containing the game logic
function play() {
    // this. in JS function context can refer to the current owner of the event - here refers to the id of the buttons
	userChoice = this.id; // registering the buttons id!
	computerInput();
	compare();
	display();
}


function computerInput() {
    
    computerChoice = Math.random();
    if (computerChoice <= 0.33) {
        computerChoice = "Rock";
    }
    else if (computerChoice <= 0.66) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    };

    //switch (Math.floor(Math.random() * 3)) {
      //  case 0: computerChoice = "Rock";
        //    break;
        //case 1: computerChoice = "Paper";
          //  break;
        //case 2: computerChoice = "Scissors";
    //}

    
}


function compare() {
    if (userChoice === computerChoice) {
        resultDisplay.innerHTML = "Game is draw";
    }
    else if (userChoice === 'Paper' && computerChoice === 'Rock') {
        resultDisplay.innerHTML = "You win the game";
    }
    else if (userChoice === 'Paper' && computerChoice === 'Scissors') {
        resultDisplay.innerHTML = "You loose the game";
    }
    else if (userChoice === 'Scissors' && computerChoice === 'Rock') {
        resultDisplay.innerHTML = "You loose the game";
    }
    else if (userChoice === 'Scissors' && computerChoice === 'Paper') {
        resultDisplay.innerHTML = "You win the game";
    }
    else if (userChoice === 'Rock' && computerChoice === 'Paper') {
        resultDisplay.innerHTML = "You loose the game";
    }
    else if (userChoice === 'Rock' && computerChoice === 'Scissors') {
        resultDisplay.innerHTML = "You win the game";
    }
}

function display() {
    playerChoiceDisplay.innerHTML = userChoice;
    computerChoiceDisplay.innerHTML = computerChoice;
}

