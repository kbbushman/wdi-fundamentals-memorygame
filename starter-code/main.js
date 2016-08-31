console.log("Ready for orders, Captain...!");

var gameBoard = document.getElementById('game-board');
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

createBoard();

function createBoard() {
  for(var i = 0; i < cards.length; i++) {
    var newDiv = document.createElement('div');
    newDiv.className = 'card';
    newDiv.setAttribute('data-card', cards[i]);
    newDiv.addEventListener('click', isTwoCards);
    gameBoard.appendChild(newDiv);
    console.log('Card number ' + i + ' has been created successfully.');
  }
};

function isTwoCards() {
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img alt="King of Spades" src="http://k2sites.com/ga-wdi/images/king-spades.jpg" />';
  }
  if (this.getAttribute('data-card') === 'queen') {
    this.innerHTML = '<img alt="Queen of Hearts" src="http://k2sites.com/ga-wdi/images/queen-hearts.jpg" />';
  }
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
};

function isMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  clearBoard();
};

function clearBoard() {
  gameBoard.innerHTML = '';
  console.log('All clear...!');
  createBoard();
};