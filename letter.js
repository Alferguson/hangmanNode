var Word = require("./word.js");

// do prototypes for these in letter

// constructor function to match letters in current word
var inquirer = require("inquirer");
var wordsArr = ["Dingus", "Mongolia", "Pump-up-the-jam", "Pneumonoultramicroscopicsilicovolcanoconiosis"];

var guesses = 10;
console.log("Welcome to hangmanNode! To keep you guessing, there are no spaces between blanks so you can't guess how many characters are left (;")

var Letter = function() {


		this.newWord = function(i) {

			var newWord = new Word(i);


			console.log(newWord.blanks);


			var inquire = function() {
				oldBlanks = newWord.blanks;
				inquirer.prompt([

				  {
				    type: "input",
				    name: "userLetter",
				    message: "Guess a letter "
				  },

				 
				]).then(function(user) {
					for (var j=0; j < newWord.guessWord.length; j++) {
						if (user.userLetter == newWord.guessWord[j]) {
							blanksArr = newWord.blanks.split("");
							blanksArr[j] = user.userLetter;
							newWord.blanks = blanksArr.join("");


						}

					}
					console.log(newWord.blanks);
					if (oldBlanks == newWord.blanks) {
						guesses--;
						if (guesses === 0) {
							console.log("Sorry sucka, but you lose");
							return;
						}						
						console.log("That was incorrect, you have " + guesses + " remaining");
						inquire();

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
					else if (oldBlanks != newWord.blanks) {
						console.log("You have guessed correctly!");
						inquire();
					}
				});

			}
			inquire();
		}

}
var newLetter = new Letter();
newLetter.newWord(0);

