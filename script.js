
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
const playerNameOne = document.querySelector('#playerOne')
const playerNameTwo = document.querySelector('#playerTwo')
const playerOne = new Player();
const playerTwo = new Player();
playerOne.score = document.querySelector('#pOneScore');
playerOne.currentScore = document.querySelector('#currentScoreOne');
playerTwo.score = document.querySelector('#pTwoScore');
playerTwo.currentScore = document.querySelector('#currentScoreTwo')


const roll = document.querySelector('.roll')
const playButton = document.querySelector('.btn');
const hold = document.querySelector('.hold');


playButton.addEventListener('click', () => {
  initGame();
})

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
  playerOne.score.innerHTML =  '0';
  playerOne.currentScore.innerHTML = '0';
  playerTwo.score.innerHTML = '0';
  playerTwo.currentScore.innerHTML = '0';
  playerOne.round = true;
  const value = () => {
    return getRandomDice(1,6);
  }
  let number = value();
    //console.log(number);
  diceImage.innerHTML = `<img src="images/${number}_dots.png">`;


  //init the game
}

initGame()


roll.addEventListener('click',  () => {

   const value = () => {
    return getRandomDice(1,6);
  }
  const number = value()
  diceImage.innerHTML = `<img src="images/${number}_dots.png">`;

  if(number !== 1 && playerOne.round === true ){

  let currentScore = playerOne.currentScore;
  let result = 0;
  result = parseInt(currentScore.innerHTML) + number;
  currentScore.innerHTML = result;

 }else{
   playerOne.round = false;
   playerTwo.round = true;
   playerOne.currentScore.innerHTML = '0';
   
 } 
 
 if(number !== 1 && playerTwo.round === true){

  let currentScore = playerTwo.currentScore;
  let result = 0;
  result = parseInt(currentScore.innerHTML) + number;
  currentScore.innerHTML = result;

 }else{
  playerOne.round = true;
  playerTwo.round = false;
  playerTwo.currentScore.innerHTML = '0';
  
  } 
   
 
});
  
