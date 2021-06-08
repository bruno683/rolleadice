


let player ;
let currentScore = 0;
let newScore1 = 0;
let newScore2 = 0;


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
  //reset currentScore
  currentScore = 0;
  //switch the player round
  player === 1 ? player = 0: player = 1;
  
  

  //Setting the current score of the players to zero
  playerOneCurrentScore.textcontent = `0`;
  playerTwoCurrentScore.textcontent = `0`;

}

const isTheWinner = ( player) => {
  
  playerWin.innerHTML = `<p><strong>${player}<strong> est le vainqueur !!!</p>`;
  roll.removeEventListener('click', false);
  hold.removeEventListener('click', false);
  e.stopPropagation();

};

function initGame () {
  playerNameOne.textContent = prompt('Joueur un, quel est votre nom?');
  playerNameTwo.textContent = prompt('Joueur deux, quel est votre nom?');
  
  playerWin.innerHTML = '';

  //init the scores of the players
  player ;
  currentScore = 0;
  newScore1 = 0;
  newScore2 = 0;

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
  //Setting the current score of the players to zero
  
  
})


//========================================================================================================
roll.addEventListener('click', function roller() {

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

hold.addEventListener('click', function holder() {
  //keep the points earned
  //checks if the amount of points reaches 100
  //if not, switch to next player
  
  if(player === 0){
    
    newScore1 += currentScore;
    playerOneScore.textContent = newScore1;
    playerOneCurrentScore.textContent = '0';
    if(newScore1 >= 100){
      let pOneName = playerNameOne.textContent;
      isTheWinner(pOneName);
    }
    
    switchPlayer();
  }else{
    
    newScore2 += currentScore;
    playerTwoScore.textContent = newScore2;
    playerTwoCurrentScore.textContent = '0';
    if(newScore2 >= 100){
      let pTwoName = playerNameTwo.textContent;
      isTheWinner(pTwoName);
    }
    switchPlayer();
  };
});
