

//The array variable 
var questions = [
    ['How many moons does Earth have?', 1],
    ['How many moons does Saturn have?', 31],
    ['How many moons does Venus have?', 0]
];


// Variables
var correctAnswers = 0;
var question;
var answer;
var response;


function quiz() {
    'use strict';
    //let is restricting the scope to the actual code block, statement or expression.
    

    for (var i = 0; i < questions.length; i += 1) {
        question = questions[i][0]; // Index for the question
        answer = questions[i][1]; // Index for the answer
        response = prompt(question); // prompt with the question
        response = parseInt(response);// The input answer
        if (response === answer) { //if the respons and the answer is equal
            
            alert("Congrats, " + answer + " is the correct answer");
            correctAnswers++;
            
            
        } else
            alert("Sorry, the correct answer is " + answer);
           
        }

    document.getElementById("correctAnswers").innerHTML = "You got " + correctAnswers + " out of " + questions.length + " questions correct.";
        
    }
    
quiz();



	/****************************
	
	Create a quiz based on the array "questions" ['question', correct answer].
	Each question must be presented using the prompt() method, allow user input and provide feedback using alert() - either "Correct!" or "Sorry. The correct answer is [correct number].)
	
	After the quiz is finished the overall result is published: "You got [number of correct answered questions] out of [questions in total] questions correct!"
	
	Additional challenge: 
	Use the JSON file 01_quiz.json as data source instead of the default array.
	
	****************************/