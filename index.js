let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

console.log("Computer's choice", getComputerChoice());

function getHumanChoice() {
  const choice = prompt("Please enter your choice (rock, paper, or scissors):");
  if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
    console.log("Invalid choice.");
    return getHumanChoice();
  }
  return choice;
}
console.log("Human's choice", getHumanChoice());

function playRound(humanChoice, computerChoice, playerScore) {
  console.log(humanChoice, computerChoice);
  const resultDiv = document.getElementById("result");
  const scoreDiv = document.getElementById("score")

  let resultMessage;
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
  resultDiv.innerText = ` 
  <p>Player selected: ${humanChoice}</p>
  <p>Computer selected: ${computerChoice}</p> 
  <p>${resultMessage}</p>
  `;
  scoreDiv.innerText = `
  <p>Player Score: ${playerScore}
  </p> <p>Computer Score: ${computerScore}</p> `
}

if (playerScore === 5) {
  resultDiv.innerHTML += '<p>Congratulations! You won the game!</p>';
  resetGame();
}
else if (computerScore === 5) {
  resultDiv.innerHTML += '<p>Game over! The computer won the game!</p>';
  resetGame();
}
function resetGame()
{ playerScore = 0; computerScore = 0; }

const rockbutton = document.getElementById("rockbutton");
const paperbutton = document.getElementById("paperbutton");
const scissorbutton = document.getElementById("Scissorsbutton");

rockbutton.addEventListener = ("click", () => playRound("Rock"));
paperbutton.addEventListener = ("click", () => playRound("Paper"));
scissorbutton.addEventListener = ("click", () => playRound("scissors"));

