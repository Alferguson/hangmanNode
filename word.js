var wordsArr = ["Dingus", "Mongolia", "Pump-up-the-jam", "Pneumonoultramicroscopicsilicovolcanoconiosis"]

var wordCounter = 0;

var blank = "_";

// constructor function to create current guess word
var Word = function(guessWordNumber) {
	this.guessWord = wordsArr[guessWordNumber];
	this.blanks = blank.repeat(this.guessWord.length);
}

// var newWord = new Word(1);

// console.log(newWord.guessWord);
// console.log(wordsArr[1])
// console.log(newWord.blanks);
// console.log(newWord.blanks[1]);

module.exports = Word;
