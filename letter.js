var Word = require("./word.js");
var inquirer = require("inquirer");
var wordsArr = ["dingus", "mongolia", "pump-up-the-jam", "pneumonoultramicroscopicsilicovolcanoconiosis"];
var guesses = 10;

console.log("Welcome to hangmanNode! To keep you guessing, there are no spaces between blanks so you can't guess how many characters are left (;")

var Letter = function() {
	this.newWord = function(num) {
		// to grab constructor from Word
		var newWord = new Word(num);
		// function so pump-up-the-jam's '-' doesn't have to be guessed by user
		var blanksFunc = function() {
			for (var i=0; i<newWord.guessWord.length; i++) {
				if (newWord.guessWord[i] === "-") {
					blanksArr = newWord.blanks.split("");
					blanksArr[i] = "-";
					newWord.blanks = blanksArr.join("");
				}
			}
		}
		blanksFunc();		
		// console logs blanks for the word
		console.log(newWord.blanks);

		var inquire = function() {
			// oldblanks is made so that a comparision can be made later
			oldBlanks = newWord.blanks;
			inquirer.prompt([

			  {
			    type: "input",
			    name: "userLetter",
			    message: "Guess a letter "
			  },

			]).then(function(user) {
				// for loop to go through word and compare with user guess and then change blank lines accordingly
				for (var j=0; j < newWord.guessWord.length; j++) {
					if (user.userLetter.toLowerCase() == newWord.guessWord[j]) {
						blanksArr = newWord.blanks.split("");
						blanksArr[j] = user.userLetter.toLowerCase();
						newWord.blanks = blanksArr.join("");
					}
				}
				// console.log new blanks with changes
				console.log(newWord.blanks);
				// if user guess was wrong and there are no more guesses
				if (oldBlanks == newWord.blanks) {
					guesses--;
					if (guesses === 0) {
						console.log("Sorry sucka, but you lose");
						return;
					}						
					console.log("That was incorrect, you have " + guesses + " remaining");
					// run inquire again
					inquire();
				// if you completed the word
				}
				else if (newWord.blanks == newWord.guessWord) {
					i++;
					guesses = 10;
					if (i === wordsArr.length) {
						console.log("You have won!")
						return;
					}
					console.log("You got the word, onto the next one");
					newLetter.newWord(i);
				}
				// if old blanks is not equal to the new blanks, then you have guessed correctly
				else if (oldBlanks != newWord.blanks) {
					console.log("You have guessed correctly!");
					inquire();
				}
			});
		}
		// run inquire if this.newWord is run
		inquire();
	}
}
var newLetter = new Letter();
// run this when code is run
newLetter.newWord(0);