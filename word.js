var wordsArr = ["dingus", "mongolia", "pump-up-the-jam", "pneumonoultramicroscopicsilicovolcanoconiosis"];
var wordCounter = 0;

var blank = "_";

// constructor function to create current guess word
var Word = function(guessWordNumber) {
	this.guessWord = wordsArr[guessWordNumber];
	this.blanks = blank.repeat(this.guessWord.length);
}
Word.prototype.wordsArr = wordsArr;


// var newWord = new Word(1);

// console.log(newWord.wordsArr);
// console.log(wordsArr[1])
// console.log(newWord.blanks);
// console.log(newWord.blanks[1]);

module.exports = Word;
