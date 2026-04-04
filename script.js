let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}
console.log(getComputerChoice())

function getHumanChoice() {
  let userInput = prompt("What's your choice: rock? paper? scissors?");
  return userInput;
}
getHumanChoice()

function playRound(humanChoice, computerChoice) {
  humanChoice = 
  humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    return "Draw";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "You win!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "You win!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}


function playGame() {
  for (let i = 1; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
  }

  if (humanScore > computerScore) {
    console.log("You won the game");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game");
  } else {
    console.log("It's a tie");
  }
}


playGame()
console.log("Player", humanScore);
console.log("Computer", computerScore);
