var wordsArr = ["dingus", "mongolia", "pump-up-the-jam", "pneumonoultramicroscopicsilicovolcanoconiosis"];
var wordCounter = 0;
var blank = "_";

// constructor function to create current guess word
var Word = function(guessWordNumber) {
	this.guessWord = wordsArr[guessWordNumber];
	this.blanks = blank.repeat(this.guessWord.length);
}
// prototype wordsArr so I don't have to reclassify wordsArr in the other javascript but only works with first word and not after
Word.prototype.wordsArr = wordsArr;

module.exports = Word;
