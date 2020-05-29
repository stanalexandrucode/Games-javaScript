const boardArray = [
	{
		name: 'cirese',
		img: 'images/cirese.png'
	},
	{
		name: 'cirese',
		img: 'images/cirese.png'
	},
	{
		name: 'orange',
		img: 'images/orange.png'
	},
	{
		name: 'orange',
		img: 'images/orange.png'
	},
	{
		name: 'pere',
		img: 'images/pere.png'
	},
	{
		name: 'pere',
		img: 'images/pere.png'
	},
	{
		name: 'mere',
		img: 'images/mere.png'
	},
	{
		name: 'mere',
		img: 'images/mere.png'
	},
	{
		name: 'nuci',
		img: 'images/nuci.png'
	},
	{
		name: 'nuci',
		img: 'images/nuci.png'
	},
	{
		name: 'banane',
		img: 'images/banane.png'
	},
	{
		name: 'banane',
		img: 'images/banane.png'
	}
];
boardArray.sort(() => 0.5 - Math.random());
const restart = document.getElementById('restart');
const grid = document.querySelector('.grid');
var cardName = [];
var gameCardId = [];
const isWin = [];
const result = document.getElementById('result');
const backdrop = document.getElementById('backdrop');

function backdropHandler() {
	backdrop.classList.toggle('visible');
}

function createBoard() {
	for (let i = 0; i < boardArray.length; i++) {
		var card = document.createElement('img');
		card.setAttribute('src', 'images/blank.png');
		card.setAttribute('data-id', i);
		card.addEventListener('click', flipCard);
		grid.appendChild(card);
	}
}

function flipCard() {
	const cardId = this.getAttribute('data-id');
	this.setAttribute('src', boardArray[cardId].img);
	cardName.push(boardArray[cardId].name);
	gameCardId.push(cardId);
	if (cardName.length === 2) {
		setTimeout(checkCards, 500);
	}
}

function checkCards() {
	var cards = document.querySelectorAll('img');
	const optionOne = gameCardId[0];
	const optionTwo = gameCardId[1];
	if (optionOne === optionTwo) {
		alert('You picked the same card!!');
		cards[optionOne].setAttribute('src', 'images/blank.png');
	} else if (cardName[0] === cardName[1]) {
		cards[optionOne].setAttribute('src', 'images/white.png');
		cards[optionTwo].setAttribute('src', 'images/white.png');
		cards[optionOne].removeEventListener('click', flipCard);
		cards[optionTwo].removeEventListener('click', flipCard);
		alert('You nailed it!!');
		isWin.push(cardName);
	} else {
		alert('Wrong! Please try again');
		cards[optionOne].setAttribute('src', 'images/blank.png');
		cards[optionTwo].setAttribute('src', 'images/blank.png');
	}
	result.textContent = isWin.length;
	cardName = [];
	gameCardId = [];
	if (isWin.length === boardArray.length / 2) {
		result.textContent = 'Good job!';
		backdropHandler();
	}
}

restart.addEventListener('click', (event) => {
	location.reload();
});
restart.addEventListener('mouseover', (event) => {
	restart.style.backgroundColor = 'white';
	restart.style.color = 'black';
});
restart.addEventListener('mouseout', (event) => {
	restart.style.backgroundColor = 'teal';
	restart.style.color = 'White';
});
createBoard();
