
class Game {
  constructor() {
    this.player = new Player('human');
    this.oni = new Player('oni')
    this.oniSign = "";
    this.oniWins = 0;
    this.gameMode = "";
    this.winner = "";
  }

  startNewGame(gameMode) {
    this.player.sign = "";
    this.oniSign = "";
    this.gameMode = gameMode;
  }

  playTraditionalRound(signClicked) {
    this.player.sign = this.player.chooseSign(signClicked);
    this.oniSign = this.oni.getTraditionalSign();
  }

  declareTraditionalWinner(signClicked) {
    this.playTraditionalRound(signClicked);
    if (this.player.sign === 'rock' && this.oniSign === 'scissors') {
      this.player.wins++;
      this.winner = 'human';
      return 'The Human Wins This Round!';
    }
    if (this.player.sign === 'paper' && this.oniSign === 'rock') {
      this.player.wins++;
      this.winner = 'human';
      return 'The Human Wins This Round!';
    }
    if (this.player.sign === 'scissors' && this.oniSign === 'paper') {
      this.player.wins++;
      this.winner = 'human';
      return 'The Human Wins This Round!';
    }
    if (this.player.sign === this.oniSign) {
      this.winner = 'draw';
      return 'It\'s a Draw!';
    } else {
      this.oniWins++;
      this.winner = 'oni';
      return 'The Oni Wins This Round!';
    }
  }

  playAdvancedRound(signClicked) {
    this.player.sign = this.player.chooseSign(signClicked);
    this.oniSign = this.oni.getAdvancedSign();
  }
  declareAdvancedWinner(signClicked) {
    this.playAdvancedRound(signClicked);
    if (this.player.sign === 'rock' && (this.oniSign === 'scissors' || this.oniSign === 'snake')) {
      this.player.wins++;
      this.winner = 'human';
      return 'The Human Wins This Round!';
    }
    if (this.player.sign === 'paper' && (this.oniSign === 'rock' || this.oniSign === 'frog')) {
      this.player.wins++;
      this.winner = 'human';
      return 'The Human Wins This Round!';
    }
    if (this.player.sign === 'scissors' && (this.oniSign === 'paper' || this.oniSign === 'snake')) {
      this.player.wins++;
      this.winner = 'human';
      return 'The Human Wins This Round!';
    }
    if (this.player.sign === 'snake' && (this.oniSign === 'frog' || this.oniSign === 'paper')) {
      this.player.wins++;
      this.winner = 'human';
      return 'The Human Wins This Round!';
    }
    if (this.player.sign === 'frog' && (this.oniSign === 'scissors' || this.oniSign === 'rock')) {
      this.player.wins++;
      this.winner = 'human';
      return 'The Human Wins This Round!';
    }
    if (this.player.sign === this.oniSign) {
      this.winner = 'draw';
      return 'It\'s a Draw!';
    } else {
      this.oniWins++;
      this.winner = 'oni';
      return 'The Oni Wins This Round!';
    }
  }
}
