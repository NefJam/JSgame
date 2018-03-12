'use strict';

class DiceRoll
{
    // Class constructor
    constructor(d1, d2, d3, d4)
    {
        // Variables
        this.d1 = d1;
        this.d2 = d2;
        this.d3 = d3;
        this.d4 = d4;
        this.score = 0;
        this.compScore = 0;
        this.playWins = 0;
        this.compWins = 0;
        
    }
    //Method
    rollDice()
    {
        //Method variable definition
        this.d1 = Math.floor(Math.random() * 6) + 1;
        this.d2 = Math.floor(Math.random() * 6) + 1;
        this.d3 = Math.floor(Math.random() * 6) + 1;
        this.d4 = Math.floor(Math.random() * 6) + 1;

    }
}



class Player extends DiceRoll {

    // "Player" class constructor
    constructor() {
    // Variables from base class
        super();
    }
    //Method
    rollDice() {
        super.rollDice();
        this.score = this.d1 + this.d2;
        this.compScore = this.d3 + this.d4;
        this.playWins = localStorage.getItem("plays");
        this.compWins = localStorage.getItem("comps");

        //output
        document.getElementById("score").innerHTML = "Your score: " + this.score;
        document.getElementById("dice1").innerHTML = "Dice 1: You threw a " + this.d1;
        document.getElementById("dice2").innerHTML = "Dice 2: You threw a " + this.d2;

        document.getElementById("compScore").innerHTML = "Computer score: " + this.compScore;
        document.getElementById("dice3").innerHTML = "Dice 1: You threw a " + this.d3;
        document.getElementById("dice4").innerHTML = "Dice 2: You threw a " + this.d4;


        // if else statements comparing scores
        if (this.compScore > this.score) {
            this.compWins++;
            document.getElementById("feedback").innerHTML = "You lost the game!";
            document.getElementById("compwins").innerHTML = "Lost: " + this.compWins;
            localStorage.setItem("comps", this.compWins);
        }
        else if (this.compScore < this.score) {
            this.playWins++;
            document.getElementById("feedback").innerHTML = "You won the game!";
            document.getElementById("playwins").innerHTML = "Wins: " + this.playWins;
            localStorage.setItem("plays", this.playWins);
            
        }
        else {
            document.getElementById("feedback").innerHTML = "The game is tied!";
        }
    }

    //Method
    Clear() {
        localStorage.removeItem("plays");
        localStorage.removeItem("comps");
        localStorage.getItem("plays");
        localStorage.getItem("comps");

        if (localStorage.getItem("plays") === null && localStorage.getItem("comps") === null) {
           
            document.getElementById("feedback").innerHTML = "Data cleared!";
            document.getElementById("playwins").innerHTML = "Wins: ";
            document.getElementById("compwins").innerHTML = "Lost: ";
            document.getElementById("dice1").innerHTML = "Dice 1:";
            document.getElementById("dice2").innerHTML = "Dice 2:";
            document.getElementById("dice3").innerHTML = "Dice 3:";
            document.getElementById("dice4").innerHTML = "Dice 4:";
            document.getElementById("score").innerHTML = "Your score: ";
            document.getElementById("compScore").innerHTML = "Computer score: ";

        
        }

    }
}

//Instantiate an object of the derived class called "Player"
var roll1 = new Player();
//When the "play again" button is clicked
document.getElementById("btn").addEventListener("click", roll1.rollDice);
//When the "Clear data" button is clicked
document.getElementById("clear").addEventListener("click", roll1.Clear);