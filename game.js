let scorePlayer = 0;
let scoreComputer = 0;


function playGame (desPlayer, desComputer){
  console.log("hola");
    if (
        (desPlayer === 'ROCK' && desComputer === 'SCISSORS') ||
        (desPlayer === 'SCISSORS' && desComputer === 'PAPER') ||
        (desPlayer === 'PAPER' && desComputer === 'ROCK')
      ) {
        scorePlayer++;
    }
    if (
        (desComputer === 'ROCK' && desPlayer === 'SCISSORS') ||
        (desComputer === 'SCISSORS' && desPlayer === 'PAPER') ||
        (desComputer === 'PAPER' && desPlayer === 'ROCK')
      ) {
        
        scoreComputer++;
    }

    
}




function  getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return 'ROCK'
      case 1:
        return 'PAPER'
      case 2:
        return 'SCISSORS'
    }
}

function updateChoices(desPlayer, desComputer) {
  console.log("hola");
    switch (desPlayer) {
      case 'ROCK':
        playerSign.textContent = '✊'
        break
      case 'PAPER':
        playerSign.textContent = '✋'
        break
      case 'SCISSORS':
        playerSign.textContent = '✌'
        break
    }
  
    switch (desComputer) {
      case 'ROCK':
        computerSign.textContent = '✊'
        break
      case 'PAPER':
        computerSign.textContent = '✋'
        break
      case 'SCISSORS':
        computerSign.textContent = '✌'
        break
    }
  }


function restartGame(){
    scorePlayer = 0; 
    scoreComputer = 0;
    computerSign.textContent = '❔'
    playerSign.textContent = '❔'
    playerScoreLabel.textContent = `${scorePlayer}`;
    computerScoreLabel.textContent = `${scoreComputer}`;
}

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');
const playerSign = document.getElementById('playerSign');
const computerSign = document.getElementById('computerSign');
const playerScoreLabel = document.getElementById('scorePlayer');
const computerScoreLabel = document.getElementById('scoreComputer');
const restarrtBtn = document.getElementById('restartBtn');
const finalResultLabel = document.getElementById('finalResult');

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))
restarrtBtn.addEventListener('click', restartGame);


function handleClick(desPlayer) {

    const desComputer = getRandomChoice();
    updateChoices(desPlayer,desComputer);
    playGame(desPlayer,desComputer);

    playerScoreLabel.textContent = `${scorePlayer}`;
    computerScoreLabel.textContent = `${scoreComputer}`;
    finalResults();
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}


function finalResults(){
    if (scorePlayer == 5){
      finalResultLabel.textContent = `Player WON`;
      restartGame();
    }
    else if( scoreComputer == 5 ){
      finalResultLabel.textContent = `Computer WON`;
      restartGame();
    }

}