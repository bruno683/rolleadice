


let player ;
let currentScore ;


const diceImage = document.querySelector('.diceImage');

const playerNameOne = document.querySelector('#playerOne')
const playerNameTwo = document.querySelector('#playerTwo')
const playerWin = document.querySelector('.winner');


playerOneScore = document.querySelector('#pOneScore');
playerOneCurrentScore = document.querySelector('#currentScoreOne');
playerTwoScore = document.querySelector('#pTwoScore');
playerTwoCurrentScore = document.querySelector('#currentScoreTwo')

// buttons
const roll = document.querySelector('.roll')
const playButton = document.querySelector('.btn');
const hold = document.querySelector('.hold');

const getRandomDice = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1 )) + min;
};

function switchPlayer () {

   //switch the player round
   player === 0 ? player = 1: player = 0;

  //init currentScore to zero
  currentScore = 0


  //Setting the current score of the players to zero
  playerOneCurrentScore.textcontent = '0';
  playerTwoCurrentScore.textcontent = '0';

}

function initGame () {
  playerNameOne.textContent = prompt('Joueur un, quel est votre nom?');
  playerNameTwo.textContent = prompt('Joueur deux, quel est votre nom?');
  //init currentScore to zero
  
  
  playerWin.innerHTML = '';

  //Setting the current score of the players to zero
  playerOneCurrentScore.textcontent = '0';
  playerTwoCurrentScore.textcontent = '0';
  playerOneScore.textContent = '0';
  playerTwoScore.textContent = '0';

  //Display dice at the start of the game
  const value= () => {
   return getRandomDice(1,6)
  }
  const number = value();
  diceImage.innerHTML = `<img src="images/${number}_dots.png">`;
}


initGame();

playButton.addEventListener('click', () => {
  initGame();
})


//========================================================================================================
roll.addEventListener('click',  () => {
  const value = () => {
    return getRandomDice(1,6);
  }
  const number = value();
  diceImage.innerHTML = `<img src="images/${number}_dots.png">`;
  
  if(number !== 1){
    currentScore += number;
    let pOne = playerOneCurrentScore;
    let pTwo = playerTwoCurrentScore

    player === 0 ? pOne.textContent = currentScore : pTwo.textContent = currentScore;  
  
 }else {
  switchPlayer()
  };
 
});

hold.addEventListener('click', (event) => {
  //keep the points earned
  //checks if the amount of points reaches 100
  //if not, switch to next player
  if(player === 0){
    playerOneScore.innerText += currentScore;
    switchPlayer();
  }else{
    playerTwoScore.innerText += currentScore;
    switchPlayer()
  }
  

})