'use strict';

/*
Another way of writing querySelector:
const score1El = document.getElementById('score--1');
const score0El = document.querySelector('#score--0');
*/

const player = document.querySelectorAll('.player');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const playerName = document.querySelectorAll('.name');
const dice = document.querySelector('.dice');
let score = document.querySelectorAll('.score');
let playerActive = document.querySelector('.player--active');

// Switch active player
const switchPlayer = function () {
  // console.log(playerActive.classList);
  if (playerZero.classList.contains('player--active')) {
    playerZero.classList.remove('player--active');
    playerOne.classList.add('player--active');
    // console.log(document.querySelector('.player--active'));
  } else {
    playerZero.classList.add('player--active');
    playerOne.classList.remove('player--active');
    // console.log(document.querySelector('.player--active'));
  }
  playerActive = document.querySelector('.player--active');
};

// dice roller function
document.querySelector('.btn--roll').addEventListener('click', function () {
  const myNumber = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${myNumber}.png`;
  if (myNumber === 1) {
    playerActive.querySelector('.current-score').textContent = 0;
    switchPlayer();
  } else {
    playerActive.querySelector('.current-score').textContent =
      Number(playerActive.querySelector('.current-score').textContent) +
      myNumber;
  }
});

// Hold button function

document.querySelector('.btn--hold').addEventListener('click', function () {
  playerActive.querySelector('.score').textContent =
    Number(playerActive.querySelector('.current-score').textContent) +
    Number(playerActive.querySelector('.score').textContent);
  playerActive.querySelector('.current-score').textContent = 0;
  if (playerActive.querySelector('.score').textContent >= 100) {
    playerActive.querySelector('.name').textContent = ' 🎉✨ WINNER✨🎉 ';
    playerActive.querySelector('.current-score').textContent = 0;
    dice.classList.add('hidden');
    document.querySelector('.btn--roll').classList.add('hidden');
  } else {
    switchPlayer();
  }
});

// New Game function
document.querySelector('.btn--new').addEventListener('click', function () {
  score[0].textContent = 0;
  score[1].textContent = 0;
  playerName[0].textContent = 'Player1';
  playerName[1].textContent = 'Player2';

  playerZero.classList.remove('player--active');
  playerOne.classList.remove('player--active');
  playerZero.classList.add('player--active');
});
