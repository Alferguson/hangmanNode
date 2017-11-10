var inquirer = require("inquirer");

var wordsArr = ["Dingus", "Mongolia", "Pump-up-the-jam", "Pneumonoultramicroscopicsilicovolcanoconiosis"]

var wordCounter = 0;

var guesses = 15;

var blank = "_";

// constructor function to create current guess word
function Word(guessWord, guessWordLength) {
	this.guessWord = guessWord;
	this.guessWordLength = guessWordLength;
	this.blankWord = blankWord;
}
// do prototypes for these in letter
var numberOfBlanks = blank.repeat(wordsArr[wordCounter].length);
var newWord = new Word(wordsArr[wordCounter], wordsArr[wordCounter].length, numberOfBlanks);

// constructor function to match letters in current word
function Letter() {
	if (guesses > 0) {
		inquirer.prompt([
	
	      	{
	        	name: "question",
	        	type: "input"
	        	message: "Guess a letter! ",
	        	validate: function(value) {
	          		if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
	            		return true;
	          		}
	          		return false;
	        	}
	      	} 
	     
	    ]).then(function(letter) {
	    	if (wordCounter <= guessWordLength-1) {
	    		if (guessWordLength[wordCounter] == letter) {
	    			blankWord[wordCounter] = letter;

	    		}
	    	wordCounter++;
	    	function(letter);
	    	}
	    });
	}
	else if (guesses === 0) {
		console.log("You lose, the word was " + guessWord);
		inquirer.prompt([
	
	      	{
	        	name: "startOver",
	        	type: "confirm"
	        	message: "Would you like to start over? ",
	      	} 
	     
	    ]).then(function(yesOrNo) {
	    	if (yesOrNo === true) {
	    		guesses = 15;
	    		Letter();
	    	}
	    	else {
	    		console.log("Okay, cya later");
	    		return;
	    	}
	    });

	}
}





