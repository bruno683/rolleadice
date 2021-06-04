class Player {
  constructor(score, currentScore){
    this.score = score;
    this.currentScore = currentScore;
  }
}

const diceImage = document.querySelector('.diceImage');

const playerOne = new Player(score, currentScore);
const playerTwo = new Player(score, currentScore);
playerOne.score = document.querySelector('#pOneScore');
playerOne.currentScore = document.querySelector('#pTwoScore')


const roll = document.querySelector('.roll')




function getRandomDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1 )) + min;
};

roll.addEventListener('click',  () => {
  console.log("Hello world")
  /*const value = () => {
    return getRandomDice(1,6);
  }
    console.log(value());
  diceImage.innerHTML = "<p>poil au cul</p>";*/
});
  
