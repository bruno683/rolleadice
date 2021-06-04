class Player {
  constructor(score, currentScore){
    this.score = score;
    this.currentScore = currentScore;
  }
}

const diceImage = document.querySelector('.diceImage');

const playerOne = new Player();
const playerTwo = new Player();
playerOne.score = document.querySelector('#pOneScore');
playerOne.currentScore = document.querySelector('#pTwoScore')


const roll = document.querySelector('.roll')




function getRandomDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1 )) + min;
};

roll.addEventListener('click',  () => {
 
  const value = () => {
    return getRandomDice(1,6);
  }
  let number = value()
    console.log(number);
  diceImage.innerHTML = `<img src="images/${number}_dot.png">`;
});
  
