console.log("JS file is connected to HTML! Woo!");

var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";
/*
if (cardTwo === cardFour) {
	alert("You found a match!");
} else if (cardOne === cardThree) {
	alert("You found a match");
} else {
	alert("Sorry, try again.")
}
*/

var createBoard = function(num) {
  for(var i = 1; i <= num; i += 1) {
    var gameBoard = document.getElementById('game-board');
    var newDiv = document.createElement('div');
    newDiv.className = 'card';
    gameBoard.appendChild(newDiv);
    console.log('Card number ' + i + ' has been created successfully.');
  }
};

createBoard(4);