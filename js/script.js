/*const playerName = prompt("What is your name?");

let welcomeMessage = (`Hello ${playerName}, welcome to the Rock, Paper, Scissors game!`)

alert(welcomeMessage);

let rules = `Steps: 
\n 1. player chooses between Rock, Paper, or Scissors. 
\n 2. Simutaneously, computer will randomly select between Rock, Paper, or Scissors.
\n\n How to Win:
\n - Rock > Scissors
\n - Scissors > Paper
\n - Paper > Rock`;

alert(`Please read the following rules: \n\n${rules}`) */

let playerScore = 0;
let computerScore = 0;
let tie = 0;

                                        /***get player selection***/
function playerPlay(playerSelection) {
  playerSelection = prompt("Please select: rock, paper, or scissors.");
  playerSelection = playerSelection.toLowerCase();
  if (
    playerSelection === "rock" ||
    playerSelection === "scissors" ||
    playerSelection === "paper"
  ) {
    return playerSelection;
  } else {
    alert("Please type Rock, Paper, or Scissors");
  }
  return;
}
                                        /***function playerPlay() console test***/
/*
console.log(userPlay('paper'));
console.log(userPlay('Papper'));
*/

                                        /***get computer random selection***/
//Math.random to choose between number between 0 and 2
//Math.floor to get whole number between 0 and 2
function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

                                        /***function computerPlay() console test***/
/*
console.log (computerPlay());
console.log (computerPlay());
console.log (computerPlay());
*/

                                        /***get winner between playerSelection, computerSelection***/
function getWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    tie++;
    return "Tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      computerScore++;
      return "Computer wins, paper beats rock.";
    } else {
      playerScore++;
      return "You win!, rock beats scissors.";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      computerScore++;
      return "Computer wins, scissors beats paper.";
    } else {
      playerScore++;
      return "You win!, paper beats rock.";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      computerScore++;
      return "Computer wins, rock beats scissors.";
    } else {
      playerScore++;
      return "You win!, scissors beats paper.";
    }
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerPlay();
  computerSelection = computerPlay();
  console.log(`Player: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);

  console.log(getWinner(playerSelection, computerSelection));

  return;
}

                                        /***function playRound() single game***/
/*
playRound()
*/

                                        /***function game() 5 round game***/
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  console.log(`Rounds Tied: ${tie}`);
  if (playerScore == computerScore) {
    console.log(
      `It's a tie!! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`
    );
  } else if (playerScore > computerScore) {
    console.log(
      `Player wins!! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `Computer wins!! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`
    );
  }
}

game();
