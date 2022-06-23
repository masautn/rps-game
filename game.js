let scorePlayer = 0; 
let scoreComputer = 0;


function playGame (desPlayer, desComputer){

    if (
        (desPlayer === 'ROCK' && desComputer === 'SCISSORS') ||
        (desPlayer === 'SCISSORS' && desComputer === 'PAPER') ||
        (desPlayer === 'PAPER' && desComputer === 'ROCK')
      ) {
        scorePlayer++;
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        computerScore++;
    }

    
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

function updateChoices(desPlayer, desComputer) {
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
    let scorePlayer = 0; 
    let scoreComputer = 0;
    computerSign.textContent = '❔'
    playerSign.textContent = '❔'
}


rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(desPlayer) {

    const desComputer = getRandomChoice();
    updateChoices(desPlayer,desComputer);
    playGame(desPlayer,desComputer);
    updateScore()
    playerScorePara.textContent = `Player: ${scorePlayer}`
    computerScorePara.textContent = `Computer: ${scoreComputer}`

}

function finalResults(){
    

}