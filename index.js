let humanScore = 0
let computerScore = 0


function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log("Computer's choice", getComputerChoice())




function getHumanChoice() {
  const choice = prompt("Please enter your choice (rock, paper, or scissors):");
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    console.log("Invalid choice.");
    return getHumanChoice();
  }
  return choice;
}
console.log("Human's choice", getHumanChoice())




function playRound(humanChoice, computerChoice, playerScore) {
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