class Player {
  constructor(score, currentScore, name){
    this.score = score;
    this.currentScore = currentScore;
    this.name = name;
    this.isWinner = false;
    this.round = false;
  }
}

const diceImage = document.querySelector('.diceImage');
const startButton = document.querySelector('.btn');
const playerNameOne = document.querySelector('#playerOne')
const playerNameTwo = document.querySelector('#playerTwo')
const playerOne = new Player();
const playerTwo = new Player();
playerOne.score = document.querySelector('#pOneScore');
playerOne.currentScore = document.querySelector('#pTwoScore')


const roll = document.querySelector('.roll')

const getRandomDice = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1 )) + min;
};

function initGame () {

  const pOneName = prompt('Joueur un: Quelle est votre prénom?');
  const pTwoName = prompt('joueur deux: Quel est votre prénom')
  
  playerOne.name = pOneName;
  playerTwo.name = pTwoName;
  playerNameOne.innerHTML = `<p>${playerOne.name}</p>`;
  playerNameTwo.innerHTML = `<p>${playerTwo.name}</p>`;
  playerOne.round = true;
  const value = () => {
    return getRandomDice(1,6);
  }
  let number = value();
    //console.log(number);
  diceImage.innerHTML = `<img src="images/${number}_dots.png">`;


  //init the game
}
startButton.addEventListener('click',() => {
  initGame()
});



roll.addEventListener('click',  () => {
 
  const value = () => {
    return getRandomDice(1,6);
  }
  let number = value()
    console.log(number);
  diceImage.innerHTML = `<img src="images/${number}_dots.png">`;
});
  
