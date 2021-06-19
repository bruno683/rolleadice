


let player ;
let currentScore = 0;
let newScore1 = 0;
let newScore2 = 0;

//===================variable declaration=====================
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


//======================Fonctions et méthodes du jeu========


//======================Generation random number============
const getRandomDice = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1 )) + min;
};
//======================switch  players================
function switchPlayer () {
  //reset currentScore
  currentScore = 0;
  //switch the player round
  player === 1 ? player = 0: player = 1;
  //Setting the current score of the players to zero
  playerOneCurrentScore.textcontent = `0`;
  playerTwoCurrentScore.textcontent = `0`;
};
//=====================setting value as random number==
const value= () => {
  return getRandomDice(1,6);
};
//=====================setting winning condition=======
const isTheWinner = ( player, event) => {
  
  playerWin.innerHTML = `<p><strong>${player}<strong> est le vainqueur !!!</p>`;
  
  roll.removeEventListener('click',
        rollDice,
        false
    );
  hold.removeEventListener('click',
  holdScore,
  false
  );
  event.stopPropagation();
};

//=========change background player name when active====
const isActive = () => {
  let pOne = playerOneCurrentScore;
  let pTwo = playerTwoCurrentScore;
  if(player === 0){
    pTwo.textContent = currentScore;  
    playerNameOne.style.background = "none";
    playerNameTwo.style.background = "#4B8223";
    }else{
      pOne.textContent = currentScore;
      playerNameTwo.style.background = "none";
      playerNameOne.style.background = "#4B8223";
    }
};

//===================initialisation of the game=========

function initGame () {
  playerNameOne.textContent = prompt('Joueur un, quel est votre nom?');
  playerNameTwo.textContent = prompt('Joueur deux, quel est votre nom?');
  
  playerWin.innerHTML = '';
  
  //init the scores of the players
  player = 1;
  currentScore = 0;
  newScore1 = 0;
  newScore2 = 0;
  
  playerOneCurrentScore.textcontent = '0';
  playerTwoCurrentScore.textcontent = '0';
  playerOneScore.textContent = '0';
  playerTwoScore.textContent = '0';
  //Display dice at the start of the game
  
  value();
  let number = value();
  diceImage.innerHTML = `<img src="images/${number}_dots.png">`;

  roll.addEventListener('click', rollDice =  () => {
    let rollDice = new Audio('sounds/diceRoll.mp3');
    rollDice.play()
    value()
    let number = value();
    
    diceImage.innerHTML = `<img src="images/${number}_dots.png">`;
    
    if(number !== 1){
      currentScore += number;
      
   }else {
     let loose = new Audio('sounds/loose.wav');
     loose.play();
     

    switchPlayer();
    };
    
  isActive()
  });
  
  hold.addEventListener('click', holdScore = () => {
    //keep the points earned
    //checks if the amount of points reaches 100
    //if not, switch to next player
    let holdSound = new Audio('sounds/holdButton.wav');
    holdSound.play();
    
    if(player === 0){
      
      newScore2 += currentScore;
      playerTwoScore.textContent = newScore2;
      playerTwoCurrentScore.textContent = '0';
      if(newScore2 >= 100){
        let win = new Audio('sounds/win.wav');
        let youWin = new Audio('sounds/you-win.wav')
        youWin.play();
        win.play();
        
        let pTwoName = playerNameTwo.textContent;
        isTheWinner(pTwoName);
      }
      switchPlayer();
      
    }else{
      
      newScore1 += currentScore;
      playerOneScore.textContent = newScore1;
      playerOneCurrentScore.textContent = '0';
      if(newScore1 >= 100){
        let win = new Audio('sounds/win.wav');
        win.play();
        let youWin = new Audio('sounds/you-win.wav')
        youWin.play();

        let pOneName = playerNameOne.textContent;
        isTheWinner(pOneName);
         
      }
     switchPlayer();
    };
    isActive();
  });
}

// Déroulement du jeu
initGame();
playButton.addEventListener('click', () => {
  initGame();
  //Setting the current score of the players to zero
})


//========================================================================================================



  


