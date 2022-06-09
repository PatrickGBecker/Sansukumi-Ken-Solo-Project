
class Player {
  constructor(name, sign) {
    this.name = name;
    this.sign = sign;
    this.wins = 0;
  }

  getTraditionalSign(signClicked) {
    var options = ['rock', 'paper', 'scissors'];
    var i = Math.floor(Math.random() * options.length);
    return signClicked || options[i];
  }

  getAdvancedSign(signClicked) {
    var options = ['rock', 'paper', 'scissors', 'frog', 'snake'];
    var i = Math.floor(Math.random() * options.length);
    return signClicked || options[i];
  }

  chooseSign(signClicked) {
    return signClicked || this.getAdvancedSign();
  }
  
}
