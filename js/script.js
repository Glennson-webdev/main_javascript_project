let playerSelection = '', computerSelection = '';
let playerScore = 0, computerScore = 0, tie = 0;
const selectOptions = ["rock","scissors","paper"];

/***get player input***/
function playerPlay() {
  let playerInput = prompt("Please select: rock, paper, or scissors.").toLowerCase();
   
    while(playerInput.length === 0 ||  selectOptions.indexOf(playerInput) === -1){
        playerInput = prompt("Invalid input! Please select: rock, paper, or scissors");
    }
    return playerInput;
}

/***get computer random input***/
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
function playRound() {
  let playerSelection = playerPlay();
  let computerSelection = computerPlay();
  console.log(`Player: ${playerSelection}`);
  console.log(`Computer: ${computerSelection}`);

  console.log(getWinner(playerSelection, computerSelection));

  return;
}
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
