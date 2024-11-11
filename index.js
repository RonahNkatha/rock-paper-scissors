// computer choices
let humanScore = 0
let computerScore = 0

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3);
  if (random === 1) {
    return "rock"
  } 
  else if (random === 2) {
    return "paper"
  }
  else {
    return "scissors"
  }
  return result
}

function getHumanChoice() {

  let question = prompt("What is your choice?")
  if (choices === rock || choice === paper || choice === scissors) {
    console.log(choice)
  }
  else { console.log("Invalid choice, try again") }
  return result
}

function playRound(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice);

  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(`I win ${humanChoice} beats ${computerChoice}`);
    playerScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);

    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(`I win!, ${humanChoice} beats ${computerChoice}`);

    playerScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log(`You lose!, ${computerChoice} beats ${humanChoice}`);

    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`I win!, ${humanChoice} beats ${computerChoice}`);

    playerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log(` You lose!, ${computerChoice} beats ${humanChoice}`);

    computerScore++;
  } else if (humanChoice === computerChoice) {
    console.log("Tied!");
  }
  console.log(playerScore, computerScore);
}
for (let i = 0; i <= 5; i++) {
  playRound(getHumanChoice(), getComputerChoice());
}

if (playerScore > computerScore) {
  alert("Human player is the Winner!");
} else if (computerScore > playerScore) {
  alert("Computer is the Winner!");
} else {
  alert("No one wins, Tied!");
}

playGame();