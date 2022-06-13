//Global Variables
var game = new Game();

//Variables & Query Selectors
var changeGame = document.querySelector('.change-game');
var chooseDifficulty = document.querySelector('.choose-difficulty');
var chooseSign = document.querySelector('.choose-sign');
var h3 = document.querySelector('h3');
var traditionalMode = document.querySelector('.traditional-mode');
var advancedMode = document.querySelector('.advanced-mode');
var traditionalGame = document.querySelector('.trad-sign-image');
var advancedGame = document.querySelector('.advanced-sign-image');
var traditionalSigns = document.querySelector('.traditional-weapons');
var advancedSigns = document.querySelector('.advanced-weapons');
var h3 = document.querySelector('h3');
var rock = document.querySelector('.rock-sign');
var paper = document.querySelector('.paper-sign');
var scissors = document.querySelector('.scissors-sign');
var frog = document.querySelector('.frog-sign');
var snake = document.querySelector('.snake-sign');
var winnerBox = document.querySelector('.winner-box');
var humanSignBox = document.querySelector('.human-sign');
var oniSignBox = document.querySelector('.oni-sign');
var winnerAlert = document.querySelector('.winner-alert');
var humanWins = document.querySelector('.human-wins');
var oniWins = document.querySelector('.oni-wins');

//Event Listeners
traditionalGame.addEventListener('click', () => handleGameVariant(true));
advancedGame.addEventListener('click', () => handleGameVariant(false));
changeGame.addEventListener('click', newGame);
rock.addEventListener('click', pickRock);
paper.addEventListener('click', pickPaper);
scissors.addEventListener('click', pickScissors);
frog.addEventListener('click', pickFrog);
snake.addEventListener('click', pickSnake);

//Functions
function show(element) {
  element.classList.remove('hidden');
};

function hide(element) {
  element.classList.add('hidden');
}

function handleGameVariant(isTraditional) {
  hideAllElements();
  show(changeGame);
  show(chooseSign);
  show(traditionalSigns);
  show(advancedSigns);
  show(rock);
  show(paper);
  show(scissors);
  if (isTraditional === true) {
    game.startNewGame('traditional');
    hide(frog);
    hide(snake);
  } else {
    game.startNewGame('advanced')
    show(frog);
    show(snake);
    }
  }

  function pickRock() {
    if (game.gameMode === 'traditional') {
      game.declareTraditionalWinner('rock');
    }
    if (game.gameMode === 'advanced') {
      game.declareAdvancedWinner('rock');
    }
    listWinner();
    displayWinner();
  }

  function pickPaper() {
    if (game.gameMode === 'traditional') {
      game.declareTraditionalWinner('paper');
    }
    if (game.gameMode === 'advanced') {
      game.declareAdvancedWinner('paper');
    }
    listWinner();
    displayWinner();
  }

  function pickScissors() {
    if (game.gameMode === 'traditional') {
      game.declareTraditionalWinner('scissors');
    }
    if (game.gameMode === 'advanced') {
      game.declareAdvancedWinner('scissors');
    }
    listWinner();
    displayWinner();
  }

  function pickFrog() {
    game.declareAdvancedWinner('frog');
    listWinner();
    displayWinner();
  }

  function pickSnake() {
    game.declareAdvancedWinner('snake');
    listWinner();
    displayWinner();
  }

  function displayWinner() {
    hideAllElements();
    show(winnerBox);
    show(winnerAlert);
    show(changeGame);
    checkTraditionalSign();
    checkAdvancedSign();
    checkOniTraditionalSign();
    checkOniAdvancedSign();
    setTimeout(function () {
      if (game.gameMode === 'advanced') {
        handleGameVariant(false);
      } else {
        handleGameVariant(true);
      }
    }, 2200);
  }

  function checkTraditionalSign() {
    if (game.player.sign === 'rock') {
      setSign('rock', true);
    }
    if (game.player.sign === 'paper') {
      setSign('paper', true);
    }
    if (game.player.sign === 'scissors') {
      setSign('scissors', true);
    }
  }

  function checkAdvancedSign() {
    if (game.player.sign === 'frog') {
      setSign('frog', true);
    }
    if (game.player.sign === 'snake') {
      setSign('snake', true);
    }
  }

  function checkOniTraditionalSign() {
    if (game.oniSign === 'rock') {
      setSign('rock', false);
    }
    if (game.oniSign === 'paper') {
      setSign('paper', false);
    }
    if (game.oniSign === 'scissors') {
      setSign('scissors', false);
    }
  }

  function checkOniAdvancedSign() {
    if (game.oniSign === 'frog') {
      setSign('frog', false);
    }
    if (game.oniSign === 'snake') {
      setSign('snake', false);
    }
  }

  function listWinner() {
    if (game.winner === 'human') {
      humanWins.innerText = 'Human Wins: ' + game.player.wins;
      winnerAlert.innerText = 'The Human Wins This Round!';
    }
    if (game.winner === 'oni') {
      oniWins.innerText = 'Oni Wins: ' + game.oniWins;
      winnerAlert.innerText = 'The Oni Wins This Round!';
    }
    if (game.winner === 'draw') {
      winnerAlert.innerText = 'It\'s a Draw!';
    }
  }

  function setSign(sign, isHuman) {
    if (isHuman === true) {
      humanSignBox.innerHTML =
        'Your Sign ' +
        `<img class="${sign}-sign" src="assets/${sign}.png" alt="Avatar of the ${sign} sign"/>`;
    } else {
      oniSignBox.innerHTML =
      'Oni\'s Sign ' +
      `<img class="${sign}-sign" src="assets/${sign}.png" alt="Avatar of the ${sign} sign"/>`;
    }
  }

function newGame() {
  hideAllElements();
  show(chooseDifficulty);
  show(traditionalGame);
  show(advancedGame);
}

function hideAllElements() {
  hide(winnerBox)
  hide(winnerAlert)
  hide(changeGame)
  hide(chooseDifficulty)
  hide(chooseSign)
  hide(traditionalSigns);
  hide(advancedSigns);
  hide(traditionalGame);
  hide(advancedGame);
  hide(rock);
  hide(paper);
  hide(scissors);
  hide(frog);
  hide(snake);
}
