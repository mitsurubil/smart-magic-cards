const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
const cardsWrapper = document.querySelector('.cards-wrapper');
const cards = [];

function createCards() {
  // Create an array with objects containing the value and the suit of each card
  for (let x = 0; x < suits.length; x += 1) {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: suits[x],
      };
      cards.push(cardObject);
    }
  }

  // For each dataObject, create a new card and append it to the DOM
  cards.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const cardElement = document.createElement('div');
    cardElement.setAttribute('data-value', card.value);
    cardElement.classList.add('card', `${card.suit}-${card.value}`);
    cardElement.style.left = `${positionFromLeft}px`;
    cardsWrapper.append(cardElement);
  });
}

// Function to shuffle the cards.
function shuffleCards() {
  const shuffle = cards;
  let d = shuffle.length;
  let n;
  while (d) {
    n = Math.floor(Math.random() * (d -= 1));
    [shuffle[d], shuffle[n]] = [shuffle[n], shuffle[d]];
  }

  // For each dataObject, replace the previous card and append it to the DOM
  shuffle.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const shuffledCards = document.createElement('div');
    shuffledCards.setAttribute('data-value', card.value);
    shuffledCards.classList.add('card', `${card.suit}-${card.value}`);
    shuffledCards.style.left = `${positionFromLeft}px`;
    cardsWrapper.replaceChild(shuffledCards, cardsWrapper.children[i]);
  });
}

// Function showhide to Show or Hide the cards.
function showhide() {
  cardsWrapper.classList.toggle('hidden');
}

// Function magic to reorder and sort the cards.
function magic() {
  const sortCards = cards;
  sortCards.length = 0;
  // Create an array with objects containing the value and the suit of each card
  for (let x = 0; x < suits.length; x += 1) {
    for (let i = 1; i <= 13; i += 1) {
      const cardObject = {
        value: i,
        suit: suits[x],
      };
      sortCards.push(cardObject);
    }
  }

  // For each dataObject, replace the previous card and append it to the DOM
  sortCards.forEach((card, i) => {
    const positionFromLeft = i * 30;
    const sortedCards = document.createElement('div');
    sortedCards.setAttribute('data-value', card.value);
    sortedCards.classList.add('card', `${card.suit}-${card.value}`);
    sortedCards.style.left = `${positionFromLeft}px`;
    cardsWrapper.replaceChild(sortedCards, cardsWrapper.children[i]);
  });
}

// Function to clear out the initial button and create new buttons to play the game.
function createButtons() {
  // Your Code
  const buttons = ['shuffle', 'showhide', 'magic'];
  const btnWrapper = document.querySelector('.btn-wrapper');
  const shuffleButton = document.createElement('button');
  shuffleButton.type = 'button';
  shuffleButton.id = `'${buttons[0]}'`;
  shuffleButton.classList = 'btn btn-lg btn-secondary';
  shuffleButton.innerHTML = 'Shuffle';
  shuffleButton.style.marginRight = '15px';
  shuffleButton.onclick = shuffleCards;
  const showhideButton = document.createElement('button');
  showhideButton.type = 'button';
  showhideButton.id = `'${buttons[1]}'`;
  showhideButton.classList = 'btn btn-lg btn-secondary';
  showhideButton.innerHTML = 'Show/Hide';
  showhideButton.style.marginRight = '15px';
  showhideButton.onclick = showhide;
  const magicButton = document.createElement('button');
  magicButton.type = 'button';
  magicButton.id = `'${buttons[2]}'`;
  magicButton.classList = 'btn btn-lg btn-secondary';
  magicButton.innerHTML = 'Magic';
  magicButton.style.marginRight = '15px';
  magicButton.onclick = magic;
  btnWrapper.append(shuffleButton, showhideButton, magicButton);
}

// Function to start the game by clearing the wrapper, creating
// and appending the buttons and all the cards to the DOM
function startGame() {
  createButtons();
  createCards();
}

document.getElementById('start-game').addEventListener('click', startGame);
